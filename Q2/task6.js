const data = require('./data.json');

// Find articles contains "tips" on the title
function findArticlesContainsTips() {
  let articles = [];

  data.forEach((user) => {
    user['articles:'].forEach((article) => {
      articles.push(article);
    });
  });

  const articlesWithTips = articles.filter((article) => {
    const containTips = /tips/gi.test(article.title);

    return containTips;
  });

  for (let i = 0; i < articlesWithTips.length; i++) {
    console.log(articlesWithTips[i].title);
  }
}

findArticlesContainsTips();
