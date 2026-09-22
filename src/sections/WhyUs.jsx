import { whyUs } from "../data/site";

export default function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container">
        <div className="section__heading">
          <h2>¿Por qué elegir Don Carlos?</h2>
          <p>Contenido editable: ajustá estos puntos a medida que confirmes la propuesta de valor real del negocio.</p>
        </div>

        <ul className="why-us__grid">
          {whyUs.map((item) => (
            <li key={item.id} className="why-us__item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
