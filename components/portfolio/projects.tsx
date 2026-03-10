"use client";

import { Badge } from "@/components/ui/badge";
import {
    FadeIn,
    StaggerChildren,
    StaggerItem,
    motion,
} from "@/components/motion";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Journal App",
        description:
            "Aplicación de diario personal con autenticación y almacenamiento en la nube. Permite a los usuarios crear, editar y eliminar notas con imágenes.",
        period: "Ene 2024 – Feb 2024",
        technologies: {
            frontend: ["React.js", "Bootstrap"],
            backend: ["Firebase"],
            other: ["Cloudinary"],
        },
        github: "https://github.com/XyonaX/journal-app",
        url: "https://journal-app-omega-six.vercel.app/",
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/images/projects/JournalApp.png",
        icon: "📓",
    },
    {
        title: "GuitarLA",
        subtitle: "E-commerce",
        description:
            "Tienda en línea completa con carrito de compras, autenticación segura y procesamiento de pagos en tiempo real con MercadoPago.",
        period: "Oct 2024 – Nov 2024",
        technologies: {
            frontend: ["React.js", "TailwindCSS"],
            backend: ["Node.js", "Express"],
            other: ["JWT", "Auth0", "MercadoPago"],
        },
        github: "https://github.com/XyonaX/GuitarLaFront",
        url: "https://guitar-la-front.vercel.app/",
        challenges:
            "Implementación de autenticación segura con Auth0 y validaciones de pago en tiempo real.",
        color: "from-orange-500/20 to-red-500/20",
        image: "/images/projects/GuitarLa.png",
        icon: "🎸",
    },
    {
        title: "RentAR",
        subtitle: "Alquiler de Autos",
        description:
            "Sistema de gestión de alquiler de vehículos con autenticación robusta y panel de administración completo.",
        period: "Oct 2024 – Nov 2024",
        technologies: {
            frontend: ["Angular", "Bootstrap"],
            backend: [".NET"],
            other: ["JWT", "Identity Framework"],
        },
        github: "https://github.com/ferrdel/APPAlquiler",
        url: "",
        color: "from-emerald-500/20 to-teal-500/20",
        image: "/images/projects/RentAR.png",
        icon: "🚗",
    },
];

export function Projects() {
    return (
        <section id='projects' className='py-32 px-6 relative overflow-hidden'>
            {/* Background decoration */}
            <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl' />

            <div className='relative max-w-6xl mx-auto'>
                <FadeIn>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                            <Layers className='h-5 w-5' />
                        </div>
                        <h2 className='text-sm font-semibold text-primary uppercase tracking-wider'>
                            Proyectos Destacados
                        </h2>
                    </div>
                    <p className='text-3xl lg:text-4xl font-bold text-foreground mb-6 max-w-2xl'>
                        Trabajo que demuestra mis habilidades
                    </p>
                    <p className='text-muted-foreground mb-16 max-w-xl'>
                        Cada proyecto representa un desafío único y una
                        oportunidad de aprendizaje.
                    </p>
                </FadeIn>

                <StaggerChildren
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                    staggerDelay={0.15}
                >
                    {projects.map((project, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className='group h-full'
                            >
                                <div className='relative h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl'>
                                    {/* Gradient header */}
                                    <div
                                        className={`h-32 relative overflow-hidden bg-cover bg-center ${project.image ? "" : `bg-gradient-to-br ${project.color}`}`}
                                        style={
                                            project.image
                                                ? {
                                                      backgroundImage: `url(${project.image})`,
                                                  }
                                                : undefined
                                        }
                                    >
                                        <div className='absolute inset-0 bg-grid-pattern opacity-10' />

                                        {/* GitHub link */}
                                        <Link
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='absolute top-4 right-4 p-2.5 rounded-xl bg-background/90 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
                                            aria-label={`Ver ${project.title} en GitHub`}
                                        >
                                            <Github className='h-4 w-4' />
                                        </Link>
                                    </div>

                                    <div className='p-6 space-y-4'>
                                        <div>
                                            <div className='flex items-start justify-between gap-2 mb-1'>
                                                <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                                                    {project.title}
                                                </h3>
                                                {project.url &&
                                                project.url.trim() !== "" ? (
                                                    <Link
                                                        href={project.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-primary hover:text-primary/80 transition-colors'
                                                        aria-label={`Visitar ${project.title}`}
                                                    >
                                                        <ExternalLink className='h-4 w-4' />
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href={project.github}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='text-primary hover:text-primary/80 transition-colors'
                                                        aria-label={`Ver ${project.title} en GitHub`}
                                                    >
                                                        <ExternalLink className='h-4 w-4' />
                                                    </Link>
                                                )}
                                            </div>
                                            {project.subtitle && (
                                                <p className='text-sm font-medium text-primary'>
                                                    {project.subtitle}
                                                </p>
                                            )}
                                            <p className='text-xs text-muted-foreground mt-1 font-mono'>
                                                {project.period}
                                            </p>
                                        </div>

                                        <p className='text-foreground/75 text-sm leading-relaxed'>
                                            {project.description}
                                        </p>

                                        {project.challenges && (
                                            <p className='text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-3'>
                                                {project.challenges}
                                            </p>
                                        )}

                                        <div className='space-y-3 pt-2'>
                                            <div>
                                                <p className='text-xs text-muted-foreground mb-2 font-medium'>
                                                    Stack
                                                </p>
                                                <div className='flex flex-wrap gap-1.5'>
                                                    {[
                                                        ...project.technologies
                                                            .frontend,
                                                        ...project.technologies
                                                            .backend,
                                                    ].map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            className='text-xs font-mono bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-0 transition-colors'
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            {project.technologies.other.length >
                                                0 && (
                                                <div className='flex flex-wrap gap-1.5'>
                                                    {project.technologies.other.map(
                                                        (tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant='outline'
                                                                className='text-xs font-mono'
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>

                {/* View more button */}
                <FadeIn delay={0.6}>
                    <div className='text-center mt-12'>
                        <Link
                            href='https://github.com/XyonaX'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group'
                        >
                            Ver más en GitHub
                            <ArrowUpRight className='h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
