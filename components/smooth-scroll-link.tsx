"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  const { scrollToSection } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Extract the section ID from the href (remove the #)
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)

    // Update the URL without causing a page reload
    window.history.pushState({}, "", href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
