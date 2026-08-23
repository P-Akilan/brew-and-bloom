const menuItems = [
  {
    id: 1,
    category: "Coffee",
    name: "Espresso",
    description: "Rich and bold classic espresso.",
    price: "₹120",
  },
  {
    id: 2,
    category: "Coffee",
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy foam.",
    price: "₹160",
  },
  {
    id: 3,
    category: "Coffee",
    name: "Caramel Latte",
    description: "Smooth latte finished with caramel.",
    price: "₹180",
  },
  {
    id: 4,
    category: "Coffee",
    name: "Mocha",
    description: "Espresso blended with rich chocolate.",
    price: "₹200",
  },
  {
    id: 5,
    category: "Tea",
    name: "Masala Chai",
    description: "Traditional Indian tea with aromatic spices.",
    price: "₹100",
  },
  {
    id: 6,
    category: "Tea",
    name: "Green Tea",
    description: "Light and refreshing premium green tea.",
    price: "₹120",
  },
  {
    id: 7,
    category: "Bakery",
    name: "Chocolate Croissant",
    description: "Buttery pastry filled with rich chocolate.",
    price: "₹150",
  },
  {
    id: 8,
    category: "Bakery",
    name: "Blueberry Muffin",
    description: "Soft muffin packed with blueberries.",
    price: "₹140",
  },
];

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">OUR MENU</p>

          <h2 className="section-title">Something For Every Mood</h2>

          <p className="section-description">
            From carefully brewed coffee to freshly baked treats, find something
            you'll love.
          </p>
        </div>

        <div className="menu-list">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.id}>
              <div className="menu-item-info">
                <span className="menu-category">{item.category}</span>

                <h3>{item.name}</h3>

                <p>{item.description}</p>
              </div>

              <div className="menu-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
