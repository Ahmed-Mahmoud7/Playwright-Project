const { BasePage } = require('./basePage');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_item');
  }

  async isLoaded() {
    // Check if at least one inventory item is visible
    const itemCount = await this.inventoryList.count();
    return itemCount > 0;
  }
  
  async isLoaded() {
    const itemCount = await this.inventoryList.count();
    return itemCount > 0;
  }
}

module.exports = { InventoryPage };
