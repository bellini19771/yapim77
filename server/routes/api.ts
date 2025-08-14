import express from 'express';
import passport from 'passport';
import nodemailer from 'nodemailer';

export const router = express.Router();

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'mail.kurumsaleposta.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER || 'info@77yapim.com',
    pass: process.env.EMAIL_PASS || 'A1s1d1f1A1s1d1f1'
  },
  tls: {
    rejectUnauthorized: false // SSL sertifika doğrulamasını devre dışı bırak
  }
});

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

// Contact form endpoint
router.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, projectType, message } = req.body;

    // Email içeriği
    const mailOptions = {
      from: 'info@77yapim.com',
      to: 'info@77yapim.com',
      subject: `Yeni İletişim Formu: ${projectType}`,
      html: `
        <h3>Yeni İletişim Formu Gönderisi</h3>
        <p><strong>İsim:</strong> ${firstName}</p>
        <p><strong>Soyisim:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Proje Tipi:</strong> ${projectType}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `
    };

    // Email gönder
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email başarıyla gönderildi' });
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    res.status(500).json({ error: 'Email gönderilemedi' });
  }
});
