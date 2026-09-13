import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center gap-2 group"
        >
          <Scissors className="w-7 h-7 text-gold transition-transform group-hover:rotate-12" strokeWidth={1.5} />
          <span className="font-display text-2xl tracking-wide text-white">
            MARANGONI
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 gradient-gold text-zinc-950 font-semibold text-sm rounded-sm hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 hover:scale-105"
        >
          Agendar Horário
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gold"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 pt-4 pb-6 space-y-3 bg-zinc-950/98 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-zinc-300 hover:text-gold py-2 border-b border-zinc-800/50 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 px-5 py-3 gradient-gold text-zinc-950 font-semibold rounded-sm"
            >
              Agendar Horário
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
