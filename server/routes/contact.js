import { Router } from 'express'
import nodemailer from 'nodemailer'

const router = Router()

const PRESTATION_LABELS = {
  charpente: 'Charpente',
  toiture: 'Toiture (pose ou réfection)',
  reparation: 'Réparation ou dépannage',
  zinguerie: 'Zinguerie ou Gouttières',
  isolation: 'Isolation des combles',
  nettoyage: 'Nettoyage ou Démoussage',
  autre: 'Autre',
}

function validate(body) {
  const errors = []
  if (!body.nom?.trim()) errors.push('nom')
  if (!body.prenom?.trim()) errors.push('prenom')
  if (!body.telephone?.trim()) errors.push('telephone')
  if (!body.prestation?.trim()) errors.push('prestation')
  return errors
}

let transporter = null

function getTransporter() {
  if (transporter) return transporter
  if (!process.env.SMTP_PASS) return null

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return transporter
}

router.post('/', async (req, res) => {
  const { nom, prenom, telephone, email, prestation, message } = req.body

  const errors = validate(req.body)
  if (errors.length) {
    return res.status(400).json({ error: 'Champs requis manquants', fields: errors })
  }

  const prestationLabel = PRESTATION_LABELS[prestation] || prestation
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })

  console.log(`\n📩 Nouvelle demande de devis — ${now}`)
  console.log(`   Nom     : ${prenom} ${nom}`)
  console.log(`   Tél     : ${telephone}`)
  console.log(`   Email   : ${email || '—'}`)
  console.log(`   Presta  : ${prestationLabel}`)
  console.log(`   Message : ${message || '—'}\n`)

  const mailer = getTransporter()

  if (mailer) {
    try {
      await mailer.sendMail({
        from: `"JTB Toiture — Site Web" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        replyTo: email || undefined,
        subject: `Demande de devis — ${prestationLabel} — ${prenom} ${nom}`,
        text: [
          `Nouvelle demande de devis reçue le ${now}`,
          '',
          `Nom      : ${prenom} ${nom}`,
          `Téléphone: ${telephone}`,
          `Email    : ${email || '—'}`,
          `Prestation: ${prestationLabel}`,
          '',
          `Message:`,
          message || '(aucun message)',
        ].join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#b5341c;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
              <h2 style="margin:0;font-size:18px">Nouvelle demande de devis</h2>
              <p style="margin:4px 0 0;opacity:0.8;font-size:13px">${now}</p>
            </div>
            <div style="background:#f7f3ee;padding:24px;border-radius:0 0 8px 8px">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#6b7280;width:110px">Nom</td><td style="padding:8px 0;font-weight:600">${prenom} ${nom}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Téléphone</td><td style="padding:8px 0;font-weight:600"><a href="tel:${telephone}" style="color:#b5341c">${telephone}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${email ? `<a href="mailto:${email}" style="color:#b5341c">${email}</a>` : '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Prestation</td><td style="padding:8px 0;font-weight:600">${prestationLabel}</td></tr>
              </table>
              ${message ? `<div style="margin-top:16px;padding:16px;background:white;border-radius:8px;border:1px solid #e5e7eb"><p style="margin:0 0 4px;color:#6b7280;font-size:13px">Message :</p><p style="margin:0;white-space:pre-wrap">${message}</p></div>` : ''}
            </div>
          </div>
        `,
      })
      console.log('   ✅ Email envoyé avec succès')
    } catch (err) {
      console.error('   ❌ Erreur envoi email:', err.message)
    }
  } else {
    console.log('   ⚠️  SMTP non configuré — email non envoyé (voir .env)')
  }

  res.json({ success: true, message: 'Demande reçue' })
})

export default router
