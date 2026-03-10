"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "@/components/motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/XyonaX", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jonatan-ezequiel-vargas-portillo/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jonatan.vargasportillo@gmail.com", label: "Email" }
]

const navLinks = [
  { href: "#about", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              <span className="text-primary">J</span>VP
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desarrollador Fullstack creando experiencias web modernas y escalables.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Redes</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jonatan Vargas Portillo. Todos los derechos reservados.
          </p>
          
          <motion.div whileHover={{ y: -2 }}>
            <Link
              href="#about"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>Volver arriba</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
