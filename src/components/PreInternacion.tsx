import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegistroPreInternacion } from "@/components/FormReservaInternacion";
import { Button } from "@/components/ui/button";

export function PreInternacion() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Pre-internación</CardTitle>
        </CardHeader>
        <CardContent>
          <RegistroPreInternacion />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Confirmación</CardTitle>
          <CardDescription>
            Se han presentado y firmado todos los documentos legales.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm font-semibold">Firma</p>
          <div className="h-[300px] border-2 border-gray-200 dark:border-gray-700 rounded-lg mb-4 grid place-items-center justify-center">
            <svg
              width="80%"
              height="80%"
              viewBox="0 0 300 100"
              className="transform -rotate-[15deg]"
            >
              <text
                x="50%"
                y="50%"
                fontFamily="Brush Script MT, cursive"
                fontSize="48"
                fill="#cccccc"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                Dr. Ramírez
              </text>
            </svg>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button size="sm" variant="secondary">
            Limpiar firma
          </Button>
          <Button size="sm">Confirmar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
