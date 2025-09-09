import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { MiniTitle } from "./ui/mini-title"
import { Title } from "./ui/title"

export function ContactUs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <MiniTitle title="contáctanos" />
          <Title title="Hablemos" />
          <p className="text-gray-600 max-w-lg">
            Aliquam ex lacus, imperdiet eu efficitur blandit, eleifend a dui. Curabitur auctor interdum rutrum.
            Curabitur tincidunt eu nunc sit amet eleifend.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Teléfono</h4>
                  <p className="text-gray-600">+123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-gray-600">awesome@site.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                  <p className="text-gray-600">Roving Street, Big City, Pku</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <Input type="text" placeholder="Tu Nombre" className="h-12 border-gray-300 focus:border-primary" />
              </div>
              <div>
                <Input type="email" placeholder="Tu Email" className="h-12 border-gray-300 focus:border-primary" />
              </div>
              <div>
                <Input type="tel" placeholder="Tu Teléfono" className="h-12 border-gray-300 focus:border-primary" />
              </div>
              <div>
                <Textarea
                  placeholder="Tu Mensaje"
                  rows={6}
                  className="border-gray-300 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold rounded-none"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
