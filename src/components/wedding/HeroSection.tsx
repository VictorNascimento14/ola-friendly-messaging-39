
import { Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4 text-center hero-section">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl mb-4 text-zinc-800 animate-fade-in hero-title">
          Maria & João
        </h1>
        <div className="w-32 h-1 bg-green-200 mx-auto mb-8 animate-fade-in"></div>
        <p className="text-lg md:text-xl text-zinc-600 mb-10 animate-fade-in">
          15 de Outubro de 2024 • São Paulo, SP
        </p>
        <p className="text-zinc-600 mb-10 animate-fade-in leading-relaxed max-w-xl mx-auto">
          Convidamos você para celebrar esse momento especial conosco. Sua presença tornará esse dia ainda mais inesquecível.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12 animate-fade-in">
          <Button onClick={() => scrollToSection('confirmar')} className="bg-pink-100 text-pink-800 hover:bg-pink-200 border border-pink-200 rounded-full px-8 py-6 btn-rsvp">
            Confirmar Presença <Sparkles className="ml-2" size={16} />
          </Button>
          <Button onClick={() => scrollToSection('local')} variant="outline" className="border-green-200 text-green-800 hover:bg-green-50 rounded-full px-8 py-6 btn-location">
            Ver Local
          </Button>
        </div>
        
        <div className="animate-bounce absolute bottom-10 cursor-pointer" onClick={() => scrollToSection('detalhes')}>
          <ArrowDown className="text-pink-400" />
          <span className="sr-only">Rolar para baixo</span>
        </div>
      </div>
    </div>
  );
};
