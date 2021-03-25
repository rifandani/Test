const data = require('./data.json');

// Find all items with brown color
function findBrownItems() {
  const brownItems = data.filter((el) => el.tags.includes('brown'));

  for (let i = 0; i < brownItems.length; i++) {
    const itemName = brownItems[i].name;

    console.log(itemName);
  }
}

findBrownItems();
