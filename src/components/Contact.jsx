import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#2d2d2d]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-brandOrange font-semibold tracking-wider mb-2 uppercase">Get In Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-outfit">Let's build something <span className="text-brandOrange">extraordinary</span></h3>
                    <div className="h-1 w-20 bg-brandOrange mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-pureWhite/70 text-lg mb-12 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brandOrange/10 transition-colors border border-white/5 group-hover:border-brandOrange/30">
                                    <Mail className="text-brandOrange" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-pureWhite/50 hover:text-white transition-colors cursor-pointer">naveen@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brandOrange/10 transition-colors border border-white/5 group-hover:border-brandOrange/30">
                                    <MapPin className="text-brandOrange" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Location</h4>
                                    <p className="text-pureWhite/50">India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-white/30 text-sm">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, link: "#" },
                                    { icon: <Linkedin size={20} />, link: "#" },
                                    { icon: <Twitter size={20} />, link: "#" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.link}
                                        whileHover={{ y: -5, backgroundColor: '#FF6B01', borderColor: '#FF6B01' }}
                                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-darkGray/50 p-8 md:p-10 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-2 px-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-transparent border-b-2 border-white/10 px-1 py-3 focus:outline-none focus:border-brandOrange transition-colors placeholder:text-white/10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-2 px-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-transparent border-b-2 border-white/10 px-1 py-3 focus:outline-none focus:border-brandOrange transition-colors placeholder:text-white/10"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-2 px-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Hello!"
                                    className="w-full bg-transparent border-b-2 border-white/10 px-1 py-3 focus:outline-none focus:border-brandOrange transition-colors placeholder:text-white/10"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-2 px-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="I'd like to talk about..."
                                    className="w-full bg-transparent border-b-2 border-white/10 px-1 py-3 focus:outline-none focus:border-brandOrange transition-colors placeholder:text-white/10 resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full btn-primary flex items-center justify-center gap-3 mt-4">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
