import {Cart} from './modules.js';
import {createIkon} from '../js/functions.js';



function getTotalPriceAndQuantity(){
    let dataCart = JSON.parse(localStorage.getItem('cart'));
    let dataResp = JSON.parse(localStorage.getItem('storage'));
    let quantityHTML = document.getElementById('quantity');
    let priceHTML = document.getElementById('price');
    let totalPrice = 0;

    
    for(let i=0; i<Object.keys(dataCart).length; i++){
        totalPrice += dataResp[Object.keys(dataCart)[i]].price;
    }

    quantityHTML.innerHTML = Object.keys(dataCart).length;
    priceHTML.innerHTML = totalPrice;
}


window.onload = function() {
    let dataResp = JSON.parse(localStorage.getItem('storage'));
    let dataCart = JSON.parse(localStorage.getItem('cart'));
    let cart = new Cart(dataResp, dataCart);
    for(let i = 0; i < Object.keys(dataCart).length; i++) {

        const cartDOM = document.getElementsByClassName('products')[0];
        createIkon(Object.keys(dataCart)[i], dataResp[Object.keys(dataCart)[i]].name, 'product-name', 'button-basket del', 'Удалить из корзины', dataResp[Object.keys(dataCart)[i]].image, cartDOM);
    }

    const cartDel = document.querySelectorAll('.button-basket');
    for(let i = 0; i < cartDel.length; i++) {
        cartDel[i].addEventListener('click', function() {
            let dataCart = JSON.parse(localStorage.getItem('cart'));
            delete dataCart[cartDel[i].parentElement.getAttribute('id')];
            localStorage.setItem('cart', JSON.stringify(dataCart));
            location.reload();            
        });
    }

    const productli = document.getElementsByClassName('product');
    for(let i = 0; i < productli.length; i++) {
        productli[i].addEventListener('click', function() {
            localStorage.removeItem('productId');
            localStorage.setItem('productId', JSON.stringify({'id': Number(productli[i].getAttribute('id'))}));
        });
    }
    getTotalPriceAndQuantity();
}


