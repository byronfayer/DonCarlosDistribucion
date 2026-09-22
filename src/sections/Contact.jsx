import { business, buildWhatsAppLink } from "../data/site";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="section__eyebrow">Contacto</p>
          <h2>¿Querés consultar por nuestros productos?</h2>
          <p className="contact__lead">Hablanos por WhatsApp, te respondemos al toque.</p>

          <ul className="contact__list">
            <li>
              <span>WhatsApp</span>
              <a href={buildWhatsAppLink(undefined, business.whatsapp)} target="_blank" rel="noopener noreferrer">
                {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <span>Instagram</span>
              {business.instagram ? (
                <a href={`https://instagram.com/${business.instagram}`} target="_blank" rel="noopener noreferrer">
                  @{business.instagram}
                </a>
              ) : (
                <em>Completar usuario real</em>
              )}
            </li>
            <li>
              <span>Zona</span>
              <em>{business.zone}</em>
            </li>
            <li>
              <span>Horarios</span>
              <em>{business.hours || "Completar horario real"}</em>
            </li>
          </ul>
        </div>

        <div className="contact__cta">
          <h3>Hablanos por WhatsApp</h3>
          <p>Contanos qué producto te interesa y te ayudamos al instante.</p>
          <WhatsAppButton variant="solid" size="lg" message={business.whatsappMessage}>
            Hablanos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
