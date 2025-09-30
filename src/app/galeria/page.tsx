import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GaleriaPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-background to-accent/50">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Galería de Imágenes</h1>
        <p className="text-muted-foreground">
          Recursos visuales sobre cuidado del bebé, lactancia y desarrollo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PlaceHolderImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CardContent>
            <CardHeader className="p-4">
              <CardDescription>{image.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
