function clearObject(obj, elem) {
    delete obj[elem.parentElement.getAttribute('data-product-id')];
}

function getObjectById(obj, id){
    let keys = Object.keys(obj);
    let newObj = {}

    for(let i = 0; i < keys.length; i++){
        if(Number(keys[i]) == id) {
            newObj[Number(keys[i])] = obj[Number(keys[i])];
            return newObj;
        }
    }
}

export {clearObject};
export {getObjectById};