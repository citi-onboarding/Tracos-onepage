const nodemailer = require('nodemailer');
import dotenv from 'dotenv';

dotenv.config();

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
        to: [process.env.EMAIL_WILL_RECEIVE]
    }));
}

export default sendMail;