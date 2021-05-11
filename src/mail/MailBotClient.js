const { Queue } = require('bullmq')
const { queueName } = require('../config')

// Here we use the function instead of class because we need to private field
function MailBotClient(opts) {
  // private field queue
  const queue = new Queue(queueName, {
    defaultJobOptions: {
      attempts: 5,
      backoff: { type: 'exponential', delay: 3000 },
    },
    ...opts,
  })

  this.enqueue = async function enqueue(jobName, mail) {
    await queue.add(jobName, mail)
    const to = mail.to || mail.mailOpts.to
    console.info(`Enqueued an email sending to ${to}`)
  }

  this.close = function close() {
    return queue.close()
  }
}

module.exports = MailBotClient
