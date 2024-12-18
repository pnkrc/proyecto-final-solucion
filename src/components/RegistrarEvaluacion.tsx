import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { pacientes } from "@/components/AtencionEnPiso";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export function RegistrarEvaluacion() {
  const paciente = pacientes[0];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluación</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2-auto gap-4">
        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="temp" className="col-start-1 col-end-2">
            Temperatura máxima
          </Label>
          <Input
            id="temp"
            placeholder="Temperatura"
            readOnly
            value={paciente.signos.max_temp}
          />
        </div>

        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="presion" className="col-start-1 col-end-2">
            Presión arterial
          </Label>
          <Input
            id="presion"
            placeholder="Presión arterial"
            readOnly
            value={paciente.signos.presion}
          />
        </div>

        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="oxigeno" className="col-start-1 col-end-2">
            Saturación de oxígeno
          </Label>
          <Input
            id="oxigeno"
            placeholder="Saturación de oxígeno"
            readOnly
            value={paciente.signos.saturacion_o2}
          />
        </div>

        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="frecuencia" className="col-start-1 col-end-2">
            Frecuencia cardiaca
          </Label>
          <Input
            id="frecuencia"
            placeholder="Frecuencia cardiaca"
            readOnly
            value={paciente.signos.frecuencia_cardiaca}
          />
        </div>
        <Separator className="col-span-full" />
        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="fecha" className="col-start-1 col-end-2">
            Fecha
          </Label>
          <Input
            id="fecha"
            placeholder="Fecha"
            readOnly
            value="20/10/2024 - 15:00"
          />
        </div>
        {/* notas */}

        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="notas" className="col-start-1 col-end-2">
            Notas
          </Label>
          <Textarea
            id="notas"
            placeholder="Notas"
            readOnly
            value="Controlar hidratación."
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
}
