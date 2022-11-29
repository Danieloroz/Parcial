let stock = {
    id: ["001", "002", "003"],
    nombre: ["Casa", "Lote", "Edificio"],
    fecha: ["1 de Julio", "19 de Noviembre", "11 de Mayo"],
    direccion: ["Armenia", "Ibague", "Bogota"],
    precioDeVenta: ["50000", "100000", "80000"]
}

const imprimirData = () => {
    console.log(stock);
}
imprimirData();

console.log(stock.nombre);

let clientes = {
    david: ["La casa para el 2 de Agosto por un precio de 70000", "El lote para el 20 de Noviembre por un precio de 150000", "El edificio para el 17 de Junio por un precio de 60000"],
    daniel: ["La casa para el 29 de Julio por un precio de 75000", "El lote para el 31 de Diciembre por un precio de 90000", "El edificio para el 19 de Mayo por un precio de 90000"],
    sebastian: ["La casa para el 10 de Julio por un precio de 90000", "El lote para el 1 de Diciembre por un precio de 120000", "El edificio para el 12 de Julio por un precio de 50000"]
}

const Clientes = () => {
    console.log(clientes);
}
Clientes();
