const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const utils = require('../utils/utils');
const passport = require('passport');

//user model
const User = require("../models/mongoConnection").Utilizadores;

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!"});
});


//Register handle
router.post("/register", (req, res) => {
  console.log(req.body);
  const {
    nome,
    email,
    password,
    genero,
    dataDeNascimento,
    tipoMembro,
    distrito,
    concelho,
    numeroTelefone,
    escola,
    formacao,
    selectedAreas
  } = req.body;
    console.log(req.body);
    User.findOne({ email: email }).then((user) => {
      if (user) {
        res.status(409).send('O email introduzido já foi registasdo');
      } else {
        const newUser = new User({
          nome,
          email,
          password,
          genero,
          dataDeNascimento,
          dataCriacao: Date.now(),
          areasInteresse : selectedAreas,
          distrito,
          concelho,
          tipoMembro,
          numeroTelefone,
          escola,
          formacao,
          aprovado : "Aprovado"
        });
        if(tipoMembro==="Voluntario Externo"){
          newUser.aprovado = "Em Espera";
        }
        //Hash Password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set Password to hashed
            newUser.password = hash;
            //save user
            newUser
              .save()
              .then((user) => {
                const jwt = utils.issueJWT(user);
                res.status(200).json({success: true, user: newUser, token: jwt.token, expiresIn: jwt.expires});
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  //}
});

//Login handle
router.post("/login", (req, res, next) => {
  // passport.authenticate("local", {
  //   successRedirect: "/dashboard",
  //   failureRedirect: "/users/login",
  //   failureFlash: true,
  // })(req, res, next);
  const password = req.body.password.toString();
  User.findOne({email: req.body.email})
    .then((user)=>{
      if(!user){
        res.status(401).json({success: false,msg:"Utilizador não encontrado, porfavor verifique o seu mail e password"});
      }
      bcrypt.compare(password, user.password, (err, isMatch)=>{
        if (err) throw err;
        if(isMatch && user.aprovado !== "Recusado"){
            const tokenObject = utils.issueJWT(user);
            res.status(200).json({success:true, user: user, token: tokenObject.token, expiresIn: tokenObject.expires});
        }else{
          res.status(401).json({success:false, msg: "Password Incorreta"});
        }
    });
    })
    .catch((err)=>{
      next(err);
    });
});

// //Logout handle
// router.get("/logout", (req, res) => {
//   req.logOut();
//   // req.flash('success_msg','you are logged out');
//   res.redirect("/users/login");
// });

router.get("/userAprove",(req,res)=>{
  User.find({aprovado:"Em Espera"}).then((users)=>{
    res.json(users);
  })
});

router.post("/avaliarUser",(req,res)=>{
  const email = req.body.email;
  const aprovado = req.body.aprovado;
  user = User.updateOne({email:email}, {aprovado:aprovado},function(err,doc) {
    if(err) res.status(500).send({error:err});
    return res.status(200).send("Utilizador Aprovado com Sucesso!");
  });
});
module.exports = router;
