import { test, expect } from '@playwright/test';

test('Portfolio E2E Verification', async ({ page }) => {
    // 1. Navigate to the home page
    await page.goto('http://localhost:3000');

    // 2. Check Title
    await expect(page).toHaveTitle(/Jayanth M | Enterprise AI Architect/);

    // 3. Verify Hero Section (Terminal Effect)
    // Wait for the terminal text to start appearing. 
    // Since it's typed out, we check for a part of the text that appears early or the container.
    const terminalContainer = page.locator('section').filter({ hasText: 'agent_log.tsx' });
    await expect(terminalContainer).toBeVisible();

    // Wait for some typed text.
    await expect(page.locator('text=INITIALIZING SYSTEM...')).toBeVisible({ timeout: 10000 });

    // 4. Verify Navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toContainText('JayanthM');
    await expect(nav).toContainText('About');
    await expect(nav).toContainText('Projects');

    // 5. Verify About Section
    const aboutHeading = page.locator('h2', { hasText: 'From Enterprise to Sentiment' });
    await aboutHeading.scrollIntoViewIfNeeded();
    await expect(aboutHeading).toBeVisible();

    // 6. Verify Skills Section
    const skillsHeading = page.locator('h2', { hasText: 'TECHNICAL ARSENAL' });
    await skillsHeading.scrollIntoViewIfNeeded();
    await expect(skillsHeading).toBeVisible();
    await expect(page.locator('text=Pega Platform (CLSA)')).toBeVisible();

    // 7. Verify Projects Section
    const projectsHeading = page.locator('h2', { hasText: 'FEATURED PROJECTS' });
    await projectsHeading.scrollIntoViewIfNeeded();
    await expect(projectsHeading).toBeVisible();

    // Check for specific project cards
    await expect(page.locator('text=Antigravity Learning Agent')).toBeVisible();
    await expect(page.locator('text=Enterprise Pega Solution')).toBeVisible();

    // 8. Verify Contact Section
    const contactHeading = page.locator('h2', { hasText: "Let's Build Something Intelligent" });
    await contactHeading.scrollIntoViewIfNeeded();
    await expect(contactHeading).toBeVisible();
});
