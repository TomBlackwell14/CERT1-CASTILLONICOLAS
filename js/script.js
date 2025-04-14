/*FUNCION DE PLANIFICA.HTML*/ 
const opciones = [
    "Italia", "Francia", "España", "Estados Unidos", "México", "Tailandia", "Indonesia", "China", "Japón", "Vietnam",
    "Egipto", "Grecia", "Turquía", "Reino Unido", "Alemania", "Australia", "Canadá", "India", "Brasil", "Argentina",
    "Chile", "Perú", "Colombia", "Portugal", "Países Bajos", "Suiza", "Suecia", "Noruega", "Dinamarca", "Finlandia",
    "Austria", "Hungría", "República Checa", "Polonia", "Rusia", "Sudáfrica", "Nueva Zelanda", "Marruecos", "Cuba", "Costa Rica",
    "Panamá", "República Dominicana", "Filipinas", "Malasia", "Corea del Sur", "Israel", "Emiratos Árabes Unidos", "Irlanda", "Bélgica", "Croacia"
];

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript cargado correctamente!");

    const input = document.getElementById("destino");
    const sugerenciasContainer = document.getElementById("sugerencias");
  
    function filtrarOpciones() {  //Funcion principal
        sugerenciasContainer.innerHTML = "";
        const valor = input.value.trim().toLowerCase();

        if (valor === "") {
            sugerenciasContainer.style.display = "none"; // Oculta sugerencias si el campo está vacío
            return;
        }

        const resultados = opciones.filter(opcion => opcion.toLowerCase().includes(valor));

        sugerenciasContainer.style.display = "block"; // Muestra opciones al escribir

        resultados.forEach(opcion => {
            const div = document.createElement("div");
            div.classList.add("sugerencia-item");
            div.textContent = opcion;
            div.onclick = () => {
                input.value = opcion;
                sugerenciasContainer.style.display = "none"; // Oculta la lista al seleccionar
            };
            sugerenciasContainer.appendChild(div);
        });
    }

    input.addEventListener("input", filtrarOpciones);

    document.addEventListener("click", (e) => {
        if (!sugerenciasContainer.contains(e.target) && e.target !== input) {
            sugerenciasContainer.style.display = "none"; // Oculta sugerencias si el usuario hace clic fuera
        }
    });
});
