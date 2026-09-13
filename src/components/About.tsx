import { Star, MessageSquare, Scissors, Baby, Sparkles } from "lucide-react";
import { siteData, aboutImage } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Star, text: `Nota ${siteData.rating}/5` },
  { icon: MessageSquare, text: `${siteData.reviewsCount} avaliações` },
  { icon: Scissors, text: "Cortes tradicionais e modernos" },
  { icon: Baby, text: "Atendimento infantil e adulto" },
  { icon: Sparkles, text: "Ambiente profissional" },
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="sobre" ref={ref} className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative animate-fade-up ${visible ? "visible" : ""}`}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold/30" />
              <img
                src={aboutImage}
                alt="Barbeiro atendendo cliente na Barbearia Marangoni"
                className="relative w-full h-[420px] md:h-[520px] object-cover rounded-sm"
              />
              {/* Rating badge */}
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-zinc-900 border border-gold/30 px-6 py-4 rounded-sm shadow-xl">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-2xl font-display text-white">{siteData.rating}<span className="text-gold text-lg">/5</span></p>
                <p className="text-xs text-zinc-400">{siteData.reviewsCount} avaliações</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`animate-fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Sobre a Marangoni
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              ESTILO E <span className="text-gradient-gold">PERSONALIDADE</span><br />
              EM CADA CORTE
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
              {siteData.about}
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <span className="text-zinc-200 text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
