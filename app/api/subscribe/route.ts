import { NextResponse } from "next/server"

type SubscribePayload = {
  email: string
  name?: string
  date?: string
  neighborhood?: string
  age?: string
  pack?: string
  message?: string
}

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJhmZMl14KqxO3SViiLotuuLjKsO1NR8nTWnzO84H0m_BQ_hCeq-ADBVyoYhiaaM1MGw/exec"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload

    if (!body?.email) {
      return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
    }

    const payload = {
      email: body.email,
      name: body.name || "",
      date: body.date || "",
      neighborhood: body.neighborhood || "",
      age: body.age || "",
      pack: body.pack || "",
      message: body.message || "",
    }

    const gscriptRes = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    return NextResponse.json({ ok: true })

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido"
    return NextResponse.json({ error: "Error procesando la solicitud", details: errorMessage }, { status: 500 })
  }
}
