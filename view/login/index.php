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
    <nav id="navigation">
        <!-- container -->
        <div class="container">
            <!-- responsive-nav -->
            <div id="responsive-nav">
                <!-- NAV -->
                <ul class="main-nav nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Hot Deals</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
                <!-- /NAV -->
            </div>
            <!-- /responsive-nav -->
        </div>
        <!-- /container -->
    </nav>
    <!-- /NAVIGATION -->

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

                    <div class="billing-details">
                        <div class="section-title text-center">
                            <h3 class="title">REGISTRARSE</h3>
                        </div>
                        <div class="form-group">
                            <input class="input" type="text" name="first-name" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <input class="input" type="text" name="last-name" placeholder="Apellidos">
                        </div>
                        <div class="form-group">
                            <input class="input" type="email" name="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input class="input" type="password" name="password" placeholder="Contraseña">
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
                        <a href="#" class="primary-btn order-submit">Registrarse</a>
                    </div>

                </div>

                <div class="col-md-6 order-details">

                    <div class="billing-details">
                        <div class="section-title text-center">
                            <h3 class="title">INICIAR SESIÓN</h3>
                        </div>
                        <br>
                        <br>
                        <div class="form-group">
                            <input class="input" type="email" name="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input class="input" type="password" name="password" placeholder="Contraseña">
                        </div>
                        <div class="form-group">
                            <div class="input-checkbox">
                                <input type="checkbox" id="register-account">
                                <label for="register-account">
                                    <span></span>
                                    Aceptar los terminos y condiciones.
                                </label>
                            </div>
                        </div>
                        <br>
                        <br>
                        <br>
                        <a href="#" class="primary-btn order-submit">Iniciar Sesión</a>
                    </div>

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