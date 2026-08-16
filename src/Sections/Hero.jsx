import heroCoffee from "../assets/Images/hero-coffee.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6">
            <p className="hero-subtitle">WELCOME TO BREW & BLOOM</p>

            <h1 className="hero-title">
              Brewed With Care.
              <br />
              Made For Moments.
            </h1>

            <p className="hero-description">
              Discover handcrafted coffee, fresh bites, and a cozy space made
              for good conversations and quiet moments.
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="btn hero-btn-primary">
                Explore Menu
              </a>

              <a href="#contact" className="btn hero-btn-secondary">
                Visit Us
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <img
                src={heroCoffee}
                alt="Freshly brewed coffee at Brew & Bloom"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
