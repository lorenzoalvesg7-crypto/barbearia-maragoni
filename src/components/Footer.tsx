import { Scissors, MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-7 h-7 text-gold" strokeWidth={1.5} />
              <span className="font-display text-2xl text-white tracking-wide">
                MARANGONI
              </span>
            </div>
            <p className="font-serif-display text-gold italic text-lg mb-4">
              {siteData.slogan}
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {siteData.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-zinc-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  {siteData.address.street}<br />
                  {siteData.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:+5535988559938`}
                  className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  {siteData.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {siteData.social.instagram ? (
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-500 hover:text-gold hover:border-gold/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center border border-zinc-800/50 rounded-sm text-zinc-700">
                  <Instagram className="w-4 h-4" />
                </span>
              )}
              {siteData.social.facebook ? (
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-500 hover:text-gold hover:border-gold/40 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              ) : (
                <span className="w-10 h-10 flex items-center justify-center border border-zinc-800/50 rounded-sm text-zinc-700">
                  <Facebook className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Barbearia Marangoni. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Varginha - Minas Gerais
          </p>
        </div>
      </div>
    </footer>
  );
}
