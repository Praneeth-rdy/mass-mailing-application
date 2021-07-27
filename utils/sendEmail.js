const nodemailer = require('nodemailer');

const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        /*host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: true,*/
        service: "Gmail", // smtp - Simple Mail Transfer Protocol
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        // from: process.env.EMAIL_FROM, // takes default from as EMAIL_USERNAME
        to: [options.to],
        subject: options.subject,
        html: options.text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

module.exports = sendEmail;