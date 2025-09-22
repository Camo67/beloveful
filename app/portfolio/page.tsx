import ClientPortfolio from './ClientPortfolio'
import { getPortfolioImagesGrouped } from '@/lib/portfolio-utils.server'

export default function PortfolioPage() {
  const portfolioData = getPortfolioImagesGrouped() // server-side
  return <ClientPortfolio initialData={portfolioData} />
}
