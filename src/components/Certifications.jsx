import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "Data Analytics Professional Certificate",
            org: "Issuing Organization",
            date: "Dec 2023",
            link: "#"
        },
        {
            title: "Big Data & Engineering Specialization",
            org: "Issuing Organization",
            date: "Nov 2023",
            link: "#"
        },
        {
            title: "AI/ML Engineering Mastery",
            org: "Issuing Organization",
            date: "Oct 2023",
            link: "#"
        }
    ];

    return (
        <section id="certifications" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-2 uppercase">Certifications</h2>
                    <div className="h-1 w-20 bg-brandOrange"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-[#2d2d2d] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-brandOrange/30 transition-all hover:bg-darkGray/40"
                        >
                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                <Award className="text-brandOrange" size={24} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                                <p className="text-pureWhite/50 text-sm mb-4">{cert.org} • {cert.date}</p>
                                <a
                                    href={cert.link}
                                    className="text-brandOrange hover:underline flex items-center gap-1 text-sm font-medium"
                                >
                                    Verify <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
