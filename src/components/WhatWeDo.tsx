import Link from 'next/link';
import Image from 'next/image';
import educationImg from '@/assets/what_we_do_images/education/FDS_0973.jpg';
import elderlyCareImg from '@/assets/what_we_do_images/elderly_care/IMG_0139.jpg';
import ruralImpactImg from '@/assets/hero_images/rural_impact.jpg';

const programmes = [
  {
    title: 'Elderly Care & Well-Being',
    description:
      'We bring immersive VR travel experiences to senior citizens, helping combat loneliness and restore joy. Our elders virtually visit India\'s most beautiful destinations from the comfort of their homes.',
    image: elderlyCareImg,
    href: '/what-we-do/elderly-care',
    tag: 'Old Age Homes',
    stat: '15+ Homes Visited',
  },
  {
    title: 'Education & Skill Development',
    description:
      'VR transforms learning from textbooks into experiences — making geography, history, and culture come alive for students in underserved schools across India.',
    image: educationImg,
    href: '/what-we-do/education',
    tag: 'Schools',
    stat: '10+ Schools Covered',
  },
  {
    title: 'Rural Impact & Community Outreach',
    description:
      'We extend our reach to orphanages and rural communities, ensuring every child regardless of background gets access to immersive educational VR experiences.',
    image: ruralImpactImg,
    href: '/what-we-do/education',
    tag: 'Orphanages & Rural',
    stat: '200+ Lives Touched',
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-amber-500 mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Three pillars of compassion — spreading joy and knowledge through
            immersive virtual experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {prog.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {prog.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {prog.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-600">
                    {prog.stat}
                  </span>
                  <Link
                    href={prog.href}
                    className="text-sm font-semibold text-primary hover:text-amber-600 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: '🕶️', title: 'VR Technology', desc: 'High-quality 360° immersive experiences' },
            { icon: '🇮🇳', title: 'Pan-India Reach', desc: 'From Himalayas to Kanyakumari' },
            { icon: '❤️', title: 'Social Impact', desc: 'Registered NGO with full compliance' },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
