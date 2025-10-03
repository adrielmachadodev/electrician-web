import { Button } from "@/components/ui/button"
import { ArrowRight, Contact } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[700px] xl:h-[800px] flex items-center pb-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-img.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="pt-32 sm:pt-24 xl:pt-12">
          <div className="text-white max-w-[600px]">
            <h1 className="text-sm sm:text-base md:text-xl font-bold mb-4 lg:mb-6 text-accent drop-shadow-lg">
              Servicios de logística en todo el país
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 drop-shadow-lg text-balance">
              Conectamos
              <span className="text-accent"> destinos, </span>
              acercamos soluciones
            </h2>
            <p className="text-sm sm:text-base mb-8 text-white leading-relaxed max-w-2xl drop-shadow-md">
              Servicios de logística 24/7 con cobertura nacional. Envíos seguros, rápidos y confiables para tu negocio y hogar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent text-white font-semibold rounded-none w-fit">
                Saber Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm rounded-none w-fit"
              >
                <Contact className="mr-2 h-5 w-5" />
                ¡Contáctanos ahora!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
