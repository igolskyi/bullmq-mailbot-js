const { Worker } = require('bullmq')
const { connection, concurrency } = require('../config')

const worker = new Worker('mailbot', `${__dirname}/processor.js`, {
  connection,
  concurrency,
})

console.info('Worker listening for jobs')

module.exports = {
  worker,
}
