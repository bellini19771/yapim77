import { Strategy as LocalStrategy } from 'passport-local';
import { PassportStatic } from 'passport';

// Dummy user for testing
const users = [
  {
    id: 1,
    username: 'test',
    password: 'test'
  }
];

export const configurePassport = (passport: PassportStatic) => {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      const user = users.find(u => u.username === username);
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    }
  ));

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: number, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
  });
};
