"use client"

import { useState, useEffect } from "react"

interface AdvancedTypewriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBeforeTyping?: number
  delayBeforeDeleting?: number
  loop?: boolean
  className?: string
  cursorClassName?: string
}

export function AdvancedTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeTyping = 500,
  delayBeforeDeleting = 2000,
  loop = false,
  className = "",
  cursorClassName = "animate-pulse",
}: AdvancedTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(
        () => {
          setIsPaused(false)
          if (isDeleting) {
            setIsDeleting(false)
            setIsTyping(true)

            // Move to next text
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
            setCurrentIndex(0)
            setDisplayText("")
          } else {
            setIsDeleting(true)
          }
        },
        isDeleting ? delayBeforeTyping : delayBeforeDeleting,
      )
      return () => clearTimeout(timeout)
    }

    const currentText = texts[currentTextIndex]

    if (isTyping) {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, typingSpeed)
      } else {
        setIsTyping(false)
        if (loop || currentTextIndex < texts.length - 1) {
          setIsPaused(true)
        }
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsPaused(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    currentIndex,
    currentTextIndex,
    delayBeforeDeleting,
    delayBeforeTyping,
    deletingSpeed,
    displayText,
    isDeleting,
    isPaused,
    isTyping,
    loop,
    texts,
    typingSpeed,
  ])

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${cursorClassName}`}></span>
    </span>
  )
}
