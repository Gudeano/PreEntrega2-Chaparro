const varRespuesta = (respuestaCorrecta, pregunta, intentosRestantes) => {
    let intentos = 0;

    while (intentos < intentosRestantes) {
        let respuesta = prompt(pregunta);

        // Verificar si se ha presionado Cancel o Esc
        if (respuesta === null) {
            alert("No puedes cancelar la operación. Por favor, responde la pregunta.");
        } else {
            respuesta = respuesta.toLowerCase();

            if (respuesta === respuestaCorrecta) {
                alert("Respuesta Exitosa");
                break;
            } else {
                intentos++;
                alert("Respuesta Incorrecta. Intentos restantes: " + (intentosRestantes - intentos));
            }
        }
    }

    if (intentos === intentosRestantes) {
        alert("Se agotaron los intentos para esta pregunta. La respuesta correcta era: " + respuestaCorrecta);
        return false; 
    }

    return true; 
};

let intentosLimites = 4;
let pruebaAprobada = true;

for (let i = 1; i <= 6; i++) {
    let pregunta;
    let respuestaCorrecta;

    switch (i) {
        case 1:
            pregunta = "Responder verdadero o falso. ¿Boca quedó afuera de la Libertadores 2024?";
            respuestaCorrecta = "verdadero";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        case 2:
            pregunta = "Responder verdadero o falso. ¿Real Madrid es el que más Champions League tiene en la historia?";
            respuestaCorrecta = "verdadero";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        case 3:
            pregunta = "Responder verdadero o falso. ¿Lionel Messi es el máximo goleador de la historia del fútbol?";
            respuestaCorrecta = "falso";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        case 4:
            pregunta = "Responder verdadero o falso. ¿Gallardo es el director técnico de River Plate actualmente?";
            respuestaCorrecta = "falso";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        case 5:
            pregunta = "Responder verdadero o falso. ¿Inter ganó la Champions League en 2023?";
            respuestaCorrecta = "falso";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        case 6:
            pregunta = "Responder verdadero o falso. ¿El gol desde el córner se llama 'Gol Olímpico'?";
            respuestaCorrecta = "verdadero";
            if (!varRespuesta(respuestaCorrecta, pregunta, intentosLimites)) {
                pruebaAprobada = false;
            }
            break;
        default:
            alert("Encuesta de preguntas de fútbol para responder con un verdadero o falso");
            break;
    }
}

if (pruebaAprobada) {
    alert("¡Felicitaciones! Has pasado la prueba.");
} else {
    alert("Lo siento, no has pasado la prueba. ¡Mejor suerte la próxima vez!");
}