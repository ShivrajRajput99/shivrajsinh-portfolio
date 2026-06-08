import { TerminalSquare, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import ProjectImage from './ProjectImage.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects with practical development value."
          description="Each project is framed around a real workflow: managing records, organizing products, analyzing data, or presenting a professional profile."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan/40">
             <ProjectImage title={project.title} image={project.image} />
              <div className="pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
  >
    <TerminalSquare size={17} />
    GitHub
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan"
  >
    <ExternalLink size={17} />
    Live Demo
  </a>
</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
