import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Certificates Page - Neo-Brutalism Mobile-First
 */

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'React Advanced Patterns',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/abstract-aurora-pattern-5Vgh3D9N6R2XXB8VdAowrg.webp',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: '2023',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/hero-aurora-background-WxyLYNTF48KY6KrnPrpkdr.webp',
  },
  {
    id: 3,
    title: 'TypeScript Mastery',
    issuer: 'Pluralsight',
    date: '2022',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/abstract-aurora-pattern-5Vgh3D9N6R2XXB8VdAowrg.webp',
  },
  {
    id: 4,
    title: 'Node.js Complete Guide',
    issuer: 'Udemy',
    date: '2022',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/hero-aurora-background-WxyLYNTF48KY6KrnPrpkdr.webp',
  },
  {
    id: 5,
    title: 'Web Design Fundamentals',
    issuer: 'LinkedIn Learning',
    date: '2021',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/abstract-aurora-pattern-5Vgh3D9N6R2XXB8VdAowrg.webp',
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <section className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter"
          >
            CERTIFICATI
          </motion.h1>

          {/* Grid - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 auto-rows-max">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
                className={`brutalist-card group cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ${
                  idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${idx === 3 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
                style={{ transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * 1.5}deg)` }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 md:h-40 object-cover border-2 border-black mb-4 group-hover:border-white"
                />
                <h3 className="font-bold uppercase tracking-wider text-xs md:text-sm mb-2">{cert.title}</h3>
                <p className="font-mono text-xs mb-1">{cert.issuer}</p>
                <p className="font-mono text-xs opacity-70">{cert.date}</p>
              </motion.div>
            ))}
          </div>

          {/* CV Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="brutalist-card bg-black text-white border-4 border-white text-center py-8 md:py-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4">SCARICA IL MIO CV</h3>
            <p className="font-mono text-xs md:text-sm mb-6 max-w-md mx-auto">
              Ottieni una copia completa del mio Curriculum Vitae Europeo con tutte le mie esperienze, competenze e certificazioni.
            </p>
            <button className="brutalist-button-inverted flex items-center justify-center gap-2 mx-auto text-xs md:text-base">
              <Download size={20} />
              SCARICA CV
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
