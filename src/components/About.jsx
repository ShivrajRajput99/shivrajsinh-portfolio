import { CheckCircle2, GraduationCap, Target } from "lucide-react";
import { education, goals } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-4xl font-bold text-white">
          About Me
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass rounded-3xl p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              My Journey
            </h3>

            <p className="leading-8 text-slate-300">
              My journey in technology started during my Diploma in Computer Engineering, where I developed a strong interest in programming, software development, and problem-solving. This experience helped me build a solid technical foundation and inspired me to explore new technologies beyond the classroom. Currently pursuing a B.Tech in Computer Engineering, I am focused on strengthening my skills in Data Analytics, Python Development, Artificial Intelligence, and modern software engineering. Through hands-on projects, continuous learning, and practical experience, I aim to create innovative technology solutions that solve real-world challenges and deliver meaningful impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Software Development", "Data Analytics", "AI & Innovation"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2
                      className="mb-3 text-green-400"
                      size={22}
                    />
                    <p className="font-semibold text-white">{item}</p>
                  </div>
                )
              )}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="glass rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                <h3 className="text-xl font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-2xl bg-white/5 p-4"
                  >
                    <p className="font-semibold text-white">
                      {item.degree}
                    </p>
                    <p className="text-sm text-cyan-400">
                      {item.school}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <Target className="text-yellow-400" />
                <h3 className="text-xl font-bold text-white">
                  Career Goals
                </h3>
              </div>

              <ul className="space-y-3">
                {goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-green-400" />
                    {goal}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}