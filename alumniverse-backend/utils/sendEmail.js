import nodemailer from 'nodemailer';

export const sendOTPEmail = async (toEmail, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Alumniverse" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Verify your Alumniverse Account',
    html: `<p>Your OTP is: <b>${otp}</b></p><p>It will expire in 10 minutes.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
