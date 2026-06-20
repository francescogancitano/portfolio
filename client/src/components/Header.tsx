import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Neo-Brutalism Mobile-First
 * Sticky header with smooth scroll navigation
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'CHI SONO', href: '#about' },
    { label: 'ESPERIENZE', href: '#experiences' },
    { label: 'CERTIFICATI', href: '#certificates' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('#')} className="cursor-pointer">
            <div>
              <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest">
                [DEV]
              </div>
              <div className="text-xs font-mono tracking-widest">PORTFOLIO</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white px-3 py-2 transition-all duration-150 cursor-pointer border-2 border-transparent hover:border-black"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block brutalist-button text-xs"
          >
            CONTATTAMI
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-150"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 border-t-4 border-black pt-4 space-y-2">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left text-sm font-bold uppercase tracking-wider py-3 px-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full brutalist-button mt-4 text-sm"
            >
              CONTATTAMI
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
