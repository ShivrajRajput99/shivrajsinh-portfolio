import { skills } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills for backend development and analytics."
          description="Technologies and tools I use for Python development,
web applications, database management, and data analytics."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, icon: Icon }, index) => (
            <div
              key={name}
              className="glass group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
              style={{ animation: `fadeUp 0.7s ease both ${index * 60}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-ink">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-white">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
