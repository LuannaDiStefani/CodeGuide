<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../../../public/js/jquery-3.6.1.min.js"></script>
</head>
<body>
    <form action="" id="form" method="post">
        <input type="text" name="dado" id="pesquisa">
        <input type="submit" value="Enviar">
    </form>
    
    <script>
        $(form).submit(function(e){
            e.preventDefault();
            let info = $('#pesquisa').val();
            console.log(info);
            doAjax(info);
        

        })

        function doAjax(dado) {
        let dados = JSON.stringify(dado);
            return $.ajax({
            async: false,
            url: './consultabanco.php',
            method: "POST",
            data: dados,
            }).done((data) =>{
                console.log(data);
            });
    }

    </script>
</body>
</html>

