//Función para convertir un valor hexadecimal a binario
function ConvertirDecimalABinario(decimal) {
    
    const numero = parseInt(decimal, 10);

    if (isNaN(numero) || numero < 0) {
        return "Valor inválido: debe ser un entero decimal positivo";
    }
    let binario = "";
    //validamos si es 0
    if (decimal === 0) return "0";

    while (decimal > 0) {
        //Nos retorna si tiene residuo o no, es decir si es par retorna 0 si es impar retorna 1
        let residuo = decimal % 2;
        binario = residuo + binario;
        decimal = Math.floor(decimal / 2); //Dejamos el siguiente numero redondeado para el proximo residuo
    }
    return binario
}


function ConvertirBinarioADecimal(binario) {
    // Validar que solo contenga 0 y 1
    if (!/^[01]+$/.test(binario)) {
        return "Valor inválido: no es un binario válido";
    }

    let exponente = 0;
    let decimal = 0;
    // Recorremos el binario de derecha a izquierda
    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += Math.pow(2, exponente); // eleva el número al exponente
        }
        exponente++;
    }
   
    return decimal;
}

//limpiamos los campos al cambiar de opcion
$("#accion").on("change", function() {
    $("#valorConvertir").val("");
    $("#resultado").val("");
});
//Obtenemos el evento click del boton de convertir los datos con Jquery
$("#btnConvertir").on("click", () => {
    //Obtenemos la accion y el valor a convertir
    let tipoAccion = $("#accion").val();
    let valor = $("#valorConvertir").val();
    if (!valor || valor.trim() === "") {
        alert("Error: No ha digitado un valor para convertir");
        return;
    }
    if (tipoAccion == "deciA_Bin") {
        $("#resultado").val(ConvertirDecimalABinario(valor));
    } else {
        $("#resultado").val(ConvertirBinarioADecimal(valor));
    }
})