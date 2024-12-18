import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import CalendarClockRounded from "~icons/material-symbols/calendar-clock-rounded";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const notificaciones = [
  {
    id: 1,
    tipo: "Derivación",
    fecha: "21/10/2024 - 15:00",
    nombre: "Juan Romero",
    href: "/tablet/atencion-en-admision/agenda-traslado?id=1",
  },
  {
    id: 2,
    tipo: "Estudio externo",
    fecha: null,
    nombre: "Javier García",
    href: "/tablet/atencion-en-admision/agenda-traslado?id=2",
  },
  {
    id: 3,
    tipo: "Estudio externo",
    fecha: "25/11/2024 - 20:15",
    nombre: "Peter Czech",
    href: "/tablet/atencion-en-admision/agenda-traslado?id=3",
  },
];

const checkIns = [
  {
    id: 1,
    paciente: "Enzo Suárez",
    href: "/tablet/atencion-en-admision/documentacion?id=1",
  },
];

export function AtencionAdmision() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Buscar pre-internación</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2-auto gap-4 ">
          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="dni" className="col-start-1 col-end-2">
              DNI
            </Label>
            <Input id="dni" placeholder="DNI" value="35.418.290" readOnly />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            size={"sm"}
            onClick={() =>
              (window.location.href =
                "/tablet/atencion-en-admision/pre-internacion")
            }
          >
            Buscar
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documentación de check-in</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="text-xs cursor-default">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Paciente</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkIns.map((checkIn) => (
                <TableRow
                  key={checkIn.id}
                  className="hover:bg-muted"
                  onClick={() => (window.location.href = checkIn.href)}
                >
                  <TableCell>{checkIn.paciente}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notificaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="text-xs cursor-default">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Tipo</TableHead>
                <TableHead className="font-bold">Paciente</TableHead>
                <TableHead className="font-bold">Fecha</TableHead>
                <TableHead className="font-bold"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notificaciones.map((notificacion) => (
                <TableRow
                  key={notificacion.id}
                  className="hover:bg-muted"
                  onClick={() => (window.location.href = notificacion.href)}
                >
                  <TableCell>{notificacion.tipo}</TableCell>
                  <TableCell>{notificacion.nombre}</TableCell>
                  <TableCell
                    className={cn(
                      notificacion.fecha === null &&
                        "underline decoration-destructive decoration-2"
                    )}
                  >
                    {notificacion.fecha ?? "Sin agendar"}
                  </TableCell>
                  <TableCell>
                    {notificacion.fecha === null && (
                      <a href="#">
                        <CalendarClockRounded />
                      </a>
                    )}
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
