<? 

include_once "conn.php";

$data = [
    'nomecurso' => $_POST['nomecurso'], 
    'descri' => $_POST['descri'], 
    'linguagem' => $_POST['linguagem'], 
    'pago' => $_POST['pago'], 
    'plataforma' => $_POST['plataforma'], 
    'linkcurso' => $_POST['linkcurso'], 
    'videocurso'=> $_POST['videocurso'],
];

$cadastrarCurso = "INSERT INTO cursos (nomecurso, descri, pago, link, imgcurso, videocurso, idlinguagem) values (:nomecurso, :descri, :pago, :link, :imgcurso, :videocurso, :linguagem);

?>