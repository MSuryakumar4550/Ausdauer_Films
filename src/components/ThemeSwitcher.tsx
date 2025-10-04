import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { name: "Cinematic Dark", value: "cinematic", description: "Premium dark with gold accents" },
  { name: "Professional Light", value: "professional", description: "Clean and corporate" },
  { name: "Modern Gradient", value: "modern", description: "Vibrant and contemporary" },
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("cinematic");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "cinematic";
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
    
    const root = document.documentElement;
    if (theme === "cinematic") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => applyTheme(theme.value)}
            className={`cursor-pointer ${currentTheme === theme.value ? "bg-accent" : ""}`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{theme.name}</span>
              <span className="text-xs text-muted-foreground">{theme.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
