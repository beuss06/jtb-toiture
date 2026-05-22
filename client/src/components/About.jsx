import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../data/siteData'

const CHECKS = [
  'Garantie décennale sur tous les chantiers',
  'Matériaux certifiés — qualité et durabilité',
  'Devis gratuit et transparent sous 24h',
  'Intervention rapide sur toute la Côte d\'Azur',
  'Artisan local, disponible et à l\'écoute',
]

export default function About() {
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  return (
    <section id="apropos" className="py-24 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -28 }}
            animate={leftIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.about}
                alt="Teddy Bracquemart — Artisan couvreur JTB Toiture"
                className="w-full h-[360px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-7 -left-3 lg:-left-5 bg-gold text-white px-5 py-3.5 rounded-lg font-bold text-[0.92rem] shadow-lg flex items-center gap-2 z-10">
              <i className="fas fa-star text-lg"></i> 10+ ans d'expérience
            </div>
            <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] border-[3px] border-gold rounded-2xl -z-10 opacity-30 hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 28 }}
            animate={rightIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[0.78rem] font-semibold tracking-[2px] uppercase text-brick mb-3">
              Qui sommes-nous
            </span>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.3rem)] text-slate mb-5">
              Teddy, votre couvreur professionnel
            </h2>
            <p className="text-gray-500 mb-4 leading-[1.75] text-[0.98rem]">
              Artisan local basé à Cagnes-sur-Mer, Teddy Bracquemart intervient sur toute la Côte d'Azur pour vos travaux de toiture, charpente, zinguerie et isolation.
            </p>
            <p className="text-gray-500 mb-7 leading-[1.75] text-[0.98rem]">
              Fort de plus de 10 ans d'expérience dans le bâtiment, JTB Toiture vous garantit un travail soigné, réalisé avec des matériaux certifiés et une main-d'œuvre qualifiée. Chaque chantier est couvert par notre garantie décennale.
            </p>

            <ul className="flex flex-col gap-3 mb-9">
              {CHECKS.map((text) => (
                <li key={text} className="flex items-start gap-3 text-[0.95rem]">
                  <div className="w-[22px] h-[22px] bg-brick/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fas fa-check text-brick text-[0.6rem]"></i>
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-red">
              <i className="fas fa-file-lines"></i> Obtenir un devis gratuit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
