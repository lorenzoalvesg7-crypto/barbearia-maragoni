import { Camera, X } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Gallery() {
  const { ref, visible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galeria" ref={ref} className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 animate-fade-up ${visible ? "visible" : ""}`}>
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Galeria
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            NOSSO <span className="text-gradient-gold">TRABALHO</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gold/40" />
            <Camera className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gold/40" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.url)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer animate-scale-in ${
                visible ? "visible" : ""
              } ${
                i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center">
                <span className="text-gold text-xs font-medium tracking-wider uppercase mb-1">
                  {img.category}
                </span>
                <span className="text-white text-sm">Ver foto</span>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-0 border-gold group-hover:border-2 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Foto ampliada da galeria"
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
