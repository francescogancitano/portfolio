import { Link } from 'wouter';

/**
 * Footer Component - Neo-Brutalism Mobile-First
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">[DEV]</h3>
            <p className="font-mono text-xs md:text-sm leading-relaxed">
              Full Stack Developer. <br />
              Building digital experiences <br />
              with code and creativity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 border-b-2 border-white pb-2">
              NAVIGATE
            </h4>
            <ul className="space-y-2 font-mono text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  → HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  → CHI SONO
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  → ESPERIENZE
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  → CERTIFICATI
                </Link>
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
                <Link href="/contact" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150 inline-block">
                  PRENOTA CONSULENZA
                </Link>
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
            <a href="#" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150">
              PRIVACY
            </a>
            <a href="#" className="hover:bg-white hover:text-black px-2 py-1 transition-all duration-150">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
