const nodemailer = require('nodemailer')
const puppeteer = require('puppeteer')
const { smtp } = require('../config')

const transporter = nodemailer.createTransport(smtp)

const convertToPDF = async html => Promise.all(
  html.map(async attachment => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.setContent(attachment.html)

    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
    })

    await browser.close()

    return {
      filename: `${attachment.name}.pdf`,
      content: pdf,
    }
  }),
)

module.exports = async job => {
  try {
    const attachments = job.data.htmlAttachments
      ? await convertToPDF(job.data.htmlAttachments)
      : []

    const info = await transporter.sendMail({
      ...job.data.mailOpts,
      attachments,
    })
    const previewURL = nodemailer.getTestMessageUrl(info)
    console.info('Preview URL: %s', previewURL)

    return {
      info,
      previewURL,
    }
  } catch (e) {
    console.error(e)
    return e
  }
}
