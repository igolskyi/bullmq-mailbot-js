const MailBotClient = require('../mail/MailBotClient')
const { connection } = require('../config')

const args = process.argv.slice(2)

const client = new MailBotClient({
  connection,
})

client.enqueue(
  'welcome-mail',
  {
    from: 'manast@taskforce.sh',
    to: args[0],
    subject: 'Welcome to BullMQ',
    text: 'This is a welcome email!',
  },
  {
    attempts: 5,
    backoff: { type: 'exponential', delay: 3000 },
  },
)
