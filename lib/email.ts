"use server"

type EmailData = {
  to: string
  subject: string
  html: string
  text: string
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // For now, we'll just log the email data
    console.log("Email data:", data)

    // In a real implementation, you would use a service like Resend:
    /*
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    });

    if (error) {
      console.error("Error sending email:", error);
      return false;
    }
    */

    // Simulate a successful email send
    return true
  } catch (error) {
    console.error("Error sending email:", error)
    return false
  }
}
