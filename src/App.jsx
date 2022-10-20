import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
// import BackTopBtn from "./components/BackTopBtn";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Project />
      <Testimonials />
      <Skills />
      <Services/>
      <Contact />
      {/* <BackTopBtn /> */}
      <Footer />
    </div>
  );
};

export default App;
