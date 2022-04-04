<?php
// SDK de Mercado Pago
require  '../../vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('TEST-2671414233898062-032205-87911ac1e6b35daa8d4ef083eae8d693-424202411');

// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();

$var_PHP = "<script> document.writeln(Var_JavaScript); </script>";



echo($var_PHP);
// Crea un ítem en la preferencia
$item = new MercadoPago\Item();
$item->title = 'Total';
$item->quantity = 1;
$item->unit_price = 75.56;
$item->currency_id ="PEN";

$preference->items = array($item);

$preference->back_urls = array(
    "success" => "http://localhost/Ecommers-Angela-Maria/view/checkout/",
    "failure" => "http://localhost/Ecommers-Angela-Maria/view/checkout/"
);

$preference->auto_return = "approved";
$preference->binary_mode = true;

$preference->save();
?>
    
	<script src="https://sdk.mercadopago.com/js/v2"></script>
	<br>
    <div class="checkout-btn"></div>
    <script>


            const mp = new MercadoPago("TEST-0c9a7efb-6bd9-4263-8cce-d141d7158aa9", {
                                        locale: "es-PE",
                                    });
                                    mp.checkout({
                                        preference: {
                                        id: "<?php echo $preference->id;?>",
                                        },
                                        render: {
                                        container: ".checkout-btn", 
                                        label: "Pagar con MercadoPago",
                                        
                                        },
                                        theme: {

                                            headerColor: "#c0392b",
                                            elementsColor: "#c0392b" // Color oscuro

                                            }
                                    });
    </script>

