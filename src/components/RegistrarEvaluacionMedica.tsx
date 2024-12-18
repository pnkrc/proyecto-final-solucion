import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { pacientes } from "@/components/AtencionEnPiso";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function RegistrarEvaluacionMedica() {
  const paciente = pacientes[0];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluación médica</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2-auto gap-4">


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

        <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
          <Label htmlFor="nuevo_estado" className="col-start-1 col-end-2">
            Nuevo estado
          </Label>
          <Input
            id="nuevo_estado"
            placeholder="Nuevo estado"
            readOnly
            value=""
          />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 justify-center flex-wrap">
        <Button size="sm" variant="secondary">
          Indicar tratamiento
        </Button>
        <Button size="sm" variant="secondary">
          Indicar estudios
        </Button>
        <Button size="sm" variant="secondary">
          Cambiar dieta
        </Button>
        <Button size="sm" variant="secondary">
          Derivar
        </Button>
        <Button size="sm" variant="secondary">
          Dar de alta
        </Button>
        <Button size="sm" variant="destructive">
          Intervenir de emergencia
        </Button>
      </CardFooter>
    </Card>
  );
}
