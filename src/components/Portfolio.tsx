import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VideoModal from "@/components/ui/VideoModal";

// Import thumbnails (These are correct because they are in the 'src' folder)
import techThumbnail from './thumbnails/tech_summit.png';
import commercialThumbnail from './thumbnails/luxury_brand.png';
import documentaryThumbnail from './thumbnails/urban_stories.png';
import fashionThumbnail from './thumbnails/fashion_week.png';
import productThumbnail from './thumbnails/product_launch.png';
import musicThumbnail from './thumbnails/music_video.png';

// The final, correct portfolioItems array with absolute paths matching your files
const portfolioItems = [
  { title: "Tech Innovation Summit 2024", category: "Corporate", video: "/videos/Tech_Innovation_Summit.mp4", thumbnail: techThumbnail },
  { title: "Luxury Brand Campaign", category: "Commercial", video: "/videos/Commercial_Luxury_Brand.mp4", thumbnail: commercialThumbnail },
  { title: "Documentary: Urban Stories", category: "Film", video: "/videos/Film_Documentary.mp4", thumbnail: documentaryThumbnail },
  { title: "Fashion Week Highlights", category: "Event", video: "/videos/Event_Fashion.mp4", thumbnail: fashionThumbnail },
  { title: "Product Launch Video", category: "Commercial", video: "/videos/Commercial_Product_Launch.mp4", thumbnail: productThumbnail },
  { title: "Music Video Production", category: "Music", video: "/videos/Music_Video_Production.mp4", thumbnail: musicThumbnail },
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <> {/* Use a fragment to wrap the section and the modal */}
      <section id="portfolio" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our finest work across diverse industries and formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer elegant-shadow hover:glow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedVideo(item.video)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-foreground ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render the modal at the end */}
      {selectedVideo && (
        <VideoModal
          videoSrc={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default Portfolio;
