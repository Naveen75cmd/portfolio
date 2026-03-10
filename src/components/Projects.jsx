import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Layout, BarChart2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Department Hub Web App",
            description: "Automated attendance tracking system with AI-driven student performance analysis and real-time dashboard visualization.",
            tech: ["React", "Supabase", "Tailwind", "AI"],
            icon: <Layout className="text-brandOrange" size={24} />,
            link: "#",
            github: "#"
        },
        {
            title: "Autonomous Intelligence Agent",
            description: "Developed during a 36-hour hackathon. An agent capable of performing complex company research and competitive analysis autonomously.",
            tech: ["Python", "LLMs", "LangChain", "VectorDB"],
            icon: <Cpu className="text-brandOrange" size={24} />,
            link: "#",
            github: "#"
        },
        {
            title: "Causal Inference Analysis",
            description: "A data analytics project built in 24 hours focusing on identifying causal relationships in observational datasets for business intelligence.",
            tech: ["R/Python", "Statistics", "Data Viz"],
            icon: <BarChart2 className="text-brandOrange" size={24} />,
            link: "#",
            github: "#"
        },
        {
            title: "Web Trix Rebuild",
            description: "A complete overhaul focusing on premium UI/UX, implementing a modern design tokens system and high-performance scroll mechanics.",
            tech: ["React", "Framer Motion", "GSAP"],
            icon: <Database className="text-brandOrange" size={24} />,
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-[#2d2d2d]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-2 uppercase">Featured Projects</h2>
                    <div className="h-1 w-20 bg-brandOrange"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-darkGray/60 rounded-3xl p-8 border border-white/5 group hover:border-brandOrange/30 transition-all flex flex-col h-full"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandOrange/10 transition-colors">
                                {project.icon}
                            </div>

                            <h3 className="text-2xl font-bold font-outfit mb-4 text-pureWhite">{project.title}</h3>
                            <p className="text-pureWhite/60 mb-8 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/5 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6">
                                <a href={project.link} className="text-brandOrange hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                <a href={project.github} className="text-pureWhite/40 hover:text-brandOrange transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                    GitHub <Github size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
