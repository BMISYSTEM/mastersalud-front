export interface AllMedicInterface {
    succes:       Succe[];
    motivos:      Motivo[];
    horarios:     Horario[];
    calificacion: Calificacion[];
    comentarios:  Comentario[];
    citas:        Cita[];
    resumen:      Resuman[];
}

export interface Calificacion {
    total:    number;
    suma:     string;
    promedio: string;
}

export interface Cita {
    nombre:         string;
    telefono:       string;
    email:          string;
    primera_visita: string;
    observacion:    string;
    fecha_cita:     Date;
    atendido:       number;
    motivo:         string;
    hora_inicio:    string;
    hora_fin:       string;
    id:             number;
}

export interface Comentario {
    id:           number;
    nombre:       string;
    email:        string;
    observacion:  string;
    calificacion: number;
    user:         number;
    created_at:   Date;
    updated_at:   Date;
}

export interface Horario {
    id:          number;
    created_at:  Date;
    updated_at:  Date;
    hora_inicio: string;
    hora_fin:    string;
    lunes:       number;
    martes:      number;
    miercoles:   number;
    jueves:      number;
    viernes:     number;
    sabado:      number;
    domingo:     number;
    user:        number;
}

export interface Motivo {
    id:             number;
    nombre:         string;
    created_at:     Date;
    updated_at:     Date;
    user:           number;
    caracteristica: null;
}

export interface Resuman {
    total:      number;
    atendidos:  number;
    pendientes: number;
}

export interface Succe {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    password:          string;
    remember_token:    null;
    created_at:        Date;
    updated_at:        Date;
    rol:               number;
    nombre:            null;
    apellido:          string;
    cedula:            string;
    fijo:              string;
    celular:           string;
    direccion:         string;
    cargo:             string;
    horarioatencion:   string;
    publico:           string;
    mediospago:        string;
    fotoperfil:        string;
    foto1:             string;
    foto2:             string;
    foto3:             string;
    foto4:             string;
    foto5:             string;
    foto6:             null;
    foto7:             null;
    foto8:             null;
    activo:            number;
}
