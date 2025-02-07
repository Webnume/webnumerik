import nodemailer from "nodemailer";

export default async function POST(req) {
  try {
    const { name, email, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "webnumerik", // Change to your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
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

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
