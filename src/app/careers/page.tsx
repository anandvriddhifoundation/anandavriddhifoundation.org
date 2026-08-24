import type { Metadata } from 'next';
import {
  Briefcase,
  CalendarDays,
  Camera,
  CheckCircle2,
  Compass,
  Eye,
  IndianRupee,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';
import TrackedApplyLink from './TrackedApplyLink';

export const metadata: Metadata = {
  title: 'Careers — Ananda Vriddhi Foundation',
  description:
    'Executive — VR for Social Impact at Ananda Vriddhi Foundation. Pune | Full-time | 1–2 years experience. Run immersive VR shows for senior citizens and children, and drive digital outreach for social impact.',
  keywords:
    'avf careers,ngo jobs pune,social impact jobs,vr for good,digital fundraising jobs,ananda vriddhi foundation careers',
  openGraph: {
    title: 'Careers at Ananda Vriddhi Foundation',
    description:
      'Executive — VR for Social Impact | Pune | Full-time | 1–2 years experience.',
    type: 'website',
  },
};

const APPLY_EMAIL = 'hr@youtellme.ai';
const APPLY_PHONE_DISPLAY = '89564 65260';
const APPLY_PHONE_HREF = 'tel:+918956465260';
const MAIL_HREF = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
  'Application — Executive, VR for Social Impact',
)}`;

const jobMeta = [
  { icon: MapPin, label: 'Pune, Maharashtra' },
  { icon: Briefcase, label: 'Full-time · In person' },
  { icon: Sparkles, label: '1–2 years experience' },
  { icon: IndianRupee, label: '₹15,000 – ₹30,000 per month' },
  { icon: CalendarDays, label: 'Posted 20 July 2026' },
];

const responsibilities = [
  'Manage VR shows end-to-end — planning, coordination, on-ground execution, and follow-ups',
  'Engage directly with senior citizens and children to make every session meaningful',
  'Coordinate with NGOs, schools, and community partners',
  'Create and run digital outreach initiatives that support fundraising',
  'Drive donation campaigns, especially across social media and online channels',
  'Capture stories, feedback, and impact moments that bring AVF’s work to life',
];

const requirements = [
  '1–2 years of experience — social sector, events, community work, or digital marketing all welcome',
  'A real belief in social impact, and comfort working closely with underserved communities',
  'Equally comfortable in the field and behind a screen',
  'Strong communication and coordination skills',
  'Self-driven, empathetic, adaptable — someone who figures things out',
];

const whyJoin = [
  {
    icon: Eye,
    title: 'Impact you can actually see',
    desc: 'Not a KPI on a slide, but a face lighting up in a headset. You will witness it, session after session.',
  },
  {
    icon: Sparkles,
    title: 'Tech + heart, not tech or heart',
    desc: 'VR for social good is still uncharted territory in India. You will be one of the very few people your age actually building hands-on experience with immersive tech for impact.',
  },
  {
    icon: Rocket,
    title: 'Real ownership, not busywork',
    desc: 'You will run shows and own campaigns, and see your ideas go live in days — not get stuck in quarters of approvals.',
  },
  {
    icon: Camera,
    title: 'Build your portfolio while you build ours',
    desc: 'Every reel, campaign, and story you create is also proof of your own range: content, community, fundraising, event ops, storytelling. Most first jobs make you pick one lane. This one does not.',
  },
  {
    icon: Users,
    title: 'A small team, not a headcount',
    desc: 'You will work closely with the founders and core team, not get lost in layers of hierarchy. Your ideas actually shape how AVF grows.',
  },
  {
    icon: Compass,
    title: 'Variety over routine',
    desc: 'One week you are on-ground running a VR show at a school, the next you are behind a laptop driving a donation campaign. If a fixed desk and a fixed routine sound like a slow death, this is the opposite of that.',
  },
  {
    icon: Megaphone,
    title: 'Work that’s genuinely worth talking about',
    desc: 'For once, posting about your job is not cringe. It is the story.',
  },
];

const tags = [
  '#SocialImpactJobs',
  '#NGOCareers',
  '#CSRIndia',
  '#DigitalFundraising',
  '#CommunityWork',
  '#VRforGood',
  '#PurposeDrivenWork',
  '#ImpactCareers',
];

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Executive — VR for Social Impact',
  description:
    'Manage VR shows end-to-end, engage with senior citizens and children, coordinate with NGOs, schools and community partners, run digital outreach and donation campaigns, and capture the stories behind our work.',
  datePosted: '2026-07-20',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Ananda Vriddhi Foundation',
    sameAs: 'https://anandvriddhifoundation.com',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  },
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 15000,
      maxValue: 30000,
      unitText: 'MONTH',
    },
  },
  experienceRequirements: {
    '@type': 'OccupationalExperienceRequirements',
    monthsOfExperience: 12,
  },
  applicantLocationRequirements: {
    '@type': 'Country',
    name: 'India',
  },
};

const CareersPage = () => {
  return (
    <main className="pt-28 pb-16 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Header + role card */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-sans font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
            Careers
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-4">
            Work With Us
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We sit at the intersection of empathy, innovation, and community —
            and we&apos;re looking for someone who wants to live there too.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#f9f3eb] rounded-2xl border border-border p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground mb-3">
            Executive — VR for Social Impact
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Ananda Vriddhi Foundation (AVF)
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {jobMeta.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground"
              >
                <item.icon className="w-4 h-4 text-brand-gold" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedApplyLink
              href={MAIL_HREF}
              source="hero_email"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 text-white shadow-lg hover:bg-amber-600 active:scale-95 font-semibold tracking-wide text-base px-8 py-4 transition-all"
            >
              <Mail className="w-5 h-5" />
              Apply via Email
            </TrackedApplyLink>
            <TrackedApplyLink
              href={APPLY_PHONE_HREF}
              source="hero_phone"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card text-foreground hover:bg-primary/5 active:scale-95 font-semibold tracking-wide text-base px-8 py-4 transition-all"
            >
              <Phone className="w-5 h-5 text-brand-gold" />
              {APPLY_PHONE_DISPLAY}
            </TrackedApplyLink>
          </div>
        </div>
      </section>

      {/* About the role */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground mb-6">
            About the Role
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At AVF, we use immersive Virtual Reality experiences to bring joy,
            connection, and new perspectives to senior citizens and children from
            economically weaker sections. This role puts you at the centre of
            that work — on the ground with our communities, and behind the screen
            telling their stories.
          </p>
        </div>
      </section>

      {/* What you'll do / Who we're looking for */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-serif font-normal text-foreground mb-6">
              What You&apos;ll Do
            </h2>
            <ul className="space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h2 className="text-xl md:text-2xl font-serif font-normal text-foreground mb-6">
              Who We&apos;re Looking For
            </h2>
            <ul className="space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why join AVF */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground text-center mb-10">
            Why Join AVF
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoin.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-8 shadow-sm border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-8 h-8 text-brand-gold" />
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
      </section>

      {/* Apply */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-3xl mx-auto bg-[#f9f3eb] rounded-2xl border border-border p-10 md:p-12 text-center shadow-sm">
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground mb-4">
            Apply or Reach Out
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Send us your CV and a short note about why this role speaks to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedApplyLink
              href={MAIL_HREF}
              source="footer_email"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 text-white shadow-lg hover:bg-amber-600 active:scale-95 font-semibold tracking-wide text-base px-8 py-4 transition-all"
            >
              <Mail className="w-5 h-5" />
              {APPLY_EMAIL}
            </TrackedApplyLink>
            <TrackedApplyLink
              href={APPLY_PHONE_HREF}
              source="footer_phone"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card text-foreground hover:bg-primary/5 active:scale-95 font-semibold tracking-wide text-base px-8 py-4 transition-all"
            >
              <Phone className="w-5 h-5 text-brand-gold" />
              {APPLY_PHONE_DISPLAY}
            </TrackedApplyLink>
          </div>
          <p className="text-base text-muted-foreground mt-8 italic">
            Work location: in person, Pune.
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="container mx-auto px-4 mt-12">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-muted-foreground/70 bg-muted rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
