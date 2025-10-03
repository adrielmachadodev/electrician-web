import { Button } from "@/components/ui/button"
import { MoveRight, Sparkles, Zap, Clock3, Shield } from "lucide-react"
import { MiniTitle } from "./ui/mini-title"
import { Title } from "./ui/title"

export function AboutUs() {
  const points = [
    {
      text: "Entregas Express en 24-48 horas",
      icon: <Zap className="text-accent" />
    },
    {
      text: "Almacenamiento seguro y flexible",
      icon: <Clock3 className="text-accent" />
    },
    {
      text: "Seguro incluido en todos los envíos",
      icon: <Shield className="text-accent" />
    },
  ]

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 pb-3">
          <MiniTitle title="Acerca de Nosotros" />
          <Title title="Tu Servicio Logístico de Confianza" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-xl">
              <img
                src="/about-us-image.webp"
                alt="Electricista profesional con laptop en panel eléctrico"
                className="w-full h-[400px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 md:-bottom-2 left-0 md:left-5 flex items-center justify-center gap-2 bg-primary text-white p-3 w-full md:w-44 h-24">
              <Sparkles className="w-12 h-12" />
              <div className="flex flex-col text-center">
                <span className="text-4xl font-semibold">12+</span>
                <span className="font-light">Años de Experiencia</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-xl font-bold text-primary uppercase tracking-wide bg-white/80  rounded-lg inline-block">
                LA EFICIENCIA QUE TU NEGOCIO NECESITA
              </p>

              <p>
                Conectamos tu negocio con tus clientes a través de soluciones logísticas integrales. Con más de 15 años de experiencia, ofrecemos servicios de transporte, almacenamiento y distribución con tecnología de punta y un equipo comprometido con la excelencia.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  { point.icon }
                  <p className="text-black">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="bg-accent border-white rounded-none text-white cursor-pointer hover:border-accent hover:text-accent hover:bg-white w-36"
              >
                Saber Más
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
