export interface Promocion {
    succes: Succe[];
}

export interface Succe {
    id:         number;
    activo:     number;
    nombre:     string;
    porcentaje: number;
    created_at: Date;
    updated_at: Date;
}
