import { useState } from "react";

export default function Gallery({ images }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src + i}
            className="gallery-grid__item"
            onClick={() => setActive(img)}
            aria-label={`Ampliar imagen: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
