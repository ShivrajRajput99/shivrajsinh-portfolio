import { useState } from 'react';
import { Send } from 'lucide-react';
import { contactItems } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Use the form or reach out directly for Django projects, analytics work, internships, or collaboration opportunities."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="glass rounded-3xl p-6">
            <h3 className="text-2xl font-bold text-white">Contact Details</h3>
            <div className="mt-6 space-y-4">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-400">{label}</span>
                    <span className="block break-words font-medium text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <form
              action="https://formspree.io/f/mlgkbbbr"
                method="POST"
                 onSubmit={() => setSubmitted(true)}
                     className="glass rounded-3xl p-6"
                       aria-label="Contact form"
                     >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-200">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-semibold text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-slate-200">
              Subject
              <input
                type="text"
                name="subject"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                placeholder="Project inquiry"
              />
            </label>
            <label className="mt-5 block text-sm font-semibold text-slate-200">
              Message
              <textarea
                name="message"
                rows="6"
                required
                className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                placeholder="Tell me about your idea..."
              />
            </label>
            <button 
            type="submit"
                 className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-slate-950 transition hover:bg-mint focus:outline-none focus:ring-2 focus:ring-cyan"
                >
               <Send size={18} />
        Send Message
                </button>
                {submitted && (
                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400 font-medium">
                  ✅ Message sent successfully! I will get back to you soon.
                    </div>
                )}
          </form>
        </div>
      </div>
    </section>
  );
}
