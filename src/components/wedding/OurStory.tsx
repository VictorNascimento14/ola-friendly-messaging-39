
import { Card, CardContent } from "@/components/ui/card";

export const OurStory = () => {
  return (
    <div id="historia" className="py-20 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center text-zinc-800 fade-in-section">
          Nossa História
        </h2>
        
        <p className="text-zinc-600 text-center mb-12 max-w-2xl fade-in-section">
          Nos conhecemos há 5 anos em uma tarde de primavera. O que começou como uma amizade, floresceu em um amor que continuamos a cultivar dia após dia. Agora, queremos celebrar esse amor e começar um novo capítulo de nossas vidas juntos.
        </p>
        
        <div className="w-full max-w-2xl mb-12">
          <div className="timeline-item pb-10">
            <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Primeiro Encontro</h3>
            <p className="text-zinc-500 mb-2">Maio de 2019</p>
            <p className="text-zinc-600">
              Nos conhecemos em um café no centro da cidade. Uma conversa que era para durar 30 minutos se estendeu por 3 horas.
            </p>
          </div>
          
          <div className="timeline-item pb-10">
            <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Namoro</h3>
            <p className="text-zinc-500 mb-2">Agosto de 2019</p>
            <p className="text-zinc-600">
              Após meses de amizade, decidimos dar o próximo passo e começar um relacionamento.
            </p>
          </div>
          
          <div className="timeline-item pb-10">
            <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Pedido de Casamento</h3>
            <p className="text-zinc-500 mb-2">Dezembro de 2023</p>
            <p className="text-zinc-600">
              Durante uma viagem à praia, sob o céu estrelado, fizemos a promessa de passar o resto de nossas vidas juntos.
            </p>
          </div>
        </div>
        
        <h3 className="font-serif font-semibold text-2xl mb-6 text-center text-zinc-800">
          Nossos Momentos
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12 fade-in-section">
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-pink-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 1</p>
            </div>
          </div>
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-green-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 2</p>
            </div>
          </div>
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-pink-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 3</p>
            </div>
          </div>
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-green-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 4</p>
            </div>
          </div>
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-pink-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 5</p>
            </div>
          </div>
          <div className="photo-frame overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-square bg-green-100 flex items-center justify-center">
              <p className="text-zinc-500 text-sm">Foto 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
