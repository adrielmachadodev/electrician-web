"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { useScrollY } from "@/hooks/useScroolY"
import Image from "next/image"

import Logo from '../public/logo.png'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [ menuTransition, setMenuTransition ] = useState(false)

  const scrollY = useScrollY()

  const open = () => {
    setIsMenuOpen(true)
    setTimeout(() => {
      setMenuTransition(true)
    }, 1)
  }

  const close = () => {
    setMenuTransition( false )
    setTimeout(() => {
      setIsMenuOpen( false )
    }, 400)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if( menuTransition ) {
      body.style.overflowY = "hidden"
    } else {
      body.style.overflowY = "auto"
    }
  }, [ menuTransition ])

  return (
    <nav className={`fixed w-full top-0 z-50 duration-500 ${ scrollY > 70 ? "bg-primary/100" : "bg-primary/0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center duration-500 ${scrollY > 70 ? "h-24" : "h-32"}`}>
          {/* Logo */}
          <Image 
            src={Logo}
            alt="Logo"
            className={`duration-500 w-auto ${scrollY > 70 ? "h-18" : "h-20"}`}
          />

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-primary-foreground hover:text-accent transition-colors">
              Nosotros
            </a>
            <a href="#servicios" className="text-primary-foreground hover:text-accent transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-primary-foreground hover:text-accent transition-colors">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
              <Menu className="h-8 w-8 text-white" onClick={open} />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            <div
              className={`fixed left-0 top-0 w-screen h-screen bg-black duration-300 ${menuTransition ? "opacity-50" : "opacity-0"}`}
              onClick={close}
            />
            <div className={`fixed top-0 h-screen w-[250px] bg-primary duration-300 ${ menuTransition ? 'left-0' : '-left-[250px]'}`}>
              <div className="px-5 py-12 pb-3 space-y-1 flex flex-col gap-6">
                <a onClick={close} href="#inicio">
                  <Image 
                    src={Logo}
                    alt="Logo"
                    className={`mx-auto duration-500 w-auto h-20 mb-10`}
                  />
                </a>
                <a onClick={close} href="#" className="text-primary-foreground hover:text-accent transition-colors">
                  Inicio
                </a>
                <a onClick={close} href="#nosotros" className="text-primary-foreground hover:text-accent transition-colors">
                  Nosotros
                </a>
                <a onClick={close} href="#servicios" className="text-primary-foreground hover:text-accent transition-colors">
                  Servicios
                </a>
                <a onClick={close} href="#contacto" className="text-primary-foreground hover:text-accent transition-colors">
                  Contacto
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
