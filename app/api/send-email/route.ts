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
      to: process.env.HOSTINGER_EMAIL, // Where to send the email
      subject: `${name} send a submission`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${ProjectTypeLabels[projectType as ProjectType]}
        Need Type: ${needType}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }
}
