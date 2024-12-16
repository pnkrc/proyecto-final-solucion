import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const notificaciones = [
  {
    id: 1,
    tipo: "Derivación",
    fecha: "21/10/2024 - 15:00",
    nombre: "Juan Romero",
    href: "/tablet/atencion-en-admision/derivacion?id=1",
  },
  {
    id: 2,
    tipo: "Estudio externo",
    fecha: null,
    nombre: "Javier García",
    href: "/tablet/atencion-en-admision/estudio-externo?id=2",
  },
  {
    id: 3,
    tipo: "Estudio externo",
    fecha: "25/11/2024 - 20:15",
    nombre: "Peter Czech",
    href: "/tablet/atencion-en-admision/estudio-externo?id=3",
  },
];

export function AtencionAdmision() {
  return (
    <div className="flex flex-col justify-center">
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
