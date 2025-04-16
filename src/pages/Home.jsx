import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
