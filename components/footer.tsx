import { Zap } from "lucide-react"
import Logo from '../public/logo.png'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col">
                <Image 
                  src={Logo}
                  alt="Logo"
                  className={`duration-500 w-auto h-18`}
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Servicios de logística 24/7 con cobertura nacional. Envíos seguros, rápidos y confiables para tu negocio y hogar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p className="font-semibold text-accent">Emergencia: +123 456 789</p>
              <p>Oficina: 1312-600009</p>
              <p>info@zazproelectrical.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 AIRESPAQ Encomiendas y Logística. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
