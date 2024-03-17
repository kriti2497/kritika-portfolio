import AboutMe from "./components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectListing from "./components/ProjectListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Details />
      <AboutMe />
      <ProjectListing />
    </BrowserRouter>
  );
}

export default App;
