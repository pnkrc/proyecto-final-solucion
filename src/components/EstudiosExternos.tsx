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
import { Button } from "./ui/button";

const estudios = [
  {
    id: 1,
    estudio: "Sangre",
    apreciacion: "Normal / Tipo B",
  },
  {
    id: 2,
    estudio: "Triglicéridos",
    apreciacion: "Normal",
  },
  {
    id: 3,
    estudio: "Glucosa",
    apreciacion: "Alto",
  },
  {
    id: 4,
    estudio: "Sodio",
    apreciacion: null,
  },
];

export function EstudiosExternos() {
  return (
    <div className="flex flex-col justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Estudios presentacos</CardTitle>
          <CardDescription>Paciente: Javier García</CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="text-xs cursor-default">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Estudio</TableHead>
                <TableHead className="font-bold">Apreciación</TableHead>
                <TableHead className="font-bold">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estudios.map((estudio) => (
                <TableRow key={estudio.id} className="hover:bg-muted">
                  <TableCell>{estudio.estudio}</TableCell>
                  <TableCell
                    className={cn(
                      estudio.apreciacion === null &&
                        "underline decoration-destructive decoration-2"
                    )}
                  >
                    {estudio.apreciacion ?? "No presentado"}
                  </TableCell>
                  <TableCell>
                    {estudio.apreciacion && (
                      <Button size="sm" variant="secondary">
                        Ver copia
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button size="sm">Aprobar documentación</Button>
            <Button size="sm" variant="destructive">
              Rechazar documentación
            </Button>
            <Button size="sm" variant="secondary">
              Cancelar
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
