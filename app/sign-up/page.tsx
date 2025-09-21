"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Mail, CheckCircle } from "lucide-react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <Link href="/" className="flex items-center">
                <Logo variant="black" />
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                  HOME
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                  PORTFOLIO
                </Link>
                <Link
                  href="https://tr.ee/5UEQo99kEi"
                  target="_blank"
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  PRINT SHOP
                </Link>
                <Link href="/workshops" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                  WORKSHOPS
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                  ABOUT
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
          <Card className="w-full max-w-md text-center bg-white/90 backdrop-blur-sm border-red-100 shadow-xl">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to BE LOVEFUL!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to our newsletter. You'll receive the latest updates about Tony's photography
                work, exhibitions, and exclusive content.
              </p>
              <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <Logo variant="black" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                HOME
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                PORTFOLIO
              </Link>
              <Link
                href="https://tr.ee/5UEQo99kEi"
                target="_blank"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                PRINT SHOP
              </Link>
              <Link href="/workshops" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                WORKSHOPS
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                ABOUT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Join the BE LOVEFUL Community
              </h1>
              <p className="text-xl text-gray-600 text-pretty">
                Subscribe for the latest updates on Tony's photography work, upcoming exhibitions, workshops, and
                exclusive behind-the-scenes content.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">Monthly newsletter with new work</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">Early access to exhibitions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">Workshop announcements</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://www.facebook.com/tony.menias#"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </Link>
              <Link
                href="https://www.instagram.com/beloveful"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
              </Link>
              <Link
                href="https://linktr.ee/beloveful"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <Linkedin className="h-5 w-5 text-green-600" />
              </Link>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-red-100 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Subscribe Now</CardTitle>
              <CardDescription className="text-gray-600">
                Stay connected with Tony's latest photography work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-red-200 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-red-200 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By subscribing, you agree to receive emails from BE LOVEFUL Photography. You can unsubscribe at any
                time.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-red-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p>&copy; 2024 BE LOVEFUL Photography by Tony Menias. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link href="/privacy" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-red-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
