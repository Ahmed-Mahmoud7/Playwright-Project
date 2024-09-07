const { expect } = require('@playwright/test');

async function assertUrl(page, expectedUrl) {
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl);
}

async function assertElementVisible(element) {
  await expect(element).toBeVisible();
}

module.exports = { assertUrl, assertElementVisible };
