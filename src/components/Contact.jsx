import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'the-cove-landing' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      await res.json()
      setStatus({ loading: false, success: 'Thank you! We will reach out shortly.', error: null })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Submission failed. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative bg-slate-900 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_10%,rgba(34,197,94,0.12),transparent),radial-gradient(600px_300px_at_70%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Enquire about The Cove</h2>
          <p className="mt-3 text-white/80">Share your details and our team will connect to walk you through floor plans, pricing and availability.</p>
          <ul className="mt-6 space-y-2 text-white/80 text-sm">
            <li>• Location: Begur - Hulimavu, Bengaluru</li>
            <li>• Developer: Azven Realty</li>
            <li>• Project: The Cove</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Full name" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Phone number" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-white/80 mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell us what you are looking for (optional)" />
            </div>
          </div>
          <button disabled={status.loading} className="mt-6 w-full rounded-xl bg-white text-slate-900 px-6 py-3 font-medium hover:bg-white/90 transition">
            {status.loading ? 'Submitting...' : 'Submit'}
          </button>
          {status.success && <p className="mt-3 text-green-300">{status.success}</p>}
          {status.error && <p className="mt-3 text-red-300">{status.error}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
