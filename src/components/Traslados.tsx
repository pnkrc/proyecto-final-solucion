import {
  Card,
  CardContent,
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
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import QrScanIcon from "~icons/material-symbols/qr-code-scanner-rounded";

export const traslados = [
  {
    id: 1,
    origen: "Cama 10 [Piso]",
    destino: "Cama 2 [UTI]",
    paciente: "Juan Romero",
    metodo: "Silla de ruedas",
    href: "/tablet/traslado-de-pacientes?id=1",
  },
  {
    id: 2,
    origen: "Cama 4 [UTI]",
    destino: "Cama 15 [Piso]",
    paciente: "Javier García",
    metodo: "Camilla",
    href: "/tablet/traslado-de-pacientes?id=2",
  },
  {
    id: 3,
    origen: "Guardia",
    destino: "Cama 4 [Piso]",
    paciente: "Peter Czech",
    metodo: "Camilla",
    href: "/tablet/traslado-de-pacientes?id=3",
  },
];

export function Traslados() {
  const id = window.location.search.split("?id=")[1];
  const traslado = traslados.find((traslado) => traslado.id === parseInt(id));
  return (
    <div>
      {traslado ? (
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="grid grid-cols-2-auto gap-4">
            <div>
              <Skeleton className="aspect-square min-w-[200px] rounded-md grid items-center justify-center">
                <QrScanIcon className="w-12 h-12" />
              </Skeleton>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">{traslado.paciente}</h2>
              <p>
                <span className="font-bold text-xs text-muted-foreground">
                  Origen:
                </span>
                <br />
                {traslado.origen}
              </p>
              <p>
                <span className="font-bold text-xs text-muted-foreground">
                  Destino:
                </span>
                <br />
                {traslado.destino}
              </p>
              <p>
                <span className="font-bold text-xs text-muted-foreground">
                  Método de traslado:
                </span>
                <br />
                {traslado.metodo}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button
              size="sm"
              onClick={() =>
                (window.location.href = "/tablet/traslado-de-pacientes")
              }
            >
              Completar traslado
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones de traslado</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="text-xs cursor-default">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Origen</TableHead>
                  <TableHead className="font-bold">Destino</TableHead>
                  <TableHead className="font-bold">Paciente</TableHead>
                  <TableHead className="font-bold">
                    Método de traslado
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {traslados.map((traslado) => (
                  <TableRow
                    key={traslado.id}
                    onClick={() => (window.location.href = traslado.href)}
                  >
                    <TableCell>{traslado.origen}</TableCell>
                    <TableCell>{traslado.destino}</TableCell>
                    <TableCell>{traslado.paciente}</TableCell>
                    <TableCell>{traslado.metodo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
