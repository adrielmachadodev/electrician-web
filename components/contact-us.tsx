import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">Contact Us</h2>
          <h3 className="text-2xl font-semibold text-[#F77F00] mb-6">Let's Talk</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aliquam ex lacus, imperdiet eu efficitur blandit, eleifend a dui. Curabitur auctor interdum rutrum.
            Curabitur tincidunt eu nunc sit amet eleifend.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#003049]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#003049]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003049] mb-1">Phone</h4>
                  <p className="text-gray-600">+123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#003049]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#003049]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003049] mb-1">Email</h4>
                  <p className="text-gray-600">awesome@site.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#003049]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#003049]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#003049] mb-1">Address</h4>
                  <p className="text-gray-600">Roving Street, Big City, Pku</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" className="h-12 border-gray-300 focus:border-[#003049]" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="h-12 border-gray-300 focus:border-[#003049]" />
              </div>
              <div>
                <Input type="tel" placeholder="Your Phone" className="h-12 border-gray-300 focus:border-[#003049]" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="border-gray-300 focus:border-[#003049] resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-[#F77F00] hover:bg-[#F77F00]/90 text-white font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
