import { test, expect } from '@playwright/test';

test.describe('Admin Teams Page', () => {
  test('should display a list of teams fetched from the API', async ({ page }) => {
    // 1. Mock the API response before navigating to the page
    await page.route('**/api/teams', async route => {
      const mockTeams = [
        {
          id: 1,
          name: 'Test Team Alpha',
          category: { id: 1, name: 'Seniors' },
          coach: { id: 1, firstname: 'John', lastname: 'Doe' },
        },
        {
          id: 2,
          name: 'Test Team Bravo',
          category: { id: 2, name: 'U18' },
          coach: { id: 2, firstname: 'Jane', lastname: 'Smith' },
        },
      ];
      await route.fulfill({ json: mockTeams });
    });

    // 2. Navigate to the admin teams page
    await page.goto('/admin/teams');

    // 3. Assert that the main heading is visible
    await expect(page.getByRole('heading', { name: 'Teams Management' })).toBeVisible();

    // 4. Assert that the mocked data is displayed in the table
    // Check for the first team
    await expect(page.getByRole('cell', { name: 'Test Team Alpha' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Seniors' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'John Doe' })).toBeVisible();

    // Check for the second team
    await expect(page.getByRole('cell', { name: 'Test Team Bravo' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'U18' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Jane Smith' })).toBeVisible();

    // 5. Assert that the "Create Team" button is present
    await expect(page.getByRole('button', { name: 'Create Team' })).toBeVisible();
  });
});
