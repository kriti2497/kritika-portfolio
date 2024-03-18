import AboutMe from "./components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectListing from "./components/ProjectListing";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Details />
      <AboutMe />
      <ProjectListing />
      <Skills />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
