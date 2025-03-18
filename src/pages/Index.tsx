
import { Heart, Calendar, MapPin, Clock, Music, Gift, Camera, Mail, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollElements = useRef<HTMLElement[]>([]);
  
  // Add fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Set loaded state after a delay for entrance animations
    setTimeout(() => setIsLoaded(true), 300);
    
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Get all scroll-appear elements
    const elements = document.querySelectorAll('.scroll-appear');
    elements.forEach(el => {
      observer.observe(el);
      scrollElements.current.push(el as HTMLElement);
    });
    
    // Parallax scroll effect
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.15 : 0.3;
        const scrollPosition = window.pageYOffset;
        const transformValue = `translateY(${scrollPosition * speed}px)`;
        (element as HTMLElement).style.transform = transformValue;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.head.removeChild(link);
      window.removeEventListener('scroll', handleScroll);
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Countdown timer
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const weddingDate = new Date("October 15, 2024 16:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
      
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen w-full wedding-gradient transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Cabeçalho */}
      <header className="w-full py-6 px-4 flex justify-center items-center sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="text-center">
          <h2 className="font-cursive text-3xl text-zinc-700 animate-fade-in">
            Maria & João
          </h2>
        </div>
        <nav className="absolute right-4 md:right-8 hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('data-local')} className="text-zinc-600 hover:text-pink-400 transition-colors">
            Quando & Onde
          </button>
          <button onClick={() => scrollToSection('nossa-historia')} className="text-zinc-600 hover:text-pink-400 transition-colors">
            Nossa História
          </button>
          <button onClick={() => scrollToSection('confirmar')} className="text-zinc-600 hover:text-pink-400 transition-colors">
            RSVP
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20 w-64 h-64 rounded-full bg-pink-100 blur-3xl -z-10 parallax-scroll parallax-slow"></div>
        <div className="absolute bottom-10 right-10 opacity-20 w-64 h-64 rounded-full bg-green-100 blur-3xl -z-10 parallax-scroll"></div>
        
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-pink-200"></div>
          <Heart className="mx-4 text-pink-300 animate-heartbeat" size={32} />
          <div className="h-px w-12 bg-pink-200"></div>
        </div>
        
        <h1 className="font-cursive text-5xl md:text-7xl lg:text-8xl mb-6 text-zinc-800 animate-fade-in">
          Vamos nos casar
        </h1>
        
        <p className="font-serif text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 animate-fade-in">
          Convidamos você para celebrar esse momento especial conosco. Sua presença tornará esse dia ainda mais inesquecível.
        </p>
        
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10 animate-fade-in">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center envelope-opener">
            <span className="text-3xl md:text-4xl font-bold text-pink-400">{countdown.days}</span>
            <p className="text-zinc-500 text-sm md:text-base">Dias</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center envelope-opener">
            <span className="text-3xl md:text-4xl font-bold text-pink-400">{countdown.hours}</span>
            <p className="text-zinc-500 text-sm md:text-base">Horas</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center envelope-opener">
            <span className="text-3xl md:text-4xl font-bold text-pink-400">{countdown.minutes}</span>
            <p className="text-zinc-500 text-sm md:text-base">Minutos</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center envelope-opener">
            <span className="text-3xl md:text-4xl font-bold text-pink-400">{countdown.seconds}</span>
            <p className="text-zinc-500 text-sm md:text-base">Segundos</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12 animate-fade-in">
          <Button onClick={() => scrollToSection('confirmar')} className="bg-pink-100 text-pink-800 hover:bg-pink-200 border border-pink-200 rounded-full px-8 py-6 btn-rsvp">
            Confirmar Presença <Sparkles className="ml-2" size={16} />
          </Button>
          <Button onClick={() => scrollToSection('data-local')} variant="outline" className="bg-green-50 text-green-800 hover:bg-green-100 border border-green-200 rounded-full px-8 py-6 hover-grow">
            Ver Localização <MapPin className="ml-2" size={16} />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8 animate-bounce">
          <button onClick={() => scrollToSection('data-local')} aria-label="Scroll down">
            <ArrowDown className="text-zinc-400" />
          </button>
        </div>
      </section>

      {/* Data e Local */}
      <section id="data-local" className="w-full py-16 bg-white scroll-appear">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-4 text-center">
            Data & Local
          </h2>
          
          <p className="text-zinc-600 text-center max-w-2xl mb-12">
            Reserve essa data especial em sua agenda e venha celebrar conosco o início da nossa jornada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Card className="bg-pink-50 border-pink-100 shadow-sm hover-grow">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Calendar className="text-pink-400" />
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-3 text-zinc-800">Cerimônia</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="text-pink-300 mr-2" size={16} />
                  <p className="text-zinc-600">Sábado, 15 de Outubro de 2024</p>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="text-pink-300 mr-2" size={16} />
                  <p className="text-zinc-600">16:00</p>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-pink-300 mr-2" size={16} />
                  <p className="text-zinc-600">Igreja Nossa Senhora da Paz</p>
                </div>
                <p className="text-zinc-600 text-center">Rua das Flores, 123</p>
                
                <Button variant="outline" className="mt-6 bg-white text-pink-500 border-pink-200 hover:bg-pink-50">
                  Ver no mapa
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100 shadow-sm hover-grow">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Music className="text-green-500" />
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-3 text-zinc-800">Recepção</h3>
                <div className="flex items-center mb-2">
                  <Calendar className="text-green-500 mr-2" size={16} />
                  <p className="text-zinc-600">Sábado, 15 de Outubro de 2024</p>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="text-green-500 mr-2" size={16} />
                  <p className="text-zinc-600">18:00</p>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-green-500 mr-2" size={16} />
                  <p className="text-zinc-600">Espaço Jardim Encantado</p>
                </div>
                <p className="text-zinc-600 text-center">Avenida das Árvores, 456</p>
                
                <Button variant="outline" className="mt-6 bg-white text-green-500 border-green-200 hover:bg-green-50">
                  Ver no mapa
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Dress code */}
          <div className="mt-16 bg-zinc-50 p-8 rounded-lg shadow-sm w-full max-w-2xl">
            <h3 className="font-serif font-semibold text-xl mb-4 text-center text-zinc-800">Dress Code</h3>
            <p className="text-zinc-600 text-center mb-6">
              Convidamos você a vestir tons de pastel para nossa celebração. Leve e elegante para este dia especial.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-pink-200 border border-pink-300"></div>
              <div className="w-8 h-8 rounded-full bg-green-200 border border-green-300"></div>
              <div className="w-8 h-8 rounded-full bg-blue-200 border border-blue-300"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-200 border border-yellow-300"></div>
              <div className="w-8 h-8 rounded-full bg-purple-200 border border-purple-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="nossa-historia" className="w-full py-16 wedding-gradient scroll-appear">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-8 text-center">
            Nossa História
          </h2>
          
          <p className="font-serif text-lg text-zinc-600 max-w-3xl text-center mb-12">
            Nos conhecemos há 5 anos em uma tarde de primavera. O que começou como uma amizade, floresceu em um amor que continuamos a cultivar dia após dia. Agora, queremos celebrar esse amor e começar um novo capítulo de nossas vidas juntos.
          </p>
          
          {/* Timeline */}
          <div className="w-full max-w-2xl mb-12">
            <div className="timeline-item pb-10">
              <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Primeiro Encontro</h3>
              <p className="text-zinc-600 mb-1">Maio de 2019</p>
              <p className="text-zinc-600">Nos conhecemos em uma cafeteria por acaso. João derrubou café no livro que Maria estava lendo.</p>
            </div>
            
            <div className="timeline-item pb-10">
              <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Primeiro Beijo</h3>
              <p className="text-zinc-600 mb-1">Julho de 2019</p>
              <p className="text-zinc-600">Durante um pôr do sol no parque da cidade, após um piquenique surpresa organizado por João.</p>
            </div>
            
            <div className="timeline-item pb-10">
              <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">Mudança Juntos</h3>
              <p className="text-zinc-600 mb-1">Janeiro de 2022</p>
              <p className="text-zinc-600">Decidimos compartilhar nosso primeiro lar juntos, um pequeno apartamento cheio de amor.</p>
            </div>
            
            <div className="timeline-item">
              <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">O Pedido</h3>
              <p className="text-zinc-600 mb-1">Dezembro de 2023</p>
              <p className="text-zinc-600">Durante uma viagem à praia, João pediu Maria em casamento ao pôr do sol, com o som das ondas como testemunha.</p>
            </div>
          </div>
          
          {/* Photo Carousel */}
          <h3 className="font-serif font-semibold text-2xl mb-6 text-center text-zinc-800">
            Nossos Momentos
          </h3>
          
          <Carousel className="w-full max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <div className="p-2">
                  <div className="bg-pink-100 aspect-[4/3] rounded-lg photo-frame"></div>
                  <p className="text-center mt-2 text-zinc-600">Nosso primeiro encontro</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-2">
                  <div className="bg-green-100 aspect-[4/3] rounded-lg photo-frame"></div>
                  <p className="text-center mt-2 text-zinc-600">Aniversário de namoro</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-2">
                  <div className="bg-pink-100 aspect-[4/3] rounded-lg photo-frame"></div>
                  <p className="text-center mt-2 text-zinc-600">Viagem para a praia</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-2">
                  <div className="bg-green-100 aspect-[4/3] rounded-lg photo-frame"></div>
                  <p className="text-center mt-2 text-zinc-600">O pedido de casamento</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="w-full py-16 bg-white scroll-appear">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-8 text-center">
            Informações Importantes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            <Card className="border-pink-100 shadow-sm hover-grow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Gift className="text-pink-400" size={20} />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 text-zinc-800">Lista de Presentes</h3>
                <p className="text-zinc-600 text-center text-sm">
                  Criamos uma lista de presentes para facilitar suas escolhas, mas sua presença é o melhor presente.
                </p>
                <Button variant="outline" className="mt-4 text-sm px-4 py-1 h-auto">
                  Ver Lista
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 shadow-sm hover-grow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Camera className="text-green-500" size={20} />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 text-zinc-800">Fotos do Evento</h3>
                <p className="text-zinc-600 text-center text-sm">
                  Compartilhe suas fotos com a hashtag #MariaEJoão2024 para criarmos memórias juntos.
                </p>
                <Button variant="outline" className="mt-4 text-sm px-4 py-1 h-auto">
                  Galeria
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 shadow-sm hover-grow">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Mail className="text-pink-400" size={20} />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 text-zinc-800">Contato</h3>
                <p className="text-zinc-600 text-center text-sm">
                  Para quaisquer dúvidas, entre em contato conosco por email ou telefone.
                </p>
                <Button variant="outline" className="mt-4 text-sm px-4 py-1 h-auto">
                  Fale Conosco
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ */}
          <div className="w-full max-w-2xl bg-zinc-50 p-8 rounded-lg mb-8">
            <h3 className="font-serif font-semibold text-xl mb-6 text-center text-zinc-800">Perguntas Frequentes</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-serif font-medium text-lg mb-2 text-zinc-800">Posso levar crianças?</h4>
                <p className="text-zinc-600">Sim, crianças são bem-vindas. Teremos atividades especiais para elas durante a recepção.</p>
              </div>
              
              <div>
                <h4 className="font-serif font-medium text-lg mb-2 text-zinc-800">Haverá estacionamento?</h4>
                <p className="text-zinc-600">Sim, o local da recepção possui estacionamento gratuito para os convidados.</p>
              </div>
              
              <div>
                <h4 className="font-serif font-medium text-lg mb-2 text-zinc-800">Qual o prazo para confirmar presença?</h4>
                <p className="text-zinc-600">Pedimos que confirme sua presença até 15 de Setembro de 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="confirmar" className="w-full py-16 bg-white scroll-appear">
        <div className="max-w-xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-cursive text-4xl md:text-5xl text-zinc-800 mb-8 text-center">
            Confirme sua Presença
          </h2>
          
          <p className="font-serif text-lg text-zinc-600 max-w-md text-center mb-8">
            Ficaremos muito felizes com a sua presença. Por favor, confirme até 15 de Setembro de 2024.
          </p>
          
          <Card className="w-full bg-pink-50 border-pink-100 envelope-opener">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <Input 
                      type="text" 
                      placeholder="Nome completo" 
                      className="border-pink-200 focus-visible:ring-pink-200"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="border-pink-200 focus-visible:ring-pink-200"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <Input 
                      type="tel" 
                      placeholder="Telefone" 
                      className="border-pink-200 focus-visible:ring-pink-200"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <Input 
                      type="number" 
                      placeholder="Número de acompanhantes" 
                      className="border-pink-200 focus-visible:ring-pink-200"
                      min="0"
                    />
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pink-100">
                    <p className="text-zinc-700 mb-2 font-medium">Você comparecerá?</p>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="attendance" className="text-pink-400 focus:ring-pink-200" />
                        <span className="text-zinc-600">Sim, estarei lá</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="attendance" className="text-pink-400 focus:ring-pink-200" />
                        <span className="text-zinc-600">Infelizmente não</span>
                      </label>
                    </div>
                  </div>
                  <div className="transition-all duration-300 hover:translate-y-[-2px]">
                    <textarea 
                      placeholder="Alguma observação especial (restrições alimentares, etc)" 
                      className="w-full border border-pink-200 focus-visible:ring-pink-200 rounded-md p-3 min-h-24"
                    ></textarea>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-300 hover:bg-pink-400 text-white btn-rsvp">
                  Confirmar <Sparkles className="ml-2" size={16} />
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
            <Heart className="mx-3 text-pink-300 animate-pulse" size={16} />
            <div className="h-px w-8 bg-pink-200"></div>
          </div>
          
          <h3 className="font-cursive text-2xl text-zinc-700 mb-4">
            Maria & João
          </h3>
          
          <p className="font-serif text-sm text-zinc-500 mb-4">
            Esperamos vocês no nosso grande dia!
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-500 transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          
          <p className="text-xs text-zinc-400">
            © 2024 Maria & João | Design & Desenvolvimento por Lovable
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
