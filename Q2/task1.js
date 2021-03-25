const data = require('./data.json');

// Find users who don't have any phone numbers
function findUsersWithoutPhoneNumber() {
  const usersWithoutPhoneNumber = data.filter(
    (el) => el.profile.phones.length === 0,
  );

  for (let i = 0; i < usersWithoutPhoneNumber.length; i++) {
    const fullName = usersWithoutPhoneNumber[i].profile.full_name;

    console.log(fullName);
  }
}

findUsersWithoutPhoneNumber();
