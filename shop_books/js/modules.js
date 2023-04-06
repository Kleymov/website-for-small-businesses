class Cart {
    constructor(data, cart) {
        this.data = data;
        this.cart = cart;
    }
    addToBasket(id) {
        for(let elem in this.cart) {
            if(this.cart[elem].id == id) {
                console.log("Товар уже добавлен");
                return;
            }
        }

        for(let val in this.data) {
            if(this.data[val].id == id) {
                this.cart.push(this.data[val]);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        }
    }
    deleteFromBasket(id) {
        let tmpCart = [];
        for(let val in this.cart) {
            if(this.cart[val].id != id) {
                tmpCart.push(this.cart[val]);
            }
        }

        this.cart = tmpCart;
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    showQuantity() {
        return this.cart;
    }
    price() {
        let result = 0;
        for(let val in this.cart) {
            result += this.cart[val].price;
        }
        return result;
    }
    showBasket() {
        console.log(this.cart, this.data)
    }
}

export { Cart };