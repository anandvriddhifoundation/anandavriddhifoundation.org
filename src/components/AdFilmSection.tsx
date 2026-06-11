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

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-black aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Yi_KeeKBRFc?autoplay=1&mute=1&playsinline=1&rel=0"
              title="AVF Ad Film"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdFilmSection;
