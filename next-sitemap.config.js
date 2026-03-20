/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://antigravitydigital.ro',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/api/*', '/termeni', '/confidentialitate', '/cookies'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/services/google-ads'),
    await config.transform(config, '/services/seo'),
    await config.transform(config, '/services/web-development'),
    await config.transform(config, '/services/facebook-ads'),
    await config.transform(config, '/services/design'),
    await config.transform(config, '/services/newsletter'),
    await config.transform(config, '/case-studies'),
    await config.transform(config, '/how-we-work'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/contact'),
  ],
}
