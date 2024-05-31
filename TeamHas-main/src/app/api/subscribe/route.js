import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { ContactUs } from "../../../../Data/Email/EmailTempalte";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email } = await req.json();

    console.log(email, "Request");

    if (!email) {
      return NextResponse.json(
        { message: "Email are missing", status: false },
        { status: 404 }
      );
    }

    const { userEmail, userPassword } = process.env;

    if (!userEmail || !userPassword) {
      return NextResponse.json(
        {
          message:
            "Email configuration not found. Please check environment variables.",
          status: false,
        },
        { status: 500 }
      );
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    var message = {
      from: `Team Has ${email}`,
      to: userEmail,
      replyTo: email,
      subject: "New Subscriber: "+email,
      html: `Great news! Someone just subscribed to TeamHAS updates <br/> email:${email}`,
    };

    try {
      const sendEmailResponse = await transporter.sendMail(message);
      console.log("Successfully sent the email", sendEmailResponse);
      return NextResponse.json(
        { message: "Email sent successfully", status: true },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email", error);
      return NextResponse.json(
        { message: "Error sending email", status: false },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method Not Allowed", status: false },
      { status: 405 }
    );
  }
}
