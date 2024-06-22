import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./component/Menu";
import Services from "./pages/Services";
import Footer from "./component/footer/Footer";
import Reach from "./pages/Reach";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <AboutUs id="about" />
      <Reach />
      <Services id="services" />
      <OurWork id="ads" />
      <Footer />
    </div>
  );
}

export default App
