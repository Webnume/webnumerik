import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error(
    "Missing required environment variables: EMAIL_USER and EMAIL_PASS"
  );
}

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ status: "Bad Request", message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.mail.ovh.net",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
    secure: true,
  });

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");

    const mailData = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `${message}`,
    };

    const info = await transporter.sendMail(mailData);

    return res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "Error", message: "Failed to send email" });
  }
}
