const features = [
  {
    id: 1,
    icon: "☕",
    title: "Freshly Brewed",
    description:
      "Every cup is freshly prepared to give you the perfect coffee experience.",
  },
  {
    id: 2,
    icon: "🌱",
    title: "Quality Beans",
    description:
      "We carefully select quality coffee beans to bring rich flavor to every cup.",
  },
  {
    id: 3,
    icon: "❤️",
    title: "Made With Love",
    description:
      "From brewing to serving, every detail is handled with care and passion.",
  },
  {
    id: 4,
    icon: "✨",
    title: "Cozy Atmosphere",
    description:
      "A warm and welcoming space for conversations, work, or simply relaxing.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">WHY BREW & BLOOM</p>

          <h2 className="section-title">Crafted With Care & Passion</h2>

          <p className="section-description">
            We care about every little detail, from the beans we choose to the
            moment your coffee reaches your table.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {features.map((feature) => (
            <div className="col-12 col-sm-6 col-lg-3" key={feature.id}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
