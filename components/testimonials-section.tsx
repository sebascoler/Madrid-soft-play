import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María G.",
      location: "Chamberí",
      text: "Mi hija de 2 años lo pasó genial en su cumpleaños. Todo estaba impecable y el montaje fue rapidísimo.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      location: "Salamanca",
      text: "Perfecto para el bautizo de nuestro bebé. Los invitados con niños pequeños estaban encantados.",
      rating: 5,
    },
    {
      name: "Laura M.",
      location: "Retiro",
      text: "La estética boho quedó preciosa en las fotos. Muy profesionales y atentos en todo momento.",
      rating: 5,
    },
  ]

  return (
    <section id="comentarios" className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">Lo que dicen las familias</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-pretty">"{testimonial.text}"</p>
                <div className="pt-2">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
