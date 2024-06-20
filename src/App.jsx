import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutme/AboutMe"; 
import WorkPara from "./components/workPara/WorkPara";
import Cursor from "./components/cursor/Cursor"

const App = () => {
  return (
    <div>

      <Cursor/> 
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
  
      <section id="About Me">
        <Parallax />
        
      </section>

      <section >
        <div className="AboutMe"  style={{ background: "linear-gradient(180deg,  #111132,  #5C5675)" }}> <AboutMe/>  </div> 
      </section>

      <section id="My Projects">
        <WorkPara /> 
      </section>


      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
