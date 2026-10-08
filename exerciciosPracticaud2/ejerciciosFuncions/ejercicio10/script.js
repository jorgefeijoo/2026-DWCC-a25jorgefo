const inicioXornada = "07:30";
const finalXornada = "17:45";

function axendarReunion(horaInicio, duracionMinutos) {
    let [horasReunion, minutosReunion] = horaInicio.split(':')
    horasReunion = Number.parseInt(horasReunion)
    minutosReunion = Number.parseInt(minutosReunion)
    let minutosTotales = duracionMinutos + minutosReunion
    let numeroHorasSumar = 0;
    let minutosSumar = 0;
    if (minutosTotales >= 60) {
        numeroHorasSumar = minutosTotales / 60
        minutosSumar = minutosTotales % 60
        horasReunion = horasReunion + numeroHorasSumar
        minutosReunion = minutosReunion + minutosSumar
    }

    if (horasReunion <= 7 && minutosReunion < 30) {
        return false;

    } else if (horasReunion >= 17 && minutosReunion >= 45) {
        return false;
    } else if (horasReunion > 17) {
        return false
    } else if (horasReunion < 7) {
        return false
    }
    else {
        return true;
    }

}


console.assert(axendarReunion("7:00", 15) == false,
    'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.assert(axendarReunion("7:15", 30) == false,
    'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.assert(axendarReunion("7:30", 30) == true,
    'Fallo comprobando axendarReunión("7:30", 30) == true'
);
console.assert(axendarReunion("11:30", 60) == true,
    'Fallo comprobando axendarReunion("11:30", 60) == true'
);
console.assert(axendarReunion("17:00", 45) == true,
    'Fallo comprobando axendarReunion("17:00", 45) == true'
);
console.assert(axendarReunion("17:30", 30) == false,
    'Fallo comprobando axendarReunion("17:30", 30) == false'
);

