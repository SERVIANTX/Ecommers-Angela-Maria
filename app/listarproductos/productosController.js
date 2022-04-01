const cargarProductos = async () => {
    try {
        const respuesta = await fetch(`http://localhost/AngelaMaria/public/api/productos`);

        console.log(respuesta);

        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let productos = '';
            datos.data.forEach(data => {
                productos += `
					<div class="product-img">
						<img src="${data.imagen}" alt="">
						<div class="product-label">
							<span class="sale">-30%</span>
							<span class="new">NEW</span>
						</div>
					</div>
					<div class="product-body">
						<p class="product-category">Category</p>
						<h3 class="product-name"><a href="#">${data.nombre_producto}</a></h3>
						<h4 class="product-price">S/. ${data.precio_venta}<del class="product-old-price">$990.00</del></h4>
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
						</div>
						<div class="product-btns">
							<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
							<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
							<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
						</div>
					</div>
					<div class="add-to-cart">
						<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
					</div>
            `;
            });

            document.getElementById('contenedor').innerHTML = productos;

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal.');
        } else if (respuesta.status === 404) {
            console.log('El producto que buscas no existe.');
        } else {
            console.log('Hubo un error.');
        }

    } catch (error) {
        console.log(error);
    }

}

cargarProductos();