import { Cart } from './modules.js';
import { createIkon } from '../js/functions.js';

function buildingAssortment(dataAboutProducts) {
    let dataResp = JSON.parse(dataAboutProducts);

    localStorage.setItem('storage', JSON.stringify(dataResp));

    let dataCart = JSON.parse(localStorage.getItem('cart'));
    let cart = new Cart(dataResp, dataCart);
    let dataKeys = Object.keys(dataResp);
    

    for(let i = 0; i < dataKeys.length; i++) {
        const products = document.getElementsByClassName('products')[0];
    
        createIkon([dataKeys[i]][0], dataResp[dataKeys[i]].name, 'product-name' ,'button-basket add', 'В корзину', dataResp[dataKeys[i]].image, products);
    }

    let buttons = document.getElementsByClassName('button-basket');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() { // слушатель событий, для добавления товара в корзину
            // cart.addToBasket(buttons[i].parentNode.getAttribute('id'));
            let dataCart = JSON.parse(localStorage.getItem('cart'));
            if(dataCart == null){
                dataCart = {};
            }
            dataCart[buttons[i].parentNode.getAttribute('id')] = 1;
            localStorage.setItem('cart', JSON.stringify(dataCart));
            
            // dataCart.setItem(buttons[i].parentNode.getAttribute('id'), JSON.stringify(1));;

        });
    }

    const productli = document.getElementsByClassName('product');
    for(let i = 0; i < productli.length; i++) {
        productli[i].addEventListener('click', function() {
            localStorage.removeItem('productId');
            localStorage.setItem('productId', JSON.stringify({'id': Number(productli[i].getAttribute('id'))}));
        });
    }
}
export {buildingAssortment}