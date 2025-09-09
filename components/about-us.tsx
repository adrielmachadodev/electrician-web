import { Button } from "@/components/ui/button"
import { MoveRight, Sparkles, Zap } from "lucide-react"

export function AboutUs() {

  const points = [
    "Lorem ipsum dolor, sit amet.",
    "Lorem ipsum dolor, sit amet consectetur.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  ]

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 pb-8">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
            We Are Professional Electrical Service
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-xl">
              <img
                src="/professional-electrician-in-hard-hat-and-uniform-s.jpg"
                alt="Professional electrician with laptop at electrical panel"
                className="w-full h-[400px] object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 md:-bottom-2 left-0 md:left-5 flex items-center justify-center gap-2 bg-primary text-white p-3 w-full md:w-44 h-24">
              <Sparkles className="w-12 h-12" />
              <div className="flex flex-col text-center">
                <span className="text-4xl font-semibold">12+</span>
                <span className="font-light">Experiences</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-xl font-bold text-primary uppercase tracking-wide bg-white/80  rounded-lg inline-block">
                GOOD QUALITY SAVES YOU FROM FIRE.
              </p>

              <p>
                Aliquam ex lacus, imperdiet eu efficitur blandit, eleifend a dui. Curabitur auctor interdum rutrum.
                Curabitur tincidunt eu nunc sit amet eleifend. Nunc pellentesque a velit sed rhoncus. Vivamus vestibulum
                faucibus arcu, vitae efficitur nulla dictum ut.
              </p>
            </div>

            <div
              className="flex flex-col gap-4"
            >
              {
                points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <Zap className="text-accent" />
                    <p className="text-black">{ point }</p>
                  </div>
                ))
              }
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="bg-accent border-white rounded-none text-white cursor-pointer hover:border-accent hover:text-accent hover:bg-white w-36"
              >
                Learn More
                <MoveRight />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
