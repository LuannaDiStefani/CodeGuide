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
    <script type="module" src="../js/main.js" defer></script>
    <script type="module" src="./script.js" defer></script>
    <!-- Font-awesome -->
    <link rel="stylesheet" href="../css/fontawesome/fontawesome.min.css">
    <link rel="stylesheet" href="../css/fontawesome/all.min.css">
</head>
<body>

<?php include '../components/header.php'; ?>

<main>
        <section class="admin-panel">
            <div class="container">
                <!-- Menu -->
                <div class="admin-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a class="target-edit-field" target="1" href=""><i class="fa-solid fa-user" title="Usuário"></i><span>Usuário</span></a></li>
                        <li><a class="target-edit-field" target="2" href=""><i class="fa-solid fa-key" title="Alterar senha"></i><span>Alterar senha</span></a></li>
                        <li><a class="target-edit-field" target="3" href=""><i class="fa-solid fa-heart" title="favoritos"></i><span>Favoritos</span></a></li>
                        <li><a class="target-edit-field" target="4" href=""><i class="fa-solid fa-code" title="Interesses"></i><span>Interesses</span></a></li>
                    </ul>
                </div>
                <!-- Menu -->

                <div class="admin-container">

                    <div class="edit-field" data-target="1">
                        <!-- Titulo -->
                        <div class="edit-field-title">
                            <h2>Editar Configurações de Usuário</h2>
                        </div>
                        <!-- Titulo -->

                        <div class="edit-field-user">
                            <div class="edit-user-picture">
                                <img src="../source/codeguide.png">
                                <span class="open-model">
                                    <i class="fa-solid fa-image"></i>
                                    <p><kbd>Escolha uma foto</kbd></p>
                                </span>
                            </div>
                            <!-- Upload de foto -->
                            <div class="model-container">
                                <div class="model">
                                    <div>
                                        <h2>Alterar Foto de perfil</h2>
                                        <div class="upload">
                                            <div class="img-preview">
                                                <img src="../source/codeguide.png" id="choosen-img" form="send-picture" class="choosen-img" alt="Preview">
                                                <span id="file-name" form="send-picture" class="file-name">Nome do Arquivo</span>
                                            </div>
                                            <div class="upload-button-container">
                                                <form method='post' id="send-picture" enctype="multipart/form-data">
                                                    <input type="file" 
                                                    name="userpicture" 
                                                    id="upload-button" 
                                                    class="upload-button" 
                                                    form="send-picture"
                                                    accept="image/*">
                                                    <label for="upload-button"><i class="fa-solid fa-image"></i> Escolha uma foto</label>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button form="send-picture">Ok</button>
                                        <button class="close-model">Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button close-model"></i>
                                </div>
                            </div>
                            <!-- Upload de foto -->

                            <div class="edit-username">
                                <p>Nome de usuário:</p>
                                <div class="edit-username-form">
                                    <form action="" name="verificar" id="mudar-username">
                                        <input type="text" name="username" class="default-input" id="username" required>
                                        <input type="submit" id="verificar-username" class="btn-1" value="Verificar">
                                    </form>
                                </div>

                                <div id="save-form-container"></div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="2">
                    <div class="edit-field-title"><h2>Alterar Senha</h2></div>
                        <div class="edit-field-user">
                            <div class="edit-username edit-pass">
                                <div class="edit-password-form">
                                    <form action="" name="alterar-senha" id="alterar-senha">
                                        <label for="nova-senha">Nova senha:</label>
                                        <input type="text" name="nova-senha" class="default-input" required>
                                        <label for="confirmar-senha">Confirmar senha:</label>
                                        <input type="text" name="confirmar-senha" class="default-input" required>
                                        <input type="submit" class="btn-1" value="Enviar">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="3">
                        <div class="edit-field-title"><h2>Favoritos</h2></div>
                        <!-- Campo de favoritos -->
                        <div class="edit-field-fav">
                        </div>
                        </div>
                        <!-- campo de favoritos -->
                    <div class="edit-field" data-target="4">
                        <!-- Titulo -->
                        <div class="edit-field-title">
                            <h2>Seus interesses</h2>
                        </div>
                        <!-- Titulo -->

                        <div class="edit-field-user">
                        <div class="info-stacks"> 
                            <div class="info-stacks-icon">
                            </div>
                            <div class="model-container">
                                <div class="model">
                                    <div>
                                        <h2>Adicione um novo interesse!</h2>
                                        <div class="search-stack-container">
                                            <input list="stacks" id="search-stack">
                                                <datalist id="stacks">
                                                </datalist> 
                                        </div>
                                    </div>
                                    <div>
                                        <div class="search-stack-icon">
                                        </div>
                                    </div>
                                    <div>
                                        <button data-function="send-interest">Ok</button>
                                        <button class="close-model">Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button close-model"></i>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </div>
            </div> <!-- container -->
            
        </section> <!-- admin-panel -->
        
</main>

<section class="search-result-container">
    <?php include '../components/slider.php'; ?>
</section>
    
<?php include '../components/footer.php'; ?>

    
</body>

</html>