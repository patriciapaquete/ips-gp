var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('RESTful API');
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
