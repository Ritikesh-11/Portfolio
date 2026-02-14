/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-4xv7z9ss7-ritikesh11052000s-projects.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 1.0,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
