import { Star, Quote, ExternalLink } from "lucide-react";
import { siteData, reviews } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < count ? "text-gold fill-gold" : "text-zinc-700"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="avaliacoes" ref={ref} className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Avaliações
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            O QUE DIZEM NOSSOS <span className="text-gradient-gold">CLIENTES</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex flex-col items-center bg-zinc-900 border border-gold/20 px-10 py-6 rounded-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display text-5xl text-white">{siteData.rating}</span>
              <div className="flex flex-col items-start">
                <Stars count={5} />
                <span className="text-xs text-zinc-400 mt-1">de 5 estrelas</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm">
              Baseada em <span className="text-gold font-semibold">{siteData.reviewsCount}</span> avaliações
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`group relative bg-zinc-900 border border-zinc-800 p-8 rounded-sm hover:border-gold/30 transition-all duration-500 animate-scale-in ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors" />

              <Stars count={review.rating} />

              <p className="text-zinc-300 text-base leading-relaxed mt-4 mb-6 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-zinc-950 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{review.name}</p>
                  <p className="text-zinc-500 text-xs">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={`text-center mt-12 animate-fade-up ${visible ? "visible" : ""}`}>
          <a
            href={`https://www.google.com/search?q=Barbearia+Marangoni+Varginha+MG+reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/50 text-gold font-semibold text-sm rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Ver todas as avaliações
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
