import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">ZAZPRO</span>
                <span className="font-bold text-lg leading-tight">ELECTRICAL</span>
                <span className="text-xs text-primary-foreground/70">PTY.LTD</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Servicios eléctricos profesionales con años de experiencia. Brindamos soluciones eléctricas confiables,
              seguras y accesibles para necesidades residenciales y comerciales.
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
          <p className="text-primary-foreground/60">© 2024 ZAZPRO ELECTRICAL PTY.LTD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
