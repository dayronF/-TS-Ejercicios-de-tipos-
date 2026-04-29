type Categoria = "tareas" | "quices" | "examen";

type Calificacion = {
  estudianteId: number;
  materia: string;
  categoria: Categoria;
  nota: number;
};

type PromedioCategoria = {
  tareas: number;
  quices: number;
  examen: number;
};

function calcularPromedio(calificaciones: Calificacion[], estudianteId: number): PromedioCategoria {
  const delEstudiante = calificaciones.filter((c) => c.estudianteId === estudianteId);

  const sumar = (cat: Categoria) => {
    const filtradas = delEstudiante.filter((c) => c.categoria === cat);
    if (filtradas.length === 0) return 0;
    return filtradas.reduce((acc, c) => acc + c.nota, 0) / filtradas.length;
  };

  return {
    tareas: sumar("tareas"),
    quices: sumar("quices"),
    examen: sumar("examen"),
  };
}