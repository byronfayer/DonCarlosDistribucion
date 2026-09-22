// ============================================================================
// DATOS DEL NEGOCIO — EDITAR ACÁ
// Este archivo centraliza todo el contenido real del sitio: información de
// contacto, categorías, productos, promociones y servicios. No hace falta
// tocar ningún componente para actualizar precios, textos o fotos: todo se
// edita en este archivo.
// ============================================================================

export const business = {
  name: "Distribución Don Carlos",
  shortName: "Don Carlos",
  tagline: "Todo lo que necesitás, en un solo lugar",
  description:
    "Comercio y distribuidora de productos variados en Córdoba: gas, electrodomésticos, artículos de verano, hogar y mucho más, con entrega a domicilio.",
  // Número principal de WhatsApp (formato internacional, sin espacios ni guiones)
  whatsapp: "5493513151844",
  whatsappDisplay: "351 315-1844",
  // Número alternativo (servicio de espacios verdes)
  whatsappServicios: "5493515224980",
  whatsappServiciosDisplay: "351 522-4980",
  instagram: "", // TODO: completar usuario de Instagram real
  address: "", // TODO: completar dirección real si el cliente quiere mostrarla
  zone: "Córdoba", // TODO: confirmar zona de reparto exacta
  hours: "", // TODO: completar horario real de atención
  whatsappMessage:
    "¡Hola! Vi la página de Distribución Don Carlos y quiero hacer una consulta.",
};

// Arma el link de WhatsApp con mensaje prearmado (editable por producto)
export function buildWhatsAppLink(message, number = business.whatsapp) {
  const text = encodeURIComponent(message || business.whatsappMessage);
  return `https://wa.me/${number}?text=${text}`;
}

// ----------------------------------------------------------------------------
// CATEGORÍAS — Rubros principales. Placeholder/editable: reemplazar por las
// categorías definitivas y sus imágenes cuando el cliente las confirme.
// ----------------------------------------------------------------------------
export const categories = [
  {
    id: "gas-hogar",
    name: "Gas y Hogar",
    description: "Garrafas, recarga de envases y artículos para la casa.",
    image: "garrafas.jpeg",
  },
  {
    id: "electrodomesticos",
    name: "Electrodomésticos",
    description: "Microondas, batidoras, pavas eléctricas y más.",
    image: "microondas.jpeg",
  },
  {
    id: "verano-ventilacion",
    name: "Temporada y Ventilación",
    description: "Ventiladores, reposeras y todo para el calor.",
    image: "ventilador-metal.jpeg",
  },
  {
    id: "hogar-textil",
    name: "Hogar y Textil",
    description: "Acolchados, secadores de ropa y blanquería.",
    image: "acolchados.jpeg",
  },
  {
    id: "cocina-menaje",
    name: "Cocina y Menaje",
    description: "Sets de bowls, conservadoras y utensilios.",
    image: "bowls-rojo.jpeg",
  },
  {
    id: "tecnologia",
    name: "Tecnología y Accesorios",
    description: "Parlantes, balanzas digitales y novedades.",
    image: "parlante-auto.jpeg",
  },
];

// ----------------------------------------------------------------------------
// PRODUCTOS DESTACADOS — Basados en publicaciones reales del cliente.
// Los precios que no fueron confirmados quedan como "Consultar precio".
// ----------------------------------------------------------------------------
export const products = [
  {
    id: "garrafas",
    name: "Garrafas de gas",
    category: "gas-hogar",
    brand: "",
    image: "garrafas.jpeg",
    description:
      "Venta de garrafas: envase y cargadas, y recarga de envase. Se lleva a domicilio.",
    price: null,
    tag: "Se lleva a domicilio",
  },
  {
    id: "microondas-insignia",
    name: "Microondas Insignia 20L",
    category: "electrodomesticos",
    brand: "Insignia",
    image: "microondas.jpeg",
    description:
      "20 litros de capacidad, 5 niveles de potencia, modo descongelar, controlador de tiempo y funcionamiento silencioso. Entrega inmediata.",
    price: 150000,
    tag: "Entrega inmediata",
  },
  {
    id: "combo-batidora-pava",
    name: "Combo Batidora de mano + Pava eléctrica",
    category: "electrodomesticos",
    brand: "Iatrick / Morlan",
    image: "combo-batidora-pava.jpeg",
    description:
      "Batidor de huevos de mano 2 en 1 (300W) junto con pava eléctrica de 2 litros.",
    price: 29999,
    tag: "Súper combo",
  },
  {
    id: "balanza-tokyo",
    name: "Balanza Digital Electrónica Tokyo-4",
    category: "tecnologia",
    brand: "Tokyo Style",
    image: "balanza.jpeg",
    description:
      "Pesa hasta 40kg, pantalla LED, 7 memorias directas, funciona a 220V o con batería recargable. Ideal para comercios, verdulerías, carnicerías y almacenes.",
    price: null,
    tag: "Uso comercial",
  },
  {
    id: "ventilador-metal",
    name: "Ventilador Todo de Metal 3 en 1",
    category: "verano-ventilacion",
    brand: "",
    image: "ventilador-metal.jpeg",
    description:
      "Pedestal, pared y piso en un solo producto. Resistente y duradero, 100W de potencia.",
    price: 55000,
    tag: "Preventa temporada",
  },
  {
    id: "ventilador-startrak",
    name: 'Ventilador de Pie 18" 3 en 1',
    category: "verano-ventilacion",
    brand: "Star Trak",
    image: "ventilador-startrak.jpeg",
    description:
      "5 aspas metálicas tipo hélice, motor 100% cobre de 90W, 3 niveles de potencia, modo oscilante. Incluye versión turbo para colgar.",
    price: 50000,
    tag: "Preventa temporada",
  },
  {
    id: "reposeras",
    name: "Reposeras de 5 Posiciones",
    category: "verano-ventilacion",
    brand: "",
    image: "reposeras.jpeg",
    description:
      "Súper cómodas y prácticas para el río, el campo o el camping. Disponibles en varios colores.",
    price: null,
    tag: "Nuevo ingreso",
  },
  {
    id: "acolchados",
    name: "Acolchados de 3 Piezas",
    category: "hogar-textil",
    brand: "",
    image: "acolchados.jpeg",
    description:
      "Acolchado 2 1/2 plazas + 2 fundas de almohada. Calidad y confort.",
    price: 65000,
    priceOffer: "2 x $119.999",
    tag: "Súper liquidación",
  },
  {
    id: "secador-ropa",
    name: "Secador de Ropa de 3 Niveles",
    category: "hogar-textil",
    brand: "",
    image: "secador-ropa.jpeg",
    description: "Perchero plegable de 3 niveles para uso interior o exterior.",
    price: null,
    tag: "",
  },
  {
    id: "tendedero-alas",
    name: "Tendedero con Alas",
    category: "hogar-textil",
    brand: "Hogar Actual",
    image: "tendedero-alas.jpeg",
    description: "Tendedero plegable con alas, 18 metros de tendido.",
    price: null,
    tag: "",
  },
  {
    id: "conservadoras-grandes",
    name: "Conservadoras / Heladeritas",
    category: "cocina-menaje",
    brand: "",
    image: "conservadoras.jpeg",
    description: "Conservadoras rígidas en varios colores, ideales para el verano.",
    price: 29999,
    tag: "Oferta",
  },
  {
    id: "conservadoras-chicas",
    name: "Conservadoras Chicas",
    category: "cocina-menaje",
    brand: "",
    image: "conservadoras-chicas.jpeg",
    description: "Conservadoras compactas con asa, en varios colores.",
    price: null,
    tag: "",
  },
  {
    id: "bowls-violeta",
    name: "Set de Bowls con Tapa — Violeta",
    category: "cocina-menaje",
    brand: "",
    image: "bowls-violeta.jpeg",
    description: "Set de 5 bowls con tapa hermética, distintos tamaños.",
    price: null,
    tag: "",
  },
  {
    id: "bowls-fucsia",
    name: "Set de Bowls con Tapa — Fucsia",
    category: "cocina-menaje",
    brand: "",
    image: "bowls-fucsia.jpeg",
    description: "Set de 5 bowls con tapa hermética, distintos tamaños.",
    price: null,
    tag: "",
  },
  {
    id: "bowls-rojo",
    name: "Set de Bowls con Tapa — Rojo",
    category: "cocina-menaje",
    brand: "",
    image: "bowls-rojo.jpeg",
    description: "Set de 5 bowls con tapa hermética, distintos tamaños.",
    price: null,
    tag: "",
  },
  {
    id: "parlante-auto",
    name: "Parlante Portátil con Forma de Auto",
    category: "tecnologia",
    brand: "OM",
    image: "parlante-auto.jpeg",
    description:
      "Parlante Bluetooth de 10W de potencia, diseño clásico de auto, disponible en varios colores.",
    price: null,
    tag: "",
  },
];

