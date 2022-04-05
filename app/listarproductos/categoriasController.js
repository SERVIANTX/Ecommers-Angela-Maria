const cargarCategoria = async () => {
    try {
        const respuesta = await fetch(`https://apiangelamaria.000webhostapp.com/api/Categoriasec`);
        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let categoriatop = '';
            datos.data.forEach(data => {
                categoriatop += `
                <div class="col-md-4 col-xs-6">
						<div class="shop">
							<div class="shop-img">
								<img src="${data.imagen}" alt="">
							</div>
							<div class="shop-body">
								<h3>${data.nombre_categoria}</h3>
								<a href="../../view/store/index.php?id=${data.id}" class="cta-btn">Compra Ahora <i class="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
            `;
            });

            document.getElementById('contenedor5').innerHTML = categoriatop;

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal.');
        } else if (respuesta.status === 404) {
            console.log('El producto que buscas no existe.');
        } else {
            console.log('Hubo un error.');
        }

    } catch (error) {

    }

}

cargarCategoria();