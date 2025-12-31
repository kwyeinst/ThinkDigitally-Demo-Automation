import { test, expect } from '@playwright/test';

function OurWork() {

    test('Our Work Page Verification', async ({ page }) => {
        await page.goto('https://www.thinkdigitally.com/our-work/');

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
            await expect(page.getByRole('heading', { name: 'Your digital transformation' })).toBeVisible();
            await expect(page.getByText('At Think Digitally, we')).toBeVisible();
            await expect(page.getByRole('paragraph').filter({ hasText: 'Book a free consultation' })).toBeVisible();
        });

        await test.step('Check "Our Clients" section', async () => {
            await expect(page.getByRole('heading', { name: 'Our Clients' })).toBeVisible();
            await expect(page.locator('.dmpro-hotspot-bg-image-main').first()).toBeVisible();
            await expect(page.locator('.et_pb_module.dmpro_image_hotspot.dmpro_image_hotspot_1')).toBeVisible();
            await expect(page.locator('.et_pb_module.dmpro_image_hotspot.dmpro_image_hotspot_2')).toBeVisible();
            await expect(page.locator('.et_pb_module.dmpro_image_hotspot.dmpro_image_hotspot_3')).toBeVisible();
            await expect(page.locator('.et_pb_module.dmpro_image_hotspot.dmpro_image_hotspot_4')).toBeVisible();
        });

        await test.step('Check "Industries" section', async () => {
            await expect(page.getByRole('heading', { name: 'Industries' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Transport' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Retail', exact: true })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Telecoms' })).toBeVisible();
        });

        await test.step('Check Contact us section', async () => {
            await expect(page.locator('#contactUs')).toBeVisible();
            await expect(page.getByRole('heading', { name: 'We are here for you, every step of the way' })).toBeVisible();
            await expect(page.getByText('We’re here to help. Whether you’re an enterprise business')).toBeVisible();
        });
    });
}

export default OurWork;
