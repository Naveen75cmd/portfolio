import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Tutor",
            company: "Data Analytics Club",
            period: "Present",
            description: "Mentoring juniors in data analytics concepts, providing problem statements, and guiding them through complex data processing workflows.",
            icon: <Briefcase className="text-brandOrange" size={24} />
        },
        {
            title: "Freelance Developer",
            company: "Independent",
            period: "Project-based",
            description: "Developed 'Vegetable Stop', a mobile-responsive web application designed for daily business calculations and inventory tracking for local vendors.",
            icon: <Briefcase className="text-brandOrange" size={24} />
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-2 uppercase">Experience</h2>
                    <div className="h-1 w-20 bg-brandOrange"></div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12 border-l-2 border-white/10 group hover:border-brandOrange transition-colors pb-12 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[13px] top-0 w-6 h-6 bg-darkGray border-2 border-white/20 rounded-full group-hover:border-brandOrange transition-colors flex items-center justify-center">
                                <div className="w-2 h-2 bg-white/20 group-hover:bg-brandOrange rounded-full transition-colors"></div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <h3 className="text-2xl font-bold font-outfit text-pureWhite">{exp.title}</h3>
                                <div className="flex items-center gap-2 text-pureWhite/50 text-sm font-medium">
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <h4 className="text-brandOrange font-medium mb-4">{exp.company}</h4>
                            <p className="text-pureWhite/70 max-w-3xl leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
