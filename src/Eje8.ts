type Rol = "admin" | "editor" | "visitante";

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: Rol;
};

function getUsuariosActivos(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter(
    (u) => u.edad >= 18 && u.activo === true && u.rol !== "visitante"
  );
}