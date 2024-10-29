export interface HorariosI {
    succes: Succe[];
}

export interface Succe {
    id:          number;
    created_at:  Date;
    updated_at:  Date;
    hora_inicio: string;
    hora_fin:    string;
    lunes:       string;
    martes:      string;
    miercoles:   string;
    jueves:      string;
    viernes:     string;
    sabado:      string;
    domingo:     string;
    user:        number;
}
