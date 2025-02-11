import nodemailer from "nodemailer";

export default async function POST(req) {
  try {
    const { name, email, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      // service: "webnumerik", // Change to your email provider
      host: "smtp.hostinger.fr", // Change this to match your email provider
      port: 465,
      secure: true, // `true` for port 465, `false` for 587
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
      socketTimeout: 10000, // Timeout after 10 seconds
      connectionTimeout: 10000, // Limit connection time
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
