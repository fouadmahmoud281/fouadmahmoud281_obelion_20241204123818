const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
  port: process.env.EMAIL_PORT, // e.g., 465 for SSL
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // sender email address
    pass: process.env.EMAIL_PASS, // sender email password or app password
  },
});

const sendInvitationEmail = async (attendee, eventDetails) => {
  const mailOptions = {
    from: `"Event Organizer" <${process.env.EMAIL_USER}>`,
    to: attendee.email,
    subject: 'You are Invited to Our Event!',
    text: `Dear ${attendee.firstName},

You are cordially invited to our event.

Event Details:
${eventDetails}

Please confirm your attendance.

Best regards,
Event Organizer`,
    html: `<p>Dear ${attendee.firstName},</p>
<p>You are cordially invited to our event.</p>
<p><strong>Event Details:</strong><br/>${eventDetails}</p>
<p>Please confirm your attendance.</p>
<p>Best regards,<br/>Event Organizer</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Invitation email sent to ${attendee.email}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`Error sending email to ${attendee.email}:`, error);
    throw error;
  }
};

module.exports = {
  sendInvitationEmail,
};
