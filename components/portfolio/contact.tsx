"use client"

import { Button } from "@/components/ui/button"
import { FadeIn, motion } from "@/components/motion"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "jonatan.vargasportillo@gmail.com",
    href: "mailto:jonatan.vargasportillo@gmail.com",
    color: "group-hover:text-blue-500"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Corrientes, Argentina",
    href: null,
    color: "group-hover:text-orange-500"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/XyonaX",
    username: "@XyonaX"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonatan-ezequiel-vargas-portillo/",
    username: "jonatan-ezequiel-vargas-portillo"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Send className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Contacto
                  </h2>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  ¿Listo para trabajar juntos?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estoy abierto a nuevas oportunidades y colaboraciones. 
                  Si tienes un proyecto en mente o simplemente quieres saludar, 
                  no dudes en contactarme.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" className="group h-14 px-8 text-base">
                    <Link href="mailto:jonatan.vargasportillo@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Enviar email
                      <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                    <Link href="https://www.linkedin.com/in/jonatan-ezequiel-vargas-portillo/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">También me puedes encontrar en:</p>
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
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 border border-border hover:border-primary"
                      >
                        <social.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Right - Contact Info Card */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-xl">
                <h4 className="font-semibold text-foreground mb-6 text-lg">Información de contacto</h4>
                
                <div className="space-y-6">
                  {contactMethods.map((method) => (
                    <motion.div
                      key={method.label}
                      whileHover={{ x: 4 }}
                      className="group"
                    >
                      {method.href ? (
                        <Link
                          href={method.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors -mx-4"
                        >
                          <div className={`p-3 rounded-xl bg-secondary ${method.color} transition-colors`}>
                            <method.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{method.label}</p>
                            <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {method.value}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-start gap-4 p-4 -mx-4">
                          <div className={`p-3 rounded-xl bg-secondary ${method.color} transition-colors`}>
                            <method.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{method.label}</p>
                            <p className="font-medium text-foreground">{method.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Availability indicator */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Disponible para nuevos proyectos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
