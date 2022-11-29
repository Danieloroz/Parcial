let contBancolombia = 0;
let contTeleBancolombia = 0;
let contOtros = 0;
let contTeleOtros = 0;


for (let i = 0; i <= 4; i++) {
    let moduloDeAtencion = prompt("¿Qué tipo de atención desea? Digite 'P' para atencion telefonica y 'C' para atencion al cubiculo.");
    let tipoDeCliente = prompt("¿Que tipo de cliente es? Escriba 'B' para Bancolombia u 'CO' para otro banco ");

    switch (tipoDeCliente) {
        case "B": {

            switch (moduloDeAtencion) {

                case "P": {

                    contTeleBancolombia = contTeleBancolombia + 1;
                    break;
                }
                case "C": {

                    contBancolombia = contBancolombia + 1;
                    break;
                }
            }
            break
        }
        case "CO": {

            switch (moduloDeAtencion) {

                case "P": {

                    contTeleOtros = contTeleOtros + 1;
                    break;
                }
                case "C": {

                    contOtros = contOtros + 1;
                    break;
                }
            }
            break
        }
    }
    atencion = 0;
    tipo = " ";

}

console.log("Sesion finalizada")
console.log("Estas son las estadisticas de cada uno de los modulos de atención")

console.log("la cantidad total de clientes atendidos fue de: ", contBancolombia + contOtros + contTeleBancolombia + contTeleOtros)

console.log("La cantidad de clientes de Bancolombia atendidos por vía telefonica es de:", contTeleBancolombia);
console.log("La cantidad de clientes de Bancolombia atendidos por cubiculo es de: ", contBancolombia);
console.log("La cantidad de clientes de otros bancos atendidos por vía telefonica es de: ", contTeleOtros);
console.log("La cantidad de clientes de otros bancos atendidos por cubiculo es de: ", contOtros);