import Navbar from "./Component/Navbar";
import Hero from "./Sections/Hero";
import FeaturedCoffee from "./sections/FeaturedCoffee";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";

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
