import { business } from "../data/site";
import { getImageUrl } from "../utils/images";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{business.zone} · Distribuidora de productos variados</p>
          <h1>
            {business.name}
            <span className="hero__tagline">{business.tagline}</span>
          </h1>
          <p className="hero__desc">{business.description}</p>

          <div className="hero__actions">
            <WhatsAppButton
              variant="solid"
              size="lg"
              message={`Hola, quiero hacer una consulta sobre productos de ${business.shortName}.`}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
            <a href="#productos" className="btn btn--ghost btn--lg">
              Ver productos
            </a>
          </div>

          <ul className="hero__badges">
            <li>Entrega a domicilio</li>
            <li>Atención directa por WhatsApp</li>
            <li>Novedades todas las temporadas</li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__media-main">
            <img src={getImageUrl("ventilador-startrak.jpeg")} alt="Productos de Distribución Don Carlos" />
          </div>
          <div className="hero__media-secondary">
            <img src={getImageUrl("acolchados.jpeg")} alt="Acolchados en liquidación" />
          </div>
          <div className="hero__media-tag">
            <span>Preventa</span>
            <strong>Primavera · Verano</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
