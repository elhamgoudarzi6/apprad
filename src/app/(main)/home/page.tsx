import Faq from "./components/faq";
import Hero from "./components/hero";
import Packages from "./components/packages";
import Partners from "./components/partners";
import Services from "./components/services";
import Slogan from "./components/slogan";
import WhyUs from "./components/why";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Slogan />
      <Packages />
      <Faq />
      <WhyUs />
      <Partners />

    </main>
  );
};

export default HomePage;
