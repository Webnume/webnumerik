const nodemailer = require("nodemailer");

export default async function POST(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.fr",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
    html: `${message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
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
