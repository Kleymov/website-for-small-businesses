function createIkon(id, productName, pClass,  buttonClass, buttonText, linkImage, slot) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    let title = '"'+productName+'"';
    let p = document.createElement('p');
    let aImg = document.createElement('a');

    button.setAttribute('class', buttonClass);
    button.append(text);

    p.setAttribute('class', pClass);

    li.className = 'product';
    li.setAttribute('id', id);

    img.setAttribute('src', linkImage);
    // aImg.setAttribute('href', "../product.html/");
    aImg.append(img);
    aImg.append(p);

    slot.append(li);
    li.append(aImg);
    p.append(title)
    li.append(button);
}
export {createIkon};