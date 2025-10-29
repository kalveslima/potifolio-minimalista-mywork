"use client";
import { useState, useRef, useEffect } from "react";
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

  // Refs para cada seção
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const sectionRefs: Record<ComponentKey, React.RefObject<HTMLElement>> = {
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    contact: contactRef,
    skills: skillsRef,
  };

  const menuItems: { name: string; key: ComponentKey }[] = [
    { name: "Home", key: "home" },
    { name: "Sobre Mim", key: "about" },
    { name: "Experiência", key: "experience" },
    { name: "Contato", key: "contact" },
    { name: "Skills", key: "skills" },
  ];

  // Atualiza o activeComponent conforme scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const key of Object.keys(sectionRefs) as ComponentKey[]) {
        const ref = sectionRefs[key].current;
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetBottom = offsetTop + ref.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveComponent(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (key: ComponentKey) => {
    const ref = sectionRefs[key].current;
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setActiveComponent(key);
  };

  return (
    <div className="relative">
      {/* Botão sanduíche */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 left-10 z-50 p-3 bg-blue-700 text-white rounded-md shadow-lg focus:outline-none hover:bg-blue-600 transition-all"
        aria-label="Abrir menu"
      >
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
          <ul className="flex flex-col gap-1 p-2 text-sm sm:text-lg">
            {menuItems.map(({ name, key }) => (
              <li
                key={key}
                onClick={() => handleMenuClick(key)}
                className={`cursor-pointer px-3 py-1 rounded-md transition-all duration-150 ${
                  activeComponent === key
                    ? "bg-blue-700 text-white"
                    : "hover:bg-blue-400 text-gray-800"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main className="pt-16">
        <section ref={homeRef} id="home">
          <Hero />
        </section>

        <section ref={aboutRef} id="about">
          <About />
        </section>

        <section ref={experienceRef} id="experience">
          <Experience />
        </section>

        <section ref={contactRef} id="contact">
          <Contact />
        </section>

        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}
