"use client"

import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerChildren, StaggerItem, motion } from "@/components/motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Desarrollador Frontend",
    company: "Cybersinn Solutions",
    location: "Remoto",
    period: "06/2026 – 10/2026",
    description: "Participo como desarrollador frontend en el equipo del proyecto Rent Car, una PWA mobile-first para publicación y alquiler de vehículos particulares y utilitarios, con foco en trazabilidad documental y prevención de riesgos legales entre locador y locatario.",
    achievements: [
     `  - Desarrollo de interfaces en React siguiendo arquitectura mobile-first y buenas prácticas de PWA (manifest, service worker, experiencia offline básica).` ,
       `  - Implementación de flujos de autenticación y control de acceso por roles (locador/locatario), siguiendo lineamientos OWASP (manejo seguro de sesión, prevención de XSS, protección de datos sensibles).` ,
        ` - Desarrollo de formularios de publicación de vehículos con carga y validación de hasta 6 fotos reglamentarias, y carga de documentación obligatoria (cédula, seguro, VTV, entre otros).` ,
       `  - Implementación de funcionalidades de listado/filtrado de publicaciones, solicitud de alquiler ("Me interesa") y panel de notificaciones para aprobación/rechazo entre las partes.` ,
       `  - Trabajo colaborativo mediante metodología Kanban + Scrum minificado, gestión de tareas en backlog de GitHub y registro de horas con Cybersinn Timesheets.`,
    ]
    technologies: ["React", "NEXTJS", "Tailwindcss", "Zustand"],
    current: false
  },
  {
    title: "Tutor Particular",
    company: "Algoritmos y Estructuras de Datos",
    location: "Corrientes, Argentina",
    period: "05/2023 – Actualidad",
    description: "Tutorías personalizadas de Algoritmos, Estructuras de Datos y programación en C.",
    achievements: [
      "Enfoque en comprensión de conceptos fundamentales",
      "Desarrollo de pensamiento lógico y resolución de problemas"
    ],
    technologies: ["C", "Algoritmos", "Estructuras de Datos"],
    current: true
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Experiencia Profesional
            </h2>
          </div>
          <p className="text-3xl lg:text-4xl font-bold text-foreground mb-16 max-w-2xl">
            Construyendo soluciones que generan impacto real
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          <StaggerChildren className="space-y-12 lg:space-y-24" staggerDelay={0.2}>
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 top-0 -translate-x-1/2 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className={`w-4 h-4 rounded-full border-4 ${exp.current
                          ? 'bg-primary border-background'
                          : 'bg-secondary border-border'
                        }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative">
                        {exp.current && (
                          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                            Actual
                          </Badge>
                        )}

                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-3">
                          {exp.company}
                        </p>

                        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-foreground/80 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <ul className={`space-y-2 mb-6 ${index % 2 === 1 ? 'lg:text-left' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="font-mono text-xs bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Date on opposite side for desktop */}
                  <div className={`hidden lg:flex items-start pt-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 justify-end' : 'justify-start'}`}>
                    <span className="text-sm font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
