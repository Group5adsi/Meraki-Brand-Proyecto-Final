function cambiar() {
    var site = document.getElementById('site-nav');
    site
        .classList
        .toggle('site-nav-open');
}

//loader

window.addEventListener("load", function () {
    document
        .getElementById("loader")
        .classList
        .toggle("loadercargado")
})

//Grid

const grid = new Muuri('.grid', {
    layout: {
        rounding: true
    }
});

window.addEventListener('load', () => {
    grid
        .refreshItems()
        .layout();
    document
        .getElementById('grid')
        .classList
        .add('imagenes-cargadas');

    //filtrado imagenes por listener

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento
                .target
                .classList
                .add('activo');

            const categoria = evento
                .target
                .innerHTML
                .toLowerCase();
            categoria === 'todos'
                ? grid.filter('[data-categoria]')
                : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    document
        .querySelector('#barra-busqueda')
        .addEventListener('input', (evento) => {
            const busqueda = evento.target.value;
            grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
        });

    //LISTENER IMAGENES

    const overlay = document.getElementById('overlay');
    document
        .querySelectorAll('.grid .item img')
        .forEach((elemento) => {

            elemento.addEventListener('click', () => {
                const ruta = elemento.getAttribute('src');
                const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

                overlay
                    .classList
                    .add('activo');
                document
                    .querySelector('#overlay img')
                    .src = ruta;
                document
                    .querySelector('#overlay .descripcion')
                    .innerHTML = descripcion;
            })
        });

        //eventlistener boton cerrar

        document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
              overlay.classList.remove('activo');
        })

        overlay.addEventListener('click', (evento) =>{
              //overlay.classList.remove('activo');
            evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
        });
})
