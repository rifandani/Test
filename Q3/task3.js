const data = require('./data.json');

// Find all furniture
function findFurnitures() {
  const furnitures = data.filter((el) => el.type === 'furniture');

  for (let i = 0; i < furnitures.length; i++) {
    const itemName = furnitures[i].name;

    console.log(itemName);
  }
}

findFurnitures();
