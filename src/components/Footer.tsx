import { Mail, Globe, Heart, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#f9f3eb] text-foreground text-lg pt-10 pb-5 font-semibold"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image
              src={logo}
              alt="Ananda Vriddhi Foundation Logo"
              className="h-32 w-auto mb-6"
            />
            <p className="text-foreground/80 leading-relaxed text-lg">
              Pioneers in using VR technology for social outreach — bringing the
              beauty of India to those who can't travel. Registered NGO with all
              regulatory approvals.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-2xl mb-4 text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'What We Do', 'Impact', 'Dekho Apna Desh'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-lg text-foreground/70 hover:text-warm-gold transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-2xl mb-4 text-foreground">
              Connect With Us
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/anandavriddhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-foreground/70 hover:text-warm-gold transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                @anandavriddhi
              </a>
              <a
                href="https://www.anandavriddhifoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-foreground/70 hover:text-warm-gold transition-colors"
              >
                <Globe className="w-6 h-6" />
                anandavriddhifoundation.org
              </a>
              <a
                href="mailto:info@anandavriddhifoundation.org"
                className="flex items-center gap-3 text-lg text-foreground/70 hover:text-warm-gold transition-colors"
              >
                <Mail className="w-6 h-6" />
                info@anandavriddhifoundation.org
              </a>
              <a
                href="tel:+919175701913"
                className="flex items-center gap-3 text-lg text-foreground/70 hover:text-warm-gold transition-colors"
              >
                <Phone className="w-6 h-6" />
                +91 917 570 1913
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base text-foreground/60">
            © {new Date().getFullYear()} Ananda Vriddhi Foundation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="/privacy-policy"
              className="text-base text-foreground/60 hover:text-warm-gold transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-foreground/30">|</span>
            <a
              href="/terms-and-conditions"
              className="text-base text-foreground/60 hover:text-warm-gold transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="text-foreground/30 hidden md:inline">|</span>
            <p className="text-base text-foreground/60 flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-heart-red" /> for a better
              India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
