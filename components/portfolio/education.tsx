"use client";

import {
    FadeIn,
    StaggerChildren,
    StaggerItem,
    motion,
} from "@/components/motion";
import {
    GraduationCap,
    Award,
    Calendar,
    ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const education = [
    {
        title: "Licenciatura en Sistemas de la Información",
        institution: "Universidad Nacional del Nordeste",
        period: "2021 – Actualidad",
        status: "En curso",
        description:
            "Formación integral en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.",
    },
    {
        title: "Bachiller en Ciencias Naturales",
        institution: "Colegio Pte. Hipólito Yrigoyen",
        period: "2011 – 2016",
        status: "Completado",
    },
];

const certifications = [
    {
        title: "Bootcamp React + Node.js",
        institution: "Talentos Digitales",
        year: "2024",
        color: "from-blue-500 to-cyan-500",
        url: "https://drive.google.com/file/d/1qmUk_M6iinvCS8VdyWJJlAsl1WYbJ28R/view?usp=sharing",
    },
    {
        title: "Bootcamp Angular + .NET",
        institution: "Devlights",
        year: "2024",
        color: "from-red-500 to-orange-500",
        url: "https://drive.google.com/file/d/1TROHlrGAoI8o0NJFaGfqSkZpocu09bwL/view?usp=sharing",
    },
    {
        title: "Desarrollador WEB con REACT JS",
        institution: "Argentina Programa | UTN",
        year: "2023",
        color: "from-yellow-500 to-amber-500",
        url: "https://drive.google.com/file/d/1pEo2evgQBBSmvnrAUfBE91Og9g9oKlHq/view?usp=sharing",
    },
    {
        title: "Desarrollador Web Inicial",
        institution: "Argentina Programa | UTN",
        year: "2023",
        color: "from-emerald-500 to-teal-500",
        url: "https://drive.google.com/file/d/1udvjaTOkBqigsTnzGf7_sbAvUqqKU0SA/view?usp=sharing",
    },
];

export function Education() {
    return (
        <section className='py-32 px-6 relative overflow-hidden'>
            {/* Background decoration */}
            <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl' />

            <div className='relative max-w-6xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-16'>
                    {/* Education */}
                    <div>
                        <FadeIn>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                                    <GraduationCap className='h-5 w-5' />
                                </div>
                                <h2 className='text-sm font-semibold text-primary uppercase tracking-wider'>
                                    Educación
                                </h2>
                            </div>
                            <p className='text-3xl font-bold text-foreground mb-10'>
                                Formación académica
                            </p>
                        </FadeIn>

                        <StaggerChildren
                            className='space-y-6'
                            staggerDelay={0.15}
                        >
                            {education.map((item, index) => (
                                <StaggerItem key={index}>
                                    <motion.div
                                        whileHover={{ x: 8 }}
                                        className='group relative pl-8 border-l-2 border-border hover:border-primary transition-colors'
                                    >
                                        {/* Timeline dot */}
                                        <div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors' />

                                        <div className='space-y-2'>
                                            <div className='flex items-start justify-between gap-4'>
                                                <h3 className='font-bold text-foreground text-lg leading-tight'>
                                                    {item.title}
                                                </h3>
                                                {item.status === "En curso" && (
                                                    <Badge className='shrink-0 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'>
                                                        En curso
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className='text-primary font-medium'>
                                                {item.institution}
                                            </p>
                                            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                                                <Calendar className='h-3.5 w-3.5' />
                                                {item.period}
                                            </div>
                                            {item.description && (
                                                <p className='text-sm text-muted-foreground mt-2'>
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>

                    {/* Certifications */}
                    <div>
                        <FadeIn delay={0.2}>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='p-2 rounded-lg bg-accent/10 text-accent'>
                                    <Award className='h-5 w-5' />
                                </div>
                                <h2 className='text-sm font-semibold text-accent uppercase tracking-wider'>
                                    Certificaciones
                                </h2>
                            </div>
                            <p className='text-3xl font-bold text-foreground mb-10'>
                                Aprendizaje continuo
                            </p>
                        </FadeIn>

                        <StaggerChildren
                            className='grid gap-4'
                            staggerDelay={0.1}
                        >
                            {certifications.map((cert, index) => (
                                <StaggerItem key={index}>
                                    <motion.div
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                        className='group relative bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all overflow-hidden'
                                    >
                                        {/* Gradient accent */}
                                        <div
                                            className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`}
                                        />

                                        <div className='flex items-start justify-between gap-4 pl-4'>
                                            <div className='space-y-1'>
                                                <h3 className='font-semibold text-foreground group-hover:text-primary transition-colors'>
                                                    {cert.title}
                                                </h3>
                                                <p className='text-sm text-muted-foreground'>
                                                    {cert.institution}
                                                </p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-sm font-mono text-muted-foreground bg-secondary px-2 py-1 rounded'>
                                                    {cert.year}
                                                </span>
                                            </div>
                                            <Link
                                                href={cert.url}
                                                target='_blank'
                                                className='text-primary hover:text-primary/80 transition-colors'
                                            >
                                              <ExternalLink className='h-4 w-4' />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </div>
            </div>
        </section>
    );
}
