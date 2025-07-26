import express from 'express';
import passport from 'passport';

export const router = express.Router();

// Authentication routes
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true });
});

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ success: true });
  });
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json(null);
  }
});
