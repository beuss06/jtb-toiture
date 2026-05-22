import { useState, useEffect } from 'react'
import { COMPANY } from '../data/siteData'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-[900] flex flex-col gap-2.5 items-end">
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`w-[54px] h-[54px] rounded-full bg-[#25d366] text-white text-xl flex items-center justify-center shadow-xl transition-all duration-400 hover:scale-110 hover:-translate-y-0.5 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-5'
        }`}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href={COMPANY.phoneLink}
        aria-label="Appeler"
        className={`w-[54px] h-[54px] rounded-full bg-brick text-white text-xl flex items-center justify-center shadow-xl transition-all duration-400 delay-75 hover:scale-110 hover:-translate-y-0.5 ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-5'
        }`}
      >
        <i className="fas fa-phone"></i>
      </a>
    </div>
  )
}
