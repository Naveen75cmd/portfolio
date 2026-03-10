import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xl font-bold font-outfit text-brandOrange">
                    NAVEEN<span className="text-pureWhite">.</span>
                </div>

                <p className="text-white/30 text-sm">
                    © {new Date().getFullYear()} All rights reserved. Designed for excellence.
                </p>

                <div className="flex gap-8">
                    <a href="#about" className="text-white/40 hover:text-brandOrange transition-colors text-sm">About</a>
                    <a href="#projects" className="text-white/40 hover:text-brandOrange transition-colors text-sm">Projects</a>
                    <a href="#contact" className="text-white/40 hover:text-brandOrange transition-colors text-sm">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
