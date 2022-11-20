<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Guide - Login</title>
    <!-- General CSS -->
    <link rel="stylesheet" href="../css/general.css">
    <!-- Login CSS -->
    <link rel="stylesheet" href="./style.css">
    <!-- JQuery -->
    <script src="../js/jquery-3.6.1.min.js"></script>
    <!-- Main-JS -->
    <script type="module" src="../js/main.js"></script>
    <script type="module" src="./script.js" defer></script>
    <!-- Font-awesome -->
    <link rel="stylesheet" href="../css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="../css/fontawesome/all.min.css">
 
</head>

<body>

<?php include '../components/header.php'; ?>

    <div class="background">
        <video autoplay loop muted poster="../../source/preview-space.png" class="bg_video">
            <source src="../../source/fundo_cadastro.mp4" type="video/mp4">
        </video>

        <main>
            <section class="login">

                <div class="container-login">

                    <div class="login_titulo">

                        BEM-VINDO DE VOLTA... <br><br>

                    </div>

                    <div class="fomulario_login">

                        <form class="formulario" name="logar">

                            Digite seu e-mail:<br> <input type="email" name="email"><br><br>

                            Digite sua senha:<br> <input type="password" name="senha"><br><br>

                            <input type="submit" name="enviar" value="Voltar a explorar" class="enviar"><br><br><br>

                        </form>


                        </form>

                    </div>


            </section>
        </main>

    <section class="search-result-container">
        <?php include '../components/slider.php'; ?>
    </section>

    </div> <!-- background -->
    
    <?php include '../components/footer.php'; ?>

</body>

</html>
