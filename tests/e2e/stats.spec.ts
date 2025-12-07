import { test, expect } from '@playwright/test';

test.describe('User Dashboard Statistics', () => {
    test('should display correct statistics from API', async ({ page }) => {
        // 1. Mock Authentication (/api/auth/me)
        await page.route('**/api/auth/me', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    id: 1,
                    firstname: 'John',
                    lastname: 'Doe',
                    email: 'john.doe@example.com',
                    user_type: { name: 'player' }
                })
            });
        });

        // 2. Mock Dashboard Data (/api/me/dashboard)
        await page.route('**/api/me/dashboard', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    matchesPlayed: 15,
                    wins: 10,
                    avgPoints: 22.5,
                    nextMatchDate: '2024-12-25T18:00:00',
                    upcomingMatches: [],
                    recentEvents: []
                })
            });
        });

        // 3. Navigate to Dashboard
        await page.goto('/dashboard');

        // 4. Verify Statistics Cards
        // Matchs Joués
        await expect(page.getByText('Matchs Joués')).toBeVisible();
        await expect(page.getByText('15', { exact: true })).toBeVisible();

        // Victoires
        await expect(page.getByText('Victoires')).toBeVisible();
        await expect(page.getByText('10', { exact: true })).toBeVisible();

        // Points Moyens
        await expect(page.getByText('Points Moyens')).toBeVisible();
        await expect(page.getByText('22.5')).toBeVisible();

        // Prochain Match (date formatting check)
        await expect(page.getByText('Prochain Match')).toBeVisible();
        // Note: The date format depends on the locale in the component. 
        // Assuming 'fr-FR' and '25 décembre 2024' based on the component code.
        await expect(page.getByText(/25 décembre 2024/)).toBeVisible();
    });
});
