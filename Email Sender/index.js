require('dotenv').config();
console.log(process.env)
var email = require('./sender');

var fs = require("fs");


// exeple of file to send


//send any email
//email.sendEmail("patriciapaquete@gmail.com", "we",attachment, "qrCode", "application/pdf")

//email.sendEmail("170221034@estudantes.ips.pt", "welcome")
pathToAttachment = "./Email Sender/qrcode.pdf";
attachment = fs.readFileSync(pathToAttachment).toString("base64");

email.sendQRCodeEmail("patricia.pfsg98@gmail.com", attachment)
//email.sendRecoverPasswordEmail("patricia.pfsg98@gmail.com")

//send a template email 
// email.sendEmail("patriciapaquete@gmail.com", "welcome",attachment, "qrCode", "application/pdf")