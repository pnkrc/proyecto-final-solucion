import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const pacientes = [
  {
    nombre: "Peter Czech",
    cama: 4,
    signos: {
      max_temp: "36ºC",
      presion: "108/65",
      saturacion_o2: "99%",
      frecuencia_cardiaca: "80ppm",
    },
    visitas_enfermero: { notas: ["no termino ultima comida"] },
    visitas_medico: {
      notas: ["Controlar hidratación."],
      tratamientos: ["Cambio de vendaje cada 4hs."],
    },
  },
  {
    nombre: "Jorge Ramírez",
    cama: 5,
    signos: {
      max_temp: "35ºC",
      presion: "110/75",
      saturacion_o2: "98%",
      frecuencia_cardiaca: "75ppm",
    },
    visitas_enfermero: { notas: [] },
    visitas_medico: {
      notas: [],
      tratamientos: [],
    },
  },
];

export function AtencionPiso() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() =>
            (window.location.href = "/tablet/atencion-en-piso/leer-qr")
          }
        >
          Registrar evaluación
        </Button>
        <Button
          size="sm"
          onClick={() =>
            (window.location.href = "/tablet/atencion-en-piso/registro-medico")
          }
        >
          Registrar evaluación (médico)
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Información de paso de guardia</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          {pacientes.map((paciente) => (
            <Card key={paciente.nombre}>
              <CardHeader className="p-3">
                <CardDescription>Paciente: {paciente.nombre}</CardDescription>
              </CardHeader>
              <CardContent className="text-xs grid gap-2 p-3 grid-cols-2">
                <div>
                  <p className="font-bold">Cama: {paciente.cama}</p>
                </div>

                <div>
                  <p className="font-bold">Última visita enfermero</p>
                  <ul className="*:ms-2">
                    {paciente.visitas_enfermero.notas.length === 0 && (
                      <p className="text-center">-</p>
                    )}
                    {paciente.visitas_enfermero.notas.map((nota) => (
                      <li key={nota} className="italic">
                        &gt; {nota}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Signos</p>
                  <ul className="*:ms-2">
                    <li>Temperatura máxima: {paciente.signos.max_temp}</li>
                    <li>Presión arterial: {paciente.signos.presion}</li>
                    <li>
                      Saturación de oxígeno: {paciente.signos.saturacion_o2}
                    </li>
                    <li>
                      Frecuencia cardiaca: {paciente.signos.frecuencia_cardiaca}
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold">Última visita médico</p>
                  <ul className="*:ms-2">
                    {paciente.visitas_medico.notas.length === 0 && (
                      <p className="text-center">-</p>
                    )}
                    {paciente.visitas_medico.notas.map((nota) => (
                      <li key={nota} className="italic">
                        &gt; {nota}
                      </li>
                    ))}
                  </ul>
                  <div className="ps-2">
                    <p className="font-bold italic">Tratamiento planificado</p>
                    <ul className="*:ms-2">
                      {paciente.visitas_medico.tratamientos.length === 0 && (
                        <p className="text-center">-</p>
                      )}
                      {paciente.visitas_medico.tratamientos.map(
                        (tratamiento) => (
                          <li key={tratamiento}>
                            <p>{tratamiento}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
