require('dotenv').config();
console.log(process.env)
var email = require('./sender');
var fs = require("fs");

//Email de recuperação de password
email.sendRecoverPasswordEmail("170221034@estudantes.ips.pt");

//Email com aviso de alterações num projeto
email.sendChangesInProjectEmail("170221034@estudantes.ips.pt");

//Email com a confirmação se o projeto foi aceite ou recusado
email.sendConfirmProjectEmail("170221034@estudantes.ips.pt");

//Email de confirmação de conta
email.sendConfirmationEmail("170221034@estudantes.ips.pt");

//Email co guidelines para o projeto
email.sendProjectGuidelinesEmail("170221034@estudantes.ips.pt");

//Email com QRCode
pathToAttachment = "./Email Sender/qrcode.pdf";
attachment = fs.readFileSync(pathToAttachment).toString("base64");
email.sendQRCodeEmail("170221034@estudantes.ips.pt",attachment);

