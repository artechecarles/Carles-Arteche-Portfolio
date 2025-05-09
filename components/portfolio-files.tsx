"use client"

import { useState } from "react"
import { FileUpload } from "./file-upload"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function PortfolioFiles() {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null)
  const [cvUrl, setCvUrl] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Profile Image</h3>
        <FileUpload purpose="profile" onSuccess={setProfileImageUrl} accept="image/*" />
        {profileImageUrl && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Preview:</p>
            <img
              src={profileImageUrl || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-border"
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">CV / Resume</h3>
        <FileUpload purpose="cv" onSuccess={setCvUrl} accept=".pdf,.doc,.docx" />
        {cvUrl && (
          <div className="mt-4">
            <Button asChild variant="outline">
              <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
