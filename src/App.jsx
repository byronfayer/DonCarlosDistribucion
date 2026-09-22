import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import FeaturedProducts from "./sections/FeaturedProducts";
import Promotions from "./sections/Promotions";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import GallerySection from "./sections/GallerySection";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    const el = document.getElementById("productos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories onSelectCategory={handleSelectCategory} />
        <FeaturedProducts
          activeCategory={activeCategory}
          onChangeCategory={setActiveCategory}
        />
        <Promotions />
        <Services />
        <WhyUs />
        <GallerySection />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
