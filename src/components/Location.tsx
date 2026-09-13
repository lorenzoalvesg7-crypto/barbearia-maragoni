import { MapPin, Navigation, Clock } from "lucide-react";
import { siteData } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Location() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="localizacao" ref={ref} className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Localização
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            ONDE <span className="text-gradient-gold">ESTAMOS?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Info card */}
          <div className={`flex flex-col justify-between bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-sm animate-fade-up ${visible ? "visible" : ""}`}>
            <div>
              <div className="flex items-start gap-4 mb-8">
                <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm">
                  <MapPin className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {siteData.address.street}<br />
                    {siteData.address.city}<br />
                    CEP: {siteData.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm">
                  <Clock className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-3">Horários de Funcionamento</h3>
                  {/* Editável: atualize os horários no arquivo src/data/site.ts */}
                  <ul className="space-y-2">
                    {siteData.hours.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-zinc-400">{item.day}</span>
                        <span className={`font-medium ${item.time === "Fechado" ? "text-red-400/70" : "text-gold"}`}>
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={siteData.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 gradient-gold text-zinc-950 font-bold text-sm rounded-sm hover:shadow-xl hover:shadow-yellow-900/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Navigation className="w-5 h-5" />
              Como Chegar
            </a>
          </div>

          {/* Map */}
          <div className={`relative min-h-[400px] lg:min-h-full rounded-sm overflow-hidden border border-zinc-800 animate-fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <iframe
              src={siteData.mapsEmbedUrl}
              className="w-full h-full min-h-[400px]"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) contrast(0.8)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Barbearia Marangoni"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
