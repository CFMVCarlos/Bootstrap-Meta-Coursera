import { test, expect } from '@playwright/test';
import * as path from 'path';

test.describe('Menu Page E2E tests', () => {
  test('should display key elements correctly', async ({ page }) => {
    // Open the index.html file directly via file protocol
    const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
    await page.goto(filePath);

    // Assert the main container exists
    const container = page.locator('.container');
    await expect(container).toBeVisible();

    // Assert "Our Menu" heading
    const menuHeading = page.locator('h1', { hasText: 'Our Menu' });
    await expect(menuHeading).toBeVisible();

    // Assert the 3 menu cards titles
    const friedCalamari = page.locator('h2.card-title', { hasText: 'Fried Calamari' });
    const falafel = page.locator('h2.card-title', { hasText: 'Falafel' });
    const pastaSalad = page.locator('h2.card-title', { hasText: 'Pasta Salad' });

    await expect(friedCalamari).toBeVisible();
    await expect(falafel).toBeVisible();
    await expect(pastaSalad).toBeVisible();

    // Assert the image sources
    const calamariImg = page.locator('img[src="calamari.jpg"]');
    const falafelImg = page.locator('img[src="falafel.jpg"]');
    const saladImg = page.locator('img[src="salad.jpg"]');

    await expect(calamariImg).toBeVisible();
    await expect(falafelImg).toBeVisible();
    await expect(saladImg).toBeVisible();

    // Assert "Prices" heading and table
    const pricesHeading = page.locator('h2', { hasText: 'Prices' });
    await expect(pricesHeading).toBeVisible();
    const table = page.locator('table.table');
    await expect(table).toBeVisible();

    // Assert the info alert
    const infoAlert = page.locator('.alert.alert-info', { hasText: 'Try our new Fried Calamari!' });
    await expect(infoAlert).toBeVisible();

    // Assert the primary alert
    const primaryAlert = page.locator('.alert.alert-primary', { hasText: 'I appear on the right when screen is large' });
    await expect(primaryAlert).toBeVisible();
  });
});
