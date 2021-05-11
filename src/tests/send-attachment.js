const MailBotClient = require('../mail/MailBotClient')
const { connection } = require('../config')

const args = process.argv.slice(2)

const client = new MailBotClient({
  connection,
})

client.enqueue(
  'invoice',
  {
    mailOpts: {
      from: 'manast@taskforce.sh',
      to: args[0],
      subject: 'Your service invoice',
      text: 'Please see the attached invoice\n Kind Regards \n Economy team\n',
    },
    htmlAttachments: [
      {
        name: 'invoice-0001',
        html: '<html><body><div>This is just a dummy Invoice</div></body></html>',
      },
    ],
  },
)
