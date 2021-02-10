module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '244c89fa6e67a0e12da0712387477449'),
    },
  },
});
