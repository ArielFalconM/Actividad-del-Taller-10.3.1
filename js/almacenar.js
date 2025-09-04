function limpiarLista() {
    localStorage.removeItem("lista");
    mostrarLista();
}

botonLimpiar.addEventListener("click", limpiarLista);