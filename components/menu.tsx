"use client";
import { useState } from "react";
import About from "@/app/about";
import Experience from "@/app/experience";
import Contact from "@/components/contatc";
import Skills from "@/components/skills";
import Hero from "./hero";

// Definição do tipo para as chaves do menu
type ComponentKey = "home" | "about" | "experience" | "contact" | "skills";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Definição do array com tipagem correta
  const menuItems: { name: string; key: ComponentKey }[] = [
    { name: "Home", key: "home" },
    { name: "Sobre Mim", key: "about" },
    { name: "Experiência", key: "experience" },
    { name: "Contato", key: "contact" },
    { name: "Skills", key: "skills" },
  ];

  return (
    <div className="min-h-screen bg-green-500 text-gray-600 relative">
      {/* Botão sanduíche */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-blue-700 text-white rounded-md shadow-lg focus:outline-none hover:bg-aquamarine-600 transition-all"
        aria-label="Abrir menu"
      >
        {/* Ícone sanduíche animado */}
        <div className="space-y-1">
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu recolhido */}
      {menuOpen && (
        <nav className="fixed top-14 left-4 bg-white shadow-lg rounded-md z-40">
          <ul className="flex flex-col gap-2 p-3 text-sm sm:text-lg">
            {menuItems.map(({ name, key }) => (
              <li
                key={key}
                onClick={() => {
                  setActiveComponent(key);
                  setMenuOpen(false); // fecha o menu ao clicar
                }}
                className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                  activeComponent === key
                    ? "bg-green-700 text-white"
                    : "hover:bg-green-400 text-gray-800"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="p-10 text-center">
        {activeComponent === "home" && <Hero />}
        {activeComponent === "about" && <About />}
        {activeComponent === "experience" && <Experience />}
        {activeComponent === "contact" && <Contact />}
        {activeComponent === "skills" && <Skills />}
      </div>
    </div>
  );
}
