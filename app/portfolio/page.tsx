"use client"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Menu, X } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

// Sample portfolio images organized by countries/continents
const portfolioImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Street Photography in Egypt",
    category: "Africa",
    country: "Egypt",
    title: "Cairo Streets",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Landscape Photography in South Africa",
    category: "Africa",
    country: "South Africa",
    title: "Cape Town Sunset",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=500&width=400",
    alt: "Portrait Photography in Morocco",
    category: "Africa",
    country: "Morocco",
    title: "Marrakech Portrait",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Architecture in Spain",
    category: "Europe",
    country: "Spain",
    title: "Barcelona Architecture",
    aspectRatio: "square",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=700&width=400",
    alt: "Countryside in Ireland",
    category: "Europe",
    country: "UK & Ireland",
    title: "Irish Countryside",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Coastal Photography in Portugal",
    category: "Europe",
    country: "Portugal",
    title: "Lisbon Coast",
    aspectRatio: "landscape",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Street Life in Vietnam",
    category: "Asia",
    country: "Vietnam",
    title: "Hanoi Streets",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=500&width=500",
    alt: "Temple Photography in Thailand",
    category: "Asia",
    country: "Thailand",
    title: "Bangkok Temple",
    aspectRatio: "square",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Mountain Photography in Nepal",
    category: "Asia",
    country: "Nepal",
    title: "Himalayan Vista",
    aspectRatio: "landscape",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=650&width=400",
    alt: "Urban Photography in Japan",
    category: "Asia",
    country: "Japan",
    title: "Tokyo Nights",
    aspectRatio: "portrait",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cultural Photography in Mexico",
    category: "Americas & Caribbean",
    country: "Mexico",
    title: "Mexican Culture",
    aspectRatio: "landscape",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=550&width=400",
    alt: "Beach Photography in Puerto Rico",
    category: "Americas & Caribbean",
    country: "Puerto Rico",
    title: "Caribbean Paradise",
    aspectRatio: "portrait",
  },
]

const categories = ["Erasing Borders / View All", "Africa", "Europe", "Asia", "Americas & Caribbean"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Erasing Borders / View All")
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioImages)[0] | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredImages =
    selectedCategory === "Erasing Borders / View All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory)

  const getRowSpan = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "portrait":
        return "row-span-3"
      case "landscape":
        return "row-span-2"
      case "square":
        return "row-span-2"
      default:
        return "row-span-2"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="https://linktr.ee/beloveful" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.525 0 .973-.38 1.052-.897 0-.162 0-.323-.08-.486L8.005 9.5h1.838c.164 0 .324-.081.405-.243.081-.162.081-.405-.081-.567L6.647 3.595c-.162-.162-.405-.162-.567 0L2.56 8.69c-.162.162-.162.405-.081.567.081.162.241.243.405.243h1.838l1.231 5.566zm8.094 0c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.525 0 .973-.38 1.052-.897 0-.162 0-.323-.08-.486L16.099 9.5h1.838c.164 0 .324-.081.405-.243.081-.162.081-.405-.081-.567L14.741 3.595c-.162-.162-.405-.162-.567 0L10.654 8.69c-.162.162-.162.405-.081.567.081.162.241.243.405.243h1.838l1.231 5.566z" />
                </svg>
              </Link>
              <Link href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-5 h-5 text-black hover:text-gray-900 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5v-.007c0-3.086.85-5.94 2.495-8.491C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.5v.007c0 3.086-.85 5.94-2.495 8.491C18.155 22.795 15.402 23.976 11.821 24h-.007zm.014-22c-2.583 0-4.551.854-5.849 2.538C4.85 6.36 4.5 8.69 4.5 11.5c0 2.81.35 5.14 1.851 6.962C7.649 20.146 9.617 21 12.2 21c2.583 0 4.551-.854 5.849-2.538C19.15 16.64 19.5 14.31 19.5 11.5c0-2.81-.35-5.14-1.851-6.962C16.351 2.854 14.383 2 11.8 2h-.007z" />
                </svg>
              </Link>
              <Link href="https://x.com/beloveful" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </Link>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-center">
              <Link href="/">
                <Logo variant="black" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/portfolio" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1">
                PORTFOLIO
              </Link>
              <Link
                href="https://tr.ee/5UEQo99kEi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                PRINT SHOP
              </Link>
              <Link href="/workshops" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                WORKSHOPS
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                ABOUT
              </Link>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-900 font-medium py-2 border-l-2 border-gray-900 pl-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link
                href="https://tr.ee/5UEQo99kEi"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRINT SHOP
              </Link>
              <Link
                href="/workshops"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WORKSHOPS
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <Link href="https://www.facebook.com/tony.menias#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </Link>
                <Link href="https://www.instagram.com/beloveful" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </Link>
                <Link href="https://linktr.ee/beloveful" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.525 0 .973-.38 1.052-.897 0-.162 0-.323-.08-.486L8.005 9.5h1.838c.164 0 .324-.081.405-.243.081-.162.081-.405-.081-.567L6.647 3.595c-.162-.162-.405-.162-.567 0L2.56 8.69c-.162.162-.162.405-.081.567.081.162.241.243.405.243h1.838l1.231 5.566zm8.094 0c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.525 0 .973-.38 1.052-.897 0-.162 0-.323-.08-.486L16.099 9.5h1.838c.164 0 .324-.081.405-.243.081-.162.081-.405-.081-.567L14.741 3.595c-.162-.162-.405-.162-.567 0L10.654 8.69c-.162.162-.162.405-.081.567.081.162.241.243.405.243h1.838l1.231 5.566z" />
                  </svg>
                </Link>
                <Link href="https://www.threads.com/@beloveful" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-5 h-5 text-black hover:text-gray-900 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.5v-.007c0-3.086.85-5.94 2.495-8.491C5.845 1.205 8.598.024 12.179 0h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.5v.007c0 3.086-.85 5.94-2.495 8.491C18.155 22.795 15.402 23.976 11.821 24h-.007zm.014-22c-2.583 0-4.551.854-5.849 2.538C4.85 6.36 4.5 8.69 4.5 11.5c0 2.81.35 5.14 1.851 6.962C7.649 20.146 9.617 21 12.2 21c2.583 0 4.551-.854 5.849-2.538C19.15 16.64 19.5 14.31 19.5 11.5c0-2.81-.35-5.14-1.851-6.962C16.351 2.854 14.383 2 11.8 2h-.007z" />
                  </svg>
                </Link>
                <Link href="https://x.com/beloveful" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated collection of moments captured across continents, telling stories that transcend borders.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mixed Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={`cursor-pointer group overflow-hidden rounded-lg bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 ${getRowSpan(image.aspectRatio)}`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-full">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-medium text-sm">{image.title}</h3>
                    <p className="text-white/80 text-xs">{image.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-medium text-lg">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
