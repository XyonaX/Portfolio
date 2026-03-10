"use client"

import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerChildren, StaggerItem, motion } from "@/components/motion"
import { Code2, Database, Wrench, Users, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "C#", "Java", "C"],
    color: "text-blue-500"
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React.js", "Angular", "Node.js", ".NET", "Express"],
    color: "text-emerald-500"
  },
  {
    title: "Estilos",
    icon: Palette,
    skills: ["TailwindCSS", "Bootstrap", "CSS3", "SASS"],
    color: "text-pink-500"
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["SQL Server", "MySQL", "MongoDB", "Firebase"],
    color: "text-orange-500"
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Visual Studio"],
    color: "text-purple-500"
  },
  {
    title: "Metodologías",
    icon: Users,
    skills: ["Agile", "Scrum", "RESTful APIs"],
    color: "text-cyan-500"
  }
]

const softSkills = [
  { name: "Comunicación efectiva", icon: "💬" },
  { name: "Trabajo en equipo", icon: "🤝" },
  { name: "Adaptabilidad", icon: "🔄" },
  { name: "Aprendizaje continuo", icon: "📚" },
  { name: "Pensamiento crítico", icon: "🧠" },
  { name: "Resolución de problemas", icon: "🎯" }
]

const languages = [
  { name: "Español", level: "Nativo", percentage: 100 },
  { name: "Inglés", level: "B1 - Intermedio", percentage: 60 }
]

import { Layers, Palette } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-5 w-5" />
            </div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Habilidades Técnicas
            </h2>
          </div>
          <p className="text-3xl lg:text-4xl font-bold text-foreground mb-16 max-w-2xl">
            Tecnologías que domino
          </p>
        </FadeIn>
        
        {/* Technical Skills Grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20" staggerDelay={0.1}>
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          className="font-mono text-xs bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        
        {/* Soft Skills & Languages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <FadeIn delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Habilidades Blandas</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          {/* Languages */}
          <FadeIn delay={0.3}>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Idiomas</h3>
              </div>
              
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
