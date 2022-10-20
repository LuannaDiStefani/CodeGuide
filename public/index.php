<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Guide - O melhor guia de TI Online!</title>
    <link rel="stylesheet" href="./css/general.css">
    <link rel="stylesheet" href="./css/index.css">
    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>
    <!-- JQuery -->
    <script src="./js/jquery-3.6.1.min.js"></script>
</head>
<body>
    
<?php include './components/header.php'; ?>
    
    <section class="welcome">
        <div class="container">
            <video autoplay loop muted poster="../source/preview.png" class="bg_video">
                <source src="../source/video.mp4" type="video/mp4">
            </video>
            <div class="welcome-title">
                
                <h1><pre id="demo_3">
                </pre></h1>
            </div>
            <div class="welcome-subtitle">
                <h3>O melhor guia de T.I para quem está procurando bons lugares para aprender.</h3>
            </div>
        </div>
    </section>

    <main>

    <?php include './components/cursos.php'; ?>
    
    </main>

    <?php include './components/footer.php'; ?>

    <!-- Main-JS -->
    <script src="./js/main.js"></script>
    <!-- Index Scripts -->
    <!-- TypeJs -->
    <script src="./js/t.min.js"></script>
    <script src="./js/type.js"></script>
    <!-- swiper-JS -->
    <link rel="stylesheet" href="./css/swiper.min.css"/>
    <script src="./js/swiper.min.js"></script>
    <script src="./js/swiper.js"></script>    
</body>

</html>