import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

// SMTP transporter oluştur
const transporter = nodemailer.createTransport({
  host: 'smtp.77yapim.com', // SMTP sunucu adresi
  port: 587, // SMTP port
  secure: false, // TLS için false
  auth: {
    user: 'info@77yapim.com',
    pass: 'YOUR_EMAIL_PASSWORD' // Email şifreniz
  }
});

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

export default router;
