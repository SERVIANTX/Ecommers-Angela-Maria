const cargarProductos = async () => {
    try {
        const respuesta = await fetch(`http://localhost/AngelaMaria/public/api/productos`);
        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let productos = '';
            datos.data.forEach(data => {
                productos += `
				<div class="col-md-3 col-xs-1">
					<div class="product">
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
					</div>
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

    }

}

cargarProductos();

$(document).ready(function() {
    $(function()
        {
    
    
            $.ajax({
                type:'GET',
                url: "http://localhost/AngelaMaria/public/api/productosnombre",
                success:function(response)
                {
					let salida = [];
                    $.each(response,function(indice,fila){       
                        
                        

						let array2 = [];
						array2['value'] = fila.nombre_producto;
						array2['label'] = "<img src='"+fila.imagen+"' width=\"70\"/> "+fila.nombre_producto+'';
						salida.push( array2);
						
                    });

					var items = salida;
					$("#comboproductos").autocomplete({

						source: items,
						minLength:1,
						select: function(event, ui) {
							var params = {
							  equipo: ui.item.value
							};

							 $.ajax({
								type:'GET',
							 	url: "http://localhost/AngelaMaria/public/api/productosdatos/"+params.equipo,
								
							})
							.done(function( response ) {

								$.each(response,function(indice,fila){       

									$("#idventacliente").attr("value", fila.id);
									
									let producto = fila;

										localStorage.setItem("producto", JSON.stringify(fila) );
								});
								window.location = "/Ecommers-Angela-Maria/view/product/";
								
							});

						}})
						.data('ui-autocomplete')._renderItem = function(ul, item){
							return $("<li class='ui-autocomplete-row'></li>")
								.data("item.autocomplete", item)
								.append(item.label)
								.appendTo(ul);
						  };

						
						
					  
                   
                }
               
				
    
            });
        });
    
    
    });



