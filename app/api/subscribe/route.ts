import { NextResponse } from "next/server"

type SubscribePayload = {
  email: string
  name?: string
  date?: string
  neighborhood?: string
  age?: string
  pack?: string // <-- Ya actualizado de 'budget' a 'pack'
  message?: string
}

// --- Tu función POST principal ---
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload

    const apiKey = process.env.BREVO_API_KEY
    const listIdRaw = process.env.BREVO_LIST_ID

    // Validación de variables de entorno y body
    if (!apiKey) return NextResponse.json({ error: "Falta BREVO_API_KEY" }, { status: 500 })
    if (!listIdRaw) return NextResponse.json({ error: "Falta BREVO_LIST_ID" }, { status: 500 })
    if (!body?.email) return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
    
    // --- Lógica de Contacto (como antes) ---
    const listId = Number(listIdRaw)
    let firstName = ""
    let lastName = ""
    if (body.name) {
      const nameParts = body.name.split(" ")
      firstName = nameParts[0] || ""
      lastName = nameParts.slice(1).join(" ") || ""
    }

    const attributes: Record<string, string | undefined> = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      EVENT_DATE: body.date,
      NEIGHBORHOOD: body.neighborhood,
      CHILD_AGE: body.age,
      PACK: body.pack, // <-- Usando PACK
      MESSAGE: body.message,
    }

    const cleanedAttributes = Object.fromEntries(
      Object.entries(attributes).filter(([, v]) => v !== undefined && v !== "")
    )

    // --- Llamada a Brevo (Contactos) ---
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": apiKey, "accept": "application/json", "content-type": "application/json" },
      body: JSON.stringify({
        email: body.email,
        attributes: cleanedAttributes,
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    // --- ¡AQUÍ ESTÁ LA CORRECCIÓN QUE NECESITAS! ---

    // 1. Si Brevo da un error (4xx, 5xx), lo manejamos
    if (!brevoRes.ok) {
      const errText = await brevoRes.text()
      try {
        const errJson = JSON.parse(errText)
        return NextResponse.json({ error: "Brevo error", details: errJson?.message || errText }, { status: 502 })
      } catch (e) {
        return NextResponse.json({ error: "Brevo error", details: errText }, { status: 502 })
      }
    }

    // 2. Si la respuesta es 204 (Actualización exitosa), NO tiene JSON.
    // ¡Esta es la línea que arregla tu problema!
    if (brevoRes.status === 204) {
      return NextResponse.json({ ok: true, message: "Contacto actualizado" })
    }

    // 3. Si llega aquí, es un 201 (Creación exitosa) y SÍ tiene JSON.
    const result = await brevoRes.json()
    return NextResponse.json({ ok: true, result })

    // --- Fin de la corrección ---

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido"
    return NextResponse.json({ error: "Error procesando la solicitud", details: errorMessage }, { status: 500 })
  }
}