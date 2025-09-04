// Obtener elementos del DOM
const inputItem = document.getElementById('item');
const botonAgregar = document.getElementById('agregar');
const botonLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Función para obtener la lista desde localStorage
function obtenerLista() {
    const listaJSON = localStorage.getItem('listaItems');
    return listaJSON ? JSON.parse(listaJSON) : [];
}

// Función para guardar la lista en localStorage
function guardarLista(lista) {
    localStorage.setItem('listaItems', JSON.stringify(lista));
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    const lista = obtenerLista();
    contenedor.innerHTML = ''; // Limpiar contenedor

    lista.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

// Inicializar: mostrar la lista guardada al cargar la página
mostrarLista();

// Evento: Agregar un nuevo ítem
botonAgregar.addEventListener('click', () => {
    const valor = inputItem.value.trim();

    if (valor !== '') {
        const lista = obtenerLista();
        lista.push(valor); // Añadir nuevo ítem
        guardarLista(lista); // Guardar en localStorage
        mostrarLista(); // Actualizar vista
        inputItem.value = ''; // Limpiar campo
    }
});
