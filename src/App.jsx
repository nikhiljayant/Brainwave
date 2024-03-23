import ButtonGradient from "./assets/assets/svg/ButtonGradient.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
