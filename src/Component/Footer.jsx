function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="footer-brand">
              <h2>Brew & Bloom</h2>

              <p>
                Handcrafted coffee, fresh bites, and warm moments. A cozy place
                to slow down and enjoy the little things.
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#menu">Menu</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <h3 className="footer-heading">Contact</h3>

            <ul className="footer-contact">
              <li>📍 Rajapalayam, Tamil Nadu</li>
              <li>☎ +91 98765 43210</li>
              <li>✉ hello@brewandbloom.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Brew & Bloom. All rights reserved.</p>

          <p>Crafted with ☕ & ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
