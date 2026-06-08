import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Shivrajsinh<span className="text-cyan-400">.</span>
        </h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-2">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}