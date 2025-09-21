import { Facebook, Instagram, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"
import HeroSlideshow from "@/components/hero-slideshow"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <HeroSlideshow />

      {/* Overlay for better text readability */}
      {/* This part is kept as is since it's not mentioned in updates */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen">
        {/* Top Bar with Social Icons and Logo */}
        <header className="flex justify-between items-start p-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/tony.menias#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linktr.ee/beloveful"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.001.162.08.323.161.485.161.323.485.646.808.808.162.081.323.081.485.081.163 0 .324-.081.486-.162.323-.161.646-.485.808-.808.081-.162.081-.323.081-.485 0-.162-.081-.323-.162-.486-.162-.323-.485-.646-.808-.808-.162-.081-.323-.081-.485-.081-.162.001-.323.081-.485.162-.323.162-.647.485-.809.808zm8.094 0c-.08.163-.08.324-.08.486.001.162.08.323.161.485.161.323.485.646.808.808.162.081.323.081.485.081.163 0 .324-.081.486-.162.323-.161.646-.485.808-.808.081-.162.081-.323.081-.485 0-.162-.081-.323-.162-.486-.162-.323-.485-.646-.808-.808-.162-.081-.323-.081-.485-.081-.162.001-.323.081-.485.162-.323.162-.647.485-.809.808zm7.953 8.874c-.08.163-.08.324-.08.486.001.162.08.323.161.485.161.323.485.646.808.808.162.081.323.081.485.081.163 0 .324-.081.486-.162.323-.161.646-.485.808-.808.081-.162.081-.323.081-.485 0-.162-.081-.323-.162-.486-.162-.323-.485-.646-.808-.808-.162-.081-.323-.081-.485-.081-.162.001-.323.081-.485.162-.323.162-.647.485-.809.808zm8.094 0c-.08.163-.08.324-.08.486.001.162.08.323.161.485.161.323.485.646.808.808.162.081.323.081.485.081.163 0 .324-.081.486-.162.323-.161.646-.485.808-.808.081-.162.081-.323.081-.485 0-.162-.081-.323-.162-.486-.162-.323-.485-.646-.808-.808-.162-.081-.323-.081-.485-.081-.162.001-.323.081-.485.162-.323.162-.647.485-.809.808zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/beloveful"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Logo */}
          <Logo variant="white" />
        </header>

        {/* Navigation Menu */}
        <nav className="absolute top-48 right-6">
          <ul className="flex flex-col gap-6 text-right">
            <li>
              <a href="/" className="text-white/90 hover:text-white transition-colors text-sm font-light tracking-wide">
                HOME
              </a>
            </li>
            <li className="flex items-center justify-end gap-1">
              <a
                href="/portfolio"
                className="text-white/90 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                PORTFOLIO
              </a>
              <ChevronDown size={14} className="text-white/90" />
            </li>
            <li>
              <a
                href="https://tr.ee/5UEQo99kEi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                PRINT SHOP
              </a>
            </li>
            <li>
              <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-light tracking-wide">
                WORKSHOPS
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white/90 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
