import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Wrench, Shield, Settings, CheckCircle } from "lucide-react"

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
      icon: CheckCircle,
      title: "Electrical Safety Assessment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">Our Services</h2>
          <h3 className="text-2xl font-semibold text-[#003049] mb-6">24/7 Electrician Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in eleifend augue. Pellentesque dapibus odio
            non fermentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#003049] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#FFB700]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#003049] mb-4">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#FFB700] hover:bg-[#E6A500] text-[#003049] font-semibold px-8 py-3 text-lg">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
