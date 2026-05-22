import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useScrollReveal'
import { COMPANY, PRESTATION_OPTIONS } from '../data/siteData'

const INITIAL = { nom: '', prenom: '', telephone: '', email: '', prestation: '', message: '' }

export default function Contact() {
  const { ref: headerRef, inView: headerIn } = useReveal()
  const { ref: leftRef, inView: leftIn } = useReveal()
  const { ref: rightRef, inView: rightIn } = useReveal()

  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: false }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}
    if (!form.nom.trim()) newErrors.nom = true
    if (!form.prenom.trim()) newErrors.prenom = true
    if (!form.telephone.trim()) newErrors.telephone = true
    if (!form.prestation) newErrors.prestation = true
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClass = (name) =>
    `w-full px-4 py-3 border-[1.5px] rounded-lg font-body text-[0.95rem] text-slate bg-white transition-all focus:outline-none focus:border-brick focus:ring-[3px] focus:ring-brick/10 ${
      errors[name] ? 'border-red-400' : 'border-gray-200'
    }`

  return (
    <section id="contact" className="py-24 lg:py-28 bg-cream">
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
            Nous contacter
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,2.7rem)] text-slate mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-gray-500 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            Réponse rapide sous 24h — Intervention sur toute la Côte d'Azur
          </p>
          <div className="w-14 h-[3px] bg-brick mx-auto mt-5 rounded-sm" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 items-start">
          {/* Left info */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -28 }}
            animate={leftIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.2rem)] text-slate mb-3">
              Parlons de votre projet
            </h2>
            <p className="text-gray-500 mb-7 leading-relaxed">
              Toiture, charpente, zinguerie ou isolation — quel que soit votre besoin, nous sommes à votre écoute pour vous proposer la solution la plus adaptée.
            </p>

            <div className="flex flex-col gap-3 mb-7">
              <InfoCard href={COMPANY.phoneLink} icon="fa-mobile-screen" text={COMPANY.phone} sub="Téléphone principal" />
              <InfoCard href={COMPANY.phoneLandlineLink} icon="fa-phone" text={COMPANY.phoneLandline} sub="Ligne fixe" />
              <InfoCard href={`mailto:${COMPANY.email}`} icon="fa-envelope" text={COMPANY.email} sub="Envoyez-nous un email" />
              <InfoCard icon="fa-location-dot" text={COMPANY.address} sub="Siège de l'entreprise" />
              <InfoCard icon="fa-clock" text={COMPANY.hours} sub="Horaires d'ouverture" />
            </div>

            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25d366] text-white px-7 py-3.5 rounded-lg font-semibold shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:bg-[#1eba57] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-all"
            >
              <i className="fab fa-whatsapp text-xl"></i> Écrire sur WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 28 }}
            animate={rightIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-black/[0.04]"
          >
            <h3 className="font-display text-2xl text-slate mb-1.5">Demande de devis</h3>
            <p className="text-gray-500 text-[0.88rem] mb-7">Gratuit &amp; sans engagement — Réponse sous 24h</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="nom" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Nom *</label>
                  <input type="text" id="nom" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" className={inputClass('nom')} />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Prénom *</label>
                  <input type="text" id="prenom" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom" className={inputClass('prenom')} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="telephone" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Téléphone *</label>
                  <input type="tel" id="telephone" name="telephone" value={form.telephone} onChange={handleChange} placeholder="06 XX XX XX XX" className={inputClass('telephone')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" className={inputClass('email')} />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="prestation" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Type de prestation *</label>
                <select id="prestation" name="prestation" value={form.prestation} onChange={handleChange} className={inputClass('prestation')}>
                  <option value="" disabled>Sélectionnez une prestation</option>
                  {PRESTATION_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[0.84rem] font-medium mb-1.5 text-slate">Décrivez votre projet</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type de bâtiment, surface estimée, problème constaté…"
                  rows={4}
                  className={`${inputClass('message')} resize-y min-h-[110px]`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3.5 rounded-lg font-semibold text-white transition-all shadow-[0_4px_12px_rgba(181,52,28,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(181,52,28,0.35)] disabled:opacity-70 ${
                  status === 'sent'
                    ? 'bg-green-600 shadow-[0_4px_12px_rgba(22,163,74,0.25)]'
                    : status === 'error'
                    ? 'bg-red-500'
                    : 'bg-brick hover:bg-brick-dark'
                }`}
              >
                {status === 'sending' && <><i className="fas fa-spinner fa-spin mr-2"></i>Envoi en cours…</>}
                {status === 'sent' && <><i className="fas fa-check mr-2"></i>Demande envoyée !</>}
                {status === 'error' && <><i className="fas fa-exclamation-triangle mr-2"></i>Erreur, réessayez</>}
                {status === 'idle' && <><i className="fas fa-paper-plane mr-2"></i>Envoyer ma demande</>}
              </button>

              <p className="text-center text-[0.78rem] text-gray-400 mt-3.5 flex items-center justify-center gap-1.5">
                <i className="fas fa-lock"></i> Vos données sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ href, icon, text, sub }) {
  const Tag = href ? 'a' : 'div'
  const props = href ? { href, ...(href.startsWith('mailto') ? {} : {}) } : {}

  return (
    <Tag {...props} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.04] hover:translate-x-1 hover:shadow-sm transition-all">
      <div className="w-[42px] h-[42px] bg-brick/[0.08] rounded-[10px] flex items-center justify-center shrink-0">
        <i className={`fas ${icon} text-brick`}></i>
      </div>
      <div>
        <div className="text-[0.92rem] text-slate">{text}</div>
        <div className="text-[0.78rem] text-gray-400 mt-0.5">{sub}</div>
      </div>
    </Tag>
  )
}
