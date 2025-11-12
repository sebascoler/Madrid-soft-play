import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Madrid Soft Play</h3>
            <p className="text-sm opacity-90 text-pretty leading-relaxed">
              Plaza blanda a domicilio para bebés y niños pequeños en toda la Comunidad de Madrid.
            </p>
          </div>

          
            
          
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>Madrid Soft Play</p>
        </div>
      </div>
    </footer>
  )
}
