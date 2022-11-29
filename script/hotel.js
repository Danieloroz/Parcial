alert("Las mascotas SOLO se aceptan en habitaciones tipo FAMILIAR");
let habitacion = prompt("Que tipo de habitacion desea reservar? 1. Individual, 2. Doble, 3. Familiar");

let numeroDePersonas = prompt("Cuantas personas son en total?");

switch(numeroDePersonas) {
    case "1": {
        if(numeroDePersonas > 2) {
        console.log("No puede exceder el limite de personas por habitacion");
        } else {
        console.log("Limite de personas no sobrepasado. Puede continuar con la reserva")
    }
    }
    case "2": {
        if(numeroDePersonas > 4) {
        console.log("No puede exceder el limite de personas por habitacion");
        } else {
        console.log("Limite de personas no sobrepasado. Puede continuar con la reserva")
        break;
    }
    }
    case "3": {
        if(numeroDePersonas > 6) {
        console.log("No puede exceder el limite de personas por habitacion");
        } else {
        console.log("Limite de personas no sobrepasado. Puede continuar con la reserva")
        break;
    }
    }
    break;
}
let tipoDeHabitacion = prompt("Que tipo de habitacion desea? F para Fumadores y NF para No Fumadores");
let mascotas = prompt("Usted viene con mascotas? Digite 'SI' o 'NO'");
switch (habitacion) {
    case "1": {
        switch (tipoDeHabitacion) {
            case "F": {
                console.log("Su habitacion es Individual para Fumadores")
                break;
            }
            case "NF": {
                console.log("Su habitacion es Individual para No Fumadores")
                break;
            }
        }
        break
    }
    case "2": {
        switch (tipoDeHabitacion) {
            case "F": {
                console.log("Su habitacion es Doble para Fumadores")
                break;
            }
            case "NF": {
                console.log("Su habitacion es Doble para No Fumadores")
                break;
            }
        }

    }
    case "3": {
        switch (tipoDeHabitacion) {
            case "F": {
                switch (mascotas) {
                    case "SI": {
                        console.log("Su habitacion es Familiar para Fumadores con Mascotas");
                        break;
                    }
                    case "NO": {
                        console.log("Su habitacion es Familiar para Fumadores sin Mascotas");
                        break;
                    }
                }
                break;
            }
            case "NF": {
                switch (mascotas) {
                    case "SI":
                        console.log("Su habitacion es Familiar para No Fumadores con Mascotas");
                        break;
                    case "NO":
                        console.log("Su habitacion es Familiar para No Fumadores sin Mascotas");
                        break;
                }
            }
        }
    }
        break;
}

