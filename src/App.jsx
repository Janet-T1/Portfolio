import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero"
const App = () => {
  return (
    <div>
      <section id="HomePage">
        {" "}
        <Navbar />{" "}
        <Hero />
      </section>
      <section> Parallax </section>
      <section id="Services"> Services </section>
      <section> Parallax </section>
      {/* <section> Portfolio </section> */}
      <section id="Contact"> 
      <Contact />  
      </section>
      <section id="About"> About </section>
    </div>
  );
};

export default App;
