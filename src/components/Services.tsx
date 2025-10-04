import { Video, Camera, Film, Tv, Clapperboard, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Video,
    title: "Corporate Videos",
    description: "Experience high-impact corporate content crafted with cinematic elegance and unwavering professionalism—capturing attention, inspiring audiences, and elevating your brand with clarity and confidence.",
  },
  {
    icon: Camera,
    title: "Commercial Production",
    description: "Ignite brand awareness with premium commercials that captivate, inspire, and drive measurable results—crafted with cinematic flair, bold storytelling, and professional clarity across every platform.",
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "Immersive storytelling brought to life—feature films and documentaries masterfully crafted with cinematic artistry, emotional depth, and a bold narrative voice that leaves a lasting impression.",
  },
  {
    icon: Tv,
    title: "Broadcast Content",
    description: "Broadcast-ready productions engineered to meet the highest industry standards, delivering flawless quality and professional presentation for every screen.",
  },
  {
    icon: Clapperboard,
    title: "Event Coverage",
    description: "Preserve your cherished moments with cinematic elegance and expert editing—transforming every frame into a timeless story filled with emotion and artistry.",
  },
  {
    icon: Sparkles,
    title: "Post-Production",
    description: "Expertly crafted editing, vibrant color grading, striking visual effects, and immersive sound design—all meticulously combined to bring your creative vision to life with stunning precision.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="elegant-shadow hover:glow transition-all duration-500 group cursor-pointer bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
