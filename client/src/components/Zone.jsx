import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { CITIES } from '../data/siteData'

export default function Zone() {
  const { ref, inView } = useReveal()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate to-slate-light rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden"
        >
          <div className="absolute -top-1/2 -right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,76,0.12),transparent_70%)] rounded-full" />

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2rem)] mb-2.5 flex items-center justify-center lg:justify-start gap-2.5">
              <i className="fas fa-map-location-dot text-gold text-[0.9em]"></i>
              Zone d'intervention
            </h2>
            <p className="opacity-70 text-[0.95rem] leading-relaxed max-w-[540px]">
              Nous intervenons sur toute la Côte d'Azur, de Nice à Cannes et dans l'arrière-pays. Contactez-nous pour vérifier que votre commune est desservie.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-2.5">
            {CITIES.map((city) => (
              <span
                key={city}
                className="bg-white/10 border border-white/15 px-4 py-2 rounded-full text-[0.88rem] font-medium whitespace-nowrap hover:bg-brick hover:border-brick transition-all cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
