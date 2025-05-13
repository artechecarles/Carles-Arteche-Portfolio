"use client"

import type React from "react"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeDownloadButtonProps {
  className?: string
  children?: React.ReactNode
}

export function ResumeDownloadButton({ className, children }: ResumeDownloadButtonProps) {
  const handleDownload = () => {
    // Call the global function we defined in ResumeGenerator
    if (typeof window !== "undefined" && window.generateResumePDF) {
      window.generateResumePDF()
    } else {
      // Fallback to direct download if the generator isn't available
      const link = document.createElement("a")
      link.href = "/cv.pdf"
      link.download = "Carles_Arteche_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <Button variant="outline" className={className} onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      {children || "Download Resume"}
    </Button>
  )
}
