require('dotenv/config');
const sgMail = require('@sendgrid/mail');
var fs = require("fs");
const EMAIL = "paquetep@gmail.com";
sgMail.setApiKey('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');
console.log(process.env.SENDGRID_API_KEY);

/**
 * attachement type: "image/png" ,"image/jpeg" "image/gif", "application/pdf"
 */

function attachements(attachementName, pathToAttachment){
attachment = fs.readFileSync(pathToAttachment).toString("base64");
    attachments: [
        {
          content: attachment,
          filename: attachementName,
          type: application/pdf,
          disposition: "attachment"
        }
      ]
};

module.exports.sendEmail = function send(to, subject){
    var htmlEmailTemplate="smth";
    try{
        htmlEmailTemplate = fs.readFileSync("./Email Sender/templates/"+subject+".html", "utf-8", function (err){
        console.log(err)
        });
    }catch (err){
        console.log(err)
    };

    var msg = {
        to: to,
        from:  EMAIL,
        subject: subject,
        html: htmlEmailTemplate,
    };

    sgMail.send(msg, (error, result) =>{
        if(error){
            console.log("Error: " + error);
        }
    });
};

module.exports.sendConfirmationEmail = function send(email){
    this.sendEmail(email, "Confirmation Email");
};

module.exports.sendRecoverPasswordEmail = function send(email){
    this.sendEmail(email, "Recover Password");
};

module.exports.sendConfirmProjectEmail = function send(email){
    this.sendEmail(email, "Confirm Project");
};

module.exports.sendChangesInProjectEmail = function send(email){
    this.sendEmail(email, "Changes in Project");
};

module.exports.sendQRCodeEmail = function send(email, attachement){
    //this.sendEmail(email, "Changes in Project");
    //attachements("QRCode", "./Email Sender/qrcode.pdf");
    const msg = {
    to: email,
    from: EMAIL,
    subject: 'PDF',
    text: 'and easy to do anywhere, even with Node.js',
    };
    attachments: [
        {
          content: attachment,
          filename: "qrcode.pdf",
          type: "application/pdf",
          disposition: "attachment"
        }
      ]
    
    sgMail.send(msg).catch(err => {
    console.log(err);
    });
}