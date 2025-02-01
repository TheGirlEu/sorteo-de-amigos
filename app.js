// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo que almacena los nombres de los amigos
let amigos = [];

// Función para agregar a los amigos
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtener los nombres
    const nombre = input.value.trim(); // Eliminar los espacios en blanco

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregas los nombre al array
    amigos.push(nombre);

    // Actualizar la lista de amigos en el DOM
    actualizarLista();

    // Limpia el campo de entrada
    input.value = "";
}

// Función para actualizar la lista visible en el DOM
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista anterior

    amigos.forEach((amigo, index) => {
        // Crea un elemento de lista para cada amigo
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón de eliminar para cada elemento
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.className = "button-remove";
        eliminarBtn.onclick = () => eliminarAmigo(index);

        // Añadir el botón al elemento de lista
        li.appendChild(eliminarBtn);

        // Añadir el elemento de lista al contenedor
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el nombre del array
    actualizarLista(); // Actualizar la lista en el DOM
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, agregue nombres.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    const liResultado = document.createElement("li");
    liResultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}
