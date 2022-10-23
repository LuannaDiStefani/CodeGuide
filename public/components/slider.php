<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/model.css">
    <link rel="stylesheet" href="../css/slider.css">
    <!-- Font-awesome -->
    <script src="https://kit.fontawesome.com/0d7e1ce445.js" crossorigin="anonymous"></script>
    <!-- JQuery -->
    <script src="../js/jquery-3.6.1.min.js"></script>
    <script type="module" src="../../controll/phpadmin/js/busca2.js" defer></script>
    <!-- <script src="../js/main.js"></script>  -->

</head>
<body>
    <template id="highlight">
        <section class="highlight" style="display: none;">
            <div class="course-title"><h2 data-highlight="nome-curso"></h2></div>
            <div class="container">
                <div class="close-highlight">
                    <i class="fa-solid fa-xmark close-highlight-button"></i>
                </div>
                <div class="course-preview">
                    <div data-highlight="preview-curso" class="course-preview-video">
                    </div>
                    
                    <div class="course-preview-button">
                        <a href="#">Assistir Agora</a>
                    </div>
                </div>

                <div class="course-info">
                    
                    <div class="course-description">
                        <p data-highlight="descri-curso">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel sapiente eveniet illum minima porro veniam maiores adipisci voluptatibus non aliquid commodi repudiandae voluptate, ad quisquam in rerum quibusdam culpa. 
                            Quisquam fuga saepe aliquid? Eligendi quibusdam eius velit possimus tempora blanditiis obcaecati placeat ipsum vel tempore illo maiores sunt. 
                        </p>
                    <div class="course-data">
                        <p>Pago: <span data-highlight="info-curso"></span></p>
                    </div>
                
                    </div>
                

                    <div class="course-rate">
                        <div class="comment-icon open-model">
                            <i class="fa-regular fa-message course-comment-icon"></i>
                        </div>
                        <div class="rate-icon">
                            <i class="fa-regular fa-thumbs-up"></i>
                            <i class="fa-regular fa-thumbs-down"></i>
                        </div>
                    </div>
                    <div class="model-container">
                        <div class="model">
                            <div>
                                <h2>Visualizar Comentários</h2>
                                <div class="profile-comments">
                                        <div class="comment-block">
                                            <div class="comment-block-autor">Anônimo</div>
                                            <blockquote>
                                                How can I keep the audience engaged with this article on quotations? Grammar and a charming personality will only go so far.
                                            </blockquote>
                                        </div>
                                        <div class="comment-block">
                                            <div class="comment-block-autor">Anônimo</div>
                                            <blockquote>
                                                How can I keep the audience engaged with this article on quotations? Grammar and a charming personality will only go so far.
                                            </blockquote>
                                        </div>
                                        <div class="comment-block">
                                            <div class="comment-block-autor">Anônimo</div>
                                            <blockquote>
                                                How can I keep the audience engaged with this article on quotations? Grammar and a charming personality will only go so far.
                                            </blockquote>
                                        </div>
                                        <div class="comment-block">
                                            <div class="comment-block-autor">Anônimo</div>
                                            <blockquote>
                                                How can I keep the audience engaged with this article on quotations? Grammar and a charming personality will only go so far.
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptatum, est quas a eos veniam error harum repudiandae porro doloremque, asperiores totam rerum atque enim debitis aliquam modi, labore fugit?
                                            </blockquote>
                                        </div>
                                        <div class="comment-block">
                                            <div class="comment-block-autor">Anônimo</div>
                                            <blockquote>
                                                How can I keep the audience engaged with this article on quotations? Grammar and a charming personality will only go so far.
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sit at modi neque non eligendi, temporibus pariatur incidunt nostrum autem esse ex, in blanditiis eum quo fugiat voluptas eos nisi!
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur assumenda ducimus facere, dolor quibusdam itaque ipsa saepe, reprehenderit impedit repellendus voluptates consectetur repellat. Aliquid, eos similique? Quam, dolor sint!
                                            </blockquote>
                                        </div> 
                                </div>
                            <i class="fa-solid fa-xmark close-button"></i>
                        </div>
                    </div>
                
            </div>
        </section>
    </template>

    <div id="slider-container">
    </div>

     <template id="slider-row">
        <div class="row">
            <div class="slider-title">
                <h3></h3>
            </div>

            <div class="container">
                <button class="handle left-handle"><div class="arrow">&#8249;</div></button>
                <div class="slider">
                </div>
                <button class="handle right-handle"><div class="arrow">&#8250;</div></button>
            </div>

        </div>
     </template> 

</body>
</html>
