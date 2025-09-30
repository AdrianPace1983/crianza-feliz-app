import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    author: 'Ana García',
    text: 'El acompañamiento fue clave durante los primeros meses de Mateo. Resolvimos dudas sobre lactancia y sueño que nos tenían muy preocupados. ¡Súper recomendable!',
    avatar: 'https://picsum.photos/seed/client1/100/100',
    rating: 5,
  },
  {
    author: 'Carlos Sánchez',
    text: 'Gracias a las consultas, pudimos establecer una rutina de sueño para Sofía. Ahora todos descansamos mucho mejor. La paciencia y el profesionalismo son destacables.',
    avatar: 'https://picsum.photos/seed/client2/100/100',
    rating: 5,
  },
  {
    author: 'Laura Martinez',
    text: 'Teníamos muchas dudas sobre la alimentación complementaria. El taller fue muy claro y práctico. Lucas está comiendo de todo y nosotros estamos más tranquilos.',
    avatar: 'https://picsum.photos/seed/client3/100/100',
    rating: 4,
  },
   {
    author: 'Javier Rodriguez',
    text: 'El soporte por chat marcó la diferencia. Poder hacer preguntas puntuales en cualquier momento nos dio muchísima seguridad. ¡Un servicio invaluable!',
    avatar: 'https://picsum.photos/seed/client4/100/100',
    rating: 5,
  },
];

export default function ExperienciasPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-100 via-pink-100 to-rose-100">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Experiencias de Familias
        </h1>
        <p className="text-muted-foreground">
          Lo que dicen las familias que han confiado en nosotros.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex-1">
              <p className="text-muted-foreground">"{testimonial.text}"</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 text-center">
                <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="w-full">
                    <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                    <div className="flex justify-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                            }`}
                        />
                        ))}
                    </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
