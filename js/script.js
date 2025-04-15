/*FUNCION DE PLANIFICA.HTML*/
var opciones = [
    "Italia", "Francia", "España", "Estados Unidos", "México", "Tailandia", "Indonesia", "China", "Japón", "Vietnam",
    "Egipto", "Grecia", "Turquía", "Reino Unido", "Alemania", "Australia", "Canadá", "India", "Brasil", "Argentina",
    "Chile", "Perú", "Colombia", "Portugal", "Países Bajos", "Suiza", "Suecia", "Noruega", "Dinamarca", "Finlandia",
    "Austria", "Hungría", "República Checa", "Polonia", "Rusia", "Sudáfrica", "Nueva Zelanda", "Marruecos", "Cuba", "Costa Rica",
    "Panamá", "República Dominicana", "Filipinas", "Malasia", "Corea del Sur", "Israel", "Emiratos Árabes Unidos", "Irlanda", "Bélgica", "Croacia"
];


var input = document.getElementById("destino");
var sugerencias = document.getElementById("sugerencias");

input.onkeyup = function () {
    //Limpiamos las sugerencias
    sugerencias.innerHTML = "";

    var texto = input.value.toLowerCase();

    //en caso de input vacio no se muestran sugerencias
    if (texto === "") {
        sugerencias.style.display = "none";
        return;
    }

    //Recorremos la lista de opciones revisando si hay coincidencia 
    for (var i = 0; i < opciones.length; i++) {
        var pais = opciones[i].toLowerCase(); //Para que coincida el formato

        if (pais.indexOf(texto) !== -1) {

            var div = document.createElement("div");
            div.innerText = opciones[i];

            div.onclick = function () { //al hacer click en la sugerencia se le pasa el texto de 
                input.value = this.innerText;
                sugerencias.style.display = "none";
            };

            sugerencias.appendChild(div);
            sugerencias.style.display = "block"; // Solo si hay coicidencia mostramos el contenido de sugerencias.
        }
    }
};



