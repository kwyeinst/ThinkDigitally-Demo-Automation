import { test, expect } from '@playwright/test';

function Advisor_Consultancy() {

    test('Advisory & Consultancy Page Verification', async ({ page }) => {
        await page.goto('https://www.thinkdigitally.com/services/advisory-consultancy/');

        await test.step('Accept cookie consent banner if visible', async () => {
            const acceptButton = page.getByRole('button', { name: 'Accept' });
            if (await acceptButton.isVisible()) {
                await acceptButton.click();
            }
        });

        await test.step('Check page banner and Icon', async () => {
            await page.mouse.wheel(0, 200);
            await expect(page.locator('.et_pb_column_2_5 .et_pb_animation_top').first()).toBeVisible();
        });

        await test.step('Check main header and subtexts', async () => {
            await expect(page.getByRole('heading', { name: 'Advisory & Consultancy' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'The knowledge and expertise' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Book a free consultation' })).toBeVisible();
        });

        await test.step('Check service tiles are visible', async () => {
            await expect(page.locator('.et_pb_row_2').getByRole('heading', { name: 'Modernisation' })).toBeVisible();
            await expect(page.locator('.et_pb_row_2').getByRole('heading', { name: 'Digitisation' })).toBeVisible();
            await expect(page.locator('.et_pb_row_2').getByRole('heading', { name: 'Augmentation' })).toBeVisible();
            await expect(page.locator('.et_pb_row_2').getByRole('heading', { name: 'Productisation' })).toBeVisible();
        });

        await test.step('Check Modernisation section content', async () => {
            await expect(page.locator('#Link1')).toContainText('Modernisation');
            await expect(page.locator('#Link1')).toContainText('We understand enhancing or replacing legacy systems');
        });

        await test.step('Check Digitisation section content', async () => {
            await expect(page.locator('#Link2')).toContainText('Digitisation');
            await expect(page.locator('#Link2')).toContainText('Buy back time, increase productivity and create new efficiencies.');
        });

        await test.step('Check Augmentation section content', async () => {
            await expect(page.locator('#Link3')).toContainText('Augmentation');
            await expect(page.locator('#Link3')).toContainText('Maximise efficiencies with a scalable technical workforce');
        });

        await test.step('Check Productisation section content', async () => {
            await expect(page.locator('#Link4')).toContainText('Productisation');
            await expect(page.locator('#Link4')).toContainText('As partners, we want to understand your business vision');
        });

        await test.step('Check "The Think Digitally advantage" section is visible', async () => {
            await expect(page.getByRole('heading', { name: 'The Think Digitally advantage' })).toBeVisible();
        });

        await test.step('Check Contact us section', async () => {
            await expect(page.locator('#contactUs')).toBeVisible();
            await expect(page.getByRole('heading', { name: 'We are here for you, every step of the way' })).toBeVisible();
            await expect(page.getByText('We’re here to help. Whether you’re an enterprise business')).toBeVisible();
            await expect(page.getByRole('button', { name: 'Book a Discovery Call Today' })).toBeVisible();
        });
    });
}

export default Advisor_Consultancy;