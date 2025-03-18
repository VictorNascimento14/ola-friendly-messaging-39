
import { Mail, Heart, Gift, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const RsvpSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      attendance: "sim",
      guests: "0",
      dietary: "",
      message: ""
    }
  });
  
  const onSubmit = (data: any) => {
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setFormStatus('success');
      form.reset();
    }, 1500);
  };
  
  return (
    <div id="confirmar" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-zinc-800 fade-in-section">
          Confirme Sua Presença
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-sm fade-in-section">
            <h3 className="font-serif font-semibold text-xl mb-6 text-center text-zinc-800">Confirme sua Presença</h3>
            
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <Heart className="mx-auto mb-4 text-pink-400" size={40} />
                <h4 className="font-serif text-xl mb-2 text-zinc-800">Obrigado!</h4>
                <p className="text-zinc-600 mb-4">
                  Sua resposta foi registrada com sucesso.
                </p>
                <Button 
                  onClick={() => setFormStatus('idle')} 
                  variant="outline" 
                  className="border-pink-200 text-pink-800 hover:bg-pink-50"
                >
                  Enviar Outra Resposta
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input required placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu.email@exemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Você irá comparecer?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sim" id="sim" />
                              <label htmlFor="sim" className="text-zinc-600">Sim</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="nao" id="nao" />
                              <label htmlFor="nao" className="text-zinc-600">Não</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Acompanhantes</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dietary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Restrições Alimentares</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Informe se você tem alguma restrição alimentar"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem para os Noivos</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Deixe uma mensagem para os noivos"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Confirmar Presença'}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          <div>
            <Tabs defaultValue="presentes" className="fade-in-section">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="presentes">Presentes</TabsTrigger>
                <TabsTrigger value="fotos">Fotos</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="presentes">
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-6">
                      <Gift className="text-pink-400 mr-3" size={24} />
                      <div>
                        <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                          Lista de Presentes
                        </h3>
                        <p className="text-zinc-600 mb-4">
                          Seu amor e presença são os maiores presentes que poderíamos receber. No entanto, se você desejar nos presentear, criamos uma lista de presentes que pode ajudar em nossa nova jornada.
                        </p>
                        <Button className="bg-green-100 text-green-800 hover:bg-green-200 border border-green-200">
                          Ver Lista
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fotos">
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-6">
                      <Camera className="text-pink-400 mr-3" size={24} />
                      <div>
                        <h3 className="font-serif font-semibold text-xl mb-2 text-zinc-800">
                          Compartilhe Suas Fotos
                        </h3>
                        <p className="text-zinc-600 mb-4">
                          Gostaríamos de ver o casamento através dos seus olhos. Por favor, use nossa hashtag nas redes sociais ou faça upload diretamente em nosso álbum compartilhado.
                        </p>
                        <div className="font-serif text-lg text-pink-400 mb-4">#MariaEJoao2024</div>
                        <Button className="bg-green-100 text-green-800 hover:bg-green-200 border border-green-200">
                          Álbum Compartilhado
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faq">
                <div className="bg-zinc-50 p-8 rounded-lg mb-8">
                  <h3 className="font-serif font-semibold text-xl mb-6 text-center text-zinc-800">Perguntas Frequentes</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-zinc-800 mb-2">Haverá estacionamento no local?</h4>
                      <p className="text-zinc-600">
                        Sim, o local possui estacionamento gratuito para os convidados.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-zinc-800 mb-2">Posso levar crianças?</h4>
                      <p className="text-zinc-600">
                        Sim, crianças são bem-vindas. Teremos um espaço dedicado para as crianças com monitores.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-zinc-800 mb-2">Até quando posso confirmar presença?</h4>
                      <p className="text-zinc-600">
                        Pedimos que confirme sua presença até o dia 15 de Setembro de 2026.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
