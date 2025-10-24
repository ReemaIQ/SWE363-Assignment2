import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />          {/* includes greeting/clock */}
            <main>
                <Projects />   {/* filter + sort + live search + empty state */}
                <ContactForm /> {/* validation + loading state + success/error */}
            </main>
            <Footer />
        </>
    );
}
