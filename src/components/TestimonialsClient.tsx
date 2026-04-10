'use client';

import { useEffect, useRef } from 'react';
import { FaInstagram } from 'react-icons/fa';

const reels = [
  {
    video: '/videos/1000120830.mp4',
    insta: 'https://www.instagram.com/reel/DOVmoGSCdQZ/',
  },
  {
    video: '/videos/1000120831.mp4',
    insta: 'https://www.instagram.com/reel/DNVeOi3Bm3D/',
  },
  {
    video: '/videos/1000120832.mp4',
    insta: 'https://www.instagram.com/reel/DLRrs7YPDHD/',
  },
  {
    video: '/videos/1000120834.mp4',
    insta: 'https://www.instagram.com/reel/DBtbJoKvQI5/',
  },
  {
    video: '/videos/1000120835.mp4',
    insta: 'https://www.instagram.com/reel/DAdX7bdo3bS/',
  },
];

export default function ImpactInActionReels() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    let speed = 0.8; // 🔧 adjust speed
    let scrollPos = 0;

    const interval = setInterval(() => {
      scrollPos += speed;
      container.scrollLeft = scrollPos;

      // 🔁 seamless loop reset
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
        container.scrollLeft = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="impact"
      className="relative text-secondary-foreground py-10 sm:py-16"
    >
      {/* Half-height background at bottom 50% */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-secondary" />

      <div className="container mx-auto px-4 sm:px-20 relative z-10">
        {/* Title */}
        <div className="flex justify-center w-full mb-8 mt-4">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">
            Impact in Action
          </h2>
        </div>

        {/* Infinite scroller */}
        <div
          ref={scrollerRef}
          className="w-full overflow-x-hidden flex gap-4 pb-4"
        >
          {[...reels, ...reels].map((item, index) => (
            <a
              key={index}
              href={item.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-[220px] sm:min-w-[260px] rounded-xl overflow-hidden"
            >
              <video
                src={item.video}
                className="w-full h-[360px] sm:h-[420px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Instagram icon */}
              <div className="absolute bottom-3 right-3 bg-black/60 p-2 rounded-full">
                <FaInstagram className="text-white text-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
