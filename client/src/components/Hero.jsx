import { motion } from 'framer-motion'
import { COMPANY } from '../data/siteData'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-[center_30%] animate-hero-zoom"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,31,43,0.88)] via-[rgba(44,51,64,0.72)] to-[rgba(26,31,43,0.82)]" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-[780px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-lg px-5 py-2.5 rounded-full text-[0.88rem] font-medium mb-7 tracking-wide"
        >
          <span className="w-2 h-2 bg-gold rounded-full" />
          Artisan couvreur — Côte d'Azur
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-[clamp(2.8rem,7.5vw,5.2rem)] font-bold mb-3.5 tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]"
        >
          {COMPANY.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[clamp(1rem,2.2vw,1.3rem)] font-light opacity-85 tracking-[3px] uppercase mb-11"
        >
          Toiture <span className="text-gold">·</span> Charpente <span className="text-gold">·</span> Zinguerie
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#contact" className="btn btn-red">
            <i className="fas fa-file-lines"></i> Demande de devis
          </a>
          <a href={COMPANY.phoneLink} className="btn btn-ghost">
            <i className="fas fa-phone"></i> {COMPANY.phone}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
        <span>Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-scroll-pulse" />
      </div>
    </section>
  )
}
