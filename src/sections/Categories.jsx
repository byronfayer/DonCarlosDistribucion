import { categories } from "../data/site";
import { getImageUrl } from "../utils/images";
import CategoryCard from "../components/CategoryCard";

export default function Categories({ onSelectCategory }) {
  return (
    <section className="section categories" aria-labelledby="categories-heading">
      <div className="container">
        <div className="section__heading">
          <h2 id="categories-heading">Rubros</h2>
          <p>Explorá las principales líneas de productos. Vas a poder sumar o ajustar rubros a medida que definas tu catálogo.</p>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={{ ...cat, imageUrl: getImageUrl(cat.image) }}
              onExplore={() => onSelectCategory?.(cat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
