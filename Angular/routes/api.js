var express = require('express');
var mongoConnection = require('../mongoConnection');
var router = express.Router();

function generateToken() {
  let length = 24;
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//É chamada esta route quando o user clica no botão registar
router.post("/Register", (req, res) => {
  let email = req.body.email;

  let token = generateToken();
  //select à base de dados para ir buscar todos os tokens existentes
  //depois ir gerando um token até encontrar um que ainda não exista
  mongoConnection.Utilizador.where("token").ne(null);

  
  //inserir o token no registo do novo utilizador
  //enviar email com link+token
});

//localhost/users/confirmEmail/sd7asfa8sd7asd8a8fjskjfh
router.put("/users/confirmEmail/:token", (req, res) => {
  let token = req.param.token;

  //procurar o user com o token acima
  //meter o token na BD a null
  //enviar email a dizer que a conta foi confirmada
});

router.get('/', function(req, res) {
  res.send('RESTful API');
});

module.exports = router;
