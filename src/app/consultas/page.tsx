import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';

const clients = [
    { name: 'Ana García', avatar: 'https://picsum.photos/seed/client1/100/100' },
    { name: 'Carlos Sánchez', avatar: 'https://picsum.photos/seed/client2/100/100' },
    { name: 'Laura Martinez', avatar: 'https://picsum.photos/seed/client3/100/100' },
    { name: 'Javier Rodriguez', avatar: 'https://picsum.photos/seed/client4/100/100' },
]

export default function ConsultasPage() {
  return (
    <div className="flex h-[calc(100vh-10rem)] flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">Consultas</h1>
        <p className="text-muted-foreground">
          Comunícate con tus clientes de forma segura.
        </p>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
                {clients.map(client => (
                    <Button key={client.name} variant="ghost" className="w-full justify-start gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={client.avatar} />
                            <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{client.name}</span>
                    </Button>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between border-b">
             <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/client1/100/100" />
                    <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <CardTitle>Ana García</CardTitle>
             </div>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4">
                <div className="space-y-4 pr-4">
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://picsum.photos/seed/client1/100/100" />
                            <AvatarFallback>AG</AvatarFallback>
                        </Avatar>
                        <div className="max-w-xs rounded-lg bg-muted p-3">
                            <p className="text-sm">Hola, tengo una duda sobre la última toma de Mateo. Parece que no quiere comer.</p>
                        </div>
                    </div>
                    <div className="flex items-end gap-2 justify-end">
                         <div className="max-w-xs rounded-lg bg-primary text-primary-foreground p-3">
                            <p className="text-sm">Hola Ana, no te preocupes, es normal que a veces tengan menos apetito. ¿Ha tenido fiebre o algún otro síntoma?</p>
                        </div>
                         <Avatar className="h-8 w-8">
                            <AvatarImage src="https://picsum.photos/seed/user/100/100" />
                            <AvatarFallback>CF</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </ScrollArea>
          </CardContent>
          <div className="border-t p-4">
            <div className="relative">
                <Input placeholder="Escribe tu mensaje..." className="pr-12" />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                    <Send className="h-4 w-4" />
                </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
