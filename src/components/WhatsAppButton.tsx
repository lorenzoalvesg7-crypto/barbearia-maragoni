import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/data/site";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / message bubble */}
      {showTooltip && !dismissed && (
        <div className="relative bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg rounded-br-sm shadow-2xl max-w-[240px] animate-fade-in">
          <button
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="absolute -top-2 -left-2 w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-white text-sm font-medium mb-1">Barbearia Marangoni</p>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Olá! Quer agendar seu horário? Clique aqui e fale conosco no WhatsApp.
          </p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 pulse-ring"
        aria-label="WhatsApp"
        onMouseEnter={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.5} />
      </a>
    </div>
  );
}
