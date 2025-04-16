import React from "react";
import { Code2, Megaphone, Palette, Smartphone } from "lucide-react";
export const iconMap = {
  Code2: Code2,
  Megaphone: Megaphone,
  Palette: Palette,
  Smartphone: Smartphone,
};

import servicesData from "../data/services.json";
const services = servicesData.services;

const Services = () => {
  return (
    <>
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="service-card">
                  <IconComponent size={40} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
