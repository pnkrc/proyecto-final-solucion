import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const horas = Array.from({ length: 13 }, (_, i) => i).map((i) => ({
  value: (i + 8).toString(),
  label: `${(i + 8).toString().padStart(2, "0")}:00 `,
}));

export function AdmisionDerivacion() {
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex flex-col justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Agendar fecha de traslado</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-2-auto gap-4">
          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="documento" className="col-start-1 col-end-2">
              Número de documento
            </Label>
            <Input
              id="documento"
              placeholder="Número de documento"
              value="35.418.290"
              disabled
            />
          </div>

          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="apellidos" className="col-start-1 col-end-2">
              Apellidos
            </Label>
            <Input
              id="apellidos"
              placeholder="Apellidos"
              value={notificaciones[0].nombre.split(" ")[1]}
              disabled
            />
          </div>

          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="nombres" className="col-start-1 col-end-2">
              Nombres
            </Label>
            <Input
              id="nombres"
              placeholder="Nombres"
              value={notificaciones[0].nombre.split(" ")[0]}
              disabled
            />
          </div>

          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="date" className="col-start-1 col-end-2">
              Fecha
            </Label>
            <DatePicker
              id="date"
              placeholder="Seleccionar fecha"
              className="col-start-2 col-end-3"
              date={date}
              setDate={setDate}
            />
          </div>

          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="hora" className="col-start-1 col-end-2">
              Hora
            </Label>
            <div className="col-start-2 col-end-3" id="hora">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar hora" />
                </SelectTrigger>
                <SelectContent>
                  {horas.map((option) => (
                    <SelectItem value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
            <Label htmlFor="cama" className="col-start-1 col-end-2">
              Cama
            </Label>
            <Input id="cama" placeholder="cama" value={15} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
