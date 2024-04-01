"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i jsonwebtoken
    $ npm i nodemailer multer
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
//* EMAIL:
// nodemailer
// https://www.nodemailer.com/
// https://www.npmjs.com/package/nodemailer
// https://ethereal.email/

const nodemailer = require("nodemailer");

// Create Test (Fake) Account:
// Mailim oluştu artık createTestAccount demeye gerek yok yoruma aldım.
// nodemailer.createTestAccount().then((data) => console.log(data));
/*
{
  user: 'ysik4dnygtfmh2te@ethereal.email',
  pass: 'g9agUFuK2N3bRW3HrK',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email'
}
*/

// Connec to MailServer:
// const transporter = nodemailer.createTransport({
//   // SMTP:
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // ssl, tls
//   auth: {
//     user: "ysik4dnygtfmh2te@ethereal.email",
//     pass: "g9agUFuK2N3bRW3HrK",
//   },
// });
// console.log(transporter);
// transporter artık bir obje

// SendMail:
// transporter.sendMail(
//   {
//     from: "ysik4dnygtfmh2te@ethereal.email",
//     to: "qadir@clarusway.com", // 'a@b.com, c@d.com'
//     subject: "Hello",
//     text: "Hello There. How are you?",
//     html: "<b>Hello There.</b> <p>How are you?</p>",
//   },
//   (error, success) => {
//     success ? console.log("SUCCESS", success) : console.log("ERROR", error);
//   }
// );

//* GoogleMail (gmail)
//* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
