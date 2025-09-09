import { Button } from "@/components/ui/button"
import { ArrowRight, Contact } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center pb-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-electrician-working-with-electrical-p.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-lg md:text-xl font-bold mb-6 text-accent drop-shadow-lg">
              Servicio Eléctrico Profesional
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg text-balance">
              Nuestros Electricistas Tienen
              <br />
              <span className="text-accent">"Amplia" </span>
              Experiencia!
            </h2>
            <p className="mb-8 text-white leading-relaxed max-w-2xl drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget accumsan nisl, euismod dapibus
              tellus. Nam a rutrum nibh, eget luctus nisi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent text-white font-semibold rounded-none">
                Saber Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm rounded-none"
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
