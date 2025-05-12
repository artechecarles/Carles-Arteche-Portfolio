"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

type EmailData = {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: responseData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You can customize this after domain verification
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
      reply_to: data.replyTo, // Add the sender's email as reply-to
    })

    if (error) {
      console.error("Error sending email with Resend:", error)
      return { success: false, error: error.message }
    }

    console.log("Email sent successfully:", responseData)
    return { success: true }
  } catch (error) {
    console.error("Exception when sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
