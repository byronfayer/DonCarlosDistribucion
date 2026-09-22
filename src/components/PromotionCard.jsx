import { business } from "../data/site";
import WhatsAppButton from "./WhatsAppButton";

export default function PromotionCard({ promotion }) {
  const message = `Hola, quiero consultar por la promoción: ${promotion.title}`;

  return (
    <article className="promo-card">
      <div className="promo-card__media">
        <img src={promotion.imageUrl} alt={promotion.title} loading="lazy" />
        {promotion.discount ? (
          <span className="promo-card__badge">{promotion.discount}</span>
        ) : null}
      </div>
      <div className="promo-card__body">
        {promotion.validity ? (
          <p className="promo-card__validity">{promotion.validity}</p>
        ) : null}
        <h3>{promotion.title}</h3>
        <p className="promo-card__offer">{promotion.offer}</p>
        <p className="promo-card__price">{promotion.price}</p>
        <p className="promo-card__conditions">{promotion.conditions}</p>
        <WhatsAppButton variant="solid" size="sm" message={message} number={business.whatsapp}>
          Aprovechar oferta
        </WhatsAppButton>
      </div>
    </article>
  );
}
