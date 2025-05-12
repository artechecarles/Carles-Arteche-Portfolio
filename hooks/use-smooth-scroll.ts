"use client"

export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Get the top position of the element relative to the viewport
      const elementPosition = element.getBoundingClientRect().top
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - 80 // Subtract header height

      // Scroll smoothly to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return { scrollToSection }
}
