import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateCareerApplicationEmailTemplate } from "@/lib/email-templates";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract form fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const experience = formData.get("experience") as string;
    const description = formData.get("description") as string;
    const resume = formData.get("resume") as File | null;

    // Server-side validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !jobTitle ||
      !experience ||
      !description
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resume) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 }
      );
    }

    // Convert file to buffer for attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const resumeFilename = resume.name;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email with resume attachment
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Job Application: ${jobTitle} - ${fullName}`,
      html: generateCareerApplicationEmailTemplate(
        fullName,
        email,
        phone,
        jobTitle,
        experience,
        description
      ),
      replyTo: email,
      attachments: [
        {
          filename: resumeFilename,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
