import { Scissors, Baby, Sparkles, Crown, Zap, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services, getWhatsAppLink } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  baby: Baby,
  sparkles: Sparkles,
  crown: Crown,
  razor: Zap,
  user: User,
};

export default function Services() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="servicos" ref={ref} className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            SERVIÇOS <span className="text-gradient-gold">PREMIUM</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold/40" />
            <Scissors className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Scissors;
            return (
              <div
                key={i}
                className={`group relative bg-zinc-950 border border-zinc-800 p-8 rounded-sm hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 animate-scale-in ${
                  visible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Gold accent on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-gold/30 rounded-sm group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={getWhatsAppLink(`Olá! Gostaria de agendar um ${service.title.toLowerCase()} na Barbearia Marangoni.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gold text-sm font-medium border-b border-gold/30 hover:border-gold transition-colors pb-0.5"
                >
                  Agendar
                </a>
              </div>
            );
          })}
        </div>

        {/* Note about prices */}
        <p className="text-center text-zinc-500 text-sm mt-12 italic">
          Consulte valores e promoções diretamente pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
