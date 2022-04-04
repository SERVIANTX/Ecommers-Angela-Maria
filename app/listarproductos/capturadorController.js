
if (localStorage.getItem("carrito") != null){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    var suma2 = 0;
    for(var i =0;i<carrito.detalle.length;i++){
        suma2 += Number (carrito.detalle[i].sub_total);
    }
    Var_JavaScript = suma2;
}
