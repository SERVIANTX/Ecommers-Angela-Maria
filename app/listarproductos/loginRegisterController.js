


$(document).ready(function() {
        if(window.location.pathname == "/Ecommers-Angela-Maria/view/checkout/"){
            var _token = localStorage.getItem('_token');

            if(!_token)
            {
                window.location = "../login";
            }else{
            }
        }
    });

var boton = document.getElementById('registrarse');
if ( window.location.pathname == "/Ecommers-Angela-Maria/view/login/")
{
    boton.addEventListener('click',function()
    {
        if (document.getElementById('create-account').checked){
            
            $.ajax(
                {
                    method:"POST",
                    url:"http://localhost/AngelaMaria/public/api/ingresarCliente",
                    data:{name:$("#txtnombre").val(),apellidos:$("#txtapellidos").val(),direccion:$("#txtdireccion").val(),numero_documento:$("#txtnumdocumento").val(),telefono:$("#txttelefono").val(),email:$("#txtemail").val(),password:$("#txtpassword").val()}
                    
                
                }
            )
            .done(function(msg){
            
                $("#txtnombre").val("");
                $("#txtapellidos").val("");
                $("#txtdireccion").val("");
                $("#txtnumdocumento").val("");
                $("#txttelefono").val("");
                $("#txtemail").val("");
                $("#txtpassword").val("");
                $("#create-account").checked = false;
                Swal.fire({
                    title: 'REGISTRADO CORRECTAMENTE AHORA PUEDES INICIAR SESION!',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    width:'20%',
                    padding: '3rem',
        
                })
                
            });
            

        }else
        {
            Swal.fire({
                title: 'NECESITAS ACEPTAR LOS TERMINOS Y CONDICIONES!',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                width:'20%',
                padding: '3rem',

            })

            
        }

    });
}


    var enviarboton = document.getElementById('iniciarsesion');
    if ( window.location.pathname == "/Ecommers-Angela-Maria/view/login/")
    {
    enviarboton.addEventListener('click',function()
    {
        $(function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    
                  $.ajax( {
                            method: "POST",
                         url: "http://localhost/AngelaMaria/public/api/seguridad/login",
                            data: {
                                email: $("#txtcorreo").val(),
                                password: $("#txtcontraseña").val(),
                                
                            }
                            
                        })
                        .done(function (response) {
                            
                            
                            localStorage.setItem('_token', response.data.token);
                            $.ajax({
                                method: "GET",
                                url: "http://localhost/AngelaMaria/public/api/datosAdmin/"+$("#txtcorreo").val(),
                                headers: {"Authorization": "Bearer "+ response.data.token}
                                })
                                .done(function( response ) {
                                    $.each(response,function(indice,fila){       
    
                                        let cliente = fila;
                                        
                                        localStorage.setItem("Cliente", JSON.stringify(fila));
    
                                        });
    
                                        window.location="../../view/checkout/";
                                    });
                            
                        });
                        
                }
            });
    
    
            $('#inicioSesion').validate({
                rules: {
                    txtcorreo: {
                        required: true
                    },
                    txtcontraseña: {
                        required: true
                    }
                },
                messages: {
                    txtcorreo: {
                        required: "Ingrese el Correo"
                    },
                    txtcontraseña: {
                        required: "Ingrese la contraseña"
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
        
    });
}
    
