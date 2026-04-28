import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Works from "../components/Works";
import Skill from "../components/Skill";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Works />
      <Certificate />
      <Contact />
    </>
  );
}

export default Home;
