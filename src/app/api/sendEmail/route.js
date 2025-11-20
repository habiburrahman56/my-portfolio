import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email Sent Successfully!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Email Failed!", { status: 500 });
  }
}
