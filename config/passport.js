const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//Load User Model
const user = require('../models/mongoConnection').Utilizadores;

module.exports = function(passport){
    passport.use(
        new localStrategy({usernameField: 'email'}, (email,password, done)=>{
            //Verificar se existe o user na base de dados
            user.findOne({email: email})
                .then(user => {
                  //Verificação se encontrou determinado utilizador
                    if(!user){
                        return done(null, false, {message: 'That Email is not registered'});
                    }
                    //Se sim, comparar as passwords
                    bcrypt.compare(password, user.password, (err, isMatch)=>{
                        if (err) throw err;
                        if(isMatch){
                            return done(null,user);
                        }else{
                            return done(null,false, {message: 'Password Incorrect'});
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function(user, done) {
      console.log(user)
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            console.log(user);
          done(err, user);
        });
      });
}
