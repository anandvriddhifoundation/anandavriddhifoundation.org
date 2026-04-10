import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PillarsSection from '@/components/PillarsSection';
import TestimonialsClient from '@/components/TestimonialsClient';
import DekhoSection from '@/components/DekhoSection';
import DirectorsSection from '@/components/DirectorsSection';
import DonateSection from '@/components/DonateSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <TestimonialsClient />
      <DekhoSection />
      <DirectorsSection />
      <DonateSection />
    </main>
  );
}
