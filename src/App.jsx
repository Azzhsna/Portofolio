import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
