export interface ProductosPedidos {
    succes: Succe[];
}

export interface Succe {
    factura:             string;
    id_producto:         number;
    nombre_produto:      string;
    id_promocion:        number;
    nombre_promocion:    string;
    id_marca:            number;
    nombre_marca:        string;
    cantidad:            number;
    valor_unitario:      number;
    procentaje_aplicado: number;
}
