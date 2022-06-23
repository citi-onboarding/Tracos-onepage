"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodemailer = require('nodemailer');

_dotenv.default.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function sendMail(name, email, phone, referrer, description) {
  const subject = `Traços: mensagem de ${name} <${email}>`;
  const message = `Nome: ${name}
Email: ${email}
Telefone: ${phone}
Como conheceu: ${referrer}
Mensagem: "${description}"`;
  const messageSent = await transporter.sendMail({
    text: message,
    subject: subject,
    to: [process.env.EMAIL_WILL_RECEIVE]
  });
}

var _default = sendMail;
exports.default = _default;