import Image from 'next/image';
import drRaghavanImg from '@/assets/about_us_images/dr_raghavan_square.jpeg';
import mrsVRaoImg from '@/assets/about_us_images/mrs_v_rao_square.png';

const directors = [
  {
    name: 'Dr. Y. Raghavan',
    role: 'Director',
    image: drRaghavanImg,
    imageAlt: 'Dr. Y. Raghavan',
    bio: 'Dr. Raghavan, a Primary and Occupational Healthcare Physician with 40+ years of experience, including 25+ years in corporate health management, excels in integrated health systems and CSR activities.',
  },
  {
    name: 'Mrs. Vidya S. Rao',
    role: 'Director',
    image: mrsVRaoImg,
    imageAlt: 'Mrs. Vidya S. Rao',
    bio: 'Mrs. Vidya S. Rao brings the warmth of a devoted homemaker and the wisdom of Indian traditional and spiritual practices to the AVF. Deeply rooted in holistic well-being, she channels her passion for community into nurturing better lives — fostering meaningful education for children and dignified, enriching care for seniors.',
  },
];

const DirectorsSection = () => {
  return (
    <section id="our-team" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-warm-gold mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-4">
            Our Directors
          </h2>
          <div className="w-16 h-1 bg-warm-gold mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-start gap-8 max-w-4xl mx-auto">
          {directors.map((director) => (
            <div
              key={director.name}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full sm:w-72"
            >
              {/* Photo */}
              <div className="w-full aspect-square bg-muted overflow-hidden">
                <Image
                  src={director.image}
                  alt={director.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-1">
                  {director.name}
                </h3>
                <p className="text-sm font-semibold text-warm-gold text-center uppercase tracking-widest mb-4">
                  {director.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {director.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
