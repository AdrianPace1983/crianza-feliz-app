import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const events = [
    {
        title: "Taller de Lactancia Materna",
        date: "2024-07-25",
        description: "Aprende técnicas y resuelve dudas para una lactancia exitosa.",
        time: "10:00 AM"
    },
    {
        title: "Charla sobre Sueño Infantil",
        date: "2024-08-05",
        description: "Claves para entender y mejorar los patrones de sueño de tu bebé.",
        time: "4:00 PM"
    },
    {
        title: "Introducción a la Alimentación Complementaria",
        date: "2024-08-15",
        description: "Descubre cómo y cuándo empezar a introducir sólidos en la dieta de tu bebé.",
        time: "11:00 AM"
    }
]

export default function EventosPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eventos y Talleres</h1>
        <p className="text-muted-foreground">
          Consulta y participa en los próximos eventos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">Próximos Eventos</h2>
             <div className="space-y-4">
                {events.map(event => (
                    <Card key={event.title}>
                        <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>{new Date(event.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - {event.time}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{event.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Inscribirse</Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
        </div>
        <div className="lg:col-span-1">
            <Card>
                <CardContent className="p-0">
                    <Calendar
                        mode="single"
                        className="w-full p-3"
                    />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
