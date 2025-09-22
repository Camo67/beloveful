"use client" // must be at the top for client-side interactivity

import { useState, useEffect } from "react"
import { Facebook, Instagram, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"

// Hero images from public folder
const heroImages = [
  "/Africa/Egypt/11-16-EGY-1107.jpg",
  "/Africa/Ethiopia/ETH-2206.jpg",
  "/Africa/Morocco/IMG_5172.jpg",
  "/Africa/Namibia/NAM-03-18-DSCF3994-2.jpg"
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Header / Top Bar */}
      <header className="relative z-30 flex justify-between items-start p-6">
        <div className="flex gap-4">
          <a href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
            <Instagram size={20} />
          </a>
        </div>
        <Logo variant="white" />
      </header>

      {/* Navigation Menu */}
      <nav className="absolute top-48 right-6 z-30">
        <ul className="flex flex-col gap-6 text-right">
          <li>
            <a href="/" className="text-white/90 hover:text-white text-sm font-light tracking-wide">
              HOME
            </a>
          </li>
          <li className="flex items-center justify-end gap-1">
            <a href="/portfolio" className="text-white/90 hover:text-white text-sm font-light tracking-wide">
              PORTFOLIO
            </a>
            <ChevronDown size={14} className="text-white/90" />
          </li>
          <li>
            <a href="https://tr.ee/5UEQo99kEi" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white text-sm font-light tracking-wide">
              PRINT SHOP
            </a>
          </li>
          <li>
            <a href="#" className="text-white/90 hover:text-white text-sm font-light tracking-wide">
              WORKSHOPS
            </a>
          </li>
          <li>
            <a href="/about" className="text-white/90 hover:text-white text-sm font-light tracking-wide">
              ABOUT
            </a>
          </li>
        </ul>
      </nav>

      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
