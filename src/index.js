const { worker } = require('./mail/worker')

worker.on('completed', job => console.info(
  `Completed job ${job.id} successfully, sent email to ${job.data.to}`,
))
worker.on('failed', (job, err) => console.info(
  `Failed job ${job.id} with ${err}`,
))
