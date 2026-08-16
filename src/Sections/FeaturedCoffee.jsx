import ClassicCappuccino from "../assets/Images/Classic-Cappuccino.jpg";
import CaramelLatte from "../assets/Images/Caramel-Latte.jpg";
import MochaDelight from "../assets/Images/Mocha-Delight.jpg";

const coffeeItems = [
  {
    id: 1,
    name: "Classic Cappuccino",
    description:
      "Rich espresso balanced with smooth steamed milk and creamy foam.",
    price: "₹160",
    image: ClassicCappuccino,
  },
  {
    id: 2,
    name: "Caramel Latte",
    description:
      "Silky espresso and steamed milk finished with a touch of caramel.",
    price: "₹180",
    image: CaramelLatte,
  },
  {
    id: 3,
    name: "Mocha Delight",
    description:
      "Bold espresso blended with chocolate and velvety steamed milk.",
    price: "₹200",
    image: MochaDelight,
  },
];

function FeaturedCoffee() {
  return (
    <section className="featured-coffee-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">OUR FAVORITES</p>

          <h2 className="section-title">Crafted For Coffee Lovers</h2>

          <p className="section-description">
            A few of our most-loved cups, carefully crafted to make your
            everyday moments a little warmer.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {coffeeItems.map((coffee) => (
            <div className="col-md-6 col-lg-4" key={coffee.id}>
              <div className="coffee-card">
                <div className="coffee-card-image">
                  <img src={coffee.image} alt={coffee.name} />
                </div>

                <div className="coffee-card-content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{coffee.name}</h3>
                    <span>{coffee.price}</span>
                  </div>

                  <p>{coffee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="#menu" className="btn menu-btn">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCoffee;
