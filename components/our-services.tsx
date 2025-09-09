import { Card, CardContent } from "@/components/ui/card"
import { Zap, Wrench, Shield, Settings, Activity } from "lucide-react"
import { MiniTitle } from "./ui/mini-title"
import { Title } from "./ui/title"

export function OurServices() {
  const services = [
    {
      icon: Zap,
      title: "Instalación Eléctrica",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Wrench,
      title: "Reparación Eléctrica",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Shield,
      title: "Protección contra Sobretensión",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Settings,
      title: "Actualización de Tablero",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Activity,
      title: "Evaluación de Seguridad Eléctrica",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ]

  return (
    <section className="py-32 bg-secondary">
      {/* Services Grid */}
      <div className="px-4 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <MiniTitle title="nuestros servicios" />
              <Title title="Servicios de Electricista 24/7" color="text-white" />
            </div>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in eleifend augue. Pellentesque dapibus odio
              non fermentum.
            </p>
          </div>
          <p className="text-accent underline text-sm font-medium">Leer más</p>
        </div>
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card key={index} className="bg-transparent border rounded-none transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white">{service.title}</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
