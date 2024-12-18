import { DatePicker } from "@/components/ui/date-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { MultiSelect } from "./ui/multi-select";
import { Input } from "./ui/input";

const quirofanoOptions = [
  { value: "quirofano-1", label: "Quirófano grande 1" },
  { value: "quirofano-2", label: "Quirófano grande 2" },
  { value: "quirofano-3", label: "Quirófano ambulatorio chico" },
];

const timeOptions = Array.from({ length: 10 }, (_, i) => i).map((i) => ({
  value: (i + 8).toString(),
  label: `${(i + 8).toString().padStart(2, "0")}:00 - ${(i + 9).toString().padStart(2, "0")}:00`,
}));

export function RegistroPreInternacion() {
  return (
    <div className="grid grid-cols-2-auto gap-4">
      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="documento" className="col-start-1 col-end-2">
          Número de documento
        </Label>
        <Input
          id="documento"
          placeholder="Número de documento"
          value="35.418.290"
        />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="apellidos" className="col-start-1 col-end-2">
          Apellidos
        </Label>
        <Input id="apellidos" placeholder="Apellidos" value="Martínez" />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="nombres" className="col-start-1 col-end-2">
          Nombres
        </Label>
        <Input id="nombres" placeholder="Nombres" value="Emiliano" />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="obra" className="col-start-1 col-end-2">
          Obra social
        </Label>
        <Input id="obra" placeholder="Obra social" value="SanCor" />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="procedimiento" className="col-start-1 col-end-2">
          Procedimiento
        </Label>
        <Input
          id="procedimiento"
          placeholder="Procedimiento"
          value="Hernioplastía"
        />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="durprocedimiento" className="col-start-1 col-end-2">
          Duración del procedimiento
        </Label>
        <Input
          id="durprocedimiento"
          placeholder="Duración estimada del procedimiento"
          value="1 hora 30 minutos"
        />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="durpreop" className="col-start-1 col-end-2">
          Duración del pre-operatiorio
        </Label>
        <Input
          id="durpreop"
          placeholder="Duración estimada del pre-operatiorio"
          value="2 horas"
        />
      </div>

      <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
        <Label htmlFor="durpostop" className="col-start-1 col-end-2">
          Duración del post-operatiorio
        </Label>
        <Input
          id="durpostop"
          placeholder="Duración estimada del post-operatiorio"
          value="2 horas"
        />
      </div>
    </div>
  );
}

export function FormReservaInternacion() {
  const [date, setDate] = useState<Date>();
  const [selectedTimes, setSelectedTimes] = useState<Array<string>>([]);

  const availableTimes = timeOptions.map((option, index) =>
    index > 5 ? option : { ...option, disabled: true }
  );

  return (
    <div className="flex flex-col w-full h-full">
      <Tabs defaultValue="quirofano" className="flex flex-col">
        <TabsList className="mx-auto">
          <TabsTrigger value="quirofano">Quirófano</TabsTrigger>
          <TabsTrigger value="registro">Registro pre-internación</TabsTrigger>
        </TabsList>
        <TabsContent value="quirofano">
          <Card>
            <CardHeader>
              <CardTitle>Agenda de quirófano</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2-auto gap-4">
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
                <Label htmlFor="quirofano" className="col-start-1 col-end-2">
                  Quirófano
                </Label>
                <div className="col-start-2 col-end-3" id="quirofano">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar quirófano" />
                    </SelectTrigger>
                    <SelectContent>
                      {quirofanoOptions.map((option) => (
                        <SelectItem value={option.value} key={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                <Label htmlFor="time" className="col-start-1 col-end-2">
                  Horarios
                </Label>
                <MultiSelect
                  id="time"
                  className="col-start-2 col-end-3"
                  options={availableTimes}
                  onValueChange={setSelectedTimes}
                  defaultValue={selectedTimes}
                  placeholder="Seleccionar horarios"
                  closeText="Cerrar"
                  clearText="Limpiar"
                  searchText="Buscar..."
                  allText="(Seleccionar todos)"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="registro">
          <Card>
            <CardHeader>
              <CardTitle>Registro de pre-internación</CardTitle>
            </CardHeader>
            <CardContent>
              <RegistroPreInternacion />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
