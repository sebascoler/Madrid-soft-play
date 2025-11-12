"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity overflow-hidden -ml-2 md:-ml-24"
          >
            <div className="h-12 md:h-16 overflow-hidden flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={500}
                height={150}
                className="w-auto h-[200%] md:h-[250%] object-contain object-center"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollTo("pricing")}
              className="text-foreground hover:text-accent hover:bg-transparent"
            >
              Paquetes
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("comentarios")}
              className="text-foreground hover:text-accent hover:bg-transparent"
            >
              Comentarios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("lead-form")}
              className="text-foreground hover:text-accent hover:bg-transparent"
            >
              Contacto
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("faq")}
              className="text-foreground hover:text-accent hover:bg-transparent"
            >
              FAQ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Button
              variant="ghost"
              onClick={() => scrollTo("pricing")}
              className="w-full justify-start text-foreground hover:text-accent hover:bg-transparent"
            >
              Paquetes
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("comentarios")}
              className="w-full justify-start text-foreground hover:text-accent hover:bg-transparent"
            >
              Comentarios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("lead-form")}
              className="w-full justify-start text-foreground hover:text-accent hover:bg-transparent"
            >
              Contacto
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollTo("faq")}
              className="w-full justify-start text-foreground hover:text-accent hover:bg-transparent"
            >
              FAQ
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

