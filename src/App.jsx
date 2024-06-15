import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        {" "}
        <Navbar />{" "}
        <Hero />
      </section>
  
      <section id="Services"> 
        <Parallax /> 
      </section>

      <section> 
        Parallax 
      </section>

      <section id="About"> 
        About 
      </section>

      <section id="Contact"> 
        <Contact />  
      </section>

    </div>
  );
};

export default App;
