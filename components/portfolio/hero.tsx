"use client"

import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn, motion } from "@/components/motion"

const socialLinks = [
  {
    href: "https://github.com/XyonaX",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/jonatan-ezequiel-vargas-portillo/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "mailto:jonatan.vargasportillo@gmail.com",
    icon: Mail,
    label: "Email"
  }
]

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Main info */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponible para nuevos proyectos
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                Jonatan
                <span className="block text-primary">Vargas Portillo</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Desarrollador <span className="text-foreground font-medium">Fullstack</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
                Creo aplicaciones web modernas y escalables con enfoque en
                <span className="text-foreground"> experiencia de usuario</span> y
                <span className="text-foreground"> código limpio</span>.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Corrientes, Argentina</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <Link href="#contact">
                    Contactar
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#projects">
                    Ver proyectos
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 border border-border hover:border-primary"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column - About */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                  Sobre mí
                </h2>
                <div className="space-y-4 text-foreground/85 leading-relaxed">
                  <p>
                    Desarrollador Web Fullstack altamente motivado y estudiante de{" "}
                    <span className="font-semibold text-foreground">
                      Licenciatura en Sistemas de la Información
                    </span>{" "}
                    en la Universidad Nacional del Nordeste.
                  </p>
                  <p>
                    Experiencia en la creación de aplicaciones web y e-commerce, siendo hábil en{" "}
                    <span className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">React</span>,{" "}
                    <span className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">Angular</span>,{" "}
                    <span className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">.NET</span> y{" "}
                    <span className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">Node.js</span>.
                  </p>
                  <p>
                    Actualmente desarrollo soluciones de software que integran{" "}
                    <span className="font-semibold text-foreground">Inteligencia Artificial</span>,
                    para automatizar procesos, optimizar flujos de trabajo y crear aplicaciones inteligentes.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground mt-1">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground mt-1">Años exp.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground mt-1">Tecnologías</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
