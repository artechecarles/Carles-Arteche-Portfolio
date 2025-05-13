import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParticleBackground } from "@/components/particle-background"
import { ResumeGenerator } from "@/components/resume-generator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Carles Arteche Portfolio",
  description: "Personal portfolio of Carles Arteche, Full Stack Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ParticleBackground />
          <ResumeGenerator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
