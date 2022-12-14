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
    <script type="module" src="../js/main.js"></script>
    <script type="module" src="./script.js" defer></script>
    <!-- Font-awesome -->
    <link rel="stylesheet" href="../css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="../css/fontawesome/all.min.css">

</head>

<body>

<?php include '../components/header.php'; ?>

<div class="background">
    <video autoplay loop muted poster="../source/preview-space.png" class="bg_video">
      <source src="../source/fundo_cadastro.mp4" type="video/mp4">
    </video>
    
    <main>
        <section class="principal">
            <div class="interesses_container">
              <div class="texto">
  
                  <p> Ótimo! Agora selecione seus interesses...</p>
  
              </div>
  
  
              <div class="interesses">
  
                <div class="itens"></div>
  
  
              </div>
  
              <div class="enviar">
  
                  <button id="send" class="botao"> Continuar</button>
  
              </div>    

            </div> <!-- interesses_container -->
        </section>
      </main>

  <section class="search-result-container">
      <?php include '../components/slider.php'; ?>
  </section>

</div> <!-- background -->

<?php include '../components/footer.php'; ?>

</body>

</html>