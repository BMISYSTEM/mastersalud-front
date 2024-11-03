export interface Comentariosinterface {
    succes: Succe[];
}

export interface Succe {
    id:           number;
    nombre:       string;
    email:        string;
    observacion:  string;
    calificacion: number;
    user:         number;
    created_at:   Date;
    updated_at:   Date;
}
