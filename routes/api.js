const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

//user model
const User = require("../models/mongoConnection").Utilizadores;

// //Login page
// router.get('/login',(req,res)=>{
//     res.render('login');
// });

// //Register Page
// router.get('/register',(req,res)=>{
//     res.render('register');
// });

//Register handle
router.post("/register", (req, res) => {
  console.log(req.body);
  // const {
  //   nome,
  //   email,
  //   password,
  //   password2,
  //   genero,
  //   dataDeNascimento,
  //   externo,
  // } = req.body;
  // let errors = [];
  // //check required fields
  // if (
  //   !nome ||
  //   !email ||
  //   !password ||
  //   !password2 ||
  //   !genero ||
  //   !dataDeNascimento ||
  //   !externo
  // ) {
  //   errors.push({ msg: "Porfavor introduza todos os campos" });
  // }
  // //check passwords match
  // if (password !== password2) {
  //   errors.push({ msg: "As passwords não coincidem" });
  // }
  // //check password lenght
  // if (password.lenght < 6) {
  //   errors.push({ msg: "Password should be at least 6 characters" });
  // }
  // //se houver erros ele irá despolotalos
  // if (errors.length > 0) {
  //   res.redirect("register", {
  //     errors,
  //     nome,
  //     email,
  //     password,
  //     password2,
  //   });
  //   console.log(errors);
  // } else {
  //   //validation passed
  //   console.log(req.body);
  //   User.findOne({ email: email }).then((user) => {
  //     if (user) {
  //       //user already exists
  //       errors.push({ msg: "Email is already registered" });
  //       res.render("register", {
  //         errors,
  //         nome,
  //         email,
  //         password,
  //         password2,
  //       });
  //     } else {
  //       const newUser = new User({
  //         nome,
  //         email,
  //         password,
  //         genero,
  //         dataDeNascimento,
  //         dataCriacao: Date.now(),
  //       });
  //       //Hash Password
  //       bcrypt.genSalt(10, (err, salt) =>
  //         bcrypt.hash(newUser.password, salt, (err, hash) => {
  //           if (err) throw err;
  //           //set Password to hashed
  //           newUser.password = hash;
  //           //save user
  //           newUser
  //             .save()
  //             .then((user) => {
  //               // req.flash('success_msg', 'You are now registered and can log in');
  //               //res.redirect("/users/login");
  //               console.log("success");
  //             })
  //             .catch((err) => console.log(err));
  //         })
  //       );
  //     }
  //   });
  // }
});

//Login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    // failureFlash: true,
  })(req, res, next);
});

//Logout handle
router.get("/logout", (req, res) => {
  req.logOut();
  // req.flash('success_msg','you are logged out');
  res.redirect("/users/login");
});

router.get("/hi", (req, res) => {
  res.send("ola");
});

module.exports = router;
