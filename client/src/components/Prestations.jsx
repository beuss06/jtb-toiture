import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { PRESTATIONS } from '../data/siteData'

export default function Prestations() {
  const { ref: headerRef, inView: headerIn } = useReveal()
  const { ref: gridRef, inView: gridIn } = useReveal(0.1)

  return (
    <section id="prestations" className="py-24 lg:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[0.78rem] font-semibold tracking-[2px] uppercase text-brick mb-3">
            Nos services
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.7rem)] text-slate mb-4">
            Nos prestations
          </h2>
          <p className="text-gray-500 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            Des solutions complètes pour la protection et l'embellissement de votre toiture sur toute la Côte d'Azur
          </p>
          <div className="w-14 h-[3px] bg-brick mx-auto mt-5 rounded-sm" />
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PRESTATIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={gridIn ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2.5 transition-all duration-400 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-brick after:scale-x-0 after:transition-transform after:duration-400 hover:after:scale-x-100"
            >
              {/* Image */}
              <div className="relative h-[210px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute -bottom-[18px] right-5 w-11 h-11 bg-brick rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(181,52,28,0.35)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[5deg]">
                  <i className={`fas ${item.icon}`}></i>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-7">
                <h3 className="font-display text-[1.2rem] mb-2.5 text-slate">{item.title}</h3>
                <p className="text-[0.9rem] text-gray-500 leading-relaxed mb-4">{item.description}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-brick font-semibold text-[0.88rem] group/link">
                  Demander un devis <i className="fas fa-arrow-right transition-transform group-hover/link:translate-x-1.5"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
