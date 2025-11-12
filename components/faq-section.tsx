import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Para qué edades está recomendado el alquiler de soft play?",
      answer:
        "Nuestros parques de soft play están diseñados específicamente para la etapa más temprana: bebés y niños pequeños de 6 meses a 4 años. Es la opción ideal y más segura para primeros cumpleaños, bautizos o cualquier evento donde los más pequeños necesiten un espacio propio.",
    },
    {
      question:
        "Como padre, la higiene es mi prioridad. ¿Cómo garantizan la limpieza del equipo?",
      answer:
        "La higiene es nuestra obsesión y nuestra máxima prioridad. Seguimos un protocolo de desinfección de 3 pasos después de CADA alquiler:\n\n• Aspiración profunda de todos los módulos, colchonetas y piscinas.\n• Desinfección de superficies con un producto profesional que elimina el 99.9% de gérmenes y virus, siendo totalmente seguro para bebés.\n• Higienización de cada bola en nuestra máquina de limpieza especializada.\n\nCon Madrid Soft Play, alquilas tranquilidad total.",
    },
    {
      question: "¿En qué se diferencia el soft play de un castillo hinchable?",
      answer:
        "La gran diferencia es la seguridad y la edad. Los castillos hinchables están pensados para niños más mayores (de 2 a 6 años o más). Nuestro soft play está diseñado para el nicho que los hinchables no pueden cubrir: bebés de 0 a 3 años. Es un entorno controlado, a su escala, con espuma de alta densidad y 100% seguro para que puedan gatear, explorar y dar sus primeros pasos sin riesgo.",
    },
    {
      question:
        "Vivo en un piso en Madrid, ¿necesito mucho espacio para el soft play?",
      answer:
        "¡Para nada! Nuestros paquetes son modulares y muy versátiles. Funcionan perfectamente en pisos, salones o jardines pequeños. Como referencia, nuestro paquete estándar más popular suele requerir unos 3x3 metros, pero siempre podemos reconfigurar los módulos para adaptarnos perfectamente a tu espacio disponible.",
    },
    {
      question:
        "¿Qué incluye exactamente el precio del alquiler? ¿Tengo que montarlo yo?",
      answer:
        "El precio del alquiler incluye nuestro servicio completo de montaje y desmontaje. Nosotros nos encargamos de la instalación profesional para tu tranquilidad:\n\n• Montaje profesional antes de que lleguen los invitados.\n• Desmontaje completo y rápido al finalizar el evento.\n• El transporte NO está incluido y se cotiza por separado según la zona de entrega en Madrid.\n\nTú no tienes que preocuparte por el montaje, solo de disfrutar la fiesta.",
    },
    {
      question:
        "¿El soft play es solo diversión o aporta algo al desarrollo de mi bebé?",
      answer:
        "¡Es mucho más que diversión! Es una potente herramienta de estimulación temprana. Los diferentes módulos, texturas y la piscina de bolas están diseñados para fomentar:\n\n• Desarrollo motor grueso: Gatear, escalar, mejorar el equilibrio.\n• Desarrollo motor fino: Agarrar y soltar las bolas.\n• Desarrollo sensorial: Explorar colores y texturas.\n• Desarrollo cognitivo: Aprender la \"permanencia del objeto\" en la piscina de bolas.\n\nNo solo alquilas un juego, inviertes en el desarrollo de tu hijo.",
    },
    {
      question:
        "¿De qué materiales está hecho el equipo? ¿Son seguros si mi bebé lo muerde?",
      answer:
        "Entendemos perfectamente esa preocupación. Todo nuestro equipo es de calidad profesional, fabricado con espuma de alta densidad y recubierto de vinipiel lavable. Es el mismo material que se usa en guarderías y centros de estimulación. Es suave, resistente, no tóxico y completamente seguro para bebés que están en la etapa de explorarlo todo con la boca.",
    },
    {
      question:
        "¿Dónde puedo instalar el parque de soft play? ¿Solo en interiores?",
      answer:
        "¡Donde tú celebres el evento! Montamos nuestros parques en casas particulares, pisos, jardines, parques (con los permisos correspondientes), restaurantes, hoteles o cualquier local de eventos en la Comunidad de Madrid. Nos adaptamos a superficies interiores y exteriores.",
    },
    {
      question:
        "¿Cuánto tardan en montar y desmontar el equipo el día de la fiesta?",
      answer:
        "Somos muy eficientes para interrumpir lo mínimo posible. Generalmente, llegamos 1 hora antes del evento y el montaje nos toma unos 30-45 minutos. El desmontaje es igual de rápido.",
    },
    {
      question:
        "¿Con cuánta antelación debo reservar mi soft play para un cumpleaños?",
      answer:
        "Los primeros cumpleaños y los fines de semana son nuestras fechas más solicitadas. Para asegurar la disponibilidad de tu paquete preferido, te recomendamos reservar con al menos 4 a 6 semanas de antelación, especialmente si tu evento es en temporada alta (primavera-verano).",
    },
  ]

  return (
    // CAMBIO: Fondo más suave (bg-muted)
    <section id="faq" className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        {/* CAMBIO: Contenedor más estrecho para mejor legibilidad (max-w-3xl) */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Aquí respondemos a todas las dudas de los padres que quieren crear
              una fiesta inolvidable y segura para sus bebés.
            </p>
          </div>

          {/* CAMBIO: 
            - Agregué bg-card, border, rounded-xl, shadow-sm y overflow-hidden aquí.
            - Esto crea UNA sola tarjeta para TODAS las preguntas.
            - Quité space-y-2 para que las líneas de borde se toquen.
          */}
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card border border-border rounded-xl shadow-sm overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                // CAMBIO: Quité todos los estilos de aquí (bg-card, border, rounded-lg)
                // y agregué padding horizontal (px-6)
                className="px-6"
              >
                <AccordionTrigger
                  // CAMBIO:
                  // - Texto más grande (text-lg)
                  // - Color accent en hover (hover:text-accent)
                  className="text-left text-lg font-semibold text-foreground hover:text-accent hover:no-underline"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {/* whitespace-pre-line respeta los \n del texto, ¡bien hecho! */}
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
