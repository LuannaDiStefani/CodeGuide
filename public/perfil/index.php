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
</head>
<body>

<?php include '../components/header.php'; ?>

    <main>
        <section class="profile">
            <div class="container">
                <div class="profile-info">
                    <div class="profile-box">
                    <div class="profile-info-top">
                        <div class="profile-info-picture">
                            <img src="../../source/alberto.png" alt="" srcset="">
                        </div>
                        <div class="profile-info-name">
                            <p class="info-name">Lorem, ipsum dolor sit</p>
                            <p class="info-subtitle">@usernameRyu</p>
                        </div>
                    </div>
                    
                        <div class="profile-info-middle">
                            <p class="info-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, amet sapiente. Nihil architecto fuga suscipit, quam voluptate vitae officiis numquam. Ipsa quod accusamus labore sed odio odit aperiam ut libero.
                            </p>
                        </div>
                                          
                        <div class="info-stacks"> 
                            <h3 class="info-title">Minha Stack:</h3>
                            <div class="info-stacks-icon">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-regular fa-square-plus open-model"></i>
                            </div>
                            <div class="model-container">
                                <div class="model">
                                    <div>
                                        <h2>Adicione uma nova habilidade!</h2>
                                        <div class="search-stack-container">
                                            <input list="stacks" id="search-stack">
                                                <datalist id="stacks">
                                                <option value="Internet Explorer">
                                                <option value="Firefox">
                                                <option value="Chrome">
                                                <option value="Opera">
                                                <option value="Safari">
                                                </datalist> 
                                        </div>
                                    </div>
                                    <div>
                                        <div class="search-stack-icon">
                                            <i class="fa-brands fa-html5"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <button>Ok</button>
                                        <button>Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button"></i>
                                </div>
                            </div>
                        </div>
                        <div class="profile-info-bottom">
                            <h3 class="info-title">Certificados:</h3>
                            <div class="info-credentials">
        
                            </div>
                        </div>  
                        </div>                          
                </div>
                <div class="profile-posts">
                    <h3 class="info-title">Meus comentários:</h3>
                    <div class="profile-comments">
                        <div class="comment-block">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, officiis exercitationem eos cupiditate similique reprehenderit fugit dolores accusantium sint amet nesciunt repellendus mollitia accusamus animi cumque excepturi quas esse blanditiis.</p>
                        </div>     
                    </div>
    
                </div>
    
            </div>

        </section>
    </main>

    <?php include '../components/footer.php'; ?>

    <!-- Main-JS -->
    <script src="../js/main.js"></script>

    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>
    
</body>

</html>