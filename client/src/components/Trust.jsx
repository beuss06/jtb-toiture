import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { TRUST_ITEMS } from '../data/siteData'

export default function Trust() {
  const { ref, inView } = useReveal(0.2)

  return (
    <section className="bg-slate py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center text-white py-2"
            >
              <div className="w-14 h-14 mx-auto mb-3.5 bg-gold/[0.12] rounded-full flex items-center justify-center">
                <i className={`fas ${item.icon} text-gold text-xl`}></i>
              </div>
              <h4 className="font-body font-semibold text-[0.95rem] mb-1">{item.title}</h4>
              <p className="text-[0.82rem] opacity-55">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
