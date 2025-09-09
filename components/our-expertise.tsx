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
    <section className="py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Expertise</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Field On Which We Give Services</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate, dui quis semper consequat,
            tellus augue fringilla orci, non fermentum neque nunc id nibh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 min-h-96 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full group cursor-pointer">
              <div className="relative overflow-hidden shadow-lg transition-transform duration-300 h-80 bg-white rounded-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-3/4 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-white p-6 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-[#003049] mb-2">{service.title}</h4>
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
