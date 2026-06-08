import { Mail, TerminalSquare } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <p className="text-sm text-slate-400">
          © 2026 {profile.name}. Built with React, Tailwind CSS, and attention to detail.
        </p>

        <div className="flex gap-3">
          {[
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
  { href: 'https://github.com', label: 'GitHub', icon: TerminalSquare }
].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan hover:text-cyan"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}