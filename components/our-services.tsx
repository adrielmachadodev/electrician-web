import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Wrench, Shield, Settings, Activity } from "lucide-react"

export function OurServices() {
  const services = [
    {
      icon: Zap,
      title: "Electric Installation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Wrench,
      title: "Electrical Repair",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Shield,
      title: "Surge Protection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Settings,
      title: "Switchboard Upgrade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: Activity,
      title: "Electrical Safety Assessment",
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
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Services</h2>
              <h3 className="text-4xl font-bold">24/7 Electrician Services</h3>
            </div>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in eleifend augue. Pellentesque dapibus odio
              non fermentum.
            </p>
            <p className="text-accent underline text-sm font-medium">Read more</p>
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
