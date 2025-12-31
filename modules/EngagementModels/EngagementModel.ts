import { test, expect } from '@playwright/test';

function Engagement_model() {
    test('Engagement Model page', async ({ page }) => {
        await page.goto('https://www.thinkdigitally.com/services/engagement-models/');

        await test.step('Accept cookie consent banner if visible', async () => {
            const acceptButton = page.getByRole('button', { name: 'Accept' });
            if (await acceptButton.isVisible()) {
                await acceptButton.click();
            }
        });

        await test.step('Check page banner and Icon', async () => {
            await expect(page.locator('section').first()).toBeVisible();
        });

        await test.step('Check main header and subtexts', async () => {
            //await expect(page.getByRole('heading', { name: 'Your digital transformation starts now' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Whether you need short-term' })).toBeVisible();
            await expect(page.getByText('Book a free consultation')).toBeVisible();
        });

        await test.step('Check Fixed-Price section content', async () => {
            await expect(page.locator('#Link1')).toContainText('Stay streamlined with fixed');
            await expect(page.locator('#Link1')).toContainText('We design, develop and fully');
        });

        await test.step('Check Team as a Service section content', async () => {
            await expect(page.locator('#Link2')).toContainText('Get a dedicated Team as a');
            await expect(page.locator('#Link2')).toContainText('Fully managed by Think');
        });

        await test.step('Check Staff Augmentation section content', async () => {
            await expect(page.locator('#Link3')).toContainText('Scale up with staff');
            await expect(page.locator('#Link3')).toContainText('Fully managed by our customer');
        });

        await test.step('Check Professional Services section content', async () => {
            await expect(page.locator('#Link4')).toContainText('Professional Services');
            await expect(page.locator('#Link4')).toContainText('We can provide short-term and');
        });

        await test.step('Check Managed Support section content', async () => {
            await expect(page.locator('#Link5')).toContainText('Managed Support');
            await expect(page.locator('#Link5')).toContainText('Get SLA-based product support');
        });

        await test.step('Check "The Think Digitally advantage" section is visible', async () => {
            await expect(page.getByRole('heading', { name: 'The Think Digitally advantage' })).toBeVisible();
        });

        await test.step('Check Contact us section', async () => {
            await expect(page.locator('#contactUs')).toBeVisible();
            await expect(page.getByRole('heading', { name: 'We are here for you, every step of the way' })).toBeVisible();
            await expect(page.getByText('We’re here to help. Whether you’re an enterprise business')).toBeVisible();
        });
    });
}

export default Engagement_model;
