"use server"

import { sendEmail } from "@/lib/email"

export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    if (!email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Create the email content
    const subject = `Portfolio Contact: ${name}`
    const htmlContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `
    const textContent = `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `

    // Send the email using our email service
    const emailSent = await sendEmail({
      to: "artechecarles@gmail.com",
      subject,
      html: htmlContent,
      text: textContent,
    })

    if (!emailSent) {
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Error in contact form:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
