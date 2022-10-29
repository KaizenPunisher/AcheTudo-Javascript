const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { host, port, user, pass } = require('../configmail/umbler.json');

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