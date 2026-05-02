import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
  ProjectType,
  ProjectTypeLabels,
} from "@/components/utils/contact-utils";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, projectType, needType } =
      await request.json();

    // Create transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.HOSTINGER_EMAIL, // Your Hostinger email
        pass: process.env.HOSTINGER_PASSWORD, // Your email password
      },
    });

    // Email options
    const mailOptions = {
      from: name,
      to: "jotob62085@kynninc.com", // Where to send the email
      subject: `${name} send a submission`,
      html: `
        <b>Name: </b> ${name} <br/> <br/>
        <b>Email: </b> ${email} <br/> <br/>
        <b>Project Type: </b> ${ProjectTypeLabels[projectType as ProjectType]} <br/> <br/>
        <b>Need Type: </b> ${needType} <br/> <br/>
        <b>Message: </b> ${message} <br/>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }
}
