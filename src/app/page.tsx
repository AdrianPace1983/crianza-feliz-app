import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  MessageSquare,
  Calendar,
  Baby,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">¡Bienvenida!</h1>
        <p className="text-muted-foreground">
          Aquí tienes un resumen de tu actividad reciente.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consultas Pendientes
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              1 programada para hoy
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Evento</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold">Taller de Lactancia</div>
            <p className="text-xs text-muted-foreground">
              En 3 días
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bebés Registrados</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              +3 este mes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Consultas Recientes</CardTitle>
            <CardDescription>Un resumen de tus últimas interacciones.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <p className="text-sm font-medium leading-none">Familia Pérez</p>
                <p className="ml-auto text-sm text-muted-foreground">Hoy</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-medium leading-none">Familia Gómez</p>
                <p className="ml-auto text-sm text-muted-foreground">Ayer</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-medium leading-none">Familia Rodriguez</p>
                <p className="ml-auto text-sm text-muted-foreground">Hace 3 días</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Nuevos Artículos</CardTitle>
            <CardDescription>Últimos artículos añadidos a la base de conocimiento.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-2">
                <p className="text-sm font-medium">Primeros auxilios para bebés</p>
                <p className="text-sm font-medium">¿Cómo interpretar el llanto del bebé?</p>
                <p className="text-sm font-medium">Beneficios del porteo</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
