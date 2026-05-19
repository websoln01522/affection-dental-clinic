/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Calendar,
  Send,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { 
  CLINIC_INFO, 
  SERVICES, 
  WHY_CHOOSE_US, 
  TESTIMONIALS, 
  DOCTORS, 
  GALLERY_IMAGES 
} from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-primary-700' : 'text-primary-800'}`}>
                Affection<span className="text-secondary-500">Dental</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-300/50"
              >
                Book Visit
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a 
                    href="#appointment"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-radial from-primary-100 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-radial from-secondary-50 to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-primary-700 font-medium mb-6">
                <Star size={18} fill="currentColor" />
                <span>4.8 Rating • 1k+ Happy Patients</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6">
                {CLINIC_INFO.tagline}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                {CLINIC_INFO.description}. Experience advanced treatments in a world-class environment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#appointment" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary-200/50 flex items-center justify-center group"
                >
                  Book Appointment <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={`tel:${CLINIC_INFO.phone}`} 
                  className="bg-white border-2 border-gray-100 px-10 py-4 rounded-full text-lg font-bold text-gray-800 hover:bg-gray-50 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2 text-primary-600" /> {CLINIC_INFO.phone}
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/images/hero_dentist_1779179764899.png" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 z-20 glass p-5 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs animate-bounce-slow">
                <div className="bg-secondary-100 p-3 rounded-full text-secondary-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Safety Guaranteed</p>
                  <p className="text-xs text-gray-500">ISO Certified Clinic</p>
                </div>
              </div>
              <div className="absolute top-10 -right-6 z-20 glass p-4 rounded-2xl shadow-xl animate-float">
                <p className="text-primary-600 font-bold text-2xl">10+</p>
                <p className="text-xs font-semibold text-gray-500">Years Exp.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Compassionate Dental Care For Every Family</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {CLINIC_INFO.aboutShort}
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Patient-first personalized care",
                  "Advanced sterilization and hygiene protocols",
                  "Experienced and gentle dental professionals",
                  "Affordable treatment with transparent pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#services" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700 transition-colors">
                Explore Services <ChevronRight size={20} />
              </a>
            </motion.div>

            <motion.div {...staggerContainer} className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64">
                   <img src="/src/assets/images/modern_reception_1779179692142.png" alt="Clinic Interior" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary-600 rounded-2xl p-6 text-white shadow-xl">
                  <p className="text-4xl font-bold mb-1">98%</p>
                  <p className="text-sm font-medium opacity-90">Patient Satisfaction</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary-500 rounded-2xl p-6 text-white shadow-xl">
                  <p className="text-4xl font-bold mb-1">24/7</p>
                  <p className="text-sm font-medium opacity-90">Emergency Support</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64">
                   <img src="/src/assets/images/sterilization_area_1779179728044.png" alt="Equipment" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Specialized Treatments</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From routine checkups to complex cosmetic surgeries, we offer a full range of modern dental services using the latest digital technologies.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeIn}
                className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-primary-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{service.description}</p>
                <button className="flex items-center text-primary-600 font-bold text-sm uppercase tracking-wider group-hover:text-primary-700">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="expertise" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold tracking-widest text-primary-400 uppercase mb-3">Excellence</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8">Why Patients Trust Affection Dental</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We focus on outcome-based dentistry. Our goal isn't just to fix a dental problem, but to ensure long-term oral health and patient satisfaction.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "12+ Years", sub: "Expertise" },
                  { label: "1k+", sub: "Happy Smiles" },
                  { label: "4.8", sub: "Google Stars" },
                  { label: "7-Step", sub: "Sterilization" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-primary-400 mb-1">{stat.label}</p>
                    <p className="text-sm font-medium text-gray-400">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {WHY_CHOOSE_US.slice(0, 4).map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="flex items-start space-x-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h3>
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              <span className="text-gray-700 font-bold ml-2">4.8 Average Rating</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 relative group"
              >
                <div className="text-6xl text-primary-200 absolute top-4 left-4 font-serif opacity-50">“</div>
                <p className="text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{review.name}</h5>
                    <p className="text-sm text-primary-600 font-medium">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Meet the Experts</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Highly Qualified Professionals</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {DOCTORS.map((doc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border-white group"
              >
                <div className="w-48 h-48 rounded-2xl overflow-hidden bg-white shadow-inner flex-shrink-0">
                  <img 
                    src={i === 0 ? "/src/assets/images/doctor_portrait_1_1779179802895.png" : "/src/assets/images/doctor_portrait_2_1779179819848.png"} 
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{doc.name}</h4>
                  <p className="text-primary-600 font-medium mb-4">{doc.qualifications}</p>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-600">
                      <CheckCircle2 size={18} className="text-secondary-500 mr-2" />
                      {doc.specialties}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Clock size={18} className="text-secondary-500 mr-2" />
                      {doc.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,_#fff_0%,_transparent_50%)]"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <motion.div {...fadeIn}>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Schedule Your Smile Consultation</h3>
                <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                  Fill out the form and our team will get back to you within 2 business hours for confirmation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-primary-100 text-sm">Call Now</p>
                      <p className="text-2xl font-bold">{CLINIC_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-primary-100 text-sm">Quick Chat</p>
                      <p className="text-2xl font-bold">WhatsApp Support</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-gray-800"
              >
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input type="text" placeholder="Rahul Deshmukh" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input type="tel" placeholder="+91 96870 56003" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Treatment Type</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option>Teeth Cleaning</option>
                      <option>Root Canal</option>
                      <option>Dental Implants</option>
                      <option>Braces & Aligners</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Preferred Date</label>
                    <input type="date" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                    <textarea rows={3} placeholder="Any specific concerns..." className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"></textarea>
                  </div>
                  <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2">
                    <Calendar size={20} />
                    <span>Request Appointment</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Facility</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Experience the Clinic</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-3xl cursor-zoom-in"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Location</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-10">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex space-x-6">
                  <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 flex-shrink-0 h-fit">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-6">
                  <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 flex-shrink-0 h-fit">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600 font-bold mb-1">{CLINIC_INFO.phone}</p>
                    <p className="text-sm text-gray-400">Available during working hours</p>
                  </div>
                </div>

                <div className="flex space-x-6">
                  <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 flex-shrink-0 h-fit">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Working Hours</h4>
                    <p className="text-gray-600 font-bold">{CLINIC_INFO.hours}</p>
                    <p className="text-sm text-gray-400">Sunday closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <a href="#" className="p-4 bg-gray-50 rounded-2xl text-primary-600 hover:bg-primary-600 hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-4 bg-gray-50 rounded-2xl text-primary-600 hover:bg-primary-600 hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href="#" className="p-4 bg-gray-50 rounded-2xl text-primary-600 hover:bg-primary-600 hover:text-white transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[400px] lg:h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118124.96587422315!2d73.08018264335939!3d22.33827610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc91763a82e9d%3A0xc3191f6305a2fedb!2sAffection%20Dental%20Care!5e0!3m2!1sen!2sin!4v1716091234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <span className="text-2xl font-display font-bold text-primary-800">
                Affection<span className="text-secondary-500">Dental</span>
              </span>
              <p className="text-gray-500 leading-relaxed">
                Providing premium dentistry with a patient-first approach. Focused on hygiene, comfort, and results in Vadodara since 2014.
              </p>
              <div className="flex items-center space-x-3 text-secondary-600 font-bold">
                <CheckCircle2 size={20} />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h5>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 hover:text-primary-600 transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-6">Clinic Info</h5>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-500">
                  <Clock size={18} className="text-primary-500" />
                  <span>{CLINIC_INFO.hours}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-500">
                  <MapPin size={18} className="text-primary-500" />
                  <span>{CLINIC_INFO.location}</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-500">
                  <Phone size={18} className="text-primary-500" />
                  <span>{CLINIC_INFO.phone}</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-6">Our Mission</h5>
              <p className="text-gray-500 italic leading-relaxed">
                "To provide the highest standard of oral healthcare in a caring and empathetic manner, making dental visits something patients look forward to."
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Affection Dental Care. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-600">Privacy Policy</a>
              <a href="#" className="hover:text-primary-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <Send size={24} />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#appointment"
          className="bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:bg-primary-700 transition-colors flex items-center justify-center md:hidden"
        >
          <Calendar size={24} />
        </motion.a>
      </div>
    </div>
  );
}

