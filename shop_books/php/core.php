<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Желтые страницы</title>
    <link type="image/png" sizes="32x32" rel="icon" href="../pictures/logo_book.png">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/generalstyle.css">
</head>
<body>
    <?php
        include('menu.php');
        include('autorizationpopup.php');
    ?>
    <section class="catalog">
        <ul class="products"></ul>
    </section>
    <footer>
        <p>© 2022 Book-Shop</p>
    </footer>
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script type="module" src="../js/script.js"></script>
    <script type="module" src="../js/popup.js"></script>
</body>
</html>