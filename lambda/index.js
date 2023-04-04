const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const formData = JSON.parse(event.body);
    const email = process.env.MAIL_USERNAME;
    const password = process.env.MAIL_PASSWORD;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email,
            pass: password
        },
    });

    const message = {
        from: formData.email,
        to: email,
        subject: 'new subject',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    try {
        await transporter.sendMail(message);

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Email sent successfully'
            }),
        };
        return response;
    } catch (error) {
        const response = {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to send email'
            }),
        };
        return response;
    }
};
