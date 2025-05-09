// Import the saveFileUrl function
import { saveFileUrl } from "@/lib/file-store"

// Update the uploadFile function to save the URL
export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File
  const purpose = formData.get("purpose") as string

  if (!file || typeof file === "string") {
    return { error: "No file provided" }
  }

  try {
    // Determine the path based on purpose
    const pathname = purpose === "cv" ? `cv/${file.name}` : `profile/${file.name}`

    // Upload to Vercel Blob
    const blob = await put(pathname, file, {
      access: "public",
    })

    // Save the URL in our store
    if (purpose === "profile") {
      await saveFileUrl("profileImage", blob.url)
    } else if (purpose === "cv") {
      await saveFileUrl("cv", blob.url)
    }

    revalidatePath("/")
    return { success: true, url: blob.url, purpose }
  } catch (error) {
    console.error("Upload error:", error)
    return { error: "Failed to upload file" }
  }
}
