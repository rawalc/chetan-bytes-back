import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import growthLoopDiagram from "@/assets/growth-loop-diagram.jpg";

const EngagementSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="section-heading">
            Nail the user engagement, acquisition will follow
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Which product gets more viral – the one with 1x usage a week or the one with 10x? 
            I find addictive solutions to recurring user problems.
          </p>
        </div>
        
        <Card className="bg-gradient-card border-border/20 p-8 shadow-card hover-lift">
          <img 
            src={growthLoopDiagram} 
            alt="Product Growth Loop Diagram"
            className="w-full max-w-3xl mx-auto rounded-lg"
          />
        </Card>
        
        <div className="text-center pt-8">
          <Button variant="cta" size="lg">
            Transform Your Products To Contribute To Growth
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;