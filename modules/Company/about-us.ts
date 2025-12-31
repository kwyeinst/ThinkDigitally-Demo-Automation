import { test, expect } from '@playwright/test';


function Company(){
    test('About-us page', async ({ page }) => {
        await page.goto('https://www.thinkdigitally.com/about-us/');

        await test.step('Accept cookie consent banner if visible', async () => {
            const acceptButton = page.getByRole('button', { name: 'Accept' });
            if (await acceptButton.isVisible()) {
                await acceptButton.click();
            }
        });

        await test.step('Check main header and subtexts', async () => {
            await expect(page.getByText('By uniting people, planet and')).toBeVisible();
            await expect(page.getByRole('link', { name: 'Book a free consultation' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'We want to succeed,' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'But not at all costs.' })).toBeVisible();
            await expect(page.getByText('A global team of tech')).toBeVisible();
        });

        await test.step('Check TD believes that technology section', async () => {
            await expect(page.getByRole('heading', { name: 'TD believes that technology' })).toBeVisible();
            await expect(page.getByText('People We want to empower')).toBeVisible();
            await expect(page.getByText('Planet We’re focused on')).toBeVisible();
            await expect(page.getByText('Technology We’re big')).toBeVisible();
        });

        await test.step('Check "Why choose us?" section', async () => {
            await expect(page.getByRole('heading', { name: 'Why choose us?' })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Full-service' })).toBeVisible();
            await expect(page.getByText('Your one-stop-shop for custom')).toBeVisible();
            await expect(page.getByRole('heading', { name: 'People & planet' })).toBeVisible();
            await expect(page.getByText('Committed to community,')).toBeVisible();
        });

        await test.step('Check Contact us section', async () => {
            await expect(page.locator('#contactUs')).toBeVisible();
            await expect(page.getByRole('heading', { name: 'We are here for you, every step of the way' })).toBeVisible();
            await expect(page.getByText('We’re here to help. Whether you’re an enterprise business')).toBeVisible();
        });
    });
}

export default Company;