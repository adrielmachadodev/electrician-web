import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AboutUs } from "@/components/about-us"
import { OurExpertise } from "@/components/our-expertise"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <OurExpertise />
      <Footer />
    </main>
  )
}
