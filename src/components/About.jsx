import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'Python', 'React.js', 'Vite', 'Node.js', 'Supabase',
        'Tailwind CSS', 'SQL', 'TensorFlow', 'Scikit-Learn',
        'Big Data Analytics', 'Causal Inference', 'Git'
    ];

    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#2d2d2d]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-2 uppercase">About Me</h2>
                    <div className="h-1 w-20 bg-brandOrange"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 font-outfit">A Passionate AI & Data Science Student</h3>
                        <div className="space-y-4 text-pureWhite/70 leading-relaxed text-lg">
                            <p>
                                As a 3rd-year B.Tech student specializing in Artificial Intelligence and Data Science,
                                I am deeply committed to pushing the boundaries of what's possible with technology.
                            </p>
                            <p>
                                My journey is fueled by a passion for building advanced UI/UX, utilizing robust
                                data analytics libraries, and architecting solutions for complex real-world problems.
                                Whether it's developing autonomous agents or optimizing web application flows,
                                I strive for excellence in every line of code.
                            </p>
                            <p>
                                I thrive in fast-paced environments, as evidenced by my participation in multiple
                                high-stakes hackathons where I've delivered functional prototypes under tight deadlines.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-darkGray/50 p-8 rounded-3xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold mb-8 font-outfit">My Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05, borderColor: '#FF6B01' }}
                                    className="px-5 py-2.5 bg-pureWhite/5 rounded-full border border-white/10 text-pureWhite text-sm font-medium transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
