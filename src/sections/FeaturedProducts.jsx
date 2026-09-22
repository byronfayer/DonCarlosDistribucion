import { useMemo } from "react";
import { categories, products } from "../data/site";
import { getImageUrl } from "../utils/images";
import ProductCard from "../components/ProductCard";

export default function FeaturedProducts({ activeCategory, onChangeCategory }) {
  const filtered = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="productos" className="section products">
      <div className="container">
        <div className="section__heading">
          <h2>Productos destacados</h2>
          <p>Fotos reales de nuestros productos. Consultá disponibilidad y precio por WhatsApp.</p>
        </div>

        <div className="products__filters" role="tablist" aria-label="Filtrar por rubro">
          <button
            type="button"
            className={`chip ${!activeCategory ? "chip--active" : ""}`}
            onClick={() => onChangeCategory?.(null)}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`chip ${activeCategory === cat.id ? "chip--active" : ""}`}
              onClick={() => onChangeCategory?.(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, imageUrl: getImageUrl(product.image) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
