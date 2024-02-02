import nodemailer from 'nodemailer';

interface EmailOpts {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const {
  SMTP_PORT,
  SMTP_AUTH_USERNAME,
  SMTP_AUTH_PASSWORD,
  SMTP_HOST,
  SMTP_FROM_EMAIL,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: SMTP_AUTH_USERNAME,
    pass: SMTP_AUTH_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function email({ to, subject, text, html }: EmailOpts) {
  if (!text && !html) {
    throw new Error('Either text or html must be provided in email opts');
  }

  const info = await transporter.sendMail({
    from: SMTP_FROM_EMAIL,
    to,
    subject,
    ...{ ...(text && { text }) },
    ...{ ...(html && { html }) },
  });

  console.log('Message sent: %s', info.messageId);
  return info;
}
