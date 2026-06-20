import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * About Page - Neo-Brutalism Mobile-First
 */

export default function About() {
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
            CHI SONO
          </motion.h1>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="brutalist-card p-0 overflow-hidden aspect-square">
                <img 
                  src="/avatar.jpg" 
                  alt="Developer Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-8"
            >
              {/* Section 1 */}
              <div className="border-l-4 border-yellow-400 pl-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wider">IL MIO PERCORSO</h2>
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Sono uno studente dell'IIS VeronaTrento di Messina, e sono ancora all'ultimo anno di questo percorso, dove ho imparato diverse cose sulla programmazione, dove non imparo solo il rapporto uomo macchina, ma il rapporto stesso tra le persone 
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-black pl-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wider">PERCHÉ FACCIO QUESTO</h2>
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Non è solo una passione o un obby quello che faccio, è esperienza duro lavoro. E' lo sporcarsi le mani giornalmente per ampliare le proprie conoscense. Tra l'uomo e la macchina c'è solo un piccolo spazio uno spazio descritto in righe che vedo come poesia
                </p>
              </div>

              {/* Skills */}
              <div className="border-2 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-wider">COMPETENZE PRINCIPALI</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 font-mono text-xs">
                  {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'UI/UX Design'].map((skill, idx) => (
                    <div key={idx} className="border-2 border-black p-2 hover:bg-black hover:text-white transition-all duration-150 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
