<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админ панель</title>
    <link type="image/png" sizes="32x32" rel="icon" href="./pictures/logo_book.png">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php
        include "menu.php";
    /*
    Создать форму для работы с товарами 

    Представлен массив со всеми данными 
    Админ может менять данные и отправлять изменные данные на сервер.
    */
    ?>
    <section class="forms"></section>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script type="module" src="./js/admin.js"></script>
</body>
</html>