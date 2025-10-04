import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional video production background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h6 className="text-5xl md:text-8xl lg:text-6xl font-display font-bold leading-tight mt-10">
            Crafting Powerful Stories
            <br />
            <span className="text-gradient">With Elegance You Can Trust</span>
          </h6>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body mt-2">
            We don’t just create videos—we craft cinematic journeys that move hearts, build brands, and leave a lasting impact. Every frame is bold, every detail refined, every story trustworthy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 glow group"
              onClick={scrollToContact}
            >
              Start Your Legacy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={scrollToPortfolio}
            >
              Discover Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto ">
            {[
              { number: "500+", label: "Transformative Projects" },
              { number: "150+", label: "Brands & Stories Brought to Life" },
              { number: "15+", label: "  Prestigious Awards of Excellence" },
              { number: "10+", label: "Years of Bold, Trusted Craftsmanship" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
