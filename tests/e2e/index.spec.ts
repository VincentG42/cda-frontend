import { test, expect } from '@playwright/test';

test('La page d\'accueil se charge correctement', async ({ page }) => {
  await page.goto('/');

  // Vérifie que le titre de la page est correct
  await expect(page).toHaveTitle(/CCSLR/);

  // Vérifie que le titre principal est présent (h1)
  const mainTitle = page.locator('#hero h1');
  await expect(mainTitle).toBeVisible();

  // Vérifie que le bouton "Evénements" est présent
  const eventsButton = page.getByRole('button', { name: 'Evénements' });
  await expect(eventsButton).toBeVisible();
});
