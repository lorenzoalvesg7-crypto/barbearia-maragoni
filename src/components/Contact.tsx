import { Phone, MessageCircle, Instagram, Facebook, Mail } from "lucide-react";
import { siteData, getWhatsAppLink } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="contato" ref={ref} className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            FALE <span className="text-gradient-gold">CONOSCO</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Agende seu horário ou tire suas dúvidas. Estamos prontos para atender você.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* WhatsApp */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-zinc-950 border border-zinc-800 p-8 rounded-sm hover:border-green-500/40 transition-all duration-400 hover:-translate-y-1 animate-scale-in ${visible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-green-500/10 border border-green-500/30 rounded-sm">
                <MessageCircle className="w-6 h-6 text-green-400" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                <p className="text-zinc-400 text-sm">{siteData.phone}</p>
              </div>
            </div>
            <p className="text-zinc-500 text-xs italic">
              Mensagem automática: "{siteData.whatsappMessage}"
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:+5535988559938`}
            className={`group bg-zinc-950 border border-zinc-800 p-8 rounded-sm hover:border-gold/40 transition-all duration-400 hover:-translate-y-1 animate-scale-in ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm">
                <Phone className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-white font-semibold text-lg">Telefone</h3>
                <p className="text-zinc-400 text-sm">{siteData.phone}</p>
              </div>
            </div>
            <p className="text-zinc-500 text-xs">Clique para ligar diretamente.</p>
          </a>
        </div>

        {/* Social links */}
        <div className={`text-center animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-zinc-400 text-sm mb-5">Siga-nos nas redes sociais</p>
          <div className="flex items-center justify-center gap-4">
            {siteData.social.instagram ? (
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-sm text-zinc-400 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            ) : (
              <span className="w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-700" aria-label="Instagram em breve">
                <Instagram className="w-5 h-5" />
              </span>
            )}
            {siteData.social.facebook ? (
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-sm text-zinc-400 hover:text-gold hover:border-gold/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            ) : (
              <span className="w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-700" aria-label="Facebook em breve">
                <Facebook className="w-5 h-5" />
              </span>
            )}
            <span className="w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-700" aria-label="Email em breve">
              <Mail className="w-5 h-5" />
            </span>
          </div>
          <p className="text-zinc-600 text-xs mt-4">
            Redes sociais serão vinculadas em breve.
          </p>
        </div>

        {/* Big WhatsApp CTA */}
        <div className={`mt-12 text-center animate-fade-up ${visible ? "visible" : ""}`}>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-zinc-950 font-bold text-base rounded-sm hover:shadow-2xl hover:shadow-yellow-900/40 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
