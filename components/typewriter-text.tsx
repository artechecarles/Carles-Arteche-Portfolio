"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursorClassName?: string
  onComplete?: () => void
}

export function TypewriterText({
  text,
  speed = 100,
  delay = 500,
  className = "",
  cursorClassName = "animate-pulse",
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

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
    } else {
      // Typing completed
      setIsTyping(false)
      if (onComplete) {
        onComplete()
      }
      // Hide cursor after a delay
      setTimeout(() => {
        setShowCursor(false)
      }, 2000)
    }
  }, [currentIndex, isTyping, speed, text, onComplete])

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${cursorClassName}`}></span>}
    </span>
  )
}
