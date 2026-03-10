import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-darkGray text-pureWhite selection:bg-brandOrange selection:text-pureWhite">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
