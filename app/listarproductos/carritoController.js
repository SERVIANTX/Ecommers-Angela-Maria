
var listaProductos=null;
function comprarAhora(id)
{
    var producto_comprar=null;
    for(i=0;i<listaProductos.length;i++)
    {
        if(listaProductos[i].id==id)
        {
            producto_comprar=listaProductos[i];
            break;
        }
    }

    agregarProducto(producto_comprar);
    Swal.fire({
        title: 'Producto "'+[producto_comprar.nombre_producto]+'" Agregado!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        width:'20%',
        padding: '3rem',

      })
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
     
}

var listaProductosFull=null;
function comprarAhoraFull(id)
{
    var producto_comprar=null;
    for(i=0;i<listaProductosFull.length;i++)
    {
        if(listaProductosFull[i].id==id)
        {
            producto_comprar=listaProductosFull[i];
            break;
        }
    }
    console.log(listaProductosFull);
    agregarProducto(producto_comprar);
    Swal.fire({
        title: 'Producto "'+[producto_comprar.nombre_producto]+'" Agregado!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        width:'20%',
        padding: '3rem',

      })
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
}

var listaProductosBuscado=null;
function comprarBusqueda(id)
{
    var producto_comprar=null;
    for(i=0;i<listaProductosBuscado.length;i++)
    {
        if(listaProductosBuscado[i].id==id)
        {
            producto_comprar=listaProductosBuscado[i];
            break;
        }
    }
    agregarProducto(producto_comprar);
    Swal.fire({
        title: 'Producto "'+[producto_comprar.nombre_producto]+'" Agregado!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        width:'20%',
        padding: '3rem',

      })
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
}

var listaProductoscategorias=null;
function comprarporCategorias(id)
{
    var producto_comprar=null;
    for(i=0;i<listaProductoscategorias.length;i++)
    {
        if(listaProductoscategorias[i].id==id)
        {
            producto_comprar=listaProductoscategorias[i];
            break;
        }
    }
    agregarProducto(producto_comprar);
    Swal.fire({
        title: 'Producto "'+[producto_comprar.nombre_producto]+'" Agregado!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        width:'20%',
        padding: '3rem',

      })
      setTimeout(() => {
        location.href = location.href;
      }, 2000);
}


function agregarProducto(producto)
{
    var producto_agregar = producto;
    var carrito = localStorage.getItem("carrito");

    if(carrito)
        carrito=JSON.parse(carrito);
    if(!carrito)
    {
        carrito = {}
        carrito.total=0;
        carrito.detalle=[];
    }

    producto_encontrado=false;
    for(i=0;i<carrito.detalle.length;i++)
    {
        if(carrito.detalle[i].producto.id==producto.id)
        {
            carrito.detalle[i].cantidad++;
            carrito.detalle[i].sub_total=carrito.detalle[i].cantidad*carrito.detalle[i].producto.precio_venta;
            producto_agregar=null;
            break;
        }
    }
    
    if(producto_agregar)
    {
        carrito_item ={};
        carrito_item.cantidad=1;
        carrito_item.sub_total=producto_agregar.precio_venta;
        carrito_item.producto=producto_agregar;

        carrito.detalle.push(carrito_item);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarcarrito(id){
    var carrito = localStorage.getItem("carrito");
   
    
    if(carrito)
    carrito=JSON.parse(carrito);
    let indexborrar = carrito.detalle.findIndex(element => element.producto.id == id);
    
     carrito.detalle.splice(indexborrar,1);
     
     let productosguardando = JSON.stringify(carrito);
    localStorage.setItem("carrito", productosguardando);

    location.href = location.href;


}

$(document).ready(function() {


    if (localStorage.getItem("carrito") != null){
     let carrito = JSON.parse(localStorage.getItem("carrito"));
    var tablCarrito = $("#carritotabla");

        for(i=0;i<carrito.detalle.length;i++)
        {
            var strRow2="<tr>";
            strRow2+="<td>"+carrito.detalle[i].producto.nombre_producto+"</td>";
            strRow2+="<td><img class=\"rounded-circle\" src='"+ carrito.detalle[i].producto.imagen +"' width=\"100\" height=\"80\" /></td>";
            strRow2+="<td>"+carrito.detalle[i].cantidad+"</td>";
            strRow2+="<td>S/. "+carrito.detalle[i].producto.precio_venta+"</td>";
            strRow2+="<td>S/. "+carrito.detalle[i].sub_total+"</td>";
            strRow2+="<td><button onclick=\"eliminarcarrito('"+carrito.detalle[i].producto.id+"')\" class=\"primary-btn\" ><i class=\"fa fa-trash\"></i></button> </td>";
            strRow2+="<tr>";
            tablCarrito.append(strRow2);
        }
    }
});

$(document).ready(function() {

    if (localStorage.getItem("carrito") != null){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    var listcarrito = $("#contenedorCarrito");
    // document.getElementById('contenedorCarrito').innerHTML = carritoproductos;

       for(i=0;i<carrito.detalle.length;i++)
       {
           let carritoproductos = '';

           carritoproductos += `
           
               <div class="product-widget">
                   <div class="product-img">
                       <img src="${carrito.detalle[i].producto.imagen}" alt="">
                   </div>
                   <div class="product-body">
                       <h3 class="product-name"><a href="#">${carrito.detalle[i].producto.nombre_producto}</a></h3>
                       <h4 class="product-price"><span class="qty">${carrito.detalle[i].cantidad}x</span>S/. ${carrito.detalle[i].producto.precio_venta}</h4>
                   </div>
                   <button onclick="eliminarcarrito('${carrito.detalle[i].producto.id}')" class="delete"><i class="fa fa-close"></i></button>
               </div>`;
               listcarrito.append(carritoproductos);
       }

    }

});


$(document).ready(function() {
    if (localStorage.getItem("carrito") != null){
    let carrito = JSON.parse(localStorage.getItem("carrito"));

   $('#numeroproductos').append("<span>"+carrito.detalle.length+"</span>");
    }else{
        $('#numeroproductos').append("<span>0</span>");
    }
});

$(document).ready(function() {
    if (localStorage.getItem("carrito") != null){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    var suma = 0;
    for(var i =0;i<carrito.detalle.length;i++){
         suma += Number (carrito.detalle[i].sub_total);
    }
    $('#contenedordetallescarrito').append("<small>"+carrito.detalle.length+" Elemento(s) Seleccionados</small><h5>TOTAL: S/. "+suma+"</h5>");
    }
    else{
        $('#contenedordetallescarrito').append("<li class=\"fa fa-shopping-cart\"></li><span><strong> No se han agregado productos</strong></span>");
    }
                                
});

$(document).ready(function() {

    if (localStorage.getItem("carrito") != null){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    var listorder = $("#productosorder");

       for(i=0;i<carrito.detalle.length;i++)
       {
           let carritoproductosorder = '';

           carritoproductosorder += `
           
			<div class="order-col">
			    <div>${carrito.detalle[i].cantidad}x ${carrito.detalle[i].producto.nombre_producto}</div>
			    <div>S/. ${carrito.detalle[i].producto.precio_venta}</div>
		   	 </div>

			`;
            listorder.append(carritoproductosorder);
       }

    }

});

$(document).ready(function() {

    if (localStorage.getItem("carrito") != null){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        var suma2 = 0;
        for(var i =0;i<carrito.detalle.length;i++){
             suma2 += Number (carrito.detalle[i].sub_total);
        }
        $('#detallesorder').append(" <div><strong>TOTAL</strong></div> <div><strong class=\"order-total\">S/. "+suma2+"</strong></div>");
        }
});

