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


    <!-- BREADCRUMB -->
    <div id="breadcrumb" class="section">

    </div>
    <!-- /BREADCRUMB -->

    <!-- SECTION -->
    <div class="section">
        <!-- container -->
        <div class="container">
            <!-- row -->
            <div class="row">

                <div class="col-md-6 order-details">
                    <form>

                    <div class="billing-details">
                        <div class="section-title text-center">
                            <h3 class="title">REGISTRARSE</h3>
                        </div>
                        <div class="form-group">
                            <input class="input" type="text" name="txtnombre" id="txtnombre" placeholder="Nombre" require>
                        </div>
                        <div class="form-group">
                            <input class="input" type="text" name="txtapellidos" id="txtapellidos" placeholder="Apellidos" require>
                        </div>
                        <div class="form-group">
                            <input class="input" type="email" name="txtdireccion" id="txtdireccion" placeholder="Dirección" require>
                        </div>
                        <div class="form-group">
                            <input class="input" type="email" name="txtnumdocumento" id="txtnumdocumento" placeholder="Numero de DNI" require>
                        </div>
                        <div class="form-group">
                            <input class="input" type="email" name="txtemail" id="txtemail" placeholder="Correo" require>
                        </div>
                        <div class="form-group">
                            <input class="input" type="password" name="txtpassword" id="txtpassword" placeholder="Contraseña" autocomplete>
                        </div>
                        <div class="form-group">
                            <div class="input-checkbox">
                                <input type="checkbox" id="create-account">
                                <label for="create-account">
                                    <span></span>
                                    Aceptar los terminos y condiciones.
                                </label>
                            </div>
                        </div>
                        <a href="#" class="primary-btn order-submit" id="registrarse">Registrarse</a>
                    </div>
                    </form>
                </div>

                <div class="col-md-6 order-details">
                <form id="inicioSesion">
                    <div class="billing-details">
                        <div class="section-title text-center">

                            <h3 class="title">INICIAR SESIÓN</h3>
                        </div>
                        <br>
                        <br>
                        <div class="form-group">
                            <input class="input" type="email" name="txtcorreo" id="txtcorreo" placeholder="Correo" >
                        </div>
                        <div class="form-group">
                            <input class="input" type="password" name="txtcontraseña" id="txtcontraseña" placeholder="Contraseña"  autocomplete >
                        </div>
                        <div class="form-group">
                            <div class="input-checkbox">
                                <input type="checkbox" id="register-account">
                                <label for="register-account">
                                    <span></span>
                                    Recordarme
                                </label>
                            </div>
                        </div>
                        
                        <br>
                        <br>
                        <br>
                        <button type="submit" class="primary-btn" id="iniciarsesion">Iniciar Sesión</button>
                    </div>
                    </form>
                </div>

            </div>
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


