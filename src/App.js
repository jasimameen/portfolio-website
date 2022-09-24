import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
