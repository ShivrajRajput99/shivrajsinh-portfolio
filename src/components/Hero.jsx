export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center text-white p-10 min-h-screen">

      {/* Left Side */}
      <div>
        <p className="text-cyan-400 font-semibold tracking-widest uppercase">
          Hello, I'm
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
          Shivrajsinh <span className="text-cyan-400">Rajput</span>
        </h1>

        <p className="mt-5 text-2xl font-medium text-slate-200">
          Computer Engineering Student
        </p>

        <p className="mt-3 text-lg md:text-xl text-cyan-300">
          Python Developer | Data Analytics Enthusiast | Future AI Engineer
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Passionate Computer Engineering student specializing in Python Development, Data Analytics, and AI. Focused on building practical software solutions and transforming real-world challenges into innovative digital products.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3">
            🎓 Diploma Computer Engineering (CGPA 9+)
          </div>

          <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3">
            🐍 Python Development & Data Analytics
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3">
            🚀 Pursuing B.Tech in Computer Engineering
          </div>

          <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-3">
            🤖 Learning AI & Machine Learning
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-lg shadow-purple-500/30" 
  >          Download Resume
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side Photo */}
      <div className="flex justify-center">
        <img
          src="/profile.jpeg"
          alt="Shivrajsinh Rajput"
          className="h-[520px] w-[400px] rounded-3xl object-cover border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.4)]"

        />
      </div>

    </div>
  );
}