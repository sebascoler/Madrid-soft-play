export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Reservas tu fecha",
      description: "Completa el formulario con los detalles de tu evento",
    },
    {
      number: "2",
      title: "Montamos y desinfectamos",
      description: "Llegamos antes de tu evento para dejar todo listo", // <-- CAMBIO
    },
    {
      number: "3",
      title: "Disfrutáis y recogemos",
      description: "Los peques juegan seguros y nosotros recogemos al final",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">Cómo funciona</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}