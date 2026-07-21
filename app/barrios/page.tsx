import type { Metadata } from "next"
import Link from "next/link"

const neighborhoods = [
  { name: "Chamberí", desc: "Soft play para cumpleaños en pisos de Chamberí. Ideal para espacios compactos.", icon: "🏛️" },
  { name: "Salamanca", desc: "El barrio de Salamanca confía en nosotros para celebraciones familiares.", icon: "🌳", popular: true },
  { name: "Retiro", desc: "Perfecto para combinar con planes en El Retiro. Montaje rápido en tu domicilio.", icon: "🏞️" },
  { name: "Centro", desc: "Soft play en pisos del centro de Madrid. Adaptamos los módulos a cualquier espacio.", icon: "🏙️" },
  { name: "Chamartín", desc: "Cobertura completa en el distrito de Chamartín.", icon: "🌆" },
  { name: "Moncloa", desc: "Soft play a domicilio en Moncloa-Aravaca. Ideal para casas con jardín.", icon: "🌿" },
  { name: "Hortaleza", desc: "Cobertura en todo Hortaleza. Pregunta disponibilidad para tu fecha.", icon: "🏡" },
  { name: "Fuencarral", desc: "Llegamos a las urbanizaciones del norte de Madrid sin problema.", icon: "🏘️" },
  { name: "Arganzuela", desc: "Cobertura en Arganzuela y Madrid Río. Perfecto para eventos al aire libre.", icon: "🌊" },
  { name: "Tetuán", desc: "Soft play a domicilio en Tetuán y zonas cercanas.", icon: "🏠" },
  { name: "Usera", desc: "Cobertura completa en Usera y Villaverde.", icon: "🏘️" },
  { name: "Latina", desc: "Llegamos a Latina y Carabanchel. Pregunta por tu zona.", icon: "🌳" },
]

export const metadata: Metadata = {
  title: "Soft Play en Madrid por Barrios | Alquiler de Plaza Blanda a Domicilio",
  description:
    "Buscas alquiler de soft play en Madrid? Llevamos el parque de juegos a tu casa en Chamberí, Salamanca, Retiro y más. Montaje, desinfección y seguro incluidos.",
  openGraph: {
    title: "Soft Play en Madrid por Barrios | Madrid Soft Play",
    description: "Alquiler de soft play a domicilio en Madrid. Disfruta de un parque seguro para tu bebé sin salir de casa.",
  },
}

export default function BarriosPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFA]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDFA]/95 backdrop-blur-sm border-b border-[#E4DDD0]">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-[#D28C50] font-bold text-xl">
            Madrid Soft Play
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[#3C3732] hover:text-[#D28C50]">Inicio</Link>
            <Link href="/#pricing" className="text-[#3C3732] hover:text-[#D28C50]">Paquetes</Link>
            <Link href="/#faq" className="text-[#3C3732] hover:text-[#D28C50]">FAQ</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F5F0EB] to-[#FFFDFA]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3C3732] mb-6">
            Soft Play en Madrid:{" "}
            <span className="text-[#D28C50]">Tu Parque Infantil a Domicilio</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B4AFA7] mb-8 max-w-3xl mx-auto">
            Llevamos el soft play a tu casa en cualquier barrio de Madrid.{" "}
            Montamos, desinfectamos y recogemos. Tú solo disfrutas.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#D28C50] text-white text-lg px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-sm font-semibold"
          >
            Solicitar Información
          </Link>
        </div>
      </section>

      {/* Barrios Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3732] mb-4">
            Zonas de Cobertura en Madrid
          </h2>
          <p className="text-lg text-[#B4AFA7] text-center mb-12 max-w-2xl mx-auto">
            Operamos en toda la Comunidad de Madrid. Estas son las zonas con más demanda:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <div
                key={n.name}
                className={`bg-white rounded-2xl p-6 shadow-sm border ${
                  n.popular
                    ? "border-[#D28C50] border-t-[3px]"
                    : "border-[#E4DDD0]"
                }`}
              >
                <div className="text-3xl mb-3">{n.icon}</div>
                <h3 className="text-xl font-bold text-[#3C3732] mb-2">
                  {n.name}
                  {n.popular && (
                    <span className="ml-2 text-xs bg-[#D28C50] text-white px-2 py-0.5 rounded uppercase tracking-wider">
                      Más popular
                    </span>
                  )}
                </h3>
                <p className="text-[#B4AFA7] text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Local */}
      <section className="py-20 bg-[#F5F0EB]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3732] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-[#B4AFA7] text-center mb-12">
            Todo lo que necesitas saber sobre el alquiler de soft play en Madrid
          </p>

          <div className="space-y-4">
            {[
              {
                q: "En qué barrios de Madrid operáis?",
                a: "Cubrimos Chamberí, Salamanca, Retiro, Centro, Chamartín, Moncloa, Hortaleza, Fuencarral y muchos más. Si tienes duda sobre tu zona, consúltanos.",
              },
              {
                q: "Cuánto espacio necesito en mi piso de Madrid?",
                a: "Nuestro pack más popular (Aventura Inicial) necesita unos 3x3 metros. Pero adaptamos los módulos a tu espacio. Funciona en pisos, salones y terrazas.",
              },
              {
                q: "Llegáis a las afueras de Madrid?",
                a: "Sí, operamos en toda la Comunidad de Madrid. Pozuelo, Majadahonda, Las Rozas, Alcobendas, San Sebastián de los Reyes... consulta disponibilidad.",
              },
              {
                q: "Cuánto cuesta el alquiler de soft play en Madrid?",
                a: "Consulta precios en nuestra página principal. Todos los packs incluyen montaje, desinfección y seguro.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-[#3C3732] mb-2">{faq.q}</h3>
                <p className="text-[#B4AFA7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C3732] mb-4">
            Quieres Soft Play en tu Barrio?
          </h2>
          <p className="text-lg text-[#B4AFA7] mb-8">
            Déjanos tus datos y te confirmamos disponibilidad para tu fecha y zona
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#D28C50] text-white text-lg px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-sm font-semibold"
          >
            Solicitar Información
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#3C3732] text-center">
        <p className="text-[#B4AFA7]">&copy; 2025 Madrid Soft Play. Todos los derechos reservados.</p>
        <p className="text-[#B4AFA7] text-sm mt-2">
          <Link href="/" className="text-[#D28C50] hover:underline">
            Inicio
          </Link>{" "}
          ·{" "}
          <Link href="/barrios" className="text-[#D28C50] hover:underline">
            Barrios
          </Link>
        </p>
      </footer>
    </main>
  )
}
