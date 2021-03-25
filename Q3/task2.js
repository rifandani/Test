const data = require('./data.json');

// Find all electronics devices
function findElectronicDevices() {
  const elecDevices = data.filter((el) => el.type === 'electronic');

  for (let i = 0; i < elecDevices.length; i++) {
    const itemName = elecDevices[i].name;

    console.log(itemName);
  }
}

findElectronicDevices();
