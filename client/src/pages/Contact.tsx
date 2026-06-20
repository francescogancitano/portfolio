import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Contact Page - Neo-Brutalism Mobile-First
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

      <section className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase mb-2 md:mb-4 tracking-tighter">
              PRENOTA UNA
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-yellow-400">
              CONSULENZA
            </h1>
          </motion.div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-mono text-xs md:text-sm leading-relaxed border-l-4 border-black pl-4">
                Sono sempre disponibile per discutere nuovi progetti, idee interessanti o opportunità di collaborazione. Contattami usando uno dei canali sottostanti.
              </p>

              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    className="brutalist-card hover:bg-black hover:text-white group transition-all duration-150 flex items-start gap-4"
                  >
                    <div className="p-3 border-2 border-black group-hover:border-white flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="font-bold text-base md:text-lg break-words">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="brutalist-card bg-black text-white"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Subject */}
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

                {/* Message */}
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

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold uppercase tracking-wider py-2 md:py-3 border-2 border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all duration-150 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Send size={20} />
                  INVIA RICHIESTA
                </button>

                {/* Success Message */}
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
    </div>
  );
}
