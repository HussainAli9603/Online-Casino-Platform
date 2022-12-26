// var LocalStrategy = require('passport-local').Strategy;
// var User = require('../models/userModel');
// var bcrypt = require('bcryptjs');

// module.exports = function (passport) {

//     passport.use('local', new LocalStrategy({
//     	usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true},
//         function (req, email, password, done) {

//         User.findOne({email: email}, function (err, user) {
//     	   console.log(user)

//             if (err)
//                 console.log(err);

//             if (!user) {
//                 return done(null, false, {message: 'No user found!'});
//             }

//             bcrypt.compare(password, user.password, function (err, isMatch) {
//                 if (err)
//                     console.log(err);

//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, {message: 'Wrong password.'});
//                 }
//             });
//         });

//     }));

//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });

//     passport.deserializeUser(function (id, done) {
//         User.findById(id, function (err, user) {
//             done(err, user);
//         });
//     });

// }

