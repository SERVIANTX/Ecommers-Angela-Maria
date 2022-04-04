
<!DOCTYPE html>
<html lang="en">
	<head>
	
<!-- <link rel="stylesheet" href="//cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>	 -->

	<?php include "../html/MainHead.php" ?> 
    </head>
<body class="animsition">
	
	<!-- Header -->


	<header>
		<?php include "../html/MainHeader.php" ?>

		</header>

		
			<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row" >

				<!-- section title -->
					<div class="col-md-12" 	style="text-align:center;">
							<div class="section-title">
								<h3 class="title">Mi Carrito de Compras</h3>
							</div>
					</div>
		

					<table id="carritotabla"  class="table table-bordered" style="text-align:center;">
						<thead class="thead-dark">
							<tr>
							<th scope="col" style="text-align:center;">Nombre</th>
							<th scope="col" style="text-align:center;">Imagen</th>
							<th scope="col" style="text-align:center;">Cantidad</th>
							<th scope="col" style="text-align:center;">Precio</th>
							<th scope="col" style="text-align:center;">Subtotal</th>
							<th scope="col" style="text-align:center;">Quitar</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>

					</table>

					<a href="../../view/checkout/" class="primary-btn order-submit" id="registrarse">Ir a Pagar</a>
			</div>
		</div>
	</div>


<!--===============================================================================================-->
<?php include "../html/MainFooter.php" ?>

				<!-- jQuery Plugins -->
				<?php include "../html/MainJS.php" ?>


				
</body>
</html>


