import { useState } from 'react';
import { Link } from 'wouter';

/**
 * Footer Component - Neo-Brutalism Mobile-First
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black text-white border-t-4 border-white relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">[DEV]</h3>
            <p className="font-mono text-xs md:text-sm leading-relaxed">
              Full Stack Developer. <br />
              Building digital experiences <br />
              with code and love.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 border-b-2 border-white pb-2">
              NAVIGATE
            </h4>
            <ul className="space-y-2 font-mono text-xs md:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('#')}
                  className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block cursor-pointer text-left"
                >
                  → HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block cursor-pointer text-left"
                >
                  → CHI SONO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experiences')}
                  className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block cursor-pointer text-left"
                >
                  → ESPERIENZE
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#certificates')}
                  className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block cursor-pointer text-left"
                >
                  → CERTIFICATI
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 border-b-2 border-white pb-2">
              CONTACT
            </h4>
            <div className="space-y-3 font-mono text-xs md:text-sm">
              <div>
                <a href="tel:+393476102803" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  +39 347 610 2803
                </a>
              </div>
              <div>
                <a href="mailto:francescogancitano411@gmail.com" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  francescogancitano411@gmail.com
                </a>
              </div>
              <div>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block cursor-pointer text-left"
                >
                  PRENOTA CONSULENZA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-white my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs">
          <p>© {currentYear} PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 cursor-pointer"
            >
              PRIVACY
            </button>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 cursor-pointer"
            >
              TERMS
            </button>
          </div>
        </div>
      </div>

      {/* Custom Neo-Brutalist Modal Overlay */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="border-4 border-black bg-white text-black p-6 md:p-8 max-w-md w-full relative shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            {/* Close Button */}
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 border-2 border-black bg-yellow-400 text-black px-2 py-1 font-bold text-xs hover:bg-black hover:text-yellow-400 transition-all duration-100 cursor-pointer font-mono"
            >
              [X] CHIUDI
            </button>

            {/* Modal Title */}
            <h3 className="text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2 tracking-wider">
              {modalContent === 'privacy' ? 'Informativa Privacy' : 'Termini di Servizio'}
            </h3>

            {/* Modal Body */}
            <p className="font-mono text-xs md:text-sm leading-relaxed mb-6">
              {modalContent === 'privacy' ? (
                "Questo sito web è un portfolio personale. Non raccoglie, non memorizza e non tratta alcun tipo di dato personale o cookie di profilazione degli utenti. I dati inseriti nel modulo di contatto (nome, email, telefono, messaggio) vengono utilizzati esclusivamente per rispondere alle richieste tramite EmailJS e non vengono salvati in alcun database."
              ) : (
                "L'uso di questo sito è gratuito e a scopo puramente informativo e di portfolio. Tutti i contenuti, i progetti, le grafiche e i certificati mostrati appartengono a Francesco Gancitano o ai rispettivi titolari dei diritti. Non è consentito l'uso commerciale o la riproduzione non autorizzata dei materiali presenti su questo sito."
              )}
            </p>

            {/* Accept/Confirm Button */}
            <button
              onClick={() => setModalContent(null)}
              className="w-full bg-yellow-400 hover:bg-black hover:text-yellow-400 border-2 border-black text-black font-bold uppercase tracking-wider py-2 transition-all duration-150 cursor-pointer text-xs md:text-sm text-center"
            >
              Ho capito
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
