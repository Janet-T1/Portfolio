import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutme/AboutMe"; 

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
  
      <section id="About Me">
        <Parallax />
        <div className="AboutMe"  style={{ background: "linear-gradient(180deg,  #111132,  #5C5675)" }}> <AboutMe/>  </div> 
      </section>

      <section id="My Projects">
        
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
