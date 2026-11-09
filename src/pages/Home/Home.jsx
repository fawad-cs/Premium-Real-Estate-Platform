import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import PropertyCategories from "./PropertyCategories";
import WhyChooseUs from "./WhyChooseUs";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CTA />
      <Newsletter />
    </main>
  );
}

export default Home;