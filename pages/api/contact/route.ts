import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: "Bad Request", message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.fr",
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
    console.log(info);

    return res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "Error", message: "Failed to send email" });
  }
}

// import nodemailer from "nodemailer";

// export default async function POST(req) {
//   try {
//     const { name, email, message } = req.body;

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       // service: "webnumerik", // Change to your email provider
//       host: "smtp.hostinger.fr", // Change this to match your email provider
//       port: 465,
//       secure: true, // `true` for port 465, `false` for 587
//       auth: {
//         user: process.env.EMAIL_USER, // Your email
//         pass: process.env.EMAIL_PASS, // Your email password or app password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER, // Your email
//       subject: `New Contact Form Submission from ${name}`,
//       text: message,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully" }),
//       {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(
//       JSON.stringify({ success: false, message: "Failed to send email" }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }
