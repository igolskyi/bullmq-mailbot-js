const { Queue } = require('bullmq')
const { queueName, connection } = require('../config')

const queue = new Queue(queueName, { connection })

const args = process.argv.slice(2)

console.info(args);

(async () => {
  await queue.add(
    'send-simple',
    {
      mailOpts: {
        from: 'manast@taskforce.sh',
        to: args[0],
        subject: 'This is a simple test',
        text: 'An email sent using BullMQ',
      },
    },
  )

  console.info(`Enqueued an email sending to ${args[0]}`)
  process.exit(0)
})()
