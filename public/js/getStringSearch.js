//*Obtener el valor ingresado en la barra de búsqueda y guardarlo en el localstorage
let valorBusqueda;
let botonBusqueda = document.getElementById("buttonSearch")
botonBusqueda.addEventListener('click', ()=> {
    valorBusqueda = document.getElementById("nameSearch").value;
    sessionStorage.setItem('Busqueda', valorBusqueda);
})

//*Prevenir enviar el formulario al pulsar enter en los campos de texto
let formBusqueda = document.getElementById("nameSearch");
formBusqueda.addEventListener('keypress', (e) => {
    if (e.key == 'Enter'){
        e.preventDefault();
    }
});