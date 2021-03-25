const data = require('./data.json');

// Find users who have any articles
function findUsersWithArticles() {
  const usersWithArticles = data.filter((el) => el['articles:'].length !== 0);

  for (let i = 0; i < usersWithArticles.length; i++) {
    const fullname = usersWithArticles[i].profile.full_name;

    console.log(fullname);
  }
}

findUsersWithArticles();
