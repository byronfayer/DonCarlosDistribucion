export default function CategoryCard({ category, onExplore }) {
  return (
    <article className="category-card">
      <div className="category-card__media">
        <img src={category.imageUrl} alt={category.name} loading="lazy" />
      </div>
      <div className="category-card__body">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <button
          type="button"
          className="link-arrow"
          onClick={() => onExplore?.(category)}
        >
          Ver productos
        </button>
      </div>
    </article>
  );
}
