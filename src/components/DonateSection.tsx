import { Button } from '@/components/ui/button';
import { Heart, Gift, HandHeart } from 'lucide-react';

const DonateSection = () => {
  return (
    <section id="donate" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-heart-red/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-heart-red" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Your Support Creates{' '}
            <span className="text-gradient-warm">Real Smiles</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Every donation helps us reach one more old age home, one more orphanage, one more school. Together, we can let thousands experience the beauty of India — and the joy of discovery. We are  registered and fully compliant with all regulatory requirements for receiving donations.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Gift className="w-6 h-6" />,
                title: '₹1000',
                desc: '1 VR Session for 25 Childern',
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: '₹2,500',
                desc: '1 Group Session for Old Age Home',
              },
              {
                icon: <HandHeart className="w-6 h-6" />,
                title: '₹10,000',
                desc: 'Sponsors 4 institutional visits',
              },
            ].map((tier, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors text-warm-gold">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">
                  {tier.title}
                </h3>
                <p className="text-sm text-muted-foreground">{tier.desc}</p>
              </div>
            ))}
          </div>

          <Button
            variant="donate"
            size="lg"
            className="text-lg px-12 py-6"
            asChild
          >
            <a
              href="/images/donate_us_qr_code.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            All donations are eligible for tax exemption under applicable
            sections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
