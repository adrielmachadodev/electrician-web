import { MiniTitle } from "./ui/mini-title"
import { Title } from "./ui/title"

export function OurExpertise() {
  const services = [
    {
      title: "Eléctrico Comercial",
      image: "/commercial-electrical-work-office-building-electri.jpg",
    },
    {
      title: "Eléctrico Industrial",
      image: "/industrial-electrical-work-factory-electrical-syst.jpg",
    },
    {
      title: "Eléctrico Residencial",
      image: "/residential-electrical-work-home-electrical-system.jpg",
    },
  ]

  return (
    <section className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-6">
          <MiniTitle title="Nuestra Experiencia" />
          <Title title="Los Campos en los que Brindamos Servicios" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate, dui quis semper consequat,
            tellus augue fringilla orci, non fermentum neque nunc id nibh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 min-h-96 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full group cursor-pointer">
              <div className="relative overflow-hidden shadow-lg transition-transform duration-300">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2 drop-shadow-2xl">{service.title}</h4>
                  <div className="w-12 h-1 bg-accent rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
