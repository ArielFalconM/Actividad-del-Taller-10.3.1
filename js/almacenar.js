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
