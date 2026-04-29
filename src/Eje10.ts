type Tarjeta = {
  metodo: "tarjeta";
  numeroTarjeta: string;
  cvv: string;
};

type Transferencia = {
  metodo: "transferencia";
  banco: string;
  numeroCuenta: string;
};

type Efectivo = {
  metodo: "efectivo";
};

type Pago = Tarjeta | Transferencia | Efectivo;

function validarPago(pago: Pago): boolean {
  if (pago.metodo === "tarjeta") {
    return pago.numeroTarjeta !== "" && pago.cvv !== "";
  } else if (pago.metodo === "transferencia") {
    return pago.banco !== "" && pago.numeroCuenta !== "";
  } else if (pago.metodo === "efectivo") {
    return true;
  }
  return false;
}   