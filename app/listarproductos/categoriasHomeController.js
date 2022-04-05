$(document).ready(function() {
    $(function()
    {


        $.ajax({
            type:'GET',
            url: "https://apiangelamaria.000webhostapp.com/api/categoriasnombre",
            success:function(response)
            {
               
                $.each(response,function(indice,fila){       
                    
                    $('#LlamarCategoria').append("<li><a href=\"../../view/store/index.php?id="+fila.id +"\">"+fila.nombre_categoria +"</a></li>");

                });
              
            }
           


        });
    });
});


// function extraerid(url){

//     return (url.match(/([^?=]+)()/))
// }

function getParameter(parametro){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parametro);
     
}

$(document).ready(function() {
    $(function()
    {
        var idcategoria = "id";
        var idobtenida =  getParameter(idcategoria);

        const cargarProductomas = async () => {
            try {
                const respuesta = await fetch(`https://apiangelamaria.000webhostapp.com/api/productoscategoria/`+idobtenida);
                // Si la respuesta es correcta
                if (respuesta.status === 200) {
                    const datos = await respuesta.json();
                    listaProductoscategorias = datos.data;
                    let categoriaproducto = '';
                    datos.data.forEach(data => {
                        categoriaproducto += `
                        <div class="col-md-4 col-xs-6">
							<div class="product">
								<div class="product-img">
									<img src="${data.imagen}" alt="">
								</div>
								<div class="product-body">
									<p class="product-category">Category</p>
									<h3 class="product-name"><a href="#">${data.nombre_producto}</a></h3>
									<h4 class="product-price">S/. ${data.precio_venta}</h4>
									<div class="product-rating">
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
									</div>
									<div class="product-btns">
										<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
												class="tooltipp">Lista de deseos</span></button>
										<button class="add-to-compare"><i class="fa fa-exchange"></i><span
												class="tooltipp">Compartir</span></button>
										<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Ver producto</span></button>
									</div>
								</div>
								<div class="add-to-cart">
									<button onclick="comprarporCategorias('${data.id}')" class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Añadir al carrito</button>
								</div>
							</div>
						</div>
                    `;
                    });
        
                    document.getElementById('contenedorcategoria').innerHTML = categoriaproducto;
        
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


});
});

$(document).ready(function() {
    $(function()
    {
        var idcategoria = "id";
        var idobtenida =  getParameter(idcategoria);

        const cargarmarcas = async () => {
            try {
                const respuesta = await fetch(`https://apiangelamaria.000webhostapp.com/api/productosmarcas/`+idobtenida);
                if (respuesta.status === 200) {
                    const datos = await respuesta.json();
        
                    let marcasproducto = '';
                    datos.data.forEach(data => {
                        marcasproducto += `
                        <div class="input-checkbox">
								<input type="checkbox" id="brand-1">
								<label for="brand-1">
									<span></span>
									${data.marca}
								</label>
							</div>
                    `;
                    });
        
                    document.getElementById('contenedormarcas').innerHTML = marcasproducto;
        
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
        
        cargarmarcas();


});
});


$(document).ready(function() {
    $(function()
    {
       if (window.location.pathname == "/Ecommers-Angela-Maria/view/home/")
       {
        let horas = 7;
        let minutos = 0;
        let segundos = 0;
        cargarSegundo();

        function cargarSegundo(){
            let txtSegundos;

            if(segundos < 0){
                segundos = 59; 
            }

            if(segundos < 10){
                txtSegundos = `0${segundos}`;
            }else{
                txtSegundos = segundos;
            }
            document.getElementById('segundos').innerHTML = txtSegundos;
            segundos--;

            cargarMinutos(segundos);
        }


        function cargarMinutos(segundos){
            let txtMinutos;

            if(segundos == -1 && minutos !== 0){
                setTimeout(() =>{
                    minutos--;
                },500)
            }else if(segundos == -1 && minutos == 0){
                setTimeout(() =>{
                    minutos = 59;
                },500)
            }

            if(minutos < 10){
                txtMinutos = `0${minutos}`;
            }else{
                txtMinutos = minutos;
            }
            document.getElementById('minutos').innerHTML = txtMinutos;
            cargarHoras(segundos,minutos);
        }


        function cargarHoras(segundos,minutos){
            let txtHoras;

            if(segundos == -1 && minutos == 0 && horas !== 0){
                setTimeout(() =>{
                    horas--;
                },500)
            }else if(segundos == -1 && minutos == 0 && horas == 0){
                setTimeout(() =>{
                    horas = 2;
                },500)
            }

            //Mostrar Horas en pantalla
            if(horas < 10){
                txtHoras = `0${horas}`;
            }else{
                txtHoras = horas;
            }
            document.getElementById('horas').innerHTML = txtHoras;
        }

        setInterval(cargarSegundo,1000);
       }
        


});
});


