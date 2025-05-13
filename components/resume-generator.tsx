"use client"

import { useEffect } from "react"
import { jsPDF } from "jspdf"

export function ResumeGenerator() {
  useEffect(() => {
    // This function will generate a PDF from the resume text
    const generateResumePDF = async () => {
      try {
        // Fetch the resume text
        const response = await fetch("/resume.txt")
        const text = await response.text()

        // Create a new PDF document
        const doc = new jsPDF()

        // Add the text to the PDF
        const lines = text.split("\n")
        let y = 10

        // Add title
        doc.setFontSize(16)
        doc.text("CARLES ARTECHE RODRIGUEZ", 105, y, { align: "center" })
        y += 10

        // Reset font size
        doc.setFontSize(12)

        // Add the rest of the content
        for (const line of lines) {
          if (line.includes("CARLES ARTECHE RODRIGUEZ")) continue // Skip the title as we've already added it

          if (line.trim() === "") {
            y += 5 // Add some space for empty lines
          } else if (
            line.includes("Experience") ||
            line.includes("Academic background") ||
            line.includes("Languages and technologies") ||
            line.includes("Languages") ||
            line.includes("Competencies") ||
            line.includes("Contact") ||
            line.includes("Licenses")
          ) {
            // Section headers
            y += 5
            doc.setFont("helvetica", "bold")
            doc.text(line.trim(), 10, y)
            doc.setFont("helvetica", "normal")
            y += 7
          } else if (line.startsWith("-") || line.startsWith("●")) {
            // List items
            doc.text(`  ${line.trim()}`, 10, y)
            y += 6
          } else {
            // Regular text
            doc.text(line.trim(), 10, y)
            y += 6
          }

          // Check if we need a new page
          if (y > 280) {
            doc.addPage()
            y = 10
          }
        }

        // Save the PDF
        doc.save("Carles_Arteche_Resume.pdf")
      } catch (error) {
        console.error("Error generating PDF:", error)
      }
    }

    // Add a global function to generate the PDF
    window.generateResumePDF = generateResumePDF
  }, [])

  return null
}
