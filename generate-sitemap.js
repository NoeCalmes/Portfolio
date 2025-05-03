const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.noecalmes.fr' });

  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/finvens', changefreq: 'monthly', priority: 0.8 },
    { url: '/concrete-security', changefreq: 'monthly', priority: 0.8 },
    { url: '/a-qui-est-ce-numero', changefreq: 'monthly', priority: 0.8 },
  ];

  pages.forEach((page) => sitemap.write(page));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./dist/sitemap.xml').end(data);
})();