// ----------------------------------------------------------------------------
// PROMOCIONES — Ofertas destacadas con vigencia y condiciones editables.
// ----------------------------------------------------------------------------
export const promotions = [
  {
    id: "promo-acolchados",
    title: "Súper Liquidación de Acolchados",
    image: "acolchados.jpeg",
    price: "$65.000",
    offer: "2 x $119.999",
    discount: "Ahorrás llevando 2",
    validity: "", // TODO: confirmar vigencia real de la promo
    conditions: "Acolchado 2 1/2 plazas + 2 fundas de almohada.",
  },
  {
    id: "promo-combo-cocina",
    title: "Súper Combo de Cocina",
    image: "combo-batidora-pava.jpeg",
    price: "$29.999",
    offer: "Batidora + Pava eléctrica",
    discount: "",
    validity: "",
    conditions: "Batidor de huevos de mano 2 en 1 + Pava eléctrica de 2L.",
  },
  {
    id: "promo-conservadoras",
    title: "Oferta en Conservadoras",
    image: "conservadoras.jpeg",
    price: "$29.999",
    offer: "Conservadoras rígidas",
    discount: "",
    validity: "",
    conditions: "Varios colores disponibles, sujeto a stock.",
  },
  {
    id: "promo-ventiladores",
    title: "Preventa Temporada Primavera-Verano",
    image: "ventilador-metal.jpeg",
    price: "Desde $50.000",
    offer: "Ventiladores 3 en 1",
    discount: "",
    validity: "Preventa de temporada",
    conditions: "Modelos todo de metal y Star Trak 18’’, sujeto a stock.",
  },
];

// ----------------------------------------------------------------------------
// SERVICIOS — El cliente también ofrece servicios además de productos.
// ----------------------------------------------------------------------------
export const services = [
  {
    id: "espacios-verdes",
    name: "Mantenimiento de Espacios Verdes",
    image: "espacios-verdes.jpeg",
    description:
      "Servicio de mantenimiento de jardines y espacios verdes: corte de pastos, rastrillado, limpieza y retiro de residuos verdes.",
    benefit: "Seriedad y compromiso en cada trabajo.",
    whatsapp: business.whatsappServicios,
    whatsappDisplay: business.whatsappServiciosDisplay,
  },
  {
    id: "reparto",
    name: "Entrega a Domicilio",
    image: "",
    description:
      "Reparto de garrafas y productos seleccionados directamente en tu domicilio.",
    benefit: "Comodidad: recibís tu pedido sin moverte de tu casa.",
    whatsapp: business.whatsapp,
    whatsappDisplay: business.whatsappDisplay,
  },
];

// ----------------------------------------------------------------------------
// GALERÍA — Fotos reales para la sección de galería general.
// ----------------------------------------------------------------------------
export const gallery = [
  "garrafas.jpeg",
  "reposeras.jpeg",
  "ventilador-startrak.jpeg",
  "acolchados.jpeg",
  "bowls-violeta.jpeg",
  "bowls-fucsia.jpeg",
  "bowls-rojo.jpeg",
  "conservadoras.jpeg",
  "conservadoras-chicas.jpeg",
  "parlante-auto.jpeg",
  "secador-ropa.jpeg",
  "tendedero-alas.jpeg",
];

// ----------------------------------------------------------------------------
// ¿POR QUÉ ELEGIR DON CARLOS? — Contenido editable, no confirmado como hecho.
// ----------------------------------------------------------------------------
export const whyUs = [
  {
    id: "variedad",
    title: "Variedad",
    description: "Un solo lugar para encontrar productos de rubros muy distintos.",
  },
  {
    id: "domicilio",
    title: "Entrega a domicilio",
    description: "Llevamos tu pedido de garrafas y otros productos hasta tu casa.",
  },
  {
    id: "atencion",
    title: "Atención personalizada",
    description: "Consultas rápidas y respuesta directa por WhatsApp.",
  },
  {
    id: "novedades",
    title: "Novedades todo el año",
    description: "Nuevos ingresos y preventas de temporada de forma constante.",
  },
];
