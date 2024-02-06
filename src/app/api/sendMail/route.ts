import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { SMTP_EMAIL } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const { email, phone, surname, text, username, file } = body;

  try {
    const info = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: `Nowa wiadomość od ${email} - ze strony harmoniaconsult`,
      html: `siema test ${username} ${surname} ${phone}`,
      attachments: [
        {
          filename: "zalacznik1",
          path: `${file}`, // Dla lokalnych plików
        },
        {
          // Przykład załącznika jako Buffer
          filename: "document.pdf",
          content: Buffer.from("Zawartość pliku", "utf-8"),
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
    return new Response("OK");
  } catch (error) {
    console.error("Error sending email", error);
  }
}
