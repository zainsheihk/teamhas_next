import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { bookACall } from "../../../../Data/Email/EmailTempalte";

export async function POST(req, res) {
  if (req.method === "POST") {
    const {
      firstname,
      lastname,
      phoneNumber,
      plan,
      companyEmail,
      customplan,
    } = await req.json();

    console.log( firstname,
      lastname,
      phoneNumber,
      plan,
      companyEmail,
      customplan,"Request")

    if (!firstname || !lastname || !phoneNumber || !companyEmail) {
      return NextResponse.json(
        { message: "Error sending email", status: false },
        { status: 404 }
      );
    }

    const { userEmail, userPassword, MailTextName } = process.env;

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
      from: `Team Has ${companyEmail}`,
      to: userEmail,
      replyTo: companyEmail,
      subject: "Book A Call With " + firstname +" "+ lastname,
      html: bookACall(
        firstname,
        lastname,
        companyEmail,
        phoneNumber,
        plan,
        customplan,
        MailTextName
      ),
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
