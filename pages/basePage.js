class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to a specific URL
  async navigateTo(url) {
    await this.page.goto(url);
  }

  // Refresh the page
  async refreshPage() {
    await this.page.reload();
  }

  // Navigate back
  async goBack() {
    await this.page.goBack();
  }

  // Switch to a new tab
  async switchToNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      // Action that opens the new tab
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  // Wait for page load
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // Other global functions can go here...
}

module.exports = { BasePage };
