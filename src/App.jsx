import Navbar from "./component/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import FeaturedCoffee from "./sections/FeaturedCoffee.jsx";
import About from "./sections/About.jsx";
import WhyChooseUs from "./sections/WhyChooseUs.jsx";
import Menu from "./sections/Menu.jsx";
import Gallery from "./sections/Gallery.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCoffee />
      <About />
      <WhyChooseUs />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
