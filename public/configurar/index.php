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
                    <div class="edit-field target1">
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
                                        <button>Cancel</button>
                                    </div>
                                    <i class="fa-solid fa-xmark close-button"></i>
                                </div>
                            </div>
                            <div class="edit-username">
                                <p>Nome de usuário:</p>
                                <div class="edit-username-form">
                                    <input type="text" name="change-username" id="change-username">
                                    <input type="submit" id="verify-username" class="btn-1" value="Verificar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field target2">
                        <div class="edit-field-data">
                            <div class="teste">
                                1234
                            </div>
                        </div>
                    </div>
                    <div class="edit-field target3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui esse nostrum accusantium aliquid totam tempora ut quod earum recusandae fugit quasi et voluptatum neque, dolorum natus a quis itaque? Veniam?

                    </div>

                    <div class="edit-field-submit">
                        <button class="btn-1">Salvar</button>
                        <button class="btn-1">Cancelar</button>

                    </div>
                </div>
            </div> <!-- container -->
        </section>
    </main>

    <?php include '../components/footer.php'; ?>

    <!-- Main-JS -->
    <script src="../js/main.js"></script>

    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>
    
</body>

</html>