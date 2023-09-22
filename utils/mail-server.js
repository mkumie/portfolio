import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_USER;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAIL_PROVIDER,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
