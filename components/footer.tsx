"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Mobile Footer - Linktree Style */}
      <div className="md:hidden">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Logo />
            </div>

            {/* CTA Buttons - Linktree Style */}
            <div className="space-y-4">
              <Link
                href="/sign-up"
                className="block w-full bg-black text-white py-4 px-6 rounded-full font-sans font-medium text-center hover:bg-gray-800 transition-colors"
              >
                Join Newsletter
              </Link>
              <Link
                href="/workshops"
                className="block w-full border-2 border-black text-black py-4 px-6 rounded-full font-sans font-medium text-center hover:bg-black hover:text-white transition-colors"
              >
                Book Workshop
              </Link>
              <Link
                href="/printshop"
                className="block w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-full font-sans font-medium text-center hover:border-black hover:text-black transition-colors"
              >
                Print Shop
              </Link>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-sans">© 2024 Tony Menias. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-12 relative">
          <div className="absolute top-6 right-6">
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-black transition-colors cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/beloveful" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-black transition-colors cursor-pointer" />
              </a>
              <a href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-6 h-6 text-black hover:text-gray-900 transition-colors cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932c0 3.518-.85 6.373-2.495 6.84-1.379 1.426-2.079 3.726-2.079 6.84h-.007z" />
                  <path d="M16.5 12c0 2.485-2.015 4.5-4.5 4.5S7.5 14.485 7.5 12s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@beloveful" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-6 h-6 text-gray-600 hover:text-black transition-colors cursor-pointer" />
              </a>
              <a href="mailto:hello@beloveful.com">
                <Mail className="w-6 h-6 text-gray-600 hover:text-black transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 left-6">
            <Logo />
          </div>

          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-8">
              <Link href="/sign-up" className="text-gray-700 hover:text-black font-sans font-medium transition-colors">
                Newsletter
              </Link>
              <Link
                href="/workshops"
                className="text-gray-700 hover:text-black font-sans font-medium transition-colors"
              >
                Workshops
              </Link>
              <Link
                href="/printshop"
                className="text-gray-700 hover:text-black font-sans font-medium transition-colors"
              >
                Print Shop
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 font-sans">© 2024 Tony Menias. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
