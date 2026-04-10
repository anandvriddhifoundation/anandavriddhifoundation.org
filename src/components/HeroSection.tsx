import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/home_page/horizontal_3.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Elderly woman experiencing virtual reality with pure joy"
        className="absolute inset-0 w-full h-full object-cover object-right-top"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="animate-fade-up text-amber-400 font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
          Pioneers in VR Social Outreach
        </p>
        <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-tight max-w-4xl mx-auto [text-shadow:_2px_4px_10px_rgb(0_0_0_/_80%)]">
          Virtual Experiences.{" "}
          <span className="text-amber-400">Real Joy.</span>
        </h1>
        <p className="animate-fade-up mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-sans leading-relaxed [text-shadow:_1px_2px_4px_rgb(0_0_0_/_80%)]">
          Bringing the wonders of India to those who can't travel — seniors in old age homes,
          children in orphanages, and students in underserved schools — through immersive VR experiences.
        </p>
        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#donate">
              <Heart className="w-5 h-5" />
              Support Our Mission
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#what-we-do">
              <Play className="w-5 h-5" />
              See Our Work
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
