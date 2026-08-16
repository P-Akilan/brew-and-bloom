function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">VISIT US</p>

          <h2 className="section-title">Come By, We'd Love To See You</h2>

          <p className="section-description">
            Whether you're meeting friends, getting some work done, or simply
            enjoying a quiet cup of coffee, there's always a place for you at
            Brew & Bloom.
          </p>
        </div>

        <div className="row g-5 align-items-center mt-4">
          <div className="col-lg-6">
            <div className="contact-map">
              <div className="map-placeholder">
                <span>📍</span>
                <p>Brew & Bloom</p>
                <small>Rajapalayam, Tamil Nadu</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-info">
              <h3>Brew & Bloom</h3>

              <div className="contact-item">
                <span className="contact-icon">📍</span>

                <div>
                  <strong>Address</strong>
                  <p>
                    123 Coffee Street,
                    <br />
                    Rajapalayam, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕐</span>

                <div>
                  <strong>Opening Hours</strong>
                  <p>
                    Monday - Sunday
                    <br />
                    8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">☎</span>

                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <a href="#" className="btn contact-btn">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
