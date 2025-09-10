import Header from "./Header";
import HeroSection from "./HeroSection";
import EngagementSection from "./EngagementSection";
import ProfessionalSection from "./ProfessionalSection";

const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main>
        <HeroSection />
        <EngagementSection />
        <ProfessionalSection />
      </main>
    </div>
  );
};

export default PortfolioLayout;