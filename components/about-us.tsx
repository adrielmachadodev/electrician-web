import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-[#003049] uppercase tracking-wider">About Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                We Are Professional Electrical Service
              </h3>
              <div className="text-xl font-bold text-[#CC8500] uppercase tracking-wide bg-white/80 px-4 py-2 rounded-lg inline-block">
                GOOD QUALITY SAVES YOU FROM FIRE.
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Aliquam ex lacus, imperdiet eu efficitur blandit, eleifend a dui. Curabitur auctor interdum rutrum.
                Curabitur tincidunt eu nunc sit amet eleifend. Nunc pellentesque a velit sed rhoncus. Vivamus vestibulum
                faucibus arcu, vitae efficitur nulla dictum ut.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia odio at enim dictum faucibus.
                Integer faucibus mauris. Nulla facilisi. Donec elementum mauris orci, id ullamcorper sem rutrum.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Badge
                variant="secondary"
                className="bg-[#003049] text-white hover:bg-[#003049]/90 px-6 py-3 text-lg font-bold"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFB700] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span>12+ Experiences</span>
                </div>
              </Badge>

              <Button
                variant="outline"
                className="border-[#003049] text-[#003049] hover:bg-[#003049] hover:text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/professional-electrician-in-hard-hat-and-uniform-s.jpg"
                alt="Professional electrician with laptop at electrical panel"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
