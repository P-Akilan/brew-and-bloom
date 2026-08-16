import Navbar from "./Component/Navbar";
import Hero from "./Sections/Hero";
import FeaturedCoffee from "./Sections/FeaturedCoffee";
import About from "./Sections/About";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Menu from "./Sections/Menu";
import Gallery from "./Sections/Gallery";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Component/Footer";

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
