var qrcode = require("qrcode");
var pdf = require("./pdf.js");

var imagepath = "qrcode.png";
var text = "1234567890";


qrcode.toFile(imagepath,text, {
    color: {
      dark: '#0A0909',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    pdf(imagepath);
  });

