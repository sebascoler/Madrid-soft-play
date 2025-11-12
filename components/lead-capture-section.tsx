"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [age, setAge] = useState<string>("")
  const [pack, setPack] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const name = (form.querySelector("#name") as HTMLInputElement)?.value
    const email = (form.querySelector("#email") as HTMLInputElement)?.value
    const date = (form.querySelector("#date") as HTMLInputElement)?.value
    const neighborhood = (form.querySelector("#neighborhood") as HTMLInputElement)?.value
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, neighborhood, age, pack, message }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "No se pudo enviar el formulario")
      }

      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      form.reset()
      setAge("")
      setPack("")
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-muted/30 to-secondary/20">
      <div className="container px-4 mx-auto">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-balance">
              ¿Quieres reservar o saber más?
            </CardTitle>
            <CardDescription className="text-base">
              Déjanos tus datos y te contactaremos con prioridad en el lanzamiento
            </CardDescription>
          </CardHeader>

          <CardContent>
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">¡Gracias!</h3>
                <p className="text-muted-foreground">Te contactaremos con prioridad en el lanzamiento.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="María García" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="maria@ejemplo.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha del evento</Label>
                    <Input id="date" type="date" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Barrio</Label>
                    <Input id="neighborhood" placeholder="Chamberí" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Edad del peque</Label>
                    <Select required value={age} onValueChange={setAge}>
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 año</SelectItem>
                        <SelectItem value="1-2">1-2 años</SelectItem>
                        <SelectItem value="2-3">2-3 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Pack</Label>
                    <Select required value={pack} onValueChange={setPack}>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="250">250€ - Rincón de Sueños</SelectItem>
                        <SelectItem value="320">320€ - Aventura Inicial</SelectItem>
                        <SelectItem value="400">400€ - Plus Adventure</SelectItem>
                        <SelectItem value="custom">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">¿Quieres contarnos algo más? (opcional)</Label>
                  <Textarea id="message" placeholder="Cuéntanos detalles del evento, horarios, dudas, etc." rows={4} />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                >
                  {loading ? "Enviando..." : "Solicitar Información"}
                </Button>

                {error && (
                  <p className="text-sm text-center text-red-600">{error}</p>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  Al enviar este formulario, aceptas nuestra política de privacidad
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
