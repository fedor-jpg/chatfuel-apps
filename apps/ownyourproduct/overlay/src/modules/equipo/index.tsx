import { lazy } from "react";
import { IconUsers } from "~ui";
import type { ModuleDescriptor } from "../types";

export const moduleDescriptor: ModuleDescriptor = {
  id: "equipo",
  title: "Equipo",
  icon: <IconUsers />,
  Component: lazy(() => import("./EquipoApp").then((m) => ({ default: m.EquipoApp }))),
};
