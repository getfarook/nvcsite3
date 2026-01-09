export const generateCareerApplicationEmailTemplate = (
  fullName: string,
  email: string,
  phone: string,
  jobTitle: string,
  experience: string,
  description: string
) => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>New Job Application</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    body {
      background-color: #f4f4f7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      height: 100% !important;
      margin: 0;
      padding: 0;
      width: 100% !important;
    }
    .wrapper { box-sizing: border-box; padding: 24px; width: 100%; }
    .content { box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0; }
    .main {
      background: #ffffff;
      border-radius: 12px;
      width: 100%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      border: 1px solid #e1e1e3;
      overflow: hidden;
    }
    .accent-bar {
      height: 6px;
      width: 100%;
      background: linear-gradient(90deg, #10b981 0%, #059669 100%);
    }
    .header {
      padding: 32px 32px 24px 32px;
      border-bottom: 1px solid #f0f0f0;
    }
    .logo-text {
      font-size: 20px;
      font-weight: 800;
      color: #000000;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }
    .date-badge {
      font-size: 12px;
      color: #8898aa;
      font-weight: 500;
      margin-top: 4px;
    }
    .body-content { padding: 32px; }
    .heading {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px 0;
      letter-spacing: -0.5px;
      line-height: 1.3;
    }
    .sub-heading {
      font-size: 15px;
      color: #718096;
      margin: 0 0 32px 0;
      line-height: 1.5;
    }
    .job-badge {
      display: inline-block;
      background-color: #10b981;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    .data-table { width: 100%; border-collapse: separate; border-spacing: 0; }
    .data-row td { padding: 12px 0; border-bottom: 1px solid #f4f4f7; }
    .data-label {
      width: 35%;
      font-size: 13px;
      font-weight: 600;
      color: #8898aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      vertical-align: top;
      padding-top: 16px;
    }
    .data-value {
      width: 65%;
      font-size: 16px;
      color: #2d3748;
      font-weight: 500;
      vertical-align: top;
      padding-top: 14px;
    }
    .message-container { margin-top: 32px; }
    .message-label {
      font-size: 13px;
      font-weight: 600;
      color: #8898aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      display: block;
    }
    .message-bubble {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      font-size: 16px;
      color: #4a5568;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .resume-notice {
      margin-top: 24px;
      padding: 16px;
      background-color: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      font-size: 14px;
      color: #166534;
    }
    .btn-container { margin-top: 32px; text-align: left; }
    .btn {
      background-color: #10b981;
      border-radius: 6px;
      color: #ffffff;
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      line-height: 44px;
      text-align: center;
      text-decoration: none;
      width: auto;
      padding: 0 24px;
    }
    .footer { clear: both; margin-top: 24px; text-align: center; width: 100%; }
    .footer-text { color: #9aa5b1; font-size: 12px; margin-bottom: 12px; }
    @media only screen and (max-width: 620px) {
      .main { border-radius: 0; }
      .wrapper { padding: 0; }
      .header, .body-content { padding: 24px; }
      .data-label, .data-value { display: block; width: 100%; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="content">
      <div class="main">
        <div class="accent-bar"></div>
        
        <div class="header">
          <div class="logo-text">Novizco</div>
          <div class="date-badge">${date}</div>
        </div>
        
        <div class="body-content">
          <span class="job-badge">📋 ${jobTitle}</span>
          <h1 class="heading">New Job Application</h1>
          <p class="sub-heading">You have received a new job application for the <strong>${jobTitle}</strong> position. Resume is attached to this email.</p>
          
          <table class="data-table">
            <tr class="data-row">
              <td class="data-label">Applicant Name</td>
              <td class="data-value">${fullName}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Email Address</td>
              <td class="data-value">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Phone Number</td>
              <td class="data-value">${phone}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Position Applied</td>
              <td class="data-value">${jobTitle}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Experience</td>
              <td class="data-value">${experience}</td>
            </tr>
          </table>
          
          <div class="message-container">
            <span class="message-label">About the Applicant</span>
            <div class="message-bubble">${description}</div>
          </div>
          
          <div class="resume-notice">
            📎 <strong>Resume Attached</strong> — The applicant's resume is attached to this email.
          </div>
          
          <div class="btn-container">
            <a href="mailto:${email}" class="btn">Reply to ${
    fullName.split(" ")[0]
  }</a>
            <a href="tel:${phone}" style="margin-left: 12px; color: #718096; text-decoration: none; font-size: 14px;">Call ${phone}</a>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p class="footer-text">Novizco Infotech Pvt. Ltd. &bull; Kerala, India</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

export const generateContactEmailTemplate = (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>New Contact Submission</title>
  <style type="text/css">
    /* Base Resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    
    /* Global Styles */
    body {
      background-color: #f4f4f7;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      height: 100% !important;
      margin: 0;
      padding: 0;
      width: 100% !important;
    }
    
    /* Layout */
    .wrapper {
      box-sizing: border-box;
      padding: 24px;
      width: 100%;
    }
    
    .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      max-width: 600px;
      padding: 0;
    }
    
    /* Card */
    .main {
      background: #ffffff;
      border-radius: 12px;
      width: 100%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      border: 1px solid #e1e1e3;
      overflow: hidden;
    }
    
    /* Decorator Line */
    .accent-bar {
      height: 6px;
      width: 100%;
      background: linear-gradient(90deg, #000000 0%, #444444 100%);
    }

    /* Header */
    .header {
      padding: 32px 32px 24px 32px;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .logo-text {
      font-size: 20px;
      font-weight: 800;
      color: #000000;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }
    
    .date-badge {
      font-size: 12px;
      color: #8898aa;
      font-weight: 500;
      margin-top: 4px;
    }

    /* Body */
    .body-content {
      padding: 32px;
    }
    
    .heading {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 8px 0;
      letter-spacing: -0.5px;
      line-height: 1.3;
    }

    .sub-heading {
      font-size: 15px;
      color: #718096;
      margin: 0 0 32px 0;
      line-height: 1.5;
    }
    
    /* Data Grid */
    .data-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }
    
    .data-row td {
      padding: 12px 0;
      border-bottom: 1px solid #f4f4f7;
    }
    
    .data-label {
      width: 30%;
      font-size: 13px;
      font-weight: 600;
      color: #8898aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      vertical-align: top;
      padding-top: 16px;
    }
    
    .data-value {
      width: 70%;
      font-size: 16px;
      color: #2d3748;
      font-weight: 500;
      vertical-align: top;
      padding-top: 14px;
    }

    /* Message Bubble */
    .message-container {
      margin-top: 32px;
    }
    
    .message-label {
      font-size: 13px;
      font-weight: 600;
      color: #8898aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      display: block;
    }
    
    .message-bubble {
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      font-size: 16px;
      color: #4a5568;
      line-height: 1.6;
      white-space: pre-wrap;
    }

    /* Button */
    .btn-container {
      margin-top: 32px;
      text-align: left;
    }
    
    .btn {
      background-color: #000000;
      border-radius: 6px;
      color: #ffffff;
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      line-height: 44px;
      text-align: center;
      text-decoration: none;
      width: auto;
      padding: 0 24px;
      transition: background-color 0.2s;
    }
    
    /* Footer */
    .footer {
      clear: both;
      margin-top: 24px;
      text-align: center;
      width: 100%;
    }
    
    .footer-text {
      color: #9aa5b1;
      font-size: 12px;
      margin-bottom: 12px;
    }
    
    /* Mobile Responsive */
    @media only screen and (max-width: 620px) {
      .main { border-radius: 0; }
      .wrapper { padding: 0; }
      .header, .body-content { padding: 24px; }
      .data-label, .data-value { display: block; width: 100%; }
      .data-label { padding-bottom: 4px; border-bottom: none; }
      .data-row td { border-bottom: none; padding: 8px 0; }
      .data-row { border-bottom: 1px solid #f4f4f7; display: block; padding: 8px 0; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="content">
      <div class="main">
        <div class="accent-bar"></div>
        
        <div class="header">
          <div class="logo-text">Novizco</div>
          <div class="date-badge">${date}</div>
        </div>
        
        <div class="body-content">
          <h1 class="heading">You have a new inquiry</h1>
          <p class="sub-heading">A potential client has reached out via your website's contact form. Here are the details:</p>
          
          <table class="data-table">
            <tr class="data-row">
              <td class="data-label">Name</td>
              <td class="data-value">${name}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Email</td>
              <td class="data-value">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Phone</td>
              <td class="data-value">${phone}</td>
            </tr>
          </table>
          
          <div class="message-container">
            <span class="message-label">Message</span>
            <div class="message-bubble">${message}</div>
          </div>
          
          <div class="btn-container">
            <a href="mailto:${email}" class="btn">Reply to ${
    name.split(" ")[0]
  }</a>
            <a href="tel:${phone}" style="margin-left: 12px; color: #718096; text-decoration: none; font-size: 14px;">Call ${phone}</a>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p class="footer-text">Novizco Infotech Pvt. Ltd. &bull; Kerala, India</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
