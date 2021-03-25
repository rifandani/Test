const data = require('./data.json');

// Find users who have 'annis' on their name
function findUsersWithNameAnnis() {
  const usersWithNameAnnis = data.filter((el) =>
    /(annis)\w+/gi.test(el.profile.full_name),
  );

  for (let i = 0; i < usersWithNameAnnis.length; i++) {
    const fullName = usersWithNameAnnis[i].profile.full_name;

    console.log(fullName);
  }
}

findUsersWithNameAnnis();
