import cafeshop from "../assets/images/cafeshop2.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img
                src={cafeshop}
                alt="Cozy interior of Brew & Bloom coffee shop"
                className="about-image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <p className="section-subtitle">OUR STORY</p>

              <h2 className="section-title">More Than Just Coffee</h2>

              <p>
                At Brew & Bloom, we believe great coffee is about more than
                what's inside the cup. It's about the conversations, the quiet
                moments, and the memories created around it.
              </p>

              <p>
                We carefully select our beans, craft every drink with passion,
                and create a warm space where everyone feels welcome.
              </p>

              <a href="#contact" className="btn about-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
