const cargarProductomas = async () => {
    try {
        const respuesta = await fetch(`http://localhost/AngelaMaria/public/api/productosmas`);
        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            listaProductos = datos.data;
            let productomas = '';
            datos.data.forEach(data => {
                productomas += `
                <div class="col-md-3 col-xs-1">
				<div class="product">
                    <div class="product-img">
                            <img src="${data.imagen}" alt="">
                        </div>
                    <div class="product-body">
                        <h3 class="product-name"><a href="#">${data.nombre_producto}</a></h3>
                        <h4 class="product-price">S/. ${data.precio_venta} </h4>
                        <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Lista de deseos</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">Compartir</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Ver producto</span></button>
                    </div>
                    </div>
                    <div class="add-to-cart">
                        <button onclick="comprarAhora('${data.id}')" class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Añadir al carrito</button>
                    </div>
                </div>
                </div>
            `;
            });

            document.getElementById('contenedor4').innerHTML = productomas;

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

cargarProductomas();