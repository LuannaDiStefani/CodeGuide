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
    <link rel="stylesheet" href="./css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="./css/fontawesome/all.min.css">
    <!-- JQuery -->
    <script src="./js/jquery-3.6.1.min.js"></script>
    <!-- Index Scripts -->
    <!-- TypeJs -->
    <script src="./js/t.min.js"></script>
    <script src="./js/type.js"></script>
    <!-- Slider-JS -->
    <script type="module" src="./js/main.js" defer></script>
    <script type="module" src="./script.js"></script>
</head>
<body>
    
<?php include './components/header.php'; ?>
    
    <section class="welcome">
        <div class="container">
            <video autoplay loop muted poster="./source/preview-earth.png" class="bg_video">
                <source src="./source/video.mp4" type="video/mp4">
            </video>
            <div class="welcome-title">
                
                <h1 onselectstart="return false"><pre id="demo_3">
                </pre></h1>
            </div>
            <div class="welcome-subtitle">
                <h3>O melhor guia de T.I para quem está procurando bons lugares para aprender.</h3>
            </div>
        </div>
    </section>

    <?php include_once './components/slider.php'; ?>
    

<?php include './components/footer.php'; ?>

</body>

</html>