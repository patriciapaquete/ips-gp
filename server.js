const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const http = require('http');
const passport = require('passport');
const PORT = process.env.PORT || 4200;
const mongoose = require('mongoose');
const session = require('express-session');

var app = express();

//configurações de autenticação
require('./config/passport')(passport);

//configurar a base de dados
const db = require('./config/keys').MongoURI;

//connectar ao mongo
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log('Mongo Db Connected'))
    .catch(err=> console.log(err));


//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Express session
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true,
}));

//passport middlewere
app.use(passport.initialize());
app.use(passport.session());

//Pasta DIST do angular onde irá ser chamados os dois servidores
app.use(express.static(path.join(__dirname,'dist')));

const api = require('./routes/api');
app.use('/api',api);

app.get('*',(req,res)=>{
  console.log(__dirname);
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

const server = http.createServer(app);

server.listen(PORT,console.log(`Server listening on ${PORT}`));
