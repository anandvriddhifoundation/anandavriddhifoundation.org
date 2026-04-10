"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "VR Sessions Delivered", icon: "📚" },
  { value: 300, suffix: "+", label: "Lives Touched", icon: "💛" },
  { value: 15, suffix: "+", label: "Institutional Partners", icon: "🤝" },
  { value: 100, suffix: "+", label: "Passionate Volunteers", icon: "💪" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-serif font-semibold text-primary-foreground">
      {count}
      {suffix}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Our Impact
          </h2>
		  
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-secondary-foreground">
            Numbers That Tell a Story
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-secondary-foreground/70 font-sans text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
