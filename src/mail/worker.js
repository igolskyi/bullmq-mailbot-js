const { Worker, QueueScheduler } = require('bullmq')
const {
  connection,
  concurrency,
  limiter,
  queueName,
} = require('../config')

const worker = new Worker(
  queueName,
  `${__dirname}/processor.js`,
  {
    connection,
    concurrency,
    limiter,
  },
)

const scheduler = new QueueScheduler(
  queueName,
  {
    connection,
  },
)

console.info('Worker listening for jobs')

module.exports = {
  worker,
  scheduler,
}
