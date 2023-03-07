const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
  });

  transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));
  /*
  transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));
  */
  module.exports = transport;