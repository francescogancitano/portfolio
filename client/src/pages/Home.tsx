import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Send, Download, FileText, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  link?: string;
  linkLabel?: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
  image?: string;
  isPdf: boolean;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Nao Challenge 2026',
    company: 'Scuola di robotica',
    period: 'dec 2025 - giu 2026',
    description: 'La mia scuola ogni anno partecipa alla gara di robotica Nao Challenge, dove ci danno un obiettivo da raggiungere e da presentare, e un hackaton con una sfida data sul momento. Quest\'anno la sfida era sul teatro e sono riuscito a portare la mia squadra al secondo posto nella categoria "Super Team".',
    images: [
      '/experiences/naoChallenge/foto_team.jpg',
      '/experiences/naoChallenge/foto_di_gruppo.jpg',
      '/experiences/naoChallenge/foto_a_lavoro.jpg',
      '/experiences/naoChallenge/classifica.jpg'
    ],
    link: 'https://www.facebook.com/IisVeronaTrento/posts/il-team-etabeta-delliis-verona-trento-alla-nao-challenge-2026gli-studenti-del-te/1679728970404957/',
    linkLabel: 'Vedi il post su Facebook'
  },
  {
    id: 2,
    title: 'Linux Day',
    company: 'Verona Trento',
    period: '24 ott 2025',
    description: 'Ho voluto fare da relatore al Linux Day del Verona Trento, una giornata dedicata al software libero. Ho voluto parlare di un tema molto più delicato, ovvero la dipendenza dall\'intelligenza artificiale, un problema di cui nessuno parla ma che tutti quanti conoscono, facendo riferimento anche a uno studio del MIT che spiega le attività cerebrali delle persone durante l\'utilizzo dell\'AI.',
    images: [
      '/experiences/linuxDay/f029be05.jpg',
      '/experiences/linuxDay/img_wa0019.jpg'
    ],
    link: 'https://www.instagram.com/p/DQJVJ0-jbWC/',
    linkLabel: 'Vedi il post su Instagram'
  },
  {
    id: 3,
    title: 'Mediterranean DevFest',
    company: 'GDG Nebrodi',
    period: 'dec 2025',
    description: 'In questa sfida proposta dal gruppo di sviluppatori Google (i GDG Nebrodi), l\'obiettivo era presentare un\'idea innovativa per salvaguardare l\'ambiente delle montagne dei Nebrodi. Io e i miei compagni abbiamo pensato a un\'applicazione da poter utilizzare per la tutela dell\'ambiente, con mappe offline in caso di smarrimento e altro. Siamo arrivati al quarto posto.',
    images: [
      '/experiences/GDG/dsc03751.jpg',
      '/experiences/GDG/dsc03756.jpg'
    ],
    link: 'https://gdg.community.dev/events/details/google-gdg-nebrodi-presents-devfest-mediterranean-2025-1/',
    linkLabel: 'Scopri i dettagli del DevFest'
  }
];

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Attestato Progetto Erasmus+',
    issuer: 'Unione Europea / IIS Verona Trento',
    date: '16 apr 2026',
    file: '/attestati/attestato_progetto_Erasmus.jpg',
    image: '/attestati/attestato_progetto_Erasmus.jpg',
    isPdf: false,
    description: 'Certificato di partecipazione al progetto di mobilità europea Erasmus+, focalizzato sullo sviluppo di competenze linguistiche, relazionali e professionali in contesti interculturali.'
  },
  {
    id: 2,
    title: 'Workshop avanzato di Flutter',
    issuer: 'IIS Verona Trento',
    date: '17 gen 2026',
    file: '/attestati/Attestato_Flutter_Gancitano_copia.pdf',
    image: '/attestati/Attestato_Flutter_Gancitano_copia.jpg',
    isPdf: true,
    description: 'Certificato rilasciato dall\'Istituto per aver partecipato al workshop interattivo di Flutter imparando anche strumenti come Firebase.'
  },
  {
    id: 3,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '19 mar 2026',
    file: '/attestati/Introduction_to_Cybersecurity_certificate_francesco-gancitano-veronatrento-it_85404c84-14bd-436b-8a72-b60cc245be4e.pdf',
    image: '/attestati/Introduction_to_Cybersecurity.jpg',
    isPdf: true,
    description: 'Certificazione Cisco sulle conoscenze basilari di sicurezza informatica e cryptografia'
  },
  {
    id: 4,
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    date: '6 giu 2025',
    file: '/attestati/_certificate_francesco-gancitano-veronatrento-it_a0801585-f9e8-4084-ad42-36163b7f61f2.pdf',
    image: '/attestati/Cybersecurity_Essentials.jpg',
    isPdf: true,
    description: 'Certificato Cisco sulle competenze base dell\'IT, computer, come funzionano, Sistemi operativi, e NetWorking'
  },
  {
    id: 5,
    title: 'Certificato IBM SkillsBuild',
    issuer: 'IBM',
    date: '29 ott 2025',
    file: '/attestati/Certificato di completamento _ SkillsBuild.pdf',
    image: '/attestati/Certificato_IBM_SkillsBuild.jpg',
    isPdf: true,
    description: 'Attestato per aver terminato con successo moduli di formazione professionalizzante sull\'AI da IBM.'
  },
  {
    id: 6,
    title: 'Relatore Linux Day 2025',
    issuer: 'IIS Verona Trento / LUG',
    date: '2 apr 2026',
    file: '/attestati/attestato di partecipazione linux day.png',
    image: '/attestati/attestato di partecipazione linux day.png',
    isPdf: false,
    description: 'Certificato di partecipazione in veste di relatore alle conferenze del Linux Day 2025, in cui ho tenuto un talk riguardante gli impatti cerebrali dell\'abuso di intelligenza artificiale.'
  },
  {
    id: 7,
    title: 'Apprendisti Ciceroni FAI',
    issuer: 'FAI (Fondo per l\'Ambiente Italiano)',
    date: '2 apr 2026',
    file: '/attestati/attestato FAI Francesco Gancitano.pdf',
    image: '/attestati/attestato_FAI_Francesco_Gancitano.jpg',
    isPdf: true,
    description: 'Attestato per aver partecipato attivamente in qualità di guida studentesca (Cicerone) per illustrare ad un pubblico reale le bellezze artistiche e monumentali tutelate dal FAI.'
  },
  {
    id: 8,
    title: 'Attestato PON Orientamento',
    issuer: 'IIS Verona Trento',
    date: '9 mar 2026',
    file: '/attestati/attestato pon orientamento.jpg',
    image: '/attestati/attestato pon orientamento.jpg',
    isPdf: false,
    description: 'Attestato scolastico per lo sviluppo di competenze trasversali e orientamento formativo/professionale finalizzato all\'analisi delle scelte lavorative future.'
  },
  {
    id: 9,
    title: 'Sud Innovation Summit',
    issuer: 'Sud Innovation',
    date: '16/17 ott 2025',
    file: '/attestati/sud innovation summit.pdf',
    image: '/attestati/sud_innovation_summit.jpg',
    isPdf: true,
    description: 'Certificato di presenza al più importante summit sull\'innovazione e startup del Sud Italia, incentrato sulle tendenze future della digital transformation.'
  },
  {
    id: 10,
    title: 'Attestato Mediterranean DevFest ',
    issuer: 'GDG Nebrodi',
    date: '14 dec 2025',
    file: '/attestati/Attestato_gancitano_francesco.pdf',
    image: '/attestati/Attestato_gancitano_francesco.jpg',
    isPdf: true,
    description: 'Attestato di partecipazione alla competizione fra studendi del Mediterranean DevFest a Sant\'Agata di Militello.'
  }
];

export default function Home() {
  const [selectedExp, setSelectedExp] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId.includes('il_tuo') || templateId.includes('il_tuo') || publicKey.includes('la_tua')) {
      console.warn('EmailJS keys are not configured yet in .env file.');
      // Local fallback for testing
      console.log('Form submitted (Mock):', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: 'francescogancitano411@gmail.com'
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errText = await response.text();
        console.error('Failed to send email:', errText);
        alert('Errore nell\'invio dell\'email. Controlla le configurazioni di EmailJS.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Si è verificato un errore di rete nell\'invio del messaggio.');
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefono', value: '+39 347 610 2803', href: 'tel:+39 347 610 2803' },
    { icon: Mail, label: 'Email', value: 'francescogancitano411@gmail.com', href: 'mailto:francescogancitano411@gmail.com' },
    { icon: MapPin, label: 'Ubicazione', value: 'Messina, Sicilia, Italia', href: '#' },
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
                  Studente specializzato nella programmazione e nell'architettura dei software, trasformo sogni e idee in dati e righe di codice
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
              { title: 'IDEE', desc: 'per contattarmi non hai bisogno di un\'idea, se hai un problema sono la prima persona da chiamare per risolverlo', borderColor: 'border-cyan-500', titleColor: 'text-cyan-600' },
              { title: 'CONOSCENZE', desc: 'Ho tantissime esperienze come programmatore ma soprattutto come sviluppatore, perchè prima sono un sognatore e poi sono un programmatore', borderColor: 'border-purple-500', titleColor: 'text-purple-600' },
              { title: 'FUTURO', desc: 'prometto soluzioni innovative, solizioni alternative, cucite appositamente per le tue necessità ', borderColor: 'border-pink-500', titleColor: 'text-pink-600' },
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
                  Sono uno studente dell'IIS VeronaTrento di Messina, e sono ancora all'ultimo anno di questo percorso, dove ho imparato diverse cose sulla programmazione, dove non imparo solo il rapporto uomo macchina, ma il rapporto stesso tra le persone 
                </p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wider">PERCHÉ FACCIO QUESTO</h2>
                <p className="font-mono text-xs md:text-sm leading-relaxed">
                  Non è solo una passione o un obby quello che faccio, è esperienza, duro lavoro. E' lo sporcarsi le mani giornalmente per ampliare le proprie conoscense. Tra l'uomo e la macchina c'è solo un piccolo spazio uno spazio descritto in righe che vedo come poesia
                </p>
              </div>

              <div className="border-2 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-wider">COMPETENZE PRINCIPALI</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 font-mono text-xs">
                  {['Python', 'Javascript', 'HTML', 'CSS', 'SQL', 'C', 'C++', 'C#', 'Java', 'Flutter', 'Dart', 'Git', 'Docker', 'Linux'].map((skill, idx) => (
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
      <section id="experiences" className="border-b-4 border-black py-12 md:py-20 bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50">
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
              <div className="border-l-4 border-yellow-400 pl-4 space-y-3">
                <p className="font-mono text-xs md:text-sm leading-relaxed">{exp.description}</p>
                {exp.link && (
                  <div className="pt-1">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-black hover:text-white transition-all duration-100 cursor-pointer font-mono"
                    >
                      {exp.linkLabel || 'SCOPRI DI PIÙ'} ↗
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {exp.images && exp.images.length > 0 && (
                  <>
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
                  </>
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
                  className="w-full brutalist-button border-yellow-400 border-2 bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 text-sm md:text-base mt-2"
                >
                  CONTATTAMI
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFICATI */}
      <section id="certificates" className="border-b-4 border-black py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
                onClick={() => setSelectedCert(cert)}
                className={`brutalist-card group cursor-pointer hover:bg-black hover:text-white transition-all duration-150 ${
                  idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${idx === 3 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
                style={{ transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * 1.5}deg)` }}
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 md:h-40 object-cover object-top border-2 border-black mb-4 group-hover:border-white"
                  />
                ) : (
                  <div className={`w-full h-32 md:h-40 border-2 border-black mb-4 flex flex-col justify-between p-3 font-mono text-black group-hover:border-white select-none ${
                    cert.issuer.includes('Cisco') ? 'bg-[#00D9FF]' :
                    cert.issuer.includes('IBM') ? 'bg-[#FF1493]' :
                    cert.issuer.includes('Sud') ? 'bg-[#FFD700]' :
                    cert.issuer.includes('FAI') ? 'bg-[#FF6B00]' :
                    'bg-[#9D00FF] text-white'
                  }`}>
                    <div className="flex justify-between items-start">
                      <FileText size={20} className="stroke-[2.5]" />
                      <span className="text-[9px] font-bold border border-black bg-white text-black px-1.5 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase">
                        PDF DOC
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] uppercase font-bold tracking-wider opacity-70">
                        {cert.issuer}
                      </div>
                      <div className="text-xs uppercase font-extrabold tracking-tight line-clamp-2 leading-none">
                        {cert.title}
                      </div>
                    </div>
                  </div>
                )}
                <h3 className="font-bold uppercase tracking-wider text-xs md:text-sm mb-2">{cert.title}</h3>
                <p className="font-mono text-xs mb-1">{cert.issuer}</p>
                <p className="font-mono text-xs opacity-70">{cert.date}</p>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATE DETAIL DIALOG */}
          <Dialog open={selectedCert !== null} onOpenChange={(open) => !open && setSelectedCert(null)}>
            <DialogContent className="border-4 border-black bg-white p-6 max-w-lg w-[90vw] md:w-full rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-0">
              {selectedCert && (
                <div className="space-y-4 font-mono text-black">
                  {/* Header */}
                  <div className="border-b-2 border-black pb-3">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {selectedCert.issuer} — {selectedCert.date}
                    </div>
                    <DialogTitle className="text-xl md:text-2xl font-bold uppercase tracking-tight mt-1 leading-tight text-black font-display">
                      {selectedCert.title}
                    </DialogTitle>
                  </div>

                  {/* Cover Preview */}
                  <div className="border-2 border-black bg-gray-100 overflow-hidden flex items-center justify-center relative">
                    {selectedCert.image ? (
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-auto max-h-64 object-contain"
                      />
                    ) : (
                      <div className={`w-full h-48 flex flex-col justify-between p-4 ${
                        selectedCert.issuer.includes('Cisco') ? 'bg-[#00D9FF]' :
                        selectedCert.issuer.includes('IBM') ? 'bg-[#FF1493]' :
                        selectedCert.issuer.includes('Sud') ? 'bg-[#FFD700]' :
                        selectedCert.issuer.includes('FAI') ? 'bg-[#FF6B00]' :
                        'bg-[#9D00FF] text-white'
                      }`}>
                        <div className="flex justify-between items-start">
                          <FileText size={36} className="stroke-[2.5]" />
                          <span className="text-xs font-bold border border-black bg-white text-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                            DOCUMENTO PDF
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs uppercase font-bold tracking-widest opacity-80">
                            {selectedCert.issuer}
                          </div>
                          <div className="text-lg uppercase font-extrabold tracking-tight leading-tight">
                            {selectedCert.title}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Descrizione dell'attestato:</h4>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-800">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 brutalist-button flex items-center justify-center gap-2 text-center text-xs md:text-sm"
                    >
                      <ExternalLink size={18} />
                      APRI CERTIFICATO
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="flex-1 px-4 py-2 border-2 border-black bg-gray-100 text-black font-bold text-xs md:text-sm hover:bg-black hover:text-white transition-all duration-100 cursor-pointer text-center"
                    >
                      CHIUDI
                    </button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

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
                  disabled={isSending}
                  className="w-full bg-yellow-400 text-black font-bold uppercase tracking-wider py-2 md:py-3 border-2 border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all duration-150 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} className={isSending ? "animate-pulse" : ""} />
                  {isSending ? 'INVIANDO...' : 'INVIA RICHIESTA'}
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
