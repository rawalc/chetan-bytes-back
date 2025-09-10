import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfessionalSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="section-heading">
            More Than A Product Manager
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Jack of all, a master of Product. Chetan spends 100 hour weeks when your business demands to go beyond Product Management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Data Science Section */}
          <Card className="bg-card border-border/20 shadow-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                Data Science And Engineering
                <Badge variant="secondary">Expert</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Chetan worked for MATLAB. And now uses Python and SQL to do data engineering and analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  He hired 2 Growth data analysts, 1 data engineer at Upwork.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  He had 2 job offers for a Data Scientist role. Digging deep, he stuck to being a data driven PM, instead.
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Customer Lifecycles Section */}
          <Card className="bg-card border-border/20 shadow-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                Customer Lifecycles
                <Badge variant="secondary">Growth</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground">Continuous onboarding:</strong> Onboarding continues beyond the top-of-the-funnel. Cross-sell and up-sell with Machine Learning and AI models to achieve double digit growth
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground">Email, Slack, WhatsApp:</strong> Engage your users when they're logged out. All touch points are part of a flow.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;