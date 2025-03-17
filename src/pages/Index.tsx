
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const Index = () => {
  // Adiciona os links das fontes ao carregamento do componente
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen w-full wedding-gradient">
      {/* Cabeçalho */}
      <header className="w-full py-6 px-4 flex justify-center items-center">
        <div className="text-center">
          <h2 className="font-cursive text-3xl text-zinc-700 animate-fade-in">
            Maria & João
          </h2>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-pink-200"></div>
          <Heart className="mx-4 text-pink-300 animate-pulse" size={32} />
          <div className="h-px w-12 bg-pink-200"></div>
        </div>
        
        <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl mb-6 text-zinc-800 animate-fade-in">
          Vamos nos casar
        </h1>
        
        <p className="font-serif text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 animate-fade-in">
          Convidamos você para celebrar esse momento especial conosco. Sua presença tornará esse dia ainda mais inesquecível.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12 animate-fade-in">
          <Button className="bg-pink-100 text-pink-800 hover:bg-pink-200 border border-pink-200 rounded-full px-8 py-6">
            Confirmar Presença
          </Button>
          <Button variant="outline" className="bg-green-50 text-green-800 hover:bg-green-100 border border-green-200 rounded-full px-8 py-6">
            Localização
          </Button>
        </div>
      </section>

      {/* Data e Local */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-12 text-center">
            Data & Local
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Card className="bg-pink-50 border-pink-100 shadow-sm">
              <CardContent className="p-8 flex flex-col items-center">
                <h3 className="font-serif font-semibold text-2xl mb-3 text-zinc-800">Cerimônia</h3>
                <p className="text-zinc-600 mb-4 text-center">Sábado, 15 de Outubro de 2024</p>
                <p className="text-zinc-600 mb-4 text-center">16:00</p>
                <p className="text-zinc-600 text-center">Igreja Nossa Senhora da Paz<br />Rua das Flores, 123</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100 shadow-sm">
              <CardContent className="p-8 flex flex-col items-center">
                <h3 className="font-serif font-semibold text-2xl mb-3 text-zinc-800">Recepção</h3>
                <p className="text-zinc-600 mb-4 text-center">Sábado, 15 de Outubro de 2024</p>
                <p className="text-zinc-600 mb-4 text-center">18:00</p>
                <p className="text-zinc-600 text-center">Espaço Jardim Encantado<br />Avenida das Árvores, 456</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="w-full py-16 wedding-gradient">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-8 text-center">
            Nossa História
          </h2>
          
          <p className="font-serif text-lg text-zinc-600 max-w-3xl text-center mb-12">
            Nos conhecemos há 5 anos em uma tarde de primavera. O que começou como uma amizade, floresceu em um amor que continuamos a cultivar dia após dia. Agora, queremos celebrar esse amor e começar um novo capítulo de nossas vidas juntos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-square bg-pink-100 rounded-lg mb-4"></div>
              <p className="text-center text-zinc-600">Nosso primeiro encontro</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-square bg-green-100 rounded-lg mb-4"></div>
              <p className="text-center text-zinc-600">O pedido de casamento</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-square bg-pink-100 rounded-lg mb-4"></div>
              <p className="text-center text-zinc-600">Nossa jornada juntos</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-8 text-center">
            Confirme sua Presença
          </h2>
          
          <p className="font-serif text-lg text-zinc-600 max-w-md text-center mb-8">
            Ficaremos muito felizes com a sua presença. Por favor, confirme até 15 de Setembro de 2024.
          </p>
          
          <Card className="w-full bg-pink-50 border-pink-100">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    type="text" 
                    placeholder="Nome completo" 
                    className="border-pink-200 focus-visible:ring-pink-200"
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="border-pink-200 focus-visible:ring-pink-200"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Telefone" 
                    className="border-pink-200 focus-visible:ring-pink-200"
                  />
                  <Input 
                    type="number" 
                    placeholder="Número de acompanhantes" 
                    className="border-pink-200 focus-visible:ring-pink-200"
                    min="0"
                  />
                </div>
                
                <Button className="w-full bg-pink-300 hover:bg-pink-400 text-white">
                  Confirmar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="w-full py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-pink-200"></div>
            <Heart className="mx-3 text-pink-300" size={16} />
            <div className="h-px w-8 bg-pink-200"></div>
          </div>
          
          <h3 className="font-cursive text-2xl text-zinc-700 mb-4">
            Maria & João
          </h3>
          
          <p className="font-serif text-sm text-zinc-500">
            Esperamos vocês no nosso grande dia!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
