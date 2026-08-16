const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Regular Customer",
    review:
      "The coffee is amazing and the atmosphere is so peaceful. Definitely one of my favorite places to relax.",
  },
  {
    id: 2,
    name: "Priya S",
    role: "Coffee Lover",
    review:
      "Loved the cappuccino and the warm atmosphere. The staff were friendly and the place felt really welcoming.",
  },
  {
    id: 3,
    name: "Rahul M",
    role: "Local Customer",
    review:
      "Great coffee, delicious snacks, and a beautiful place to spend time with friends. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">CUSTOMER LOVE</p>

          <h2 className="section-title">What Our Guests Say</h2>

          <p className="section-description">
            Good coffee makes the moment better. Here's what our guests have to
            say.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {testimonials.map((testimonial) => (
            <div className="col-12 col-md-6 col-lg-4" key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>

                <p className="testimonial-review">"{testimonial.review}"</p>

                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
