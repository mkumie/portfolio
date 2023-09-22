import { transporter, mailOptions } from "@/utils/mail-server";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const body = await req.json();
  const { name, subject, email, phone, message } = body;

  try {
    const data = await transporter.sendMail({
      ...mailOptions,
      subject: `YWD Profile Message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
