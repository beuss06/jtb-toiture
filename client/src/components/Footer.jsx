import { COMPANY } from '../data/siteData'

const NAV = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#apropos', label: 'À propos' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
]

const SERVICES = [
  'Charpente', 'Toiture', 'Zinguerie', 'Isolation', 'Dépannage',
]

export default function Footer() {
  return (
    <footer className="bg-footer text-white/75 pt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 pb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-brick/15 rounded-lg flex items-center justify-center text-brick-light text-lg">
                <i className="fas fa-house-chimney"></i>
              </div>
              <div>
                <span className="font-display text-[1.35rem] font-bold text-white block leading-tight">JTB Toiture</span>
                <span className="font-body text-[0.65rem] text-white/40 tracking-[1.5px] uppercase">Couvreur professionnel</span>
              </div>
            </div>
            <p className="text-[0.88rem] leading-relaxed opacity-60 mb-5">
              Artisan couvreur professionnel basé à Cagnes-sur-Mer, intervenant sur toute la Côte d'Azur. Toiture, charpente, zinguerie et isolation — devis gratuit et garantie décennale.
            </p>
            <div className="flex gap-2.5">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/[0.07] flex items-center justify-center text-white/70 hover:bg-brick hover:text-white hover:-translate-y-0.5 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/[0.07] flex items-center justify-center text-white/70 hover:bg-brick hover:text-white hover:-translate-y-0.5 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[0.95rem] font-semibold text-white mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-[0.88rem] opacity-60 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[0.65rem] text-brick"></i> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h4 className="font-body text-[0.95rem] font-semibold text-white mb-5">Prestations</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#prestations" className="text-[0.88rem] opacity-60 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[0.65rem] text-brick"></i> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[0.95rem] font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href={COMPANY.phoneLink} className="text-[0.88rem] opacity-60 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2"><i className="fas fa-phone text-[0.75rem] text-brick w-4"></i> {COMPANY.phone}</a></li>
              <li><a href={COMPANY.phoneLandlineLink} className="text-[0.88rem] opacity-60 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2"><i className="fas fa-phone text-[0.75rem] text-brick w-4"></i> {COMPANY.phoneLandline}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="text-[0.88rem] opacity-60 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2"><i className="fas fa-envelope text-[0.75rem] text-brick w-4"></i> Email</a></li>
              <li><span className="text-[0.88rem] opacity-60 flex items-center gap-2"><i className="fas fa-location-dot text-[0.75rem] text-brick w-4"></i> 13 Rue Pasteur</span></li>
              <li><span className="text-[0.88rem] opacity-60 flex items-center gap-2"><i className="fas fa-clock text-[0.75rem] text-brick w-4"></i> Lun–Sam : 7h–19h</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.82rem] opacity-50">
          <span>© 2025 JTB Toiture — Tous droits réservés</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
