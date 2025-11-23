import { z } from 'zod';

// --- Login Schema ---
export const loginSchema = z.object({
    email: z.string().email("L'email doit être valide").min(1, "L'email est requis"),
    password: z.string().min(1, "Le mot de passe est requis"),
});

// --- User Schema ---
export const userSchema = z.object({
    firstname: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastname: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("L'email doit être valide"),
    licence_number: z.string().nullable().optional().or(z.literal('')), // Optional, null or empty string
    user_type_id: z.coerce.number({ invalid_type_error: "Le type d'utilisateur est requis" }).min(1, "Le type d'utilisateur est requis"),
    team_id: z.coerce.number().optional().nullable(),
});

// --- Team Schema ---
export const teamSchema = z.object({
    name: z.string().min(3, "Le nom de l'équipe doit contenir au moins 3 caractères"),
    category_id: z.coerce.number({ invalid_type_error: "La catégorie est requise" }).min(1, "La catégorie est requise"),
    coach_id: z.coerce.number().optional().nullable(),
    season_id: z.coerce.number({ invalid_type_error: "La saison est requise" }).min(1, "La saison est requise"),
    gender: z.enum(['M', 'F', 'X'], { errorMap: () => ({ message: "Le genre est requis" }) }),
});

// --- Match Schema ---
export const matchSchema = z.object({
    season_id: z.coerce.number({ invalid_type_error: "La saison est requise" }).min(1, "La saison est requise"),
    team_id: z.coerce.number({ invalid_type_error: "L'équipe est requise" }).min(1, "L'équipe est requise"),
    opponent: z.string().min(2, "Le nom de l'adversaire doit contenir au moins 2 caractères"),
    is_at_home: z.boolean(),
    happens_at: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "La date et l'heure sont invalides",
    }),
    is_victory: z.boolean().nullable().optional(),
});
