import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        <h1 className="hero-text">
          Products Are The Centerpiece of Growth In Tech
        </h1>
        
        <p className="body-large max-w-2xl mx-auto">
          Chetan builds B2B SaaS products with product led growth principles
        </p>
        
        <div className="pt-4">
          <Button variant="hero" className="animate-scale-in" asChild>
            <a href="https://calendly.com/chetan_rawal/conversation-with-chetan" target="_blank" rel="noopener noreferrer">
              Discuss Your Product Management Needs
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;