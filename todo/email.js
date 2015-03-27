var nodemailer = require('nodemailer');
//var _ = require('underscore');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'email.naikparag@gmail.com',
        pass: 'SuperSecretPass'
    }
});

module.exports.sendMail = function sendMail(fromAddr, toAddr, subject, text) {

    console.log("sending email to", toAddr)
    transporter.sendMail({
        from: fromAddr,
        to: toAddr,
        subject: subject,
        html: text
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports.sendThankYouEmail = function(customer_email) {

    var sender_email = email.naikparag@gmail.com
    this.sendMail(sender_email, customer_email, "Thankyou for using Express", "Express is simple.<br>Express is awesome.");
}