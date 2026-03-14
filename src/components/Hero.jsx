import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-4 uppercase">Welcome to my portfolio</h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 leading-tight">
                        Hi, I'm <span className="text-brandOrange underline decoration-4 underline-offset-8">Naveen</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-pureWhite/80 mb-4 font-outfit font-medium">
                        3rd-Year B.Tech AI & Data Science Student
                    </p>
                    <p className="text-lg text-pureWhite/60 mb-10 max-w-lg leading-relaxed">
                        Specializing in AI/ML Engineering, Big Data Analytics, and Full-Stack Development.
                        Passionate about building advanced UI/UX and solving complex data problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        {/* Background geometric elements */}
                        <div className="absolute -inset-4 bg-brandOrange/20 rounded-3xl rotate-6 -z-10 group-hover:rotate-12 transition-transform duration-500"></div>
                        <div className="absolute -inset-4 border-2 border-brandOrange/30 rounded-3xl -rotate-3 -z-10 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl shadow-brandOrange/10"></div>

                        {/* Image container */}
                        <div className="w-full h-full bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 flex items-center justify-center border border-white/10 relative">
                            <img
                                src="/src/assets/images/Proffessional Photo.jpeg"
                                alt="Naveen"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-brandOrange/10 mix-blend-overlay pointer-events-none"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
