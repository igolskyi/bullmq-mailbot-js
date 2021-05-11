const { worker } = require('./mail/worker')

worker.on('completed', job => {
  const to = job.data.to || job.data.mailOpts.to
  console.info(
    `Completed job ${job.id} successfully, sent email to ${to}`,
  )
})
worker.on('failed', (job, err) => console.info(
  `Failed job ${job.id} with ${err}`,
))
