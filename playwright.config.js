module.exports = {
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  timeout: 30000,
  workers: 4, 
  fullyParallel: true, // Ensures tests are run fully in parallel
};
