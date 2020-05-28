const fs = require('fs');
const path = require('path');
const User = require('../models/mongoConnection').Utilizadores;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const pathToKey = path.join(__dirname,'..','id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey,'utf8');

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

const strategy = new JwtStrategy(options, (payload,done)=>{
  User.findOne({_id: payload.sub})
    .then((user)=>{
      if(user){
        return done(null,user);
      }else{
        return done(null,false);
      }
    })
    .catch(err=>done(err,null));
});

module.exports = (passport)=>{
  passport.use(strategy);
}





























// const localStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');

// //Load User Model
// const user = require('../models/mongoConnection').Utilizadores;

// module.exports = function(passport){
//     passport.use(
//         new localStrategy({usernameField: 'email'}, (email,password, done)=>{
//             //Verificar se existe o user na base de dados
//             user.findOne({email: email})
//                 .then(user => {
//                   //Verificação se encontrou determinado utilizador
//                     if(!user){
//                         return done(null, false, {message: 'That Email is not registered'});
//                     }
//                     //Se sim, comparar as passwords
//                     bcrypt.compare(password, user.password, (err, isMatch)=>{
//                         if (err) throw err;
//                         if(isMatch){
//                             return done(null,user);
//                         }else{
//                             return done(null,false, {message: 'Password Incorrect'});
//                         }
//                     });
//                 })
//                 .catch(err => console.log(err));
//         })
//     );

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     passport.deserializeUser(function(id, done) {
//         user.findById(id, function(err, user) {
//             console.log(user);
//           done(err, user);
//         });
//       });
// }
