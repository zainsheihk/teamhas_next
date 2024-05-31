import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { applyNow, bookACall } from "../../../../Data/Email/EmailTempalte";

export async function POST(req, res) {
  if (req.method === "POST") {
    const {
      fullname,
      email,
      phonenumber,
      curcompany,
      linkdin,
      message,
      pdf,
    } = await req.json();

    console.log(
      fullname,
      email,
      phonenumber,
      curcompany,
      linkdin,
      message,
      pdf, "Request")

    if (!fullname || !email || !phonenumber || !curcompany || !linkdin || !pdf) {
      return NextResponse.json(
        { message: "Error in sending email", status: false },
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

    var FormMessage = {
      from: `Team Has <${email}>`,
      to: userEmail,
      replyTo: email,
      subject: "Apply Now "+fullname,
      html: applyNow(
        fullname,
        email,
        phonenumber,
        curcompany,
        linkdin,
        message,
      ),
      attachments: [
        {
          filename: fullname+"_"+"attachments",
          // contentType: userFileType === "" ? "No File" : userFileType,
          path: pdf,
        },
      ],
    };

    try {
      const sendEmailResponse = await transporter.sendMail(FormMessage);
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
