const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('Login', () => {
  test('should login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(process.env.TEST_USER || 'user', process.env.TEST_PASS || 'pass');
    await expect(page).toHaveTitle(/Dashboard/);
  });
});
