import { Usuario } from "./usuario.model";

export interface UsuarioDTO extends Omit<Usuario, "id" | "fecha_creación" | "fecha_modificación"> {

}