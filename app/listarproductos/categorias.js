$(document).ready(function() {
    $(function()
    {


        $.ajax({
            type:'GET',
            url: "http://localhost/AngelaMaria/public/api/categoriasnombre",
            success:function(response)
            {
               
                $.each(response,function(indice,fila){       
                    
                    $('#LlamarCategoria').append("<li><a href=\"#\">"+fila.nombre_categoria +"</a></li>");
                });
              
                
               
            }
           


        });
    });
});