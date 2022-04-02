
<!DOCTYPE html>
<html lang="en">
	<head>
	
	<link rel="stylesheet" href="//cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>	<?php include "../html/MainHead.php" ?>
<script>
$(document).ready( function () {
$('#myTable').DataTable();
} );
</script>
    </head>
<body class="animsition">
	
	<!-- Header -->


	<header>
		<?php include "../html/MainHeader.php" ?>

		</header>



		<table id="myTable" class="display" cellspacing="0" width="100%">
<thead>
<tr>
<th>Nombre</th>
<th>Posición</th>
<th>Fecha de inicio</th>
<th>Salario</th>
</tr>
</thead>
<tfoot>
<tr>
<th>Nombre</th>
<th>Posición</th>
<th>Fecha de inicio</th>
<th>Salario</th>
</tr>
</tfoot>

<tbody>
<tr>
<td>Tiger Nixon</td>
<td>System Architect</td>
<td>2011/04/25</td>
<td>$320,800</td>
</tr>
<tr>
<td>Garrett Winters</td>
<td>Accountant</td>
<td>2011/07/25</td>
<td>$170,750</td>
</tr>
<tr>
<td>Ashton Cox</td>
<td>Junior Technical Author</td>
<td>2009/01/12</td>
<td>$86,000</td>
</tr>
<tr>
<td>Cedric Kelly</td>
<td>Senior Javascript Developer</td>
<td>2012/03/29</td>
<td>$433,060</td>
</tr>
<tr>
<td>Airi Satou</td>
<td>Accountant</td>
<td>2008/11/28</td>
<td>$162,700</td>
</tr>
<tr>
<td>Brielle Williamson</td>
<td>Integration Specialist</td>
<td>2012/12/02</td>
<td>$372,000</td>
</tr>
<tr>
<td>Herrod Chandler</td>
<td>Sales Assistant</td>
<td>2012/08/06</td>
<td>$137,500</td>
</tr>
<tr>
<td>Rhona Davidson</td>
<td>Integration Specialist</td>
<td>2010/10/14</td>
<td>$327,900</td>
</tr>
<tr>
<td>Colleen Hurst</td>
<td>Javascript Developer</td>
<td>2009/09/15</td>
<td>$205,500</td>
</tr>




</tbody>
</table>

	


<!--===============================================================================================-->
<?php include "../html/MainFooter.php" ?>
		<!-- /FOOTER -->
		
		<!-- jQuery Plugins -->

	
	
		

</body>
</html>


