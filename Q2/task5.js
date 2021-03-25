const data = require('./data.json');

// Find users who who are born in 1986
function findUsersWhoBornIn1986() {
  const usersWhoBornIn1986 = data.filter((el) => {
    const userBorn = el.profile.birthday.split('-')[0];
    const isBornIn1986 = userBorn === '1986';

    return isBornIn1986;
  });

  for (let i = 0; i < usersWhoBornIn1986.length; i++) {
    const fullName = usersWhoBornIn1986[i].profile.full_name;

    console.log(fullName);
  }
}

findUsersWhoBornIn1986();
