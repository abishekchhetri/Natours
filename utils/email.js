// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.from = `chhetriabishek143@gmail.com`;
    this.to = user.email;
    this.url = url;
    this.firstName = user.name.split(' ')[0];
  }

  newTransporter() {
    if (process.env.NODE_ENV === 'development')
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: +process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    else
      return nodemailer.createTransport({
        host: process.env.SENDGRID_HOST,
        port: +process.env.SENDGRID_PORT,
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
  }

  //heavily modified and modularized
  async sendEmail(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      subject,
      from: this.from,
      url: this.url,
      firstName: this.firstName,
    });
    try {
      await this.newTransporter().sendMail({
        from: this.from,
        to: this.to,
        subject,
        text: convert(html),
        html,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //send when user signs up
  async sendWelcome() {
    await this.sendEmail('welcome', 'Welcome to natours family!');
  }
  async sendPasswordReset(template, message) {
    await this.sendEmail(template, message);
  }
};
