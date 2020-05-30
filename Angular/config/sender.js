const sgMail = require('@sendgrid/mail');
var fs = require("fs");
const EMAIL = "paquetep@gmail.com";
const api_key = require("./keys").SENDGRID_API_KEY;
sgMail.setApiKey(api_key);
console.log(api_key)

module.exports.sendEmail = function send(to, subject, content) {
  var htmlEmailTemplate = content;
  try {
    htmlEmailTemplate = fs.readFileSync("./templates/" + subject + ".html", "utf-8", function (err) {
      console.log(err)
    });
  } catch (err) {
    console.log(err)
  };
  console.log(EMAIL)
  var msg = {
    to: to,
    from: EMAIL,
    subject: subject,
    html: htmlEmailTemplate,
  };
  sgMail.send(msg, (error, result) => {
    if (error) {
      console.log("Error: " + error);
    }
  });
};

module.exports.sendConfirmationEmail = function send(email) {
  this.sendEmail(email, "Confirmation Email");
};

module.exports.sendRecoverPasswordEmail = function send(email) {
  this.sendEmail(email, "Recover Password", password);
};

module.exports.sendConfirmProjectEmail = function send(email) {
  this.sendEmail(email, "Confirm Project");
};

module.exports.sendChangesInProjectEmail = function send(email) {
  this.sendEmail(email, "Changes in Project");
};

module.exports.sendProjectGuidelinesEmail = function send(email) {
  this.sendEmail(email, "Guidelines");
};

/**
 * attachement type: "image/png" ,"image/jpeg" "image/gif", "application/pdf"
 */
module.exports.sendQRCodeEmail = function send(to, attachment) {
  var htmlEmailTemplate = "smth";
  try {
    htmlEmailTemplate = fs.readFileSync("./Email Sender/templates/QRCode.html", "utf-8", function (err) {
      console.log(err)
    });
  } catch (err) {
    console.log(err)
  };

  var msg = {
    to: to,
    from: EMAIL,
    subject: "QRCode",
    html: htmlEmailTemplate,

    attachments: [
      {
        content: attachment,
        filename: "qrcode.pdf",
        type: "application/pdf",
        disposition: "attachment"
      },
    ],
  };
  sgMail.send(msg).catch(err => {
    console.log(err);
  });
}


