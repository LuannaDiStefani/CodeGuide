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
                <div class="admin-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a class="target-edit-field" target="1" href=""><i class="fa-solid fa-user" title="Usuário"></i><span>Usuário</span></a></li>
                        <li><a class="target-edit-field" target="2" href=""><i class="fa-solid fa-key" title="Alterar senha"></i><span>Alterar senha</span></a></li>
                        <li><a class="target-edit-field" target="3" href=""><i class="fa-solid fa-sliders" title="Alterar dados"></i><span>Alterar dados</span></a></li>
                        <li><a class="target-edit-field" target="1" href=""><i class="fa-solid fa-comments" title="Comentários"></i><span>Comentários</span></a></li>
                    </ul>
                </div>
                <div class="admin-container">
                    <div class="edit-field" data-target="1">
                        <div class="edit-field-title"><h2>Editar Configurações de Usuário</h2></div>
                        <div class="edit-field-user">
                            <div class="edit-user-picture">
                                <img src="../../source/alberto.png">
                                <span class="open-model">
                                    <i class="fa-solid fa-image"></i>
                                    <p><kbd>Escolha uma foto</kbd></p>
                                </span>
                            </div>
                            <div class="model-container">
                                <div class="model">
                                    <div>
                                        <h2>Alterar Foto de perfil</h2>
                                        <div class="upload">
                                            <div class="img-preview">
                                                <img src="../../source/alberto.png" id="choosen-img" class="choosen-img" alt="Preview">
                                                <span id="file-name" class="file-name">Nome do Arquivo</span>
                                            </div>
                                            <div class="upload-button-container">
                                                <input type="file" name="imgcurso" id="upload-button" class="upload-button" accept="image/*">
                                                <label for="upload-button"><i class="fa-solid fa-image"></i> Escolha uma foto</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button>Ok</button>
                                        <button class="close-model">Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button close-model"></i>
                                </div>
                            </div>
                            <div class="edit-username">
                                <p>Nome de usuário:</p>
                                <div class="edit-username-form">
                                    <form action="" name="verificar" id="mudar-username">
                                        <input type="text" name="username" class="default-input" id="username" required>
                                        <input type="submit" id="verificar-username" class="btn-1" value="Verificar">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="2">
                    <div class="edit-field-title"><h2>Alterar Senha</h2></div>
                        <div class="edit-field-user">
                            <div class="edit-username edit-pass">
                                <div class="edit-password-form">
                                    <form action="" name="alterar-senha" id="alterar-senha">
                                        <label for="senha-antiga">Senha antiga:</label>
                                        <input type="text" name="senha-antiga" class="default-input" id="senha-antiga" required>
                                        <label for="nova-senha">Nova senha:</label>
                                        <input type="text" name="nova-senha" class="default-input" required>
                                        <label for="confirmar-senha">Confirmar senha:</label>
                                        <input type="text" name="confirmar-senha" class="default-input" required>
                                        <input type="submit" id="alterar-senha" class="btn-1" value="Verificar">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="3">
                    <div class="edit-field-title"><h2>Em Construção</h2></div>
                        <div class="edit-field-user">
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
                                        <button>Ok</button>
                                        <button class="close-model">Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button close-model"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="save-form-container" class="edit-field-submit">
                    </div>
                </div>
            </div> <!-- container -->
        </section>
        
</main>

<section class="search-result-container">
    <?php include '../components/slider.php'; ?>
</section>
    
<?php include '../components/footer.php'; ?>

    
</body>

</html>