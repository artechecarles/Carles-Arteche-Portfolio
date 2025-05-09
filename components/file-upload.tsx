"use client"

import { useState } from "react"
import { Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"

interface FileUploadProps {
  purpose: "profile" | "cv"
  className?: string
  accept?: string
  uploadFile: (data: FormData) => Promise<{ success: boolean; url?: string }>
  onSuccess?: (url: string) => void
}

export function FileUpload({ purpose, className, accept, uploadFile, onSuccess }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  // Add a success state
  const [isSuccess, setIsSuccess] = useState(false)

  // Update the handleUpload function
  const handleUpload = async (formData: FormData) => {
    setIsUploading(true)
    setIsSuccess(false)
    try {
      const result = await uploadFile(formData)
      if (result.success && result.url && onSuccess) {
        onSuccess(result.url)
        setFileName((formData.get("file") as File).name)
        setIsSuccess(true)
      }
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  // Add success message to the return
  return (
    <form action={handleUpload} className={className}>
      <input type="hidden" name="purpose" value={purpose} />
      <div className="flex items-center gap-4">
        <input
          id={`file-${purpose}`}
          name="file"
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const formData = new FormData()
              formData.append("file", e.target.files[0])
              formData.append("purpose", purpose)
              handleUpload(formData)
            }
          }}
        />
        <label htmlFor={`file-${purpose}`}>
          <Button
            type="button"
            variant="outline"
            disabled={isUploading}
            className="cursor-pointer"
            onClick={() => document.getElementById(`file-${purpose}`)?.click()}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload {purpose === "profile" ? "Profile Image" : "CV"}
              </>
            )}
          </Button>
        </label>
        {fileName && <span className="text-sm text-muted-foreground">{fileName}</span>}
        {isSuccess && <span className="text-sm text-green-500">Upload successful!</span>}
      </div>
    </form>
  )
}
