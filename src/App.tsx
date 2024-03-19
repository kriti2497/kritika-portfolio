/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutMe from "./components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectListing from "./components/ProjectListing";
import Skills from "./components/Skills";
import { useRef } from "react";

function App() {
  const contactRef = useRef<any>();

  const scrollToContact = () => {
    if (contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <BrowserRouter>
      <Header scrollToContact={scrollToContact} />
      <Hero />
      <Details />
      <AboutMe />
      <ProjectListing />
      <Skills />
      <Contact />
      <div ref={contactRef}></div>
    </BrowserRouter>
  );
}

export default App;
