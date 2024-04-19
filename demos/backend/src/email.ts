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

export async function email({ to, subject, text, html }: EmailOpts) {
  if (!text && !html) {
    throw new Error('Either text or html must be provided in email opts');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: SMTP_AUTH_USERNAME,
      pass: SMTP_AUTH_PASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

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
