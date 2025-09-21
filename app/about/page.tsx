"use client"

import { Logo } from "@/components/logo"
import { Facebook, Instagram, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
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
          <a href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-black hover:text-gray-900 transition-colors cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.186 2.25h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5c0-3.086.85-5.94 2.495-8.491C5.845 1.205 8.598.024 12.179 0h.014z" />
              <path d="M16.5 11.5c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5zm-7 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5z" />
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
          <a href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
          </a>
        </div>

        <button className="md:hidden z-20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
        </button>

        {/* Logo - Center on desktop, right on mobile */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Logo variant="black" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors font-sans">
            HOME
          </a>
          <a href="/portfolio" className="text-gray-600 hover:text-gray-800 transition-colors font-sans">
            PORTFOLIO
          </a>
          <a
            href="https://tr.ee/5UEQo99kEi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors font-sans"
          >
            PRINT SHOP
          </a>
          <a href="/workshops" className="text-gray-600 hover:text-gray-800 transition-colors font-sans">
            WORKSHOPS
          </a>
          <a href="/about" className="text-gray-800 font-medium font-sans">
            ABOUT
          </a>
        </nav>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <a
                href="/"
                className="text-2xl text-gray-600 hover:text-gray-800 transition-colors font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="/portfolio"
                className="text-2xl text-gray-600 hover:text-gray-800 transition-colors font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </a>
              <a
                href="https://tr.ee/5UEQo99kEi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-gray-800 transition-colors font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRINT SHOP
              </a>
              <a
                href="/workshops"
                className="text-2xl text-gray-600 hover:text-gray-800 transition-colors font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WORKSHOPS
              </a>
              <a
                href="/about"
                className="text-2xl text-gray-800 font-medium font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </a>

              {/* Mobile Social Media Icons */}
              <div className="flex items-center gap-6 mt-8">
                <a href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
                </a>
                <a href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-8 h-8 text-black hover:text-gray-900 transition-colors cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.186 2.25h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5c0-3.086.85-5.94 2.495-8.491C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.5s-.88 5.967-2.144 7.765c1.454 1.822 3.591 2.715 6.535 2.735h.007c2.944-.02 5.081-.913 6.535-2.735C19.62 17.467 18.737 15.002 15.793 1h-.007z" />
                    <path d="M16.5 11.5c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5zm-7 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5z" />
                  </svg>
                </a>
                <a href="https://x.com/beloveful" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="text-center py-8 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-black">Tony Menias</h1>
        <p className="text-lg md:text-xl font-sans text-gray-700">Professional Photographer & Visual Artist</p>
      </section>

      <section className="flex justify-center px-6 py-8">
        <div className="relative w-full max-w-md md:max-w-lg aspect-square overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/tony-hero-new.jpg"
            alt="Tony Menias with sunglasses and a small monkey on his shoulder at a historic temple site"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Publications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">Publications</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Capturing Japan'</span>
                <span className="text-gray-600 font-sans">ANNE Magazine, 2018</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Into The Rabbit Hole'</span>
                <span className="text-gray-600 font-sans">Editors Showcase National Geographic, 2018</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Sunset Sails'</span>
                <span className="text-gray-600 font-sans">Editors Showcase National Geographic, 2021</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Story Behind the Still'</span>
                <span className="text-gray-600 font-sans">Digital Photographers Magazine, 2022</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Chicago'</span>
                <span className="text-gray-600 font-sans">Bump Books, 2023</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">'Burning Man Tunes'</span>
                <span className="text-gray-600 font-sans">Magnetic Magazine, 2023</span>
              </div>
            </div>
          </section>

          {/* Exhibitions Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">Exhibitions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">'Group'</span>
                    <span className="text-sm text-gray-600 font-sans">2018</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">RAW Artists Chicago, IL</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">'Solo' - Erasing Borders</span>
                    <span className="text-sm text-gray-600 font-sans">2019</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Gallery Cafe, Chicago, IL</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">'Solo' - In the Shadows</span>
                    <span className="text-sm text-gray-600 font-sans">2021</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">ImnotArt Gallery, Chicago, IL</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">Saatchi 'The Other Art Fair'</span>
                    <span className="text-sm text-gray-600 font-sans">2021</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Chicago, IL & Brooklyn, NY</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">The Photography Show</span>
                    <span className="text-sm text-gray-600 font-sans">2022</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Fujifilm Printlife Exhibition, Birmingham, UK</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">TIME Magazine Gallery</span>
                    <span className="text-sm text-gray-600 font-sans">2022</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Black Dove Gallery, Miami, FL</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">Moments that we Missed</span>
                    <span className="text-sm text-gray-600 font-sans">2023</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Compstomp Studios</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">Old Town Art Fair</span>
                    <span className="text-sm text-gray-600 font-sans">2024-2025</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Chicago, IL</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-900 font-sans">Wilmette Art Fair</span>
                    <span className="text-sm text-gray-600 font-sans">2025</span>
                  </div>
                  <p className="text-gray-600 text-sm font-sans">Wilmette, IL</p>
                </div>
              </div>
            </div>
          </section>

          {/* Honors & Awards Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">Honors & Awards</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Award Of Excellence</span>
                <span className="text-gray-600 font-sans">Conception Global Art Collective, 2018</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Winner Editor's Showcase</span>
                <span className="text-gray-600 font-sans">National Geographic, 2018 & 2021</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Featured Pick</span>
                <span className="text-gray-600 font-sans">Lensculture, 2020</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Best in Show</span>
                <span className="text-gray-600 font-sans">Fujifilm Printlife Exhibition, 2022</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Adobe Artist in Residence</span>
                <span className="text-gray-600 font-sans">2022</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900 font-sans">Photographer of the Year</span>
                <span className="text-gray-600 font-sans">University Club, Chicago, 2024</span>
              </div>
            </div>
          </section>

          {/* Media & Features Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 font-sans">Media & Features</h2>

            {/* YouTube Video */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-sans">Featured Video</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/8_77njFPQQU"
                  title="Tony Menias Featured Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Spotify Podcast */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-sans">Podcast Feature</h3>
              <div className="flex justify-center">
                <iframe
                  src="https://creators.spotify.com/pod/profile/mediumlargepodcast/embed/episodes/14-Tony-Menias--Egyptian-G--MD-ef5vk6/a-a2e09up"
                  height="102px"
                  width="400px"
                  frameBorder="0"
                  scrolling="no"
                  title="Medium Large Podcast - Tony Menias Episode"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Additional Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-sans">Additional Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://tr.ee/ATPa0EKFha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  <div className="font-medium text-gray-900 font-sans">Featured Content</div>
                  <div className="text-sm text-gray-600 font-sans">View additional featured work and content</div>
                </a>
                <a
                  href="https://tr.ee/ZESa8_zGtb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  <div className="font-medium text-gray-900 font-sans">More Resources</div>
                  <div className="text-sm text-gray-600 font-sans">Explore more photography resources and links</div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
