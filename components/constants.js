const user = false;
const password = false;
const routerConected = false;
const printerFound = false;

export const listMissingValues = [
  { status: !user, message: "Falta Nombre del router" },
  { status: !password, message: "Falta contraseña" },
  { status: !routerConected, message: "Sin Conexion al Router" },
  { status: !printerFound, message: "No se encontro la impresora" },
];
