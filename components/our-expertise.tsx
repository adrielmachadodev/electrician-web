export function OurExpertise() {
  const services = [
    {
      title: "Commercial Electrical",
      image: "/commercial-electrical-work-office-building-electri.jpg",
    },
    {
      title: "Industrial Electrical",
      image: "/industrial-electrical-work-factory-electrical-syst.jpg",
    },
    {
      title: "Residential Electrical",
      image: "/residential-electrical-work-home-electrical-system.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-[#003049] uppercase tracking-wider mb-4">Our Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Field On Which We Give Services</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate, dui quis semper consequat,
            tellus augue fringilla orci, non fermentum neque nunc id nibh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <div className="w-12 h-1 bg-[#FFB700] rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
