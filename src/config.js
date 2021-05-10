module.exports = {
  queueName: process.env.QUEUE_NAME || 'mailbot',
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY, 10) || 1,
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || '6379',
  },
  limiter: {
    max: parseInt(process.env.MAX_LIMIT, 10) || 1,
    duration: parseInt(process.env.DURATION_LIMIT, 10) || 1000,
  },
  smtp: {
    pool: true,
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'havk7jm34cnzm7go@ethereal.email',
      pass: 'twg8H7veEk3ycRfZGw',
    },
  },
}
