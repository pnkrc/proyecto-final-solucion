import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import QrScanIcon from "~icons/material-symbols/qr-code-scanner-rounded";
import { pacientes } from "./AtencionEnPiso";

export function InformacionEvaluacion() {
  const paciente = pacientes[0];
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent className="grid grid-cols-2-auto gap-4">
        <div>
          <Skeleton className="aspect-square min-w-[200px] rounded-md grid items-center justify-center">
            <QrScanIcon className="w-12 h-12" />
          </Skeleton>
        </div>
        <div className="flex flex-col text-xs gap-1">
          <h2 className="font-bold">{paciente.nombre}</h2>
          <p>
            <span className="font-bold text-muted-foreground">Cama</span>
            <br />
            {paciente.cama}
          </p>
          <p>
            <span className="font-bold text-muted-foreground">Temperatura</span>
            <br />
            {paciente.signos.max_temp}
          </p>
          <p>
            <span className="font-bold text-muted-foreground">
              Presión arterial
            </span>
            <br />
            {paciente.signos.presion}
          </p>
          <p>
            <span className="font-bold text-muted-foreground">
              Saturación de oxígeno
            </span>
            <br />
            {paciente.signos.saturacion_o2}
          </p>
          <p>
            <span className="font-bold text-muted-foreground">
              Frecuencia cardiaca
            </span>
            <br />
            {paciente.signos.frecuencia_cardiaca}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 flex-wrap">
        <Button
          size="sm"
          onClick={() =>
            (window.location.href =
              "/tablet/atencion-en-piso/registrar-evaluacion")
          }
        >
          Cargar signos vitales
        </Button>
        <Button size="sm">Agregar nota</Button>
        <Button size="sm">Llamar médico</Button>

        <Button size="sm" variant="secondary">
          Solicitar mantenimiento de dispositivos
        </Button>
        <Button size="sm" variant="destructive">
          Emergencia
        </Button>
        <Button size="sm" variant="secondary">
          Solicitar limpieza
        </Button>
      </CardFooter>
    </Card>
  );
}
