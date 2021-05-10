const nodemailer = require('nodemailer')
const { smtp } = require('../config')

const transporter = nodemailer.createTransport(smtp)

module.exports = async job => {
  try {
    const info = await transporter.sendMail(job.data)
    const previewURL = nodemailer.getTestMessageUrl(info)
    console.info('Preview URL: %s', previewURL)

    return {
      info,
      previewURL,
    }
  } catch (e) {
    console.error(e)
  }
}
