const MailBotClient = require('../mail/MailBotClient')
const { connection } = require('../config')

const args = process.argv.slice(2)

const client = new MailBotClient({
  connection,
})

const NUM_MAILS = 10

for (let i = 0; i < NUM_MAILS; i += 1) {
  client.enqueue(
    'rate-limited',
    {
      mailOpts: {
        from: 'manast@taskforce.sh',
        to: args[0],
        subject: 'Your first week with BullMq',
        text: 'This is an engagement email!',
      },
    },
  )
}
