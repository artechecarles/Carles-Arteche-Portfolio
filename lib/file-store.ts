"use server"

import { cookies } from "next/headers"

type FileUrls = {
  profileImage?: string
  cv?: string
}

// In a real app, you'd use a database instead of cookies
export async function saveFileUrl(key: keyof FileUrls, url: string) {
  const cookieStore = cookies()
  const existingData = cookieStore.get("portfolio-files")

  let fileUrls: FileUrls = {}
  if (existingData) {
    try {
      fileUrls = JSON.parse(existingData.value)
    } catch (e) {
      // Invalid JSON, start fresh
    }
  }

  fileUrls[key] = url

  cookieStore.set("portfolio-files", JSON.stringify(fileUrls), {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  })
}

export async function getFileUrls(): Promise<FileUrls> {
  const cookieStore = cookies()
  const data = cookieStore.get("portfolio-files")

  if (!data) return {}

  try {
    return JSON.parse(data.value)
  } catch (e) {
    return {}
  }
}
