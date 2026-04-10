import { MapPin, Eye, Smile } from 'lucide-react';

const DekhoSection = () => {
  return (
    <section id="dekho" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-warm-gold mb-3">
            Our Signature Programme
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            🇮🇳 Dekho Apna Desh
          </h2>
          <p className="text-xl md:text-2xl font-serif font-medium text-foreground mb-4 max-w-2xl mx-auto">
            India is breathtaking. Not everyone gets to see it. We change that.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            In partnership with{' '}
            <span className="font-semibold text-foreground">
              TellMe Digiinfotech
            </span>
            , we procure high-quality VR footage of India's most iconic
            destinations and bring them to communities who may never get to
            travel. A virtual pilgrimage of joy, wonder, and national pride.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-warm-gold" />,
                title: 'Immersive VR Tours',
                desc: "360° high-quality footage of India's heritage sites, temples, hill stations, and national landmarks.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-warm-gold" />,
                title: 'Pan-India Coverage',
                desc: 'From the Himalayas to Rameshwaram, from Rajasthan forts to Meghalaya — India comes alive.',
              },
              {
                icon: <Smile className="w-8 h-8 text-warm-gold" />,
                title: 'Joy & Education',
                desc: 'Every session combines entertainment with learning — geography, culture, and history through experience.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-8 shadow-sm border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-normal text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DekhoSection;
