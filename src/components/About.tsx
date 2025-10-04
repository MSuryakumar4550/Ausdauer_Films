import { Award, Users, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized globally for excellence in cinematography and storytelling",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry veterans with decades of combined experience",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your vision is our mission. We deliver beyond expectations",
  },
  {
    icon: Zap,
    title: "Cutting-Edge",
    description: "Latest technology and techniques for stunning results",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                About <span className="text-gradient">Ausdauer Films</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2014, Ausdauer Films has established itself as a premier video production
                company, creating compelling visual narratives that resonate with audiences worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our passion lies in transforming ideas into powerful visual experiences. With a team
                of dedicated professionals and state-of-the-art equipment, we bring cinematic quality
                to every project, regardless of scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square rounded-3xl overflow-hidden elegant-shadow">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop"
                alt="Professional video production team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
