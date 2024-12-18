export interface Productos {
    succes: Succe[];
}

export interface Succe {
    id:               number;
    nombre:           string;
    id_marca:         number;
    nombre_marca:     string;
    id_promocion:     number;
    porcentaje:       number;
    nombre_promocion: string;
    precio:           number;
    estado:           string;
    imagen1:          string;
    imagen2:          string;
    imagen3:          string;
    imagen4:          string;
    id_caract:        number;
    nombre_caract:    string;
    ficha_tecnica:    string;
    uso_adecuado:     string;
    aviso_legal:      string;

}