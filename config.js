module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'search-service',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
