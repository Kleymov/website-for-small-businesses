<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Корзина</title>
    <link type="image/png" sizes="32x32" rel="icon" href="../pictures/logo_book.png">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/generalstyle.css">
    <link rel="stylesheet" href="../css/cart.css">
</head>
<body>
    <section class="menu">
        <ul class="menu-elements">
            <li><a href="../php/core.php"><img src="../pictures/logo_book.png" alt="" id="logo"></a></li>  
            <li>
                <div class="button-link" id="cart-link">
                    <img src="../pictures/cart.png" id="cart-logo">
                    <div>
                        <a href="../cart.html">Корзина</a>
                    </div>
                </div>    
            </li>
            <li>
            </li>
        </ul>
    </section>
    <section class="cart">
        <ul class="products"></ul>
    </section>
    <section class="result">
        <div>
            <h1>Ваша корзина</h1>
            <hr>
            <p>Количество товаров: <span id="quantity"></span></p>
            <p>Цена: <span id="price"></span></p>
            <button>Купить</button>
        </div>
    </section>
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script type="module" src="../js/cart.js"></script>
    <script src="../js/localCart.js"></script>
</body>
</html>