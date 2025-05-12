"use client"

import { SmoothScrollLink } from "./smooth-scroll-link"

export function NavLinks() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <SmoothScrollLink href="#about" className="transition-colors hover:text-foreground/80">
        About
      </SmoothScrollLink>
      <SmoothScrollLink href="#experience" className="transition-colors hover:text-foreground/80">
        Experience
      </SmoothScrollLink>
      <SmoothScrollLink href="#skills" className="transition-colors hover:text-foreground/80">
        Skills
      </SmoothScrollLink>
      <SmoothScrollLink href="#contact" className="transition-colors hover:text-foreground/80">
        Contact
      </SmoothScrollLink>
    </nav>
  )
}
