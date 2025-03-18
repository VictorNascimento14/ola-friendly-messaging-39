
import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 border-t border-green-100">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-2xl mb-6 text-zinc-800">
          Graziella & Victor
        </h3>
        
        <div className="w-20 h-1 bg-pink-200 mx-auto mb-8"></div>
        
        <p className="flex items-center justify-center text-zinc-600 mb-6">
          <Mail className="mr-2" size={18} />
          graziella_galvao@hotmail.com
        </p>
        
        <p className="text-zinc-500 text-sm mb-4">
        30 de Setembro de 2026 • Fortaleza, CE
        </p>
        
        <p className="flex items-center justify-center text-zinc-500 text-sm">
          Feito com <Heart className="mx-1 text-pink-400" size={14} /> para o nosso grande dia
        </p>
      </div>
    </footer>
  );
};
