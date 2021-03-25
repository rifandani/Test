const data = require('./data.json');

// Find users who have articles on the year 2020
function findUsersWithArticlesYear2020() {
  const usersWithArticlesYear2020 = data.filter((el) => {
    const articles = el['articles:'].filter(
      (article) => new Date(article.published_at).getUTCFullYear() === 2020,
    );

    return articles.length > 0 ? true : false;
  });

  for (let i = 0; i < usersWithArticlesYear2020.length; i++) {
    const fullName = usersWithArticlesYear2020[i].profile.full_name;

    console.log(fullName);
  }
}

findUsersWithArticlesYear2020();
