import React from "react";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "Working with DigiAgency transformed our online presence. Their
                team delivered beyond our expectations!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="John Doe"
                  className="testimonial-avatar"
                />
                <div>
                  <h4>John Doe</h4>
                  <p>CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                "The expertise and professionalism shown by the team was
                outstanding. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Jane Smith"
                  className="testimonial-avatar"
                />
                <div>
                  <h4>Jane Smith</h4>
                  <p>Marketing Director, GrowthCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
