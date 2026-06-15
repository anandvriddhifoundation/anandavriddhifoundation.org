'use client';

import { Button } from '@/components/ui/button';
import { HandHeart, HeartHandshake, Sparkles, ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const FORM_URL =
  'https://docs.google.com/forms/d/1GuYTj_R4RR5l9aHap4gOp3IbslAX4IjGrMqIg12ozYI/viewform';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const trackFormClick = (source: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'get_involved_form_click', {
      event_category: 'engagement',
      event_label: source,
      form_url: FORM_URL,
    });
  }
};

const GetInvolvedPage = () => {
  const helpItems = [
    {
      icon: <HandHeart className="w-8 h-8 text-warm-gold" />,
      title: 'Volunteer',
      desc: 'Join our activities and help create meaningful moments.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-warm-gold" />,
      title: 'Donate',
      desc: 'Support us in reaching more old age homes and orphanages.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-warm-gold" />,
      title: 'Request a Session',
      desc: 'Invite us to conduct a complimentary VR session at your organisation.',
    },
  ];

  return (
    <main className="pt-28 pb-16 bg-background">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-warm-gradient rounded-2xl border border-border p-10 md:p-12 text-center shadow-sm">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-warm-gold mb-3">
            Get Involved
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-4">
            Join Our Mission
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fill out the form below and become a part of this journey.
          </p>
          <Button
            variant="donate"
            size="lg"
            className="text-base px-8 py-6"
            asChild
          >
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFormClick('cta_button')}
            >
              <ExternalLink className="w-5 h-5" />
              Fill the Form
            </a>
          </Button>
          <p className="text-base text-muted-foreground mt-8 italic">
            Together, let&apos;s bring the world closer to them.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Be a Part of Someone&apos;s Smile
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            At Ananda Vriddhi Foundation, we bring joy, wonder, and connection
            to senior citizens and children through immersive Virtual Reality
            (VR) journeys.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Through our <span className="font-semibold text-foreground">Dekho Apna Desh</span>{' '}
            initiative, they can experience temple darshans, explore India&apos;s rich
            heritage, visit iconic destinations like Kashmir, and discover new
            places through storytelling — all from the comfort of their homes
            and institutions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground text-center mb-10">
            How You Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {helpItems.map((item) => (
              <div
                key={item.title}
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
          <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            Every contribution — big or small — helps bring smiles, curiosity,
            and unforgettable memories to those who need them most.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">Follow us on Instagram</p>
          <a
            href="https://www.instagram.com/anandavriddhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-warm-gold transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
            @anandavriddhi
          </a>
        </div>
      </section>
    </main>
  );
};

export default GetInvolvedPage;
