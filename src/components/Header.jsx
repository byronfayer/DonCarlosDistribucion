import { useEffect, useState } from "react";
import { business } from "../data/site";
import { getImageUrl } from "../utils/images";
import WhatsAppButton from "./WhatsAppButton";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#promociones", label: "Promociones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__bar container">
        <a href="#inicio" className="brand" onClick={handleNavClick}>
          <span className="brand__mark">
            <img src={getImageUrl("logo-don-carlos.png")} alt={business.name} />
          </span>
          <span className="brand__name">
            Distribución
            <strong>Don Carlos</strong>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Navegación principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <WhatsAppButton
            variant="solid"
            size="sm"
            className="site-header__cta"
            message={`Hola, quiero hacer una consulta sobre productos de ${business.shortName}.`}
          >
            WhatsApp
          </WhatsAppButton>

          <button
            className={`hamburger ${open ? "hamburger--open" : ""}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton
          variant="solid"
          size="md"
          message={`Hola, quiero hacer una consulta sobre productos de ${business.shortName}.`}
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}
