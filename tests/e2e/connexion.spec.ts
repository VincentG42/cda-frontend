import { test, expect } from '@playwright/test';

test('La page de connexion se charge correctement et le formulaire fonctionne', async ({ page }) => {
  await page.goto('/connexion');

  // Vérifie que le titre de la page est correct
  await expect(page).toHaveTitle('Connexion - CCSLR St Joseph');

  // Vérifie que le titre du formulaire est présent
  await expect(page.getByRole('heading', { name: 'Connexion' })).toBeVisible();

  // Remplir le formulaire
  await page.getByLabel('Nom d\'utilisateur').fill('test@example.com');
  await page.getByLabel('Mot de passe').fill('password');

  // Cliquer sur le bouton de connexion
  await page.getByRole('button', { name: 'Se connecter' }).click();

  // Vérifier la redirection vers le tableau de bord (simulation)
  await page.waitForURL('/admin');
  await expect(page).toHaveURL('/admin');
});
