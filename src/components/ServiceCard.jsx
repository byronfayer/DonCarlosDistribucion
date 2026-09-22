import WhatsAppButton from "./WhatsAppButton";

export default function ServiceCard({ service }) {
  const message = `Hola, quiero consultar por el servicio de ${service.name}.`;

  return (
    <article className="service-card">
      {service.imageUrl ? (
        <div className="service-card__media">
          <img src={service.imageUrl} alt={service.name} loading="lazy" />
        </div>
      ) : (
        <div className="service-card__icon" aria-hidden="true">
          <ServiceIcon />
        </div>
      )}
      <div className="service-card__body">
        <h3>{service.name}</h3>
        <p className="service-card__desc">{service.description}</p>
        <p className="service-card__benefit">{service.benefit}</p>
        <WhatsAppButton
          variant="outline"
          size="sm"
          message={message}
          number={service.whatsapp}
        >
          Consultar servicio
        </WhatsAppButton>
      </div>
    </article>
  );
}

function ServiceIcon() {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="20" />
      <path d="M16 24h16M24 16v16" strokeLinecap="round" />
    </svg>
  );
}
