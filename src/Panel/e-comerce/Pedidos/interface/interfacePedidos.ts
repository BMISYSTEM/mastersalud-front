export interface Pedidos {
    succes: Succe[];
}

export interface Succe {
    id:               number;
    factura:          string;
    email_cliente:    string;
    telefono_cliente: string;
    direccion:        string;
    nombre:           string;
    apellidos:        string;
    status_pago:      string;
    status_entrega:   string;
    created_at:       Date;
    updated_at:       Date;
}
