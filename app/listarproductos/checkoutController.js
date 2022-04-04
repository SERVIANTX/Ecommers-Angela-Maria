const cargarCliente = async () => {
    try {
        
        if (localStorage.getItem("Cliente") != null) {
            
            let datos = JSON.parse(localStorage.getItem("Cliente"));
            let cliente = '';
			cliente += `
			<div class="section-title">
			<h3 class="title">Datos de Entrega</h3>
			</div>
			<div class="form-group">
				<input class="input" type="text" name="txtnombre" id="txtnombre" value="${datos.name}" readonly>
			</div>
			<div class="form-group">
				<input class="input" type="text" name="txtapellidos" id="txtapellidos" value="${datos.apellidos}" readonly>
			</div>
			<div class="form-group">
				<input class="input" type="email" name="txtcorreo" id="txtcorreo" value="${datos.email}" readonly >
			</div>
			<div class="form-group">
				<input class="input" type="text" name="txtnumero_documento" id="txtnumero_documento" placeholder="Numero de DNI" value="${datos.numero_documento}" readonly >
			</div>
			<div class="form-group">
				<input class="input" type="text" name="txtdireccion" id="txtdireccion" placeholder="Dirección de envio" value="${datos.direccion}">
			</div>
			
			<div class="form-group">
				<input class="input" type="text" name="txttelefono" id="txttelefono" placeholder="Telefono" value="${datos.telefono}">
			</div>

            `;

            document.getElementById('datosCliente').innerHTML = cliente;
        } else {
        }

    } catch (error) {

    }

}

cargarCliente();

