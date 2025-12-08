import { test, expect } from '@playwright/test';

test('smoke test: homepage loads', async ({ page }) => {
    await page.goto('/');
    // Checking for a generic title or partial title to ensure the page rendered.
    // We saw 'import.meta.env.PUBLIC_APP_NAME' in layout, let's just check the document title is not empty 
    // or check for a main element which is present in index.astro.

    await expect(page).toHaveTitle(/./); // Just check title is not empty

    // Check for main element which wraps the sections
    const main = page.locator('main');
    await expect(main).toBeVisible();
});
