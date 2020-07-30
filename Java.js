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

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
          const busqueda = evento.target.value;
          grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

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
});