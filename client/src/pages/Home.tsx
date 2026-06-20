import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Home Page - Single Scroll Experience
 * All sections in one scrollable page
 */

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  images: string[];
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
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
];

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

export default function Home() {
  const [selectedExp, setSelectedExp] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const exp = experiences[selectedExp];
  const currentImage = exp.images[currentImageIdx];

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % exp.images.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + exp.images.length) % exp.images.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefono', value: '+39 123 456 7890', href: 'tel:+391234567890' },
    { icon: Mail, label: 'Email', value: 'info@portfolio.com', href: 'mailto:info@portfolio.com' },
    { icon: MapPin, label: 'Ubicazione', value: 'Italia', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* SECTION 1: HERO */}
      <section className="border-b-4 border-black min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-20 w-full">
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="text-5xl md:text-7xl font-bold uppercase leading-tight tracking-tighter">
                CREO
              </div>
              <div className="text-5xl md:text-7xl font-bold uppercase leading-tight tracking-tighter mt-2">
                ESPERIENZE
              </div>
              <div className="text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tighter mt-2 text-yellow-400">
                DIGITALI
              </div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="brutalist-button border-yellow-400 border-2 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 text-sm md:text-base px-8 md:px-12 mt-6"
              >
                CONTATTAMI
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-6"
            >
              <div className="border-l-4 border-black pl-4">
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Full Stack Developer specializzato in React, Node.js e design moderno. Trasformo idee complesse in soluzioni web eleganti, performanti e user-friendly. Ogni progetto è un'opportunità per creare qualcosa di straordinario.
                </p>
              </div>

              <div className="space-y-3">
                <a href="#about" className="block">
                  <button className="brutalist-button w-full text-sm md:text-base">
                    SCOPRI IL MIO LAVORO
                  </button>
                </a>
                <a href="#contact" className="block">
                  <button className="brutalist-button w-full border-yellow-400 border-2 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 text-sm md:text-base">
                    CONTATTAMI
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="border-b-4 border-black py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12 tracking-tighter"
          >
            COSA OFFRO
          </motion.h2>

          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 mb-8">
            {[
              { title: 'SVILUPPO WEB', desc: 'React, Vue, Next.js - Applicazioni moderne e scalabili', borderColor: 'border-cyan-500', titleColor: 'text-cyan-600' },
              { title: 'BACKEND', desc: 'Node.js, Express, Databases - API robuste e performanti', borderColor: 'border-purple-500', titleColor: 'text-purple-600' },
              { title: 'DESIGN', desc: 'UI/UX moderno - Interfacce intuitive e belle', borderColor: 'border-pink-500', titleColor: 'text-pink-600' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className={`brutalist-card border-l-4 ${feature.borderColor}`}
              >
                <h3 className={`text-xl md:text-2xl font-bold uppercase mb-3 tracking-wider ${feature.titleColor}`}>{feature.title}</h3>
                <p className="font-mono text-xs md:text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="brutalist-button border-yellow-400 border-2 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 text-sm md:text-base px-8 md:px-12"
            >
              CONTATTAMI
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: CHI SONO */}
      <section id="about" className="border-b-4 border-black py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter"
          >
            CHI SONO
          </motion.h1>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <div className="border-l-4 border-yellow-400 pl-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wider">IL MIO PERCORSO</h2>
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Sono uno sviluppatore full stack appassionato di creare esperienze digitali straordinarie. La mia missione è trasformare idee complesse in soluzioni web eleganti, performanti e user-friendly. Specializzato in React, Node.js e design moderno, combino competenze tecniche con una forte attenzione al design e all'esperienza utente.
                </p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wider">PERCHÉ FACCIO QUESTO</h2>
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Credo che il codice pulito e le animazioni fluide siano essenziali per creare prodotti che lasciano un'impressione. Quando non sto codificando, amo esplorare le ultime tendenze nel web design, contribuire a progetti open source e imparare nuove tecnologie. Sono sempre entusiasta di collaborare con team creative e di affrontare sfide che spingono i miei limiti.
                </p>
              </div>

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

      {/* SECTION 4: ESPERIENZE */}
      <section className="border-b-4 border-black py-12 md:py-20 bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter"
          >
            ESPERIENZE
          </motion.h1>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-mono text-xs md:text-sm leading-relaxed">{exp.description}</p>
              </div>

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
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full brutalist-button border-yellow-400 border-2 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 text-sm md:text-base mt-4"
                >
                  CONTATTAMI
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFICATI */}
      <section className="border-b-4 border-black py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter"
          >
            CERTIFICATI
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 auto-rows-max">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
                viewport={{ once: true }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
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

      {/* SECTION 6: CONTATTI */}
      <section id="contact" className="border-b-4 border-black py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase mb-2 md:mb-4 tracking-tighter">
              CONTATTAMI
            </h1>
            <p className="font-mono text-xs md:text-sm text-gray-300">Sono sempre disponibile per discutere nuovi progetti</p>
          </motion.div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="brutalist-card bg-white text-black hover:bg-yellow-400 hover:text-black group transition-all duration-150 flex items-start gap-4 border-2 border-white"
                  >
                    <div className="p-3 border-2 border-black group-hover:border-black flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-wider mb-1 text-black">{info.label}</p>
                      <p className="font-bold text-base md:text-lg break-words text-black">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="brutalist-card bg-black text-white"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-xs mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 text-sm"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-xs mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 text-sm"
                    placeholder="tua@email.com"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-xs mb-2">Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 text-sm"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-xs mb-2">Oggetto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 text-sm"
                    placeholder="Argomento della consulenza"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-xs mb-2">Messaggio</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-white bg-black text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none text-sm"
                    placeholder="Descrivi il tuo progetto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold uppercase tracking-wider py-2 md:py-3 border-2 border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all duration-150 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Send size={20} />
                  INVIA RICHIESTA
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 border-2 border-yellow-400 text-yellow-400 text-center font-bold uppercase tracking-wider text-xs"
                  >
                    ✓ MESSAGGIO INVIATO CON SUCCESSO!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
