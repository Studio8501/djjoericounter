const Parser = require("rss-parser");
const parser = new Parser();

export default async function handler(req, res) {

  const feed = await parser.parseURL(
    "https://news.google.com/rss/search?q=dj+joeri"
  );

  const articles = feed.items;
  const lastArticle = new Date(articles[0].pubDate);

  res.status(200).json({
    lastArticle,
    totalArticles: articles.length
  });
}
