import { test, expect } from '@playwright/test';

test('La page d\'accueil se charge correctement', async ({ page }) => {
  await page.goto('/');

  // Vérifie que le titre de la page est correct
  await expect(page).toHaveTitle('Accueil - Basket Club');

  // Vérifie que le titre principal est présent
  const mainTitle = page.getByRole('heading', { name: 'Bienvenue sur le site du Basket Club !' });
  await expect(mainTitle).toBeVisible();

  // Vérifie que le bouton "Voir les équipes" est présent
  const teamsButton = page.getByRole('button', { name: 'Voir les équipes' });
  await expect(teamsButton).toBeVisible();
});
