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
    <!-- Main-JS -->
    <script type="module" src="../js/main.js" defer></script>
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
            <section class="cadastro">
                <div class="cadastro_titulo">
                    
                    <p class="line_um  animacao"> Bem-vindo(a) ao CodeGuide! </p>
                    <p class="line_dois animacao_dois"> A sua jornada começa aqui... </p>

                    <p class="line_um_responsivo animacao"> Bem-vindo(a) ao CodeGuide! </p>
                    <p class="line_dois_responsivo animacao_dois"> A sua jornada começa aqui</p>



                </div>

                <div class="fomulario_cadastro faed_in" id="teste">

                    <form class="formulario" name="cadastro" enctype="multipart/form-data" method="post">

                        <p class="faed_in"> Digite seu nome:<br> <input type="name" name="nome" required
                                pattern="/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-']+$/"> <br><br></p>

                        Digite seu e-mail:<br> <input type="email" name="email" required><br><br>

                        Digite sua senha:<br> <input type="password" name="senha" required
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"> <br><br>

                        Confirme sua senha:<br> <input type="password" name="conf" required
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"> <br><br>

                        Digite sua data de nascimento:<br> <input type="date" name="data" id="data"
                            required>

                        <input type="submit" name="cadastro" value="Continuar" class="enviar">

                    </form>

                </div>

            </section>

        </main>

        
    </div> <!-- background -->
    
    <section class="search-result-container">
        <?php include '../components/slider.php'; ?>
    </section>

    <?php include '../components/footer.php'; ?>

</body>

</html>