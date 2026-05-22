import { useState, useEffect } from 'react'
import { COMPANY } from '../data/siteData'

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#apropos', label: 'À propos' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleMenu() {
    setMenuOpen((v) => !v)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  function closeMenu() {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-slate to-slate-light text-white/85 text-[0.82rem] py-2.5 relative z-[1001]">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-1.5 tracking-wide">
            Garantie décennale <span className="text-gold text-[0.65rem]">✦</span> Intervention rapide <span className="text-gold text-[0.65rem]">✦</span> Devis gratuit
          </div>
          <a href={COMPANY.phoneLink} className="text-white font-semibold hover:text-gold transition-colors flex items-center gap-1.5">
            <i className="fas fa-phone text-xs"></i> {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-[1000] backdrop-blur-xl transition-all duration-400 border-b ${
        scrolled
          ? 'bg-white/[0.97] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-black/[0.04]'
          : 'bg-white/[0.92] border-transparent'
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-[72px]">
          <a href="#accueil" className="flex items-center gap-2.5 z-[1002] group">
            <div className="w-10 h-10 bg-brick rounded-lg flex items-center justify-center text-white text-lg transition-transform group-hover:rotate-[-5deg] group-hover:scale-105">
              <i className="fas fa-house-chimney"></i>
            </div>
            <div>
              <span className="font-display text-[1.35rem] font-bold text-slate block leading-tight">JTB Toiture</span>
              <span className="font-body text-[0.65rem] text-gray-500 tracking-[1.5px] uppercase">Couvreur professionnel</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="px-4 py-2 font-medium text-[0.92rem] text-slate rounded-md hover:text-brick hover:bg-brick/[0.06] transition-all">
                {label}
              </a>
            ))}
            <a href="#contact" className="ml-2 bg-brick text-white px-5 py-2.5 rounded-lg font-semibold shadow-[0_2px_8px_rgba(181,52,28,0.25)] hover:bg-brick-dark hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(181,52,28,0.35)] transition-all">
              Devis gratuit
            </a>
          </div>

          {/* Burger */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-black/[0.04] z-[1002]"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className="w-[22px] h-4 relative">
              <span className={`absolute left-0 w-full h-0.5 bg-slate rounded transition-all ${menuOpen ? 'top-[7px] rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-slate rounded transition-all top-[7px] ${menuOpen ? 'opacity-0 -translate-x-2' : ''}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-slate rounded transition-all ${menuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 bg-white z-[1001] flex flex-col items-center justify-center gap-2 transition-all duration-350 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {NAV_LINKS.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="text-[1.4rem] font-medium text-slate px-6 py-3 rounded-lg hover:text-brick hover:bg-brick/[0.06] transition-all"
            style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-4 bg-brick text-white px-6 py-3 rounded-lg font-semibold text-base"
        >
          Devis gratuit
        </a>
      </div>
    </>
  )
}
