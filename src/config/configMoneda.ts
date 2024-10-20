export const formatMoneda = (valor:number) =>{
    return valor.toLocaleString('es-CO',{style:'currency',currency:'COP',minimumFractionDigits: 2})
}