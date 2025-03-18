
import { Calendar, MapPin, Clock, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EventDetails = () => {
  return (
    <div id="detalhes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-zinc-800 fade-in-section">
          Detalhes do Evento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 fade-in-section">
          <Card className="border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden card-hover bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Calendar className="text-pink-400 mr-3" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                    Cerimônia
                  </h3>
                  <p className="text-zinc-600">
                    Sábado, 15 de Outubro de 2024
                  </p>
                  <p className="text-zinc-600">
                    16:00 - 17:30
                  </p>
                  <p className="mt-4 text-zinc-600">
                    Uma cerimônia íntima ao ar livre cercada por jardins floridos e a beleza da natureza.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-pink-400 mr-3" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                    Local
                  </h3>
                  <p className="text-zinc-600">
                    Espaço Jardim das Flores
                  </p>
                  <p className="text-zinc-600">
                    Av. das Rosas, 1500
                  </p>
                  <p className="text-zinc-600">
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden card-hover bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Clock className="text-pink-400 mr-3" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                    Recepção
                  </h3>
                  <p className="text-zinc-600">
                    Sábado, 15 de Outubro de 2024
                  </p>
                  <p className="text-zinc-600">
                    18:00 - 00:00
                  </p>
                  <p className="mt-4 text-zinc-600">
                    Celebre conosco com um jantar elegante, seguido de música e dança.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Music className="text-pink-400 mr-3" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                    Entretenimento
                  </h3>
                  <p className="text-zinc-600">
                    DJ Melody
                  </p>
                  <p className="text-zinc-600">
                    Banda Harmonia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-zinc-50 p-8 rounded-lg shadow-sm w-full max-w-2xl mx-auto">
          <h3 className="font-serif font-semibold text-xl mb-4 text-center text-zinc-800">Dress Code</h3>
          <p className="text-zinc-600 text-center mb-6">
            Traje Social
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-200 mx-auto mb-2"></div>
              <p className="text-sm text-zinc-600">Mulheres: Vestido social</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-200 mx-auto mb-2"></div>
              <p className="text-sm text-zinc-600">Homens: Terno e gravata</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
