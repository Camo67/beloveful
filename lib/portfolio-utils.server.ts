import fs from 'fs'
import path from 'path'

const CONTINENT_FOLDERS = [
  'Africa',
  'Asia',
  'Europe & Scandinavia',
  'Middle East',
  'North America',
  'South America',
  'Central America & Caribbean',
  'Philippines-1',
]

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif']

export type PortfolioImage = {
  id: string
  src: string
  alt: string
  filename: string
  country?: string
  aspectRatio?: string
}

export type PortfolioData = {
  continents: string[]
  images: PortfolioImage[]
  stats: {
    totalImages: number
    totalCountries: number
  }
}

const getImagesInDirectory = (dirPath: string, country?: string): PortfolioImage[] => {
  let images: PortfolioImage[] = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      images = images.concat(getImagesInDirectory(fullPath, entry.name))
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const stats = fs.statSync(fullPath)
        const aspectRatio = '1/1' // Placeholder, adjust if needed
        images.push({
          id: fullPath,
          src: '/' + path.relative(path.join(process.cwd(), 'public'), fullPath).replace(/\\/g, '/'),
          alt: entry.name,
          filename: entry.name,
          country,
          aspectRatio,
        })
      }
    }
  }

  return images
}

export const getPortfolioImagesGrouped = (): PortfolioData => {
  const publicDir = path.join(process.cwd(), 'public')
  let allImages: PortfolioImage[] = []

  for (const continent of CONTINENT_FOLDERS) {
    const continentPath = path.join(publicDir, continent)
    if (!fs.existsSync(continentPath)) continue
    allImages = allImages.concat(getImagesInDirectory(continentPath))
  }

  const continents = [...new Set(allImages.map(img => img.country || ''))].filter(Boolean)

  return {
    continents,
    images: allImages,
    stats: {
      totalImages: allImages.length,
      totalCountries: continents.length,
    },
  }
}
