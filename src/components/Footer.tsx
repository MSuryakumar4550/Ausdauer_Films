import { Film, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import myImage from '../../public/favicon.ico';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Press"],
    Services: ["Corporate Videos", "Commercials", "Films", "Events"],
    Resources: ["Portfolio", "Blog", "Case Studies", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
              src={myImage} 
              alt="A descriptive caption for the image" 
              className="w-28 h-auto" 
              />
              <span className="text-2xl font-display font-bold">Ausdauer Films</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting cinematic experiences that captivate and inspire. Your story, our expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-all duration-300 hover:glow group"
                  >
                    <Icon className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ausdauer Films. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
