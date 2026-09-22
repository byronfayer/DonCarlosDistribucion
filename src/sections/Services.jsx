import { services } from "../data/site";
import { getImageUrl } from "../utils/images";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="section__heading">
          <h2>Servicios</h2>
          <p>Además de nuestros productos, ofrecemos estos servicios.</p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={{ ...service, imageUrl: getImageUrl(service.image) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
