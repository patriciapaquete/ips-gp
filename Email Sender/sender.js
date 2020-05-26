require('dotenv/config');
const sgMail = require('@sendgrid/mail');
var fs = require("fs");
const EMAIL = "paquetep@gmail.com";
sgMail.setApiKey('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');
console.log(process.env.SENDGRID_API_KEY)

/**
 * attachement type: "image/png" ,"image/jpeg" "image/gif", "application/pdf"
 */
module.exports.sendEmail = function send(to, subject, attachement, attachementName, attachementType){
    
    
    var htmlEmailTemplate="smth";
    try{
        htmlEmailTemplate = fs.readFileSync("./templates/"+subject+".html", "utf-8", function (err){
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
         
        /*attachments: [
            {
              content: attachment,
              filename: attachementName,
              type: attachementType,
              disposition: "attachment"
            }
          ]*/
    };

    sgMail.send(msg, (error, result) =>{
        if(error){
            console.log("Error: " + error);
        }
    });
}

