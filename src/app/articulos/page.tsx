import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const articles = [
    {
        title: "¿Cómo interpretar el llanto del bebé?",
        content: "El llanto es la principal forma de comunicación de un bebé. Puede significar hambre, sueño, incomodidad (pañal sucio, frío, calor), necesidad de contacto o dolor. Aprender a diferenciar los tipos de llanto requiere tiempo y observación."
    },
    {
        title: "Beneficios de la lactancia materna",
        content: "La leche materna proporciona la nutrición ideal para los lactantes. Contiene anticuerpos que ayudan a proteger contra muchas enfermedades comunes de la infancia. Además, fortalece el vínculo afectivo entre la madre y el bebé."
    },
    {
        title: "Técnicas seguras para el porteo",
        content: "Asegúrate de que el portabebés sea ergonómico. El bebé debe estar en posición de 'ranita' (rodillas más altas que el trasero), con la espalda en forma de 'C'. Su cara debe estar visible y a una altura que te permita besar su cabeza."
    },
    {
        title: "Manejo de los cólicos del lactante",
        content: "Los cólicos son episodios de llanto intenso y prolongado. Algunas técnicas que pueden ayudar son: masajes en el abdomen, movimientos rítmicos, ruidos blancos y asegurar una buena técnica de alimentación para evitar la ingesta de aire."
    }
]

export default function ArticulosPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Base de Conocimiento</h1>
        <p className="text-muted-foreground">
          Artículos, consejos y respuestas a preguntas frecuentes.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {articles.map((article, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {article.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    {article.content}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
