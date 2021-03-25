const data = require('./data.json');

// Find articles published before August 2019
function findArticlesBefore2019() {
  let articles = [];

  data.forEach((user) => {
    user['articles:'].forEach((article) => {
      articles.push(article);
    });
  });

  const articlesBefore2019 = articles.filter((article) => {
    const year = Number(article.published_at.split('-')[0]);
    const before2019 = year < 2019;

    return before2019;
  });

  for (let i = 0; i < articlesBefore2019.length; i++) {
    console.log(articlesBefore2019[i].title);
  }
}

findArticlesBefore2019();
