import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, service, budget, message } = await req.json();

    let transporter;
    let usingTestAccount = false;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // No SMTP configured — create a test account (Ethereal) for local development
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      usingTestAccount = true;
    } else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
    }

    const to = process.env.TO_EMAIL || 'ravinduvinoj.se@gmail.com';
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@portfolio';

    const subject = `Portfolio Contact Form: ${service || 'General Inquiry'}`;
    const text = `Name: ${name || ''}\nEmail: ${email || ''}\nService: ${service || ''}\nBudget: ${budget || ''}\n\nMessage:\n${message || ''}`;
    const html = `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${name || ''}</p>
      <p><strong>Email:</strong> ${email || ''}</p>
      <p><strong>Service:</strong> ${service || ''}</p>
      <p><strong>Budget:</strong> ${budget || ''}</p>
      <hr />
      <p>${(message || '').replace(/\n/g, '<br/>')}</p>
    `;

    const info = await transporter.sendMail({ from, to, subject, text, html });

    const result: any = { ok: true };
    if (usingTestAccount) {
      // Provide the ethereal preview URL in dev
      const preview = nodemailer.getTestMessageUrl(info);
      if (preview) result.preview = preview;
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }
}
