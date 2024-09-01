// // services/emailService.js
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'abedalmajedalajarmah@gmail.com' , 
//        pass: 'ndgx zdev lywb gohb' 
//   },
// });

// exports.sendOTPEmail = async (email, otp) => {
//   try {
//     await transporter.sendMail({
//       from: `"Secure Login" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is ${otp}`,
//     });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send OTP email');
//   }
// };



const nodemailer = require('nodemailer');

// إعداد خدمة إرسال البريد الإلكتروني
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com', // البريد الإلكتروني الخاص بك
    pass: 'ndgx zdev lywb gohb'  // كلمة مرور البريد الإلكتروني الخاصة بك
  },
});

// وظيفة إرسال OTP عبر البريد الإلكتروني
exports.sendOTPEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"Secure Login" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    });
  } catch (error) {
    console.error('Error sending email:', error); // تسجيل الخطأ
    throw new Error('Failed to send OTP email'); // إلقاء خطأ إذا فشل إرسال البريد
  }
};