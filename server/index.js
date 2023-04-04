import bodyParser from "body-parser";
import express from "express";
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = 3001;

dotenv.config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const email = process.env.MAIL_USERNAME;
const password = process.env.MAIL_PASSWORD;

app.post('/submit-form', cors(), (req, res) => {
  const formData = req.body;
  console.log(formData);

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: email,
          pass: password
      }
  })

  const mailOptions = {
      from: formData.email,
      to: email,
      subject: 'new subject',
      html: `
      <p>${formData.name}</p>
      <p>${formData.message}</p>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.send('Error sending email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
  })
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});