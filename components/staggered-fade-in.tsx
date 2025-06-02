"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface StaggeredFadeInProps {
  children: React.ReactNode[]
  delay?: number
  stagger?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function StaggeredFadeIn({
  children,
  delay = 0,
  stagger = 200,
  duration = 600,
  direction = "up",
  className = "",
}: StaggeredFadeInProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false))
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the staggered animation
          children.forEach((_, index) => {
            setTimeout(
              () => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              },
              delay + index * stagger,
            )
          })
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [children, delay, stagger])

  const getTransform = (isVisible: boolean) => {
    if (isVisible) return "translate3d(0, 0, 0)"

    switch (direction) {
      case "up":
        return "translate3d(0, 30px, 0)"
      case "down":
        return "translate3d(0, -30px, 0)"
      case "left":
        return "translate3d(30px, 0, 0)"
      case "right":
        return "translate3d(-30px, 0, 0)"
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: visibleItems[index] ? 1 : 0,
            transform: getTransform(visibleItems[index]),
            transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
