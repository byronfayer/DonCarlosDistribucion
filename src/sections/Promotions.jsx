import { promotions } from "../data/site";
import { getImageUrl } from "../utils/images";
import PromotionCard from "../components/PromotionCard";

export default function Promotions() {
  if (!promotions.length) return null;

  return (
    <section id="promociones" className="section promotions">
      <div className="container">
        <div className="section__heading section__heading--accent">
          <h2>Promociones activas</h2>
          <p>Ofertas por tiempo limitado, sujetas a stock disponible.</p>
        </div>

        <div className="promotions__grid">
          {promotions.map((promo) => (
            <PromotionCard
              key={promo.id}
              promotion={{ ...promo, imageUrl: getImageUrl(promo.image) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
