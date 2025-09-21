interface LogoProps {
  variant?: "white" | "black"
  className?: string
}

export function Logo({ variant = "white", className = "" }: LogoProps) {
  const logoSrc = variant === "white" ? "/beloveful-logo-white.png" : "/beloveful-logo-black.png"

  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoSrc || "/placeholder.svg"} alt="BE LOVEFUL Photography" className="h-8 w-auto" />
    </div>
  )
}

export default Logo
