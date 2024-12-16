import HomeRounded from "~icons/material-symbols/home-rounded";
import Notifications from "~icons/material-symbols/notifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NavigationProps {
  header: string;
}

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

export default function Navigation(props: NavigationProps) {
  return (
    <nav className="grid grid-cols-auto-1-auto justify-center gap-2 items-center">
      <div className="justify-self-start">
        <a
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "rounded-full"
          )}
        >
          <HomeRounded />
        </a>
      </div>
      <h1 className="text-xl font-bold">{props.header}</h1>
      <div className="justify-self-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size={"sm"} className="rounded-full">
              <Notifications />
              <Badge className="rounded-full" variant="outline">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>
              Notificaciones administrativas
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {notificaciones.map((notificacion) => (
                <DropdownMenuItem
                  onClick={() => (window.location.href = notificacion.href)}
                >
                  <div key={notificacion.id}>
                    {notificacion.fecha ? (
                      <p className="text-xs text-muted-foreground">
                        {notificacion.fecha} -{" "}
                        <span className="font-bold">{notificacion.tipo}</span>
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        <span className="text-destructive-foreground bg-destructive px-2 rounded-sm">
                          Sin agendar
                        </span>{" "}
                        <span className="font-bold">{notificacion.tipo}</span>
                      </p>
                    )}
                    <p className="text-sm">{notificacion.nombre}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
