const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { assertUrl } = require('../utils/customAssertions');

test.describe('Login tests', () => {

  test.describe.parallel('Login tests with data from JSON', () => {  // Using parallel mode


  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify successful navigation
    await assertUrl(page, 'https://www.saucedemo.com/inventory.html');
    await expect(inventoryPage.isLoaded()).toBeTruthy();
  });

  test('Failed login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.waitForPageLoad();
    await loginPage.login('invalid_user', 'invalid_password');
    
    // Verify error message
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface');
  });
  
  });
});
