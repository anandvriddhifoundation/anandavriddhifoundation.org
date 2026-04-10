import { Shield, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-warm-gold" />,
      title: 'Innovation with Purpose',
      desc: 'We harness cutting-edge VR technology not only for entertainment, but  also for genuine social impact.',
    },
    {
      icon: <Users className="w-6 h-6 text-warm-gold" />,
      title: 'Inclusive Outreach',
      desc: 'Serving old age homes, orphanages, and schools for economically weaker and differently-abled communities.',
    },
    {
      icon: <Shield className="w-6 h-6 text-warm-gold" />,
      title: 'Fully Compliant',
      desc: 'We hold all necessary regulatory approvals to conduct activities and receive donations transparently.We issue receipt  for claiming IT exemption under Sec 80G.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-sans font-semibold text-amber-500 tracking-[0.15em] uppercase text-warm-gold mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Bringing Joy Through Technology
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ananda Vriddhi Foundation is a pioneering NGO in India using
            high-quality VR footage to give virtual tours of India&apos;s most
            beautiful destinations to underserved communities. In collaboration
            with{' '}
            <span className="font-semibold text-foreground">
              TellMe Digiinfotech
            </span>
            , we procure immersive content and conduct our signature{' '}
            <span className="font-normal text-warm-gold">
              &quot;Dekho Apna Desh&quot;
            </span>{' '}
            programme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="text-xl font-serif font-normal text-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
