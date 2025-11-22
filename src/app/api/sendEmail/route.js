import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response("Email Sent Successfully!", { status: 200 });

  } catch (error) {
    console.error("Email sending error:", error);
    return new Response("Email Failed!", { status: 500 });
  }
}
