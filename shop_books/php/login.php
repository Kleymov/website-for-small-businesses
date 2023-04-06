<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход в систему</title>
    <link type="image/png" sizes="32x32" rel="icon" href="./pictures/logo_book.png">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php
        include "menu.php"; 
        if(session_status() == 2 && !$_SESSION){
            ?>
            <form class="authorization">
                <input type="text" placeholder="Логин" class="data" name="login">
                <input type="password" placeholder="Пароль" class="data" name="password">
                <button class="enter">Войти</button>
            </form><?php
        }
        print_r($_SESSION);
    ?>
    <script src="./js/autorization.js"></script>
</body>
</html>