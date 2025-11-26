<template>
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Changement de mot de passe requis
      </h1>
      <p class="text-gray-600">
        Pour votre sécurité, vous devez changer votre mot de passe lors de votre première connexion.
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
        <strong class="font-bold">Erreur:</strong>
        <span class="block sm:inline">{{ error }}</span>
      </div>

      <Form @submit="handleSubmit" :validation-schema="validationSchema" class="space-y-6" v-slot="{ isSubmitting }">
        <div>
          <label for="current_password" class="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe actuel (temporaire)
          </label>
          <Field name="current_password" type="password" id="current_password" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <ErrorMessage name="current_password" class="text-red-500 text-xs mt-1" />
        </div>

        <div>
          <label for="new_password" class="block text-sm font-medium text-gray-700 mb-2">
            Nouveau mot de passe
          </label>
          <Field name="new_password" type="password" id="new_password" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <ErrorMessage name="new_password" class="text-red-500 text-xs mt-1" />
        </div>

        <div>
          <label for="new_password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">
            Confirmer le nouveau mot de passe
          </label>
          <Field name="new_password_confirmation" type="password" id="new_password_confirmation" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <ErrorMessage name="new_password_confirmation" class="text-red-500 text-xs mt-1" />
        </div>

        <button type="submit" :disabled="isSubmitting" class="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 shadow-lg">
          <div v-if="isSubmitting" class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span v-else>Changer le mot de passe</span>
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useApi } from '../../composables/useApi';

const { fetchApi } = useApi();
const error = ref<string | null>(null);

const validationSchema = toTypedSchema(
  z.object({
    current_password: z.string().min(1, 'Le mot de passe actuel est requis'),
    new_password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    new_password_confirmation: z.string()
  }).refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Les mots de passe ne correspondent pas",
    path: ["new_password_confirmation"],
  })
);

const handleSubmit = async (values: any) => {
  error.value = null;
  try {
    await fetchApi('auth/change-password', {
      method: 'POST',
      body: JSON.stringify({
        current_password: values.current_password,
        new_password: values.new_password,
        new_password_confirmation: values.new_password_confirmation
      })
    });
    
    // Redirect to dashboard on success
    window.location.href = '/dashboard';
  } catch (e: any) {
    error.value = e.message || 'Une erreur est survenue lors du changement de mot de passe.';
  }
};
</script>
