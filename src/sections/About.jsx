import { business } from "../data/site";
import { getImageUrl } from "../utils/images";

export default function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img src={getImageUrl("garrafas.jpeg")} alt="Distribución Don Carlos" />
        </div>

        <div className="about__content">
          <p className="section__eyebrow">Sobre nosotros</p>
          <h2>{business.name}</h2>
          <p>
            Somos una distribuidora de productos variados en {business.zone}, con
            entrega a domicilio y atención directa por WhatsApp.
          </p>
          <p className="about__todo">
            Espacio editable: acá va la historia real del negocio, los años de
            experiencia, la zona de trabajo y el tipo de clientes a los que
            atendés. Contanos estos datos para completarlo.
          </p>
        </div>
      </div>
    </section>
  );
}
