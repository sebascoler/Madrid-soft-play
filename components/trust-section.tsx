import { Sparkles, Baby, ToyBrick } from "lucide-react" // <-- He añadido ToyBrick

export function TrustSection() {
  const features = [
    {
      icon: Sparkles,
      label: "Limpieza garantizada",
    },
    {
      icon: Baby,
      label: "0–3 años",
    },
    {
      icon: ToyBrick, // <-- NUEVO ICONO
      label: "Materiales Seguros",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Montamos tu zona de juego segura para bebés y niños pequeños. Sin motores, sin ruido y con materiales
            certificados. Ideal para cumpleaños, bautizos o bodas.
          </p>

          {/* --- AQUÍ ESTÁ EL CAMBIO --- */}
          {/* He vuelto a usar el .map() y he puesto "grid-cols-3" para que se centren */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm font-medium text-center text-foreground">{feature.label}</p>
              </div>
            ))}
          </div>
          {/* --- FIN DEL CAMBIO --- */}

        </div>
      </div>
    </section>
  )
}