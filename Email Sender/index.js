require('dotenv').config();
console.log(process.env)
var email = require('./sender');

//var fs = require("fs");


// exeple of file to send
//pathToAttachment = "./qrcode.pdf";
//attachment = fs.readFileSync(pathToAttachment).toString("base64");

//send any email
//email.sendEmail("patriciapaquete@gmail.com", "we",attachment, "qrCode", "application/pdf")
email.sendEmail("170221034@estudantes.ips.pt", "welcome")

//send a template email 
//email.sendEmail("patriciapaquete@gmail.com", "welcome",attachment, "qrCode", "application/pdf")