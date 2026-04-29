type Unidad = "cm" | "m" | "km";

type Conversion = {
  valor: number;
  desde: Unidad;
  hasta: Unidad;
};

function convertirUnidad(conversion: Conversion): number {
  const { valor, desde, hasta } = conversion;

  let valorEnMetros: number;

  if (desde === "cm") {
    valorEnMetros = valor / 100;
  } else if (desde === "km") {
    valorEnMetros = valor * 1000;
  } else {
    valorEnMetros = valor;
  }

  if (hasta === "cm") {
    return valorEnMetros * 100;
  } else if (hasta === "km") {
    return valorEnMetros / 1000;
  } else {
    return valorEnMetros;
  }
}