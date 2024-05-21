import { ModeloBase } from "../base.model";

export interface Usuario extends ModeloBase {
    dni: number;
    nombre: string;
    mail: string;
    contraseña: string;
    telefono: number;
}