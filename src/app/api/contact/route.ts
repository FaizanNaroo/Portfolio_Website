// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,   // your Gmail address
        pass: process.env.GMAIL_PASS,   // Gmail App Password (not your normal password)
      },
    });

    // Email that lands in your inbox
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0e27;color:#e2e8f0;border-radius:12px;border:1px solid #00ff9d33">
          <h2 style="color:#00ff9d;margin-bottom:8px">New Portfolio Message</h2>
          <hr style="border-color:#00ff9d22;margin-bottom:20px"/>
          <p><strong style="color:#00b8ff">Name:</strong> ${name}</p>
          <p><strong style="color:#00b8ff">Email:</strong> <a href="mailto:${email}" style="color:#00ff9d">${email}</a></p>
          <p style="margin-top:16px"><strong style="color:#00b8ff">Message:</strong></p>
          <p style="background:#ffffff10;padding:16px;border-radius:8px;border-left:3px solid #00ff9d;white-space:pre-wrap">${message}</p>
          <p style="font-size:12px;color:#64748b;margin-top:24px">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    // Auto-reply to the person who messaged you
    await transporter.sendMail({
      from: `"Faizan Naroo" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0e27;color:#e2e8f0;border-radius:12px;border:1px solid #00b8ff33">
          <h2 style="color:#00b8ff;margin-bottom:8px">Got your message!</h2>
          <hr style="border-color:#00b8ff22;margin-bottom:20px"/>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thanks for getting in touch. I've received your message and will get back to you within 24–48 hours.</p>
          <p style="background:#ffffff10;padding:16px;border-radius:8px;border-left:3px solid #00b8ff;white-space:pre-wrap;margin-top:16px"><em>${message}</em></p>
          <p style="margin-top:20px">Best regards,<br/><strong style="color:#00ff9d">Faizan Naroo</strong></p>
          <p style="font-size:12px;color:#64748b;margin-top:24px">AI Engineer · Full-Stack Developer</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route] error:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
