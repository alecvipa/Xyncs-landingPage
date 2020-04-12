const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")));

app.post("/ajax/email", function (request, response) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'mifondit4@gmail.com',
            pass: 'vswgtplimqzfuwot'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    console.log(request);

    var textBody = `FROM: ${request.body.name}; EMAIL: ${request.body.email}; NUMBER: ${request.body.number}; MESSAGE: ${request.body.message}`;
    var htmlBody = `<h2>Solicitud de contacto Xyncs</h2><p>Nombre: ${request.body.name}</p><p> Correo electrónico: <a href='mailto: ${request.body.email}'>${request.body.email}</a></p><p>Telefono de contacto: ${request.body.number}</p><p>Mensaje: ${request.body.message}</p>`;
    var mail = {
        from: '"Team: Xyncs" <xyncs@gmail.com>',
    to: 'hebrit_626@hotmail.com',
    subject: '¡Alguien se ha registrado en XYNCS!',
    html:htmlBody
    };
    transporter.sendMail(mail,function(err, info){
        if (err) {
            return console.log(err);
        } else {
            console.log("message sent!");
        };
    });
});

app.listen(3000, ()=> console.log("listening on port 3000"));