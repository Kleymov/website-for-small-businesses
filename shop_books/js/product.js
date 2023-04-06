window.onload = function() {
    const data = new XMLHttpRequest();

    data.open('POST', './server.php');
    data.send();

    data.onload = function() {
        const dataR = JSON.parse(data.response);
        
        const prodId = JSON.parse(localStorage.getItem('productId'));
        
        for(let i = 0; i < dataR.length; i++) {
            if(dataR[i].id == prodId.id) {
                var prod = dataR[i];
                break;
            }
        }

        
        const pic = document.getElementsByClassName('pictures')[0];
        const theFirstChild = pic.firstChild;
        const image = document.createElement("img");

        image.setAttribute('class', 'prod-image');
        image.setAttribute('src', prod.image);

        pic.insertBefore(image, theFirstChild);

        const desc = document.getElementById('desc');
        desc.append(prod.description);

        const prop = document.getElementById('prop');
        let p = document.createElement('p');
        p.append("Количество страниц: "+prod.pages);
        prop.append(p);

        const price = document.getElementById('price');
        price.append(prod.price);
    }
}