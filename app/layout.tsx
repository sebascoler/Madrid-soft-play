import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "600", "700"] })

export const metadata: Metadata = {
  title: "Alquiler de soft play y plaza blanda a domicilio en Madrid | Madrid Soft Play",
  description:
    "Montamos tu zona de juegos para bebés (0–3 años) en casa o eventos. Seguro, limpio y con entrega en toda la Comunidad de Madrid.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
