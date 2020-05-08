const PDFDocument = require('pdfkit');
const fs = require('fs');
 
// Create a document

module.exports = function(imagepath){
const doc = new PDFDocument();
 
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('qrcode.pdf'));

// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image(imagepath, {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
});
 
// Finalize PDF file
doc.end()
}

