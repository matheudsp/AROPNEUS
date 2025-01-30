import AboutSection from "@/sections/about-section";
import ServicesSection from "@/sections/services-section";
import FreeService from "@/sections/free-service";
import HeroSection from "@/sections/hero-section";
import LocationSection from "@/sections/location-section";
import ProductsSection from "@/sections/products-section";

import { Divider } from "@heroui/react";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div id="Services">
        <ServicesSection />
      </div>

      <Divider className="my-10 w-full max-w-[90%] mx-auto" />

      <div id="About">
        <AboutSection />
      </div>

      <FreeService />

      <div id="Products">
        <ProductsSection />
      </div>

      <Divider className="mb-10 w-full max-w-[90%] mx-auto" />
      <div id="Location">
      <LocationSection />
      </div>
    </main>
  );
}
