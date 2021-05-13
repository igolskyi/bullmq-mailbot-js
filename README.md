# bullmq-mailbot-js
JavaScript port for example [bullmq-mailbot](https://github.com/taskforcesh/bullmq-mailbot) on ES6+

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/68b4dd0f6c5e4918bc510bada6e9f4b3)](https://app.codacy.com/gh/igolskyi/bullmq-mailbot-js?utm_source=github.com&utm_medium=referral&utm_content=igolskyi/bullmq-mailbot-js&utm_campaign=Badge_Grade_Settings)
[![codebeat badge](https://codebeat.co/badges/4b7f86c3-df1d-4325-8ce9-53b1fdfa1eae)](https://codebeat.co/projects/github-com-igolskyi-bullmq-mailbot-js-part1)
[![CodeFactor](https://www.codefactor.io/repository/github/igolskyi/bullmq-mailbot-js/badge)](https://www.codefactor.io/repository/github/igolskyi/bullmq-mailbot-js)

See [BullMQ Tutorial - Mailbot](https://blog.taskforce.sh/implementing-mail-microservice-with-bullmq/)
This tutorial shows how to easily create a bot for sending emails. The tutorial is divided into several parts, **every part is located on a different branch** so that you can navigate the code easily matching the tutorial text.

## Install

Just clone this repo and when inside the repo install the dependencies:

```bash
  npm install
```

and then run the main service:

```bash
  npm start
```

To test the service, in a separate terminal, run:
```bash
  npm test 'test@email.com'
```

You can check results with the fake SMTP service [Ethereal](https://ethereal.email/) by previewURL that logs in the console where the main service is running.
```bash
# > npm start
# Worker listening for jobs

# Completed job 1 successfully, sent email to your_destination@email.com
# Preview URL: https://ethereal.email/message/X10VNAfHaE2Q4Y27YJkgU3B3LiUoCotYAAACqcDAPmq3oahUiWxXDmkS1GI
```

**Note**, in order to be able to send emails with this module you need to a local Redis™ instance running.

JavaScript implementation:
- [x] part1
- [x] part2
- [x] part3
