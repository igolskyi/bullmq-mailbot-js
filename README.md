# bullmq-mailbot-js
JavaScript port for example [bullmq-mailbot](https://github.com/taskforcesh/bullmq-mailbot) on ES6+

See [BullMQ Tutorial - Mailbot](https://blog.taskforce.sh/implementing-mail-microservice-with-bullmq/)
This tutorial shows how to easily create a bot for sending emails. The tutorial is divided into several parts, every part is located on a different branch so that you can navigate the code easily matching the tutorial text.

## Install

Just clone this repo and when inside the repo install the dependencies:

```bash
  npm install
```

and then run the main service:

```bash
  npm start
```

For testing the app, run:
```bash
  npm test 'your_destination@email.com'
```

You can check results with the fake SMTP service [Ethereal](https://ethereal.email/) by previewURL.

**Note**, in order to be able to send emails with this module you need to a local Redis™ instance running.

JavaScript implementation:
- [x] part1
- [ ] part2
- [ ] part3