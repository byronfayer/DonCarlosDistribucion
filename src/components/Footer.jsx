import { business, buildWhatsAppLink } from "../data/site";
import { getImageUrl } from "../utils/images";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="brand__mark">
            <img src={getImageUrl("logo-don-carlos.png")} alt={business.name} />
          </span>
          <div>
            <p className="site-footer__title">{business.name}</p>
            <p className="site-footer__tagline">{business.tagline}</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Enlaces del pie de página">
          <p className="site-footer__heading">Explorar</p>
          <ul>
            <li>
              <a href="#productos">Productos</a>
            </li>
            <li>
              <a href="#promociones">Promociones</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__heading">Contacto</p>
          <ul>
            <li>
              <a
                href={buildWhatsAppLink(undefined, business.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {business.whatsappDisplay}
              </a>
            </li>
            {business.instagram ? (
              <li>
                <a
                  href={`https://instagram.com/${business.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: @{business.instagram}
                </a>
              </li>
            ) : (
              <li className="site-footer__todo">Instagram: (completar)</li>
            )}
            {business.address ? <li>{business.address}</li> : null}
            <li>{business.zone}</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <p>
          © {year} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
