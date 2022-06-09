const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../config/smtp');
const dotenv = require('../.env');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: dotenv.EMAIL,
        pass: dotenv.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

async function sendMail(name: string, email:string, phone: string, referrer: string, description: string) {
    const subject = `Traços: mensagem de ${name} <${email}>`

    const message = `Nome: ${name}
Email: ${email}
Telefone: ${phone}
Como conheceu: ${referrer}
Mensagem: "${description}"`
    
    const messageSent = (await transporter.sendMail({
        text: message,
        subject: subject,
        to: [dotenv.EMAIL_WILL_RECEIVE]
    }));
}

export default sendMail;