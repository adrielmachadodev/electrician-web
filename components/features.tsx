import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, DollarSign, Award } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: DollarSign,
    title: "Precio Accesible",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Award,
    title: "Electricista Licenciado",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export function Features() {
  return (
    <section className="-mt-16 sm:-mt-24 relative z-20">
      <div className="max-w-[300px] sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className={`
                  text-center hover:shadow-lg transition-shadow duration-300 
                  bg-primary border-0 rounded-none
                `}
              >
                <CardContent className={`md:my-6 ${index !== features.length - 1 ? "md:border-r border-white/50" : ""}`}>
                  <div>
                    <div className="bg-card/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mb-4">
                      <IconComponent className="h-8 w-8 text-card" />
                    </div>
                    <h3 className="text-xl font-bold text-card mb-3">{feature.title}</h3>
                    <p className="text-card leading-relaxed font-light">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
