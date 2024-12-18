import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";

import ScanDocumentIcon from "~icons/material-symbols/document-scanner-outline";

export function CheckInVirtual() {
  const [buscado, setBuscado] = useState<boolean>(false);
  const [visitedTabs, setVisitedTabs] = useState<{
    cama: boolean;
    contacto: boolean;
    estudios: boolean;
  }>({ cama: false, contacto: false, estudios: false });

  const allTabsVisited = useMemo(
    () => Object.values(visitedTabs).every((tab) => tab),
    [visitedTabs, visitedTabs, visitedTabs]
  );

  return (
    <div className="flex flex-col w-full h-full">
      {!buscado && (
        <Card>
          <CardHeader>
            <CardTitle>Ingresar CUIL</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2-auto gap-4 ">
            <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
              <Label htmlFor="cuil" className="col-start-1 col-end-2">
                CUIL
              </Label>
              <Input id="cuil" placeholder="CUIL" value="20-35418290-0" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button size={"sm"} onClick={() => setBuscado(true)}>
              Buscar
            </Button>
          </CardFooter>
        </Card>
      )}
      {buscado && (
        <>
          <Tabs defaultValue="cama" className="flex flex-col">
            <TabsList className="mx-auto">
              <TabsTrigger
                value="cama"
                onClick={() =>
                  setVisitedTabs((prev) => ({ ...prev, cama: true }))
                }
              >
                Cama
              </TabsTrigger>
              <TabsTrigger
                value="contacto"
                onClick={() =>
                  setVisitedTabs((prev) => ({ ...prev, contacto: true }))
                }
              >
                Contacto
              </TabsTrigger>
              <TabsTrigger
                value="estudios"
                onClick={() =>
                  setVisitedTabs((prev) => ({ ...prev, estudios: true }))
                }
              >
                Estudios
              </TabsTrigger>
            </TabsList>
            <TabsContent value="cama">
              <Card>
                <CardHeader>
                  <CardTitle>Tipos de camas disponibles</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2-auto gap-4 "></CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contacto">
              <Card>
                <CardHeader>
                  <CardTitle>Ingresar familiar de contacto</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2-auto gap-4 ">
                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label
                      htmlFor="documento"
                      className="col-start-1 col-end-2"
                    >
                      Número de documento
                    </Label>
                    <Input
                      id="documento"
                      placeholder="Número de documento"
                      value="23.564.875"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label
                      htmlFor="apellidos"
                      className="col-start-1 col-end-2"
                    >
                      Apellidos
                    </Label>
                    <Input
                      id="apellidos"
                      placeholder="Apellidos"
                      value="Fiel"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label htmlFor="nombres" className="col-start-1 col-end-2">
                      Nombres
                    </Label>
                    <Input id="nombres" placeholder="Nombres" value="Amigo" />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label htmlFor="tel" className="col-start-1 col-end-2">
                      Teléfono
                    </Label>
                    <Input
                      id="tel"
                      placeholder="Teléfono"
                      value="3442-807452"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label htmlFor="email" className="col-start-1 col-end-2">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      placeholder="E-mail"
                      value="fa@hotmail.com"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label htmlFor="postal" className="col-start-1 col-end-2">
                      Código postal
                    </Label>
                    <Input
                      id="postal"
                      placeholder="Código postal"
                      value="656463"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label
                      htmlFor="localidad"
                      className="col-start-1 col-end-2"
                    >
                      Localidad
                    </Label>
                    <Input
                      id="localidad"
                      placeholder="Localidad"
                      value="Concepción del Uruguay"
                    />
                  </div>

                  <div className="space-y-1 grid grid-cols-subgrid col-span-full items-center">
                    <Label
                      htmlFor="direccion"
                      className="col-start-1 col-end-2"
                    >
                      Dirección
                    </Label>
                    <Input
                      id="direccion"
                      placeholder="Dirección"
                      value="Ereño 223"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="estudios">
              <Card>
                <CardHeader>
                  <CardTitle>Cargar estudios pre-quirurgicos</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Skeleton className="aspect-3/4 w-32 rounded-md grid items-center justify-center">
                    <ScanDocumentIcon className="w-12 h-12" />
                  </Skeleton>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center">
                  <Button size={"sm"}>Cargar estudios</Button>
                  <Button size={"sm"} variant={"secondary"}>
                    Completar sin cargar estudios
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <Button size={"sm"} className="my-8" disabled={!allTabsVisited}>
            Completar
          </Button>
        </>
      )}
    </div>
  );
}
