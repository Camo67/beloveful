"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export default function WorkshopsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        {/* Desktop Social Media Icons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/beloveful/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
          </a>
          <a href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-black hover:text-gray-900 transition-colors cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932c0 3.518-.85 6.373-2.495 8.424C18.361 22.795 15.608 23.976 12.186 24zM12.179 2.25c-2.69.018-4.751.848-6.127 2.466C4.676 6.334 4 8.618 4 11.932c0 3.314.676 5.598 2.052 7.216 1.376 1.618 3.437 2.448 6.127 2.466h.007c2.69-.018 4.751-.848 6.127-2.466C19.689 17.53 20.365 15.246 20.365 11.932c0-3.314-.676-5.598-2.052-7.216C16.937 3.098 14.876 2.268 12.186 2.25h-.007z" />
              <path d="M16.5 12c0 2.485-2.015 4.5-4.5 4.5S7.5 14.485 7.5 12s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z" />
            </svg>
          </a>
          <a href="https://x.com/beloveful" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Logo - Centered on mobile, left-aligned on desktop */}
        <div className="flex-1 flex justify-center md:justify-start md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Logo variant="black" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-sans tracking-wide hover:text-gray-600 transition-colors">
            HOME
          </Link>
          <Link href="/portfolio" className="text-sm font-sans tracking-wide hover:text-gray-600 transition-colors">
            PORTFOLIO
          </Link>
          <a
            href="https://beloveful.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans tracking-wide hover:text-gray-600 transition-colors"
          >
            PRINT SHOP
          </a>
          <Link href="/workshops" className="text-sm font-sans tracking-wide text-black font-medium">
            WORKSHOPS
          </Link>
          <Link href="/about" className="text-sm font-sans tracking-wide hover:text-gray-600 transition-colors">
            ABOUT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8 text-center">
              <Link
                href="/"
                className="text-xl font-sans tracking-wide hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/portfolio"
                className="text-xl font-sans tracking-wide hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <a
                href="https://beloveful.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-sans tracking-wide hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRINT SHOP
              </a>
              <Link
                href="/workshops"
                className="text-xl font-sans tracking-wide text-black font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WORKSHOPS
              </Link>
              <Link
                href="/about"
                className="text-xl font-sans tracking-wide hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </nav>

            {/* Mobile Social Media Icons */}
            <div className="flex items-center gap-6 mt-12">
              <a href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/beloveful/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-black hover:text-gray-900 transition-colors cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932c0 3.518-.85 6.373-2.495 8.424C18.361 22.795 15.608 23.976 12.186 24zM12.179 2.25c-2.69.018-4.751.848-6.127 2.466C4.676 6.334 4 8.618 4 11.932c0 3.314.676 5.598 2.052 7.216 1.376 1.618 3.437 2.448 6.127 2.466h.007c2.69-.018 4.751-.848 6.127-2.466C19.689 17.53 20.365 15.246 20.365 11.932c0-3.314-.676-5.598-2.052-7.216C16.937 3.098 14.876 2.268 12.186 2.25h-.007z" />
                  <path d="M16.5 12c0 2.485-2.015 4.5-4.5 4.5S7.5 14.485 7.5 12s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z" />
                </svg>
              </a>
              <a href="https://x.com/beloveful" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/workshop-hero.jpg"
          alt="Black and white street photography of people walking through urban plaza with dramatic shadows"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">Workshops</h1>
            <p className="text-lg font-sans font-light tracking-wide">Walk the streets, see differently</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Featured Workshop */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-sans font-bold mb-6">1:1 Street Photography Workshop in Chicago</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-sans">
                Experience the pulse of Chicago through a photographer's lens. This personalized workshop takes you
                through the city's most photogenic neighborhoods, from the Loop to Lincoln Park, teaching you to capture
                authentic moments and develop your unique street photography voice.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="text-sm font-sans">4-hour intensive session</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="text-sm font-sans">Personalized instruction and feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="text-sm font-sans">Post-workshop image review session</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="text-sm font-sans">All skill levels welcome</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-sans font-bold">$350</span>
                <Link
                  href="/sign-up"
                  className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm font-sans tracking-wide"
                >
                  Book Workshop
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/chicago-basketball-court.jpg"
                alt="Colorful basketball court with players in front of pastel apartment building - street photography example"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* General Workshops */}
        <section>
          <h2 className="text-3xl font-sans font-bold mb-12 text-center">General Street Photography Workshops</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200">
              <h3 className="text-xl font-sans font-bold mb-4">Group Workshop</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Join fellow photographers for a collaborative learning experience. Perfect for building community while
                honing your craft.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-sans font-bold">$150</span>
                <span className="text-sm text-gray-500 font-sans">Max 6 people</span>
              </div>
            </div>
            <div className="p-8 border border-gray-200">
              <h3 className="text-xl font-sans font-bold mb-4">Online Mentorship</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Monthly one-on-one sessions to review your work, discuss techniques, and plan your photographic journey.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-sans font-bold">$100/month</span>
                <span className="text-sm text-gray-500 font-sans">Virtual sessions</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-20 py-12 border-t border-gray-200">
          <h2 className="text-2xl font-sans font-bold mb-4">Ready to Begin?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto font-sans">
            Transform how you see the world through the art of street photography.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm font-sans tracking-wide"
          >
            Walk the streets, see differently →
          </Link>
        </div>
      </main>
    </div>
  )
}
