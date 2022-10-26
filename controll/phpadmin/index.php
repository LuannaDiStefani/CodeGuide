<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Perfil - Code Guide</title>
    <link rel="stylesheet" href="../../public/css/general.css">
    <link rel="stylesheet" href="./css/style.css">
    <!-- JQuery -->
    <script src="../../public/js/jquery-3.6.1.min.js"></script>
</head>

<body>

<?php include '../../public/components/header.php'; ?>

    <main>
        <section class="admin-panel">
            <div class="container">
                <div class="admin-menu">
                    <h3>Menu</h3>
                    <ul>
                        <li><a class="target-edit-field" target="1" href=""><i class="fa-solid fa-cloud-arrow-up"
                                    title="Cadastro"></i><span>Cadastro</span></a></li>
                        <li><a class="target-edit-field" target="2" href=""><i class="fa-solid fa-user"
                                    title="Usuários"></i><span>Linguagens</span></a></li>
                        <li><a class="target-edit-field" target="3" href=""><i class="fa-solid fa-sliders"
                                    title="Configurações"></i><span>Configurações</span></a></li>
                        <li><a class="target-edit-field" target="4" href=""><i class="fa-solid fa-comments"
                                    title="Comentários"></i><span>Comentários</span></a></li>
                    </ul>
                </div>
                <div class="admin-container">
                    <div class="edit-field" data-target="1">
                        <div class="edit-field-title">
                            <h2>Página de Cadastro de Cursos</h2>
                        </div>
                        <div class="edit-field-user">
                            <div class="form-course">
                                <form action="" method="post" id="cad-curso" enctype="multipart/form-data">
                                    <div>
                                        <label for="nomecurso">Nome do Curso</label>
                                        <input type="text" class="input-course" name="nomecurso">
                                    </div>
                                    <div>
                                        <label for="descricao">Descrição</label>
                                        <textarea name="descri" id="" cols="100" rows="3"></textarea>
                                    </div>
                                    <div>
                                        <label for="linguagem">Linguagem</label>
                                        <input list="linguagens" class="options" name="idlinguagem" autocomplete="off">
                                        <datalist id="linguagens">
                                        </datalist>
                                    </div>
                                    <div class="pago">
                                        <input type="radio" name="pago" value="pago">
                                        <label for="pago">Pago</label><br>
                                        <input type="radio" name="pago" value="gratis">
                                        <label for="gratuito">Gratuito</label><br>
                                    </div>
                                    <div>
                                        <label for="plataforma">Plataforma</label>
                                        <input type="text" name="plataforma" class="input-course">
                                    </div>
                                    <div>
                                        <label for="linkcurso">Link</label>
                                        <input type="text" name="linkcurso" class="input-course">
                                    </div>
                                    <div>
                                        <label for="videocurso">Video</label>
                                        <input type="text" name="videocurso" class="input-course">
                                    </div>
                                    <div class="upload upload-curso">
                                        <div class="img-preview">
                                            <img src="../../source/no-preview.jpg" id="choosen-img" class="choosen-img"
                                                alt="Preview">
                                            <span id="file-name" class="file-name">Nome do Arquivo</span>
                                        </div>
                                         <div class="upload-button-container">
                                            <input type="file" name="imgcurso" id="upload-button" form="cad-curso" class="upload-button"
                                                accept="image/*">
                                            <label for="upload-button"><i class="fa-solid fa-image"></i> Escolha uma
                                                foto</label>
                                        </div> 
                                    </div>

                                    <div class="edit-field-submit">
                                        <button class="btn-1" form="cad-curso">Enviar</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="2">
                        <div class="edit-field-title">
                            <h2>Página de Cadastro de Linguagem</h2>
                        </div>
                        <div class="edit-field-user">
                            <div class="form-course">
                                <form action="" method="post" id="cad-linguagem" enctype="multipart/form-data">
                                    <div>
                                        <label for="nomelinguagem">Nome da linguagem</label>
                                        <input type="text" class="input-course" name="nomelinguagem" autocomplete="off">
                                    </div>
                                    <div class="upload-linguagem">
                                        <div class="img-preview">
                                            <img src="../../source/no-preview.jpg" id="chossen-linguagem" class="choosen-img"
                                                alt="Preview">
                                            <span id="filename-linguagem" class="file-name">Nome do Arquivo</span>
                                        </div>
                                        <div class="upload-button-container">
                                            <input type="file" name="imglinguagem" id="upload-linguagem" class="upload-button"
                                                accept="image/*">
                                            <label for="upload-linguagem"><i class="fa-solid fa-image"></i> Escolha uma
                                                foto</label>
                                        </div>
                                    </div>
                                    <div class="edit-field-submit">
                                        <button class="btn-1" form="cad-linguagem">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="edit-field" data-target="3">
                        <div class="edit-field-title">
                            <h2>Em construção</h2>
                        </div>
                        <div class="edit-field-user">
                            ...
                        </div>
                    </div>
                    <div class="edit-field" data-target="4">
                        <div class="edit-field-title">
                            <h2>Em construção</h2>
                        </div>
                        <div class="edit-field-user">
                            ...
                        </div>
                    </div>
                    
                </div>
            </div> <!-- container -->
        </section>
    </main>

    <?php include'../../public/components/footer.php' ?>

    <!-- Main-JS -->
    <script src="../../public/js/main.js"></script>
    <script src="./js/insert.js"></script>

    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>

</body>

</html>