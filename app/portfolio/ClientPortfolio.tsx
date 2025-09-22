'use client'

import { useState } from 'react'
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import type { PortfolioData, PortfolioImage } from '@/lib/portfolio-utils.server'

type Props = {
  initialData: PortfolioData
}

export default function ClientPortfolio({ initialData }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('Erasing Borders / View All')
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categories = ['Erasing Borders / View All', ...initialData.continents]
  const filteredImages =
    selectedCategory === 'Erasing Borders / View All'
      ? initialData.images
      : initialData.images.filter(img => img.country === selectedCategory)

  const getRowSpan = (aspectRatio: string) => {
    switch (aspectRatio) {
      case '16/9':
        return 'row-span-1 md:row-span-1'
      case '9/16':
        return 'row-span-2 md:row-span-3'
      default:
        return 'row-span-1'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.facebook.com/tony.menias#" target="_blank"><Facebook className="w-5 h-5" /></Link>
            <Link href="https://www.instagram.com/beloveful" target="_blank"><Instagram className="w-5 h-5" /></Link>
            <Link href="https://x.com/beloveful" target="_blank"><Twitter className="w-5 h-5" /></Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-center"><Link href="/"><Logo variant="black" /></Link></div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Categories */}
      <main className="pt-24 pb-16 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                selectedCategory === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
          {filteredImages.map(img => (
            <div key={img.id} className={`cursor-pointer group overflow-hidden rounded-lg ${getRowSpan(img.aspectRatio || '')}`} onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
          </div>
        )}
      </main>
    </div>
  )
}
