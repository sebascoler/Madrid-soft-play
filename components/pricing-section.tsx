"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  // --- DATOS DE PACKS ACTUALIZADOS ---
  const packs = [
    {
      name: "Rincón de Sueños",
      price: "250",
      features: [
        "Piscina de bolas",
        "Pelotas de colores",
        "Suelo acolchado de seguridad",
        // "Montaje y desinfección" <-- ELIMINADO
      ],
      image: "/rincondeSueños.png",
    },
    {
      name: "Aventura Inicial",
      price: "320",
      features: [
        "Todo lo del Rincón de Sueños",
        "Set de bloques de espuma",
        "Estructura 'Step and Slide' (rampa/escalera)",
        // "Balancín suave (curvo)" <-- ELIMINADO (pasa al Pack 3)
      ],
      popular: true,
      image: "/aventuraInicial.png", // ACTUALIZAR IMAGEN
    },
    {
      name: "Plus Adventure",
      price: "400",
      features: [
        "Todo lo del Aventura Inicial",
        "Túnel de gateo flexible",
        "Balancín suave (curvo)", // <-- AÑADIDO (y clarificado)
      ],
      image: "/plusAdventure.png", // ACTUALIZAR IMAGEN
    },
  ]
  // --- FIN DE DATOS ACTUALIZADOS ---

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* ... (el resto del archivo no cambia) ... */}
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
            Elige tu Aventura Soft Play
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Desde un rincón de sueños hasta un parque completo. Nuestros packs son
            acumulativos. Todos incluyen montaje, desinfección y seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packs.map((pack, index) => (
            <Card
              key={index}
              className={`relative ${
                pack.popular ? "border-accent border-2 shadow-lg" : ""
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </div>
              )}

              <CardHeader className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={pack.image || "/placeholder.svg"}
                    alt={pack.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl">{pack.name}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">precio sin costo de envío</p>
                  <p className="text-4xl font-bold text-foreground">
                    {pack.price}€
                  </p>
                </div>

                <ul className="space-y-3">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={scrollToForm}
                >
                  Guardar fecha
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}