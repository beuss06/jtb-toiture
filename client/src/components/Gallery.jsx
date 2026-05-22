import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { GALLERY_ITEMS } from '../data/siteData'

export default function Gallery() {
  const { ref: headerRef, inView: headerIn } = useReveal()
  const { ref: gridRef, inView: gridIn } = useReveal(0.1)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openLightbox = useCallback((i) => {
    setLightbox({ open: true, index: i })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox((s) => ({ ...s, open: false }))
    document.body.style.overflow = ''
  }, [])

  const navigate = useCallback((dir) => {
    setLightbox((s) => ({
      ...s,
      index: (s.index + dir + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    }))
  }, [])

  return (
    <>
      <section id="galerie" className="py-24 lg:py-28 bg-slate relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headerIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[0.78rem] font-semibold tracking-[2px] uppercase text-gold mb-3">
              Portfolio
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,2.7rem)] text-white mb-4">
              Nos réalisations
            </h2>
            <p className="text-white/55 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
              Découvrez nos derniers chantiers de toiture, charpente et zinguerie sur la Côte d'Azur
            </p>
            <div className="w-14 h-[3px] bg-gold mx-auto mt-5 rounded-sm" />
          </motion.div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={gridIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                  item.tall ? 'sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brick/90 via-brick/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end pb-6">
                  <i className="fas fa-expand text-white text-2xl mb-2.5 translate-y-2.5 group-hover:translate-y-0 transition-transform duration-400" />
                  <span className="text-white font-semibold translate-y-2.5 group-hover:translate-y-0 transition-transform duration-400 delay-[50ms]">
                    {item.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/92 backdrop-blur-md z-[9999] flex items-center justify-center animate-fade-up"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-7 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={closeLightbox}
          >
            <i className="fas fa-xmark"></i>
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-xl w-13 h-13 rounded-full bg-white/[0.08] hover:bg-white/[0.18] flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-xl w-13 h-13 rounded-full bg-white/[0.08] hover:bg-white/[0.18] flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <img
            src={GALLERY_ITEMS[lightbox.index].srcFull}
            alt={GALLERY_ITEMS[lightbox.index].caption}
            className="max-w-[88vw] max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-medium">
            {GALLERY_ITEMS[lightbox.index].caption}
          </div>
        </div>
      )}
    </>
  )
}
