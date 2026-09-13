import { Scissors, Calendar, ChevronDown } from "lucide-react";
import { siteData, getWhatsAppLink, heroImage } from "@/data/site";

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior da Barbearia Marangoni"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-20 pb-16">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
          <div className="h-px w-12 bg-gold/60" />
          <Scissors className="w-6 h-6 text-gold" strokeWidth={1.5} />
          <div className="h-px w-12 bg-gold/60" />
        </div>

        <p className="text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
          Barbearia em Varginha - MG
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-white leading-none mb-6">
          BARBEARIA <span className="text-gradient-gold">MARANGONI</span>
        </h1>

        <p className="font-serif-display text-xl md:text-2xl text-gold italic mb-6">
          {siteData.slogan}
        </p>

        <p className="text-zinc-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {siteData.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-gold text-zinc-950 font-bold text-sm tracking-wide rounded-sm hover:shadow-2xl hover:shadow-yellow-900/40 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Agendar Horário
          </a>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/50 text-gold font-bold text-sm tracking-wide rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Conheça Nossos Serviços
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStart}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Voltar ao topo"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
