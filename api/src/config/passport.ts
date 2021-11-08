import passportLocal from 'passport-local';
const passport = require('passport');

const localStrategy = require('passport-local').Strategy;
const db = require('./database');

passport.use('local.signin', new localStrategy((username: string, password: string, done: any) => {
    console.log('passport', username, password);
    return done(true);
    /* if (err) return done(err);
    if (!user) return done(undefined, false, { message: `Email ${email} not found.` });
    if (!user.enabled) return done(undefined, false, { message: 'restricted access'});
    const validPassword = await helpers.matchPassword( password, user.password);
    return validPassword ? done(undefined, user) : done(undefined, false, { message: 'Invalid password.' }); */
}));

passport.use('local.signup', new localStrategy(async (email: string, password: string, done: any) => {
    console.log('passport signup', email, password);
    const rows = await db.query('SELECT * FROM Users WHERE email = ?', email );
    console.log('rows ', rows);
    return done(true);
    /* if (err) return done(err);
    if (!user) return done(undefined, false, { message: `Email ${email} not found.` });
    if (!user.enabled) return done(undefined, false, { message: 'restricted access'});
    const validPassword = await helpers.matchPassword( password, user.password);
    return validPassword ? done(undefined, user) : done(undefined, false, { message: 'Invalid password.' }); */
}));
