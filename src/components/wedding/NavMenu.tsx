
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavMenuProps {
  scrollToSection: (id: string) => void;
}

export const NavMenu = ({ scrollToSection }: NavMenuProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className={`${isScrolled ? 'text-pink-400' : 'text-white'} mr-2`} size={20} />
          <span className={`font-serif text-lg ${isScrolled ? 'text-zinc-800' : 'text-white'}`}>Maria & João</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('detalhes')} 
            className={`text-sm ${isScrolled ? 'text-zinc-600 hover:text-pink-500' : 'text-black hover:text-pink-200'} transition-colors`}
          >
            Detalhes
          </button>
          <button 
            onClick={() => handleNavClick('historia')} 
            className={`text-sm ${isScrolled ? 'text-zinc-600 hover:text-pink-500' : 'text-black hover:text-pink-200'} transition-colors`}
          >
            História
          </button>
          <button 
            onClick={() => handleNavClick('confirmar')} 
            className={`text-sm ${isScrolled ? 'text-zinc-600 hover:text-pink-500' : 'text-black hover:text-pink-200'} transition-colors`}
          >
            Confirme sua presença
          </button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu}
            className={isScrolled ? 'text-zinc-800' : 'text-white'}
          >
            {isMenuOpen ? 'Fechar' : 'Menu'}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('detalhes')} 
              className="text-zinc-800 hover:text-pink-500 py-2 transition-colors"
            >
              Detalhes
            </button>
            <button 
              onClick={() => handleNavClick('historia')} 
              className="text-zinc-800 hover:text-pink-500 py-2 transition-colors"
            >
              História
            </button>
            <button 
              onClick={() => handleNavClick('confirmar')} 
              className="text-zinc-800 hover:text-pink-500 py-2 transition-colors"
            >
              Confirme sua Presença
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
