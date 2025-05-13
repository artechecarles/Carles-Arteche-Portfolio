"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
}

export function TypewriterText({
  text,
  speed = 100,
  delay = 500,
  className = "",
  cursorClassName = "animate-pulse",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Delay before starting the animation
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, speed, text])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${cursorClassName}`}></span>
      )}
    </span>
  )
}
