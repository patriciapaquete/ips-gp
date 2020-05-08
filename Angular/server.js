var express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4200;

var app = express();

const api = require('./routes/api');
app.use('/api',api);
app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(PORT,console.log(PORT));
