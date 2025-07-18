function formateadorData(dato: Date): string {
    const date = new Date(dato)
    const day = String(date.getDate()).padStart(2, "0"); // Día con dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Mes con dos dígitos (0 indexado)
    const year = date.getFullYear(); // Año completo
  
    const hours = String(date.getHours()).padStart(2, "0"); // Horas con dos dígitos
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutos con dos dígitos
    const seconds = String(date.getSeconds()).padStart(2, "0"); // Segundos con dos dígitos
  
    // Construimos la cadena formateada
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

export default formateadorData