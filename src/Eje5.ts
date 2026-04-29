type TipoCambio = "nombre" | "correo" | "contraseña";

type Cambio = {
  tipo: TipoCambio;
  valor: string;
};

type Resumen = {
  nombre: number;
  correo: number;
  contraseña: number;
};

function resumirCambios(cambios: Cambio[]): Resumen {
  return cambios.reduce(
    (acc, cur) => {
      if (cur.tipo === "nombre") {
        acc.nombre += 1;
      } else if (cur.tipo === "correo") {
        acc.correo += 1;
      } else if (cur.tipo === "contraseña") {
        acc.contraseña += 1;
      }
      return acc;
    },
    { nombre: 0, correo: 0, contraseña: 0 }
  );
}