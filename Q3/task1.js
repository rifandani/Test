const data = require('./data.json');

// Find items in the Meeting Room
function findItemsInMeetingRoom() {
  const itemsInMeetingRoom = data.filter(
    (el) => el.placement.name === 'Meeting Room',
  );

  for (let i = 0; i < itemsInMeetingRoom.length; i++) {
    const itemName = itemsInMeetingRoom[i].name;

    console.log(itemName);
  }
}

findItemsInMeetingRoom();
