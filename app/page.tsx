import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { OurExpertise } from "@/components/our-expertise"
import { OurServices } from "@/components/our-services"
import { ContactUs } from "@/components/contact-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="nosotros">
        <AboutUs />
      </div>
      <div>
        <OurExpertise />
      </div>
      <div id="servicios">
        <OurServices />
      </div>
      <div id="contacto">
        <ContactUs />
      </div>
      <Footer />
    </main>
  )
}
