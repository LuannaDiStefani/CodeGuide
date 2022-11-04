<header>
        <div class="container">

            <div class="hd-left">
                <div id="cg-logo">
                    <a href="http://localhost/codeguide/public/index.php"><div class="logo-img">
                    </div></a>
                </div>
            </div>

            <div class="container-menu">
                <button id="menu-dropdown">
                    Categorias
                </button>
                <div id="wrapper-menu">
                    <nav id="menu">
                            <ul>
                                <h4>FrontEnd</h4>
                                <li><a href="">HTML</a></li>
                                <li><a href="">CSS</a></li>
                                <li><a href="">SASS</a></li>
                                <li><a href="">Bootstrap</a></li>
                                <li><a href="">JavaScript</a></li>
                            </ul>
                            <ul>
                                <h4>BackEnd</h4>
                                <li><a href="">PHP</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="">C#</a></li>
                                <li><a href="">Assembly</a></li>
                                <li><a href="">C++</a></li>
                            </ul>
                            <ul>
                                <h4>FullStack</h4>
                                <li><a href="">JavaScript</a></li>
                                <li><a href="">Python</a></li>
                                <li><a href="">Node.JS</a></li>
                                <li><a href="">Git</a></li>
                            </ul>
                            <ul>
                                <h4>FrameWorks</h4>
                                <li><a href="">React</a></li>
                                <li><a href="">Angular</a></li>
                                <li><a href="">Vue</a></li>
                            </ul>
                    </nav> <!-- fim do menu -->
                </div>

            </div>


            <div class="hd-right">
                <div class="search-bar">
                        <input type="text" class="search-box" id="search-box" placeholder="Vamos dominar o mundo!">
                        <label for="search-box" class="searchLabel toggleSearch"><i class="fa fa-search"></i></label>
                </div>
                <div id="profile">
                    <i class="fa-regular fa-user"></i>
                    <div class="user-options">
                        <ul>
                            <li><a href="http://localhost/codeguide/public/login/">Login</a></li>
                            <li><a href="http://localhost/codeguide/public/cadastro/">Cadastro</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                </div>
            </div>
            
        </div>

</header>

    <div class="container-mobile">
        <nav class="menu-mobile">
            <div class="home-mobile">
                <a href="" class="menu-mobile-button">
                    <i class="fa-solid fa-house"></i>
                    Home
                </a>
            </div>
            <div class="search-mobile">
                <a href="" id="mobile-search" class="toggleSearch menu-mobile-button mobile-search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    Search
                </a>
            </div>
            <div class="profile-mobile">
                <a href="" class="menu-mobile-button">
                    <i class="fa-solid fa-user-group"></i>
                    Profile
                </a>
            </div>
            <div class="menu-hamburguer">
                <a href="" class="menu-mobile-button category-button">
                    <i class="fa-solid fa-bars"></i>
                    Menu
                </a>

            </div>
        </nav>

        <div class="mobile-category">
            <nav>
                <h4 menu-trigger>FrontEnd</h4>
                <ul menu-target="frontend">
                <li><a href="">HTML</a></li>
                <li><a href="">CSS</a></li>
                <li><a href="">SASS</a></li>
                <li><a href="">Bootstrap</a></li>
                <li><a href="">JavaScript</a></li>
                </ul>
                <h4 menu-trigger>BackEnd</h4>
                <ul menu-target="backend">
                <li><a href="">PHP</a></li>
                <li><a href="">Java</a></li>
                <li><a href="">C#</a></li>
                <li><a href="">Assembly</a></li>
                <li><a href="">C++</a></li>
                </ul>
                <h4 menu-trigger>FullStack</h4>
                <ul menu-target="fullstack">
                <li><a href="">JavaScript</a></li>
                <li><a href="">Python</a></li>
                <li><a href="">Node.JS</a></li>
                <li><a href="">Git</a></li>
                </ul>
                <h4 menu-trigger>FrameWorks</h4>
                <ul menu-target="frameworks">
                <li><a href="">React</a></li>
                <li><a href="">Angular</a></li>
                <li><a href="">Vue</a></li>
                </ul>
            </nav>
        </div>
    </div>