// Mapea cada archivo de src/assets/images a su URL final procesada por Vite.
// Así, en src/data/site.js alcanza con escribir el nombre de archivo
// ("garrafas.jpeg") y acá se resuelve automáticamente a la imagen real.
const modules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
});

const imageMap = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split("/").pop(), url])
);

export function getImageUrl(filename) {
  if (!filename) return "";
  return imageMap[filename] || "";
}
