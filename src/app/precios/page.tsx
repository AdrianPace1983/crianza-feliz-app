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
        </div>
    )
}
