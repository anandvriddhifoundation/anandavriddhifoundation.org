'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { futuraFont } from '@/assets/fonts';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const prefix = isHome ? '' : '/';

  const navLinks = [
    { label: 'Home', href: `${prefix}#home` },
    { label: 'About', href: `${prefix}#about` },
    { label: 'What We Do', href: `${prefix}#what-we-do` },
    { label: 'Impact', href: `${prefix}#impact` },
    { label: 'Dekho Apna Desh', href: `${prefix}#dekho-apna-desh` },
    { label: 'Contact', href: `${prefix}#contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href={`${prefix}#home`} className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Ananda Vriddhi Foundation Logo"
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-semibold text-muted-foreground hover:text-foreground transition-colors ${futuraFont.className}`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="donate" size="lg" asChild>
            <a href={`${prefix}#donate`}>
              <Heart className="w-4 h-4" />
              Donate Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-2 text-base font-normal text-muted-foreground hover:text-foreground ${futuraFont.className}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="donate" className="w-full mt-3" asChild>
            <a href={`${prefix}#donate`}>
              <Heart className="w-4 h-4" />
              Donate Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
