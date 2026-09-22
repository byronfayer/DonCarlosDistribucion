import { gallery, products } from "../data/site";
import { getImageUrl } from "../utils/images";
import Gallery from "../components/Gallery";

export default function GallerySection() {
  const images = gallery.map((file) => {
    const match = products.find((p) => p.image === file);
    return { src: getImageUrl(file), alt: match ? match.name : "Producto Don Carlos" };
  });

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section__heading">
          <h2>Galería</h2>
          <p>Productos, promociones y novedades de Distribución Don Carlos.</p>
        </div>

        <Gallery images={images} />
      </div>
    </section>
  );
}
