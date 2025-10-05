import { test, expect } from '@playwright/test';

test('La page de contact se charge correctement et le formulaire fonctionne', async ({ page }) => {
  await page.goto('/contact');

  // Vérifie que le titre de la page est correct
  await expect(page).toHaveTitle('Contact - CCSLR St Joseph');

  // Vérifie que le titre du formulaire est présent
  await expect(page.getByRole('heading', { name: 'Contactez-nous' })).toBeVisible();

  // Remplir le formulaire
  await page.getByLabel('Prénom').fill('Test');
  await page.getByLabel('Nom').fill('User');
  await page.getByLabel('Email').fill('test.user@example.com');
  await page.getByLabel('Message').fill('Ceci est un message de test.');

  // Cliquer sur le bouton d'envoi
  await page.getByRole('button', { name: 'Envoyer le Message' }).click();

  // Vérifier le message de succès (simulation)
  await expect(page.getByText('Message envoyé !')).toBeVisible();
});
