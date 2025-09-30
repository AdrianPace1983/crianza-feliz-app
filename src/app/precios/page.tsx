import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingTiers = [
    {
        name: "Consulta Única",
        price: "$50",
        description: "Ideal para resolver dudas puntuales y específicas.",
        features: [
            "Sesión de 60 minutos",
            "Resolución de dudas",
            "Plan de acción inicial"
        ]
    },
    {
        name: "Pack de Seguimiento",
        price: "$180",
        description: "Acompañamiento continuo para lograr tus objetivos.",
        features: [
            "4 sesiones de 60 minutos",
            "Soporte por chat (2 semanas)",
            "Ajustes al plan de acción"
        ],
        popular: true,
    },
    {
        name: "Soporte Mensual",
        price: "$300",
        description: "Para un apoyo completo durante el primer mes.",
        features: [
            "Sesiones ilimitadas (1 mes)",
            "Soporte por chat prioritario",
            "Acceso a talleres exclusivos"
        ]
    }
]

export default function PreciosPage() {
    return (
        <div className="flex flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Planes y Precios</h1>
                <p className="text-muted-foreground mt-2">
                    Elige el plan que mejor se adapte a tus necesidades.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pricingTiers.map(tier => (
                    <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary' : ''}`}>
                        <CardHeader>
                            <CardTitle>{tier.name}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                <span className="text-muted-foreground">/plan</span>
                            </div>
                            <ul className="space-y-3">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                                Solicitar Consulta
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-8">
                <h2 className="text-2xl font-semibold tracking-tight">Métodos de Pago</h2>
                <p className="text-muted-foreground mt-2">Aceptamos las principales tarjetas y Mercado Pago.</p>
                <div className="flex justify-center items-center gap-6 mt-6 opacity-75">
                    <div className="w-16">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-current text-foreground"><title>Mercado Pago</title><path d="M18.05.02.53 11.95v.1l17.52 11.93h5.92L6.02 12 23.97.02zM5.92.02l17.52 11.93v.1L5.92 23.93H0L17.95 12 0 .02z"/></svg>
                    </div>
                     <div className="w-16">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-current text-foreground"><title>Visa</title><path d="M11.38.33c-3.2 0-5.42 1.8-5.42 4.48 0 2.06 1.4 3.4 3.9 4.14.92.28 1.22.5 1.22.82 0 .54-.84.8-1.72.8-1.54 0-2.4-.34-3.26-1.1L3.6 11.1c.96 1.6 2.8 2.38 4.7 2.38 3.32 0 5.56-1.8 5.56-4.56 0-2.9-2.92-3.8-4.4-4.22-.72-.2-1.12-.42-1.12-.76 0-.3.44-.64 1.28-.64.9 0 1.6.22 2.08.8l1.4-1.92c-.62-.9-1.92-1.44-3.32-1.44zm12.38.0h-2.94L16.4 13.3h2.64l.94-2.5h2.82l.54 2.5h2.38L23.76.33zm-1.4 8.52 1.3-3.66 1.3 3.66h-2.6zM.24.33h3.8l2.4 13h-2.7l-.42-2.58H.82L.38 13.3H-2.2l2.44-12.97zM2.3.33h-.9l-1.8 8.8h2.6L2.3.33z"/></svg>
                    </div>
                    <div className="w-20">
                         <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto"><title>Mastercard</title><path d="M12 9.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 7.93a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06z" fill="#FF5F00"/><path d="M21.5 14a4.9 4.9 0 1 1-9.8 0 4.9 4.9 0 0 1 9.8 0z" fill="#EB001B"/><path d="M9.8 14a4.9 4.9 0 1 1-9.8 0 4.9 4.9 0 0 1 9.8 0z" fill="#F79E1B"/></svg>
                    </div>
                </div>
            </div>

        </div>
    )
}