import Gallerygroupcoffee3 from "../assets/images/Gallery-group-coffee3.jpg";
import Gallerygroupcoffee2 from "../assets/images/Gallery-group-coffee2.jpg";
import cafeshop3 from "../assets/images/cafeshop3.jpg";
import cafeshop from "../assets/images/cafeshop2.jpg";

const galleryimages = [
  {
    id: 1,
    image: cafeshop,
    alt: "Brew & Bloom coffee shop interior",
  },
  {
    id: 2,
    image: Gallerygroupcoffee3,
    alt: "Freshly brewed coffee",
  },
  {
    id: 3,
    image: Gallerygroupcoffee2,
    alt: "Cozy cafe seating area",
  },
  {
    id: 4,
    image: cafeshop3,
    alt: "Coffee and cafe table",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">OUR SPACE</p>

          <h2 className="section-title">A Place To Slow Down</h2>

          <p className="section-description">
            Good coffee, warm surroundings, and little moments worth
            remembering.
          </p>
        </div>

        <div className="row g-3 mt-4">
          {galleryimages.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>
              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
