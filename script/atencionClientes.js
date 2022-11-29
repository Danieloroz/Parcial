/*let datos = {
    cliente: ["Cliente Cooperativa", "Cliente Externo"],
    tipoDeAtencion: ["Pagos", "Asesoria"],
    tipoDeAtencionPagos: ["Cuotas", "Administracion"],
    modulo: ["1", "2", "3"]
};

let coop_abierta = true;

function time(ms) {

    return new Promise((resolve, reject) => {

        if (coop_abierta) {
            setTimeout(resolve, ms);
        }

        else {
            reject(console.log("La cooperativa esta cerrada"))
        }
    });
}
async function atencionClientes() {
    try {
        await time(0000)
        console.log("TIPO DE CLIENTE")

        await time(2000)
        console.log(`${datos.cliente[0]}`)

        await time(2000)
        console.log("TIPO DE ATENCION")

        await time(2000)
        console.log(`${datos.tipoDeAtencion[0]}`)

        await time(2000)
        console.log("TIPO DE ATENCION EN PAGOS")

        await time(2000)
        console.log(`${datos.tipoDeAtencionPagos[0]}`)

        await time(2000)
        console.log(`Su turno es prioritario, por favor acerquese al modulo ${datos.modulo[1]}`)

    }

    catch (error) {
        console.log("ERROR: Por favor comuniquese con el personal para reportar el error")
    }
}
atencionClientes();*/