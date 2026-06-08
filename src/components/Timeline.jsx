import { timeline } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Timeline"
          title="Experience and education timeline."
          description="A clean view of the learning path, project growth, and professional direction."
        />
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan via-mint to-transparent md:left-1/2" />
          <div className="space-y-8">
            {timeline.map(({ date, title, type, icon: Icon, description }, index) => (
              <article
                key={title}
                className={`relative grid gap-4 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div]:col-start-2'}`}
              >
                <div className="glass ml-14 rounded-3xl p-6 md:ml-0">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-cyan/10 px-3 py-1 text-sm font-bold text-cyan">{date}</span>
                    <span className="text-sm font-semibold text-mint">{type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{description}</p>
                </div>
                <span className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-ink text-cyan shadow-glow md:left-1/2 md:-translate-x-1/2">
                  <Icon size={20} aria-hidden="true" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
