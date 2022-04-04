<!DOCTYPE html>
<html lang="en">

<head>

	<?php include "../html/MainHead.php" ?>

</head>

<body>
	<!-- HEADER -->
	<header>
		<?php include "../html/MainHeader.php" ?>
	</header>
	<!-- /HEADER -->

	<!-- NAVIGATION -->

	<!-- /NAVIGATION -->
		
	<!-- SECTION -->
	<div class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
			
				<div class="col-md-7">
					<!-- Billing Details -->
					<div class="billing-details" id="datosCliente">
						
					</div>
					<!-- /Billing Details -->
					<!-- Order notes -->
					<div class="order-notes">
						<textarea class="input" placeholder="Notas de la Orden"></textarea>
					</div>
					<div class="form-group" id="EnviarTotal">
						
					</div>
					<!-- /Order notes -->
				</div>

				<!-- Order Details -->
				<div class="col-md-5 order-details">
					<div class="section-title text-center">
						<h3 class="title">Tu orden</h3>
					</div>
					<div class="order-summary">
						<div class="order-col">
							<div><strong>PRODUCTO</strong></div>
							<div><strong>TOTAL</strong></div>
						</div>
						<div class="order-products" id="productosorder">
							
						</div>
						<div class="order-col" id="detallesorder">
							
						</div>
					</div>
					<!-- <div class="payment-method">
						<div class="input-radio">
							<input type="radio" name="payment" id="payment-1">
							<label for="payment-1">
								<span></span>
								Direct Bank Transfer
							</label>
							<div class="caption">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div> -->
					<div class="input-checkbox">
						<input type="checkbox" id="terms">
						<label for="terms">
							<span></span>
							<a>Aceptas los <a href="../../view/politicas/">Terminos y Condiciones</a>
						</label>
					</div>
					<script src="../../app/listarproductos/capturadorController.js"></script>
					<div class="form-group" >
						<?php require "../../app/mercadopago/mercadopago.php" ?>
					</div>
					
				</div>
				<!-- /Order Details -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /SECTION -->

	<!-- NEWSLETTER -->
	<div id="newsletter" class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12">
						<div class="newsletter">
							<p>Suscribete para obtener las mejores <strong> OFERTAS!</strong></p>
							<form>
								<input class="input" type="email" placeholder="Ingrese su correo">
								<button class="newsletter-btn"><i class="fa fa-envelope"></i> Enviar</button>
							</form>
						</div>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /NEWSLETTER -->

	<!-- FOOTER -->
	<?php include "../html/MainFooter.php" ?>
	<!-- /FOOTER -->

	<!-- jQuery Plugins -->
	<?php include "../html/MainJS.php" ?>

</body>

</html>