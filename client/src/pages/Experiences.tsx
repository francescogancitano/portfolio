import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Experiences Page - Neo-Brutalism Mobile-First
 */

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  images: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Company XYZ',
    period: '2022 - Presente',
    description: 'Sviluppo di applicazioni React complesse con architettura scalabile. Implementazione di animazioni avanzate e ottimizzazione delle performance. Collaborazione con team di design e backend per creare esperienze utente eccezionali.',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/hero-aurora-background-WxyLYNTF48KY6KrnPrpkdr.webp',
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/abstract-aurora-pattern-5Vgh3D9N6R2XXB8VdAowrg.webp',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Startup Innovativa',
    period: '2020 - 2022',
    description: 'Creazione di piattaforme web da zero utilizzando React e Node.js. Gestione del database e implementazione di API REST. Ottimizzazione SEO e performance.',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/abstract-aurora-pattern-5Vgh3D9N6R2XXB8VdAowrg.webp',
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/hero-aurora-background-WxyLYNTF48KY6KrnPrpkdr.webp',
    ],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Agenzia Web',
    period: '2019 - 2020',
    description: 'Sviluppo di siti web e landing pages. Apprendimento di best practices e collaborazione con team senior. Primi progetti con React e JavaScript moderno.',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663504546332/RyNMHP2DGyk5PzudxuDgU4/hero-aurora-background-WxyLYNTF48KY6KrnPrpkdr.webp',
    ],
  },
];

export default function Experiences() {
  const [selectedExp, setSelectedExp] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const exp = experiences[selectedExp];
  const currentImage = exp.images[currentImageIdx];

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % exp.images.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + exp.images.length) % exp.images.length);
  };

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
            ESPERIENZE
          </motion.h1>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            {/* Left: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 space-y-3"
            >
              {experiences.map((experience, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedExp(idx);
                    setCurrentImageIdx(0);
                  }}
                  className={`w-full text-left p-3 md:p-4 border-2 transition-all duration-150 ${
                    selectedExp === idx
                      ? 'border-black bg-black text-white'
                      : 'border-black hover:bg-yellow-400'
                  }`}
                >
                  <div className="font-bold uppercase tracking-wider text-xs md:text-sm">{experience.title}</div>
                  <div className="font-mono text-xs mt-1">{experience.company}</div>
                  <div className="font-mono text-xs text-gray-600 mt-1">{experience.period}</div>
                </button>
              ))}
            </motion.div>

            {/* Right: Details + Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Description */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-mono text-xs md:text-sm leading-relaxed">{exp.description}</p>
              </div>

              {/* Image Carousel */}
              <div className="space-y-4">
                <div className="border-4 border-black aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                  <motion.img
                    key={currentImageIdx}
                    src={currentImage}
                    alt="Experience"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Image Navigation */}
                {exp.images.length > 1 && (
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevImage}
                      className="brutalist-button p-2 md:p-3"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div className="font-mono text-xs">
                      {currentImageIdx + 1} / {exp.images.length}
                    </div>
                    <button
                      onClick={nextImage}
                      className="brutalist-button p-2 md:p-3"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
