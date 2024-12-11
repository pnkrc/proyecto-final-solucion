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

const quirofanoOptions = [
  { value: "quirofano-1", label: "Quirófano grande 1" },
  { value: "quirofano-2", label: "Quirófano grande 2" },
  { value: "quirofano-3", label: "Quirófano ambulatorio chico" },
];

const timeOptions = Array.from({ length: 10 }, (_, i) => i).map((i) => ({
  value: (i + 8).toString(),
  label: `${(i + 8).toString().padStart(2, "0")}:00 - ${(i + 9).toString().padStart(2, "0")}:00`,
}));

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
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2-auto gap-4 ">
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
                <Label htmlFor="date" className="col-start-1 col-end-2">
                  Quirófano
                </Label>
                <div className="col-start-2 col-end-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar quirófano" />
                    </SelectTrigger>
                    <SelectContent>
                      {quirofanoOptions.map((option) => (
                        <SelectItem value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                <Label htmlFor="date" className="col-start-1 col-end-2">
                  Horarios
                </Label>
                <MultiSelect
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
          <div className="p-5 flex flex-col">
            <h1 className="text-2xl font-bold">Registro pre-internación</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              elementum feugiat scelerisque. Proin non vehicula elit. Sed
              elementum feugiat scelerisque. Proin non vehicula elit. Sed
              elementum feugiat scelerisque. Proin non vehicula elit.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
