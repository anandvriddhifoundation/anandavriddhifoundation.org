const AdFilmSection = () => {
  return (
    <section id="ad-film" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-warm-gold mb-3">
            Watch Our Story
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            See the Joy We Bring
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            A glimpse into what we do, who we serve, and why it matters.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-black">
            <video
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/AVF%20AD%20FILM%20Final%201.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdFilmSection;
