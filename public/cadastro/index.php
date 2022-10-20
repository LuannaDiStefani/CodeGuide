<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Guide - Cadastro</title>
    <!-- General CSS -->
    <link rel="stylesheet" href="../css/general.css">
    <!-- Login CSS -->
    <link rel="stylesheet" href="./style.css">
    <!-- JQuery -->
    <script src="../js/jquery-3.6.1.min.js"></script>

</head>

<body>

<?php include '../components/header.php'; ?>

    <div class="background">
        <video autoplay loop muted poster="../../source/fundo_cadastro.mp4" class="bg_video">
            <source src="../../source/fundo_cadastro.mp4" type="video/mp4">
        </video>

        <main>
            <section class="cadastro">
                <div class="cadastro_titulo">

                    <p class="line_um  animacao"> Bem-vindo(a) ao CodeGuide! </p>
                    <p class="line_dois animacao_dois"> A sua jornada começa aqui... </p>

                    <p class="line_um_responsivo animacao"> Bem-vindo(a) ao CodeGuide! </p>
                    <p class="line_dois_responsivo animacao_dois"> A sua jornada começa aqui</p>



                </div>

                <div class="fomulario_cadastro faed_in" id="teste">

                    <form class="formulario" name="cadastro" action="" method="post">

                        <p class="faed_in"> Digite seu nome:<br> <input type="name" name="nome" required
                                pattern="/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-']+$/"> <br><br></p>

                        Digite seu e-mail:<br> <input type="email" name="email" required><br><br>

                        Digite sua senha:<br> <input type="password" name="senha" required
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"> <br><br>

                        Confirme sua senha:<br> <input type="password" name="confirmacao" required
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"> <br><br>

                        Digite sua data de nascimento:<br> <input type="date" name="data" id="data"
                            required>

                        <input type="submit" name="cadastro" value="Continuar" class="enviar">

                    </form>

                </div>

            </section>

        </main>

    </div> <!-- background -->
 

    <?php include '../components/footer.php'; ?>

    <!-- Main-JS -->
    <script src="../js/main.js"></script>

    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>

</body>

</html>