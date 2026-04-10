import Image from 'next/image';
import seniorsImg from '@/assets/what_we_do_images/elderly_care/IMG_0139.jpg';
import orphanageImg from '@/assets/what_we_do_images/orphanage/Untitled design.png';
import childrenImg from '@/assets/what_we_do_images/education/FDS_0973.jpg';

const pillars = [
  {
    title: 'Old Age Homes',
    subtitle: 'Elderly Care & Well-Being',
    description:
      'We bring immersive VR travel experiences to senior citizens, helping combat loneliness and boredom. From the comfort of their homes, elders virtually visit the Taj Mahal, Kerala backwaters, and Himalayan peaks — sparking joy and supporting cognitive health.',
    points: [
      'Combats loneliness and social isolation',
      'Stimulates memory and cognitive well-being',
      'Virtual pilgrimage experiences across India',
    ],
    image: seniorsImg,
    alt: 'Senior citizens experiencing VR tours at an old age home',
  },
  {
    title: 'Orphanages',
    subtitle: 'Dreams Without Boundaries',
    description:
      "Children in orphanages rarely get the chance to travel. Through VR, we give them the gift of exploration — letting them discover India's heritage, wildlife, and wonders. Every session brings wonder, laughter, and new dreams.",
    points: [
      "Immersive discovery of India's heritage and nature",
      'Encourages curiosity, creativity, and wonder',
      'Joyful shared experiences in group settings',
    ],
    image: orphanageImg,
    alt: 'Orphanage children smiling while experiencing VR',
  },
  {
    title: 'Schools',
    subtitle: 'Education for All Abilities',
    description:
      'We partner with schools serving economically weaker sections and differently-abled students. VR transforms learning from textbooks into experiences — making geography, history, and culture come alive in ways students never imagined.',
    points: [
      'Gaining knowledge through immersive virtual tourist vistis',
      'Equal access to immersive education for EWS students',
      'Supports differently-abled learners with rich sensory experiences',
    ],
    image: childrenImg,
    alt: 'School children learning through VR technology',
  },
];

const PillarsSection = () => {
  return (
    <section id="what-we-do" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-amber-500 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Three Pillars of Compassion
          </h2>
          <p className="text-lg text-muted-foreground">
            Our social outreach spans three vital segments, each united by one
            goal — spreading joy and knowledge through immersive virtual
            experiences.
          </p>
        </div>

        <div className="space-y-20">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group h-80">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                    {pillar.stat}
                  </div> */}
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm font-semibold text-amber-500 tracking-wider uppercase mb-2">
                  {pillar.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {pillar.description}
                </p>
                {pillar.points && (
                  <ul className="space-y-3">
                    {pillar.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-muted-foreground text-[1.05rem]"
                      >
                        <span className="text-amber-500 mr-3 text-xl leading-none">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
