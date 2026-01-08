import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const title = formData.get("title") as string;
    const experience = formData.get("experience") as string;
    const description = formData.get("description") as string;

    // Extract files
    const files = formData.getAll("files") as File[];

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachments
    const attachments = [];
    for (const file of files) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; }
          .header { background-color: #f8f9fa; padding: 10px 20px; border-bottom: 1px solid #eee; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
          .footer { margin-top: 20px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Resource Hire Request</h2>
          </div>
          <div class="content">
            <p>You have received a new inquiry from the Hire Resource form.</p>
            
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${name || "N/A"}</div>
            </div>

            <div class="field">
              <div class="label">Email Address:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value">${phone || "N/A"}</div>
            </div>

            <div class="field">
              <div class="label">Job Title / Role:</div>
              <div class="value">${title || "N/A"}</div>
            </div>

            <div class="field">
              <div class="label">Years of Experience:</div>
              <div class="value">${experience || "N/A"}</div>
            </div>

            <div class="field">
              <div class="label">Description / Requirements:</div>
              <div class="value" style="white-space: pre-wrap;">${
                description || "N/A"
              }</div>
            </div>

            ${
              files.length > 0
                ? `
            <div class="field">
              <div class="label">Attachments:</div>
              <div class="value">${files.length} file(s) attached</div>
            </div>
            `
                : ""
            }
          </div>
          <div class="footer">
            This email was sent from the Novizco Website Hire Resource Form.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"${name || "Hire Resource Inquiry"}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Hire Resource Request: ${title || "General Inquiry"}`,
      html: htmlContent,
      replyTo: email,
      attachments: attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
