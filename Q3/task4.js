const data = require('./data.json');

// Find all items were purchased on 16 Januari 2020
function findItemsPurchasedOn16January2020() {
  const jan16 = 1579132800000;
  const jan17 = 1579219200000;

  // times 1000 to milliseconds
  const items = data.filter(
    (el) => el.purchased_at * 1000 < jan17 && el.purchased_at * 1000 > jan16,
  );

  for (let i = 0; i < items.length; i++) {
    const itemName = items[i].name;

    console.log(itemName);
  }
}

findItemsPurchasedOn16January2020();
