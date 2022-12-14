<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Perfil - Code Guide</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="./style.css">
    <!-- JQuery -->
    <script src="../js/jquery-3.6.1.min.js"></script>
    <!-- Main-JS -->
    <script type="module" src="../js/main.js"></script>
    <script type="module" src="./script.js"></script>
    <!-- Font-awesome -->
    <link rel="stylesheet" href="../css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="../css/fontawesome/all.min.css">
</head>
<body>

<?php include '../components/header.php'; ?>

    <main>
        <section class="profile">
            <div class="container">
                <div class="profile-info">
                    <div class="profile-box">
                    <div class="profile-info-top">
                        <div class="profile-info-picture" data-user="picture">
                        </div>
                        <div class="profile-info-name">
                            <p class="info-name" data-user="name">Code Guide Tec</p>
                            <p class="info-subtitle" data-user="username">@CodeGuideUser!</p>
                        </div>
                    </div>
                    
                        <div class="profile-info-middle">
                            <p class="info-description" data-user="descri">
                                Sem bio no momento.
                            </p>
                        </div>
                                          
                        <div class="info-stacks"> 
                            <h3 class="info-title">Meus interesses:</h3>
                            <div class="info-stacks-icon" data-user="interesses">
                            </div>
                        </div> 
                        </div>                          
                </div>
                <div class="profile-posts">
                    <h3 class="info-title">Meus comentários:</h3>
                    <div class="profile-comments">
                        <template id="comment-block">
                            <div class="comment-block" id="comment">
                                <div class="autor-title">Anônimo</div>
                                    <blockquote>
                                    </blockquote>
                                </div>
                            </template> 
                    </div>
                    <div class="comment-pagination">
                        <div class="first">&#171;</div>
                        <div class="prev">&lt;</div>
                        <div class="numbers">
                            <div>1</div>
                        </div>
                        <div class="next">&gt;</div>
                        <div class="last">&#187;</div>
                    </div>
    
                </div>
    
            </div>

        </section>
    </main>

<section class="search-result-container">
    <?php include '../components/slider.php'; ?>
</section>

    <?php include '../components/footer.php'; ?>

</body>
</html>