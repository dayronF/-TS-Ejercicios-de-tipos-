type CampoFormulario = {
  nombre: string;
  tipo: Tipo;
  valor: Valor;
};

type Tipo = "texto" | "numero" | "email";
type Valor = string | number;

function validarCamposFormulario(campos: CampoFormulario[]) {
  return campos.filter((campo) => {
    if (campo.tipo === "texto") {
      return typeof campo.valor !== "string";
    } else if (campo.tipo === "numero") {
      return typeof campo.valor !== "number";
    } else if (campo.tipo === "email") {
      return !(campo.valor as string).includes("@");
    }
  });
}
