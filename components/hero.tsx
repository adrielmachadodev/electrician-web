import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pb-16">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance drop-shadow-lg">
              Professional Electrical Service
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-accent drop-shadow-lg">
              Our Electricians Have
              <br />
              "Amp-Le" Experience!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white leading-relaxed max-w-lg drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget accumsan nisl, euismod dapibus
              tellus. Nam a rutrum nibh, eget luctus nisi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call us now!
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-accent drop-shadow-lg">+123 456 789</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold drop-shadow-md">1312-600009</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
