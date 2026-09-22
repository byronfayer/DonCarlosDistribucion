import { business } from "../data/site";
import WhatsAppButton from "./WhatsAppButton";

function formatPrice(value) {
  if (value == null) return null;
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}

export default function ProductCard({ product }) {
  const price = formatPrice(product.price);
  const message = `Hola, quiero consultar por: ${product.name}`;

  return (
    <article className="product-card">
      {product.tag ? <span className="product-card__tag">{product.tag}</span> : null}
      <div className="product-card__media">
        <img src={product.imageUrl} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        {product.brand ? (
          <p className="product-card__brand">{product.brand}</p>
        ) : null}
        <h3>{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__price-row">
          {price ? (
            <div className="product-card__price">
              <span>{price}</span>
              {product.priceOffer ? (
                <span className="product-card__price-offer">{product.priceOffer}</span>
              ) : null}
            </div>
          ) : (
            <span className="product-card__price product-card__price--query">
              Consultar precio
            </span>
          )}
        </div>

        <WhatsAppButton variant="outline" size="sm" message={message} number={business.whatsapp}>
          Consultar
        </WhatsAppButton>
      </div>
    </article>
  );
}
