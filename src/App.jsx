import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CardBlueSection from "./Components/Section/CardBlueSection";
import CardLightBlueSection from "./Components/Section/CardLightBlueSection";
import CardSection from "./Components/Section/CardSection";
import CoreFeatureSection from "./Components/Section/CoreFeatureSection";
import CTASection from "./Components/Section/CTASection";
import FeatureSection from "./Components/Section/FeatureSection";
import Footer from "./Components/Section/Footer";
import HeroSection from "./Components/Section/HeroSection";
import RazorPaySection from "./Components/Section/RazorPaySection";
import TestimonialSection from "./Components/Section/TestimonialSection";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <CardBlueSection />
      <CardLightBlueSection />
      <CoreFeatureSection />
      <RazorPaySection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
