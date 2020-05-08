require('dotenv').config()
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
var fs = require("fs");
const EMAIL = "paquetep@gmail.com";
dotenv.config();


/**
 * attachement type: "image/png" ,"image/jpeg" "image/gif", "application/pdf"
 */
module.exports.sendEmail = function send(to, subject, attachement, attachementName, attachementType){
    
    
    var htmlEmailTemplate="smth";
    try{
        htmlEmailTemplate= fs.readFileSync("./templates/"+subject+".html", "utf-8", function (err){
        console.log(err)
        });
    }catch (err){
        console.log(err)
    };

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    var msg = {
        to: to,
        from:  EMAIL,
        subject: subject,
        html: htmlEmailTemplate,
         
        attachments: [
            {
              content: attachment,
              filename: attachementName,
              type: attachementType,
              disposition: "attachment"
            }
          ]
    };

    sgMail.send(msg, (error, result) =>{
        if(error){
            console.log("Error: " + error);
        }
    });
}
