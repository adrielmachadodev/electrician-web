"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { useScrollY } from "@/hooks/useScroolY"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const scrollY = useScrollY()

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center duration-500 ${scrollY > 50 ? "h-24" : "h-32"}`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-accent p-2 rounded-lg">
              <Zap className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary-foreground leading-tight">ZAZPRO</span>
              <span className="font-bold text-lg text-primary-foreground leading-tight">ELECTRICAL</span>
              <span className="text-xs text-primary-foreground/70">PTY.LTD</span>
            </div>
          </div>

          {/* Emergency Number - Desktop */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <span className="text-primary-foreground/70">Número de Emergencia</span>
            <span className="font-semibold text-accent">+123 456 789</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Servicios
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Página
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Blog
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 border-t border-primary-foreground/20">
              <div className="flex items-center space-x-2 text-sm mb-4 px-3 py-2">
                <span className="text-primary-foreground/70">Emergencia:</span>
                <span className="font-semibold text-accent">+123 456 789</span>
              </div>
              <a
                href="#"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Inicio
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Servicios
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Página
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
