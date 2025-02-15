import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import AboutUs from "./components/AboutMe/About";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <AboutUs/>
     <Skills/>
     <Contact/>
     <Footer/>
        
    </div>
  );
}

export default App;
