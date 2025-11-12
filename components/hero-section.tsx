"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-muted pt-20 md:pt-24">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/soft-play-boho-neutral-beige-setup-with-baby-toys.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-foreground">
            Soft Play a domicilio en Madrid
            <span className="block text-3xl md:text-5xl mt-4 text-muted-foreground font-normal">(0–3 años)</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un rincón de juego bonito y seguro para tu evento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={scrollToForm}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Solicitar Información
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent"
              onClick={scrollToPricing}
            >
              <ChevronDown className="mr-2 h-5 w-5" />
              Saber más
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
