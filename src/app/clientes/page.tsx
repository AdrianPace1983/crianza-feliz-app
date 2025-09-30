import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Card, CardContent } from '@/components/ui/card';

const clients = [
  {
    parentName: 'Ana García',
    babyName: 'Mateo',
    babyAge: '6 meses',
    lastConsultation: '2024-05-10',
    status: 'active',
  },
  {
    parentName: 'Carlos Sánchez',
    babyName: 'Sofía',
    babyAge: '3 meses',
    lastConsultation: '2024-05-15',
    status: 'active',
  },
  {
    parentName: 'Laura Martinez',
    babyName: 'Lucas',
    babyAge: '1 año',
    lastConsultation: '2024-04-20',
    status: 'inactive',
  },
  {
    parentName: 'Javier Rodriguez',
    babyName: 'Valentina',
    babyAge: '8 meses',
    lastConsultation: '2024-05-18',
    status: 'active',
  },
];

export default function ClientesPage() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">
            Gestiona la información de tus clientes.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Regístrese</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Cliente</DialogTitle>
              <DialogDescription>
                Completa la información del nuevo cliente y su bebé.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="parent-name" className="text-right">
                  Padre/Madre
                </Label>
                <Input id="parent-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="baby-name" className="text-right">
                  Bebé
                </Label>
                <Input id="baby-name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="baby-age" className="text-right">
                  Edad Bebé
                </Label>
                <Input id="baby-age" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Guardar Cliente</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Padre/Madre</TableHead>
                <TableHead>Bebé</TableHead>
                <TableHead>Edad del Bebé</TableHead>
                <TableHead>Última Consulta</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>
                  <span className="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.parentName}>
                  <TableCell className="font-medium">{client.parentName}</TableCell>
                  <TableCell>{client.babyName}</TableCell>
                  <TableCell>{client.babyAge}</TableCell>
                  <TableCell>{client.lastConsultation}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                      {client.status === 'active' ? 'Activo' : 'Inactivo'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                        <DropdownMenuItem>Iniciar Consulta</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
