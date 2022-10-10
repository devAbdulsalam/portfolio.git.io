import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
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
      <Hireme />
      <Contact />
      {/* <BackTopBtn /> */}
      <Footer />
    </div>
  );
};

export default App;
