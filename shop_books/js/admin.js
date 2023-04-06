import {clearObject, getObjectById} from './adminsfunc.js';
// import {getObjectById} from './adminsfunc.js';

window.onload = function(){
    
    let lStorage = JSON.parse(localStorage.getItem('storage'));
    let storageKeys = Object.keys(lStorage);
    let sForms = document.getElementsByClassName('forms');

    // Объект с измененными данными
    let changeData = {};
    

    // Создание формы
    for(let i = 0; i < storageKeys.length; i++) {
        let form = document.createElement('form');
        let keys = Object.keys(lStorage[storageKeys[i]]);
        

        for(let j = 0; j < keys.length; j++){
            let input = document.createElement('input');
            input.setAttribute('class', 'product-data');
            input.setAttribute('value', lStorage[storageKeys[i]][keys[j]]);
            input.setAttribute('data-name', [keys[j]]);

            if(input.getAttribute('data-name') == 'image'){
                input.setAttribute('type', 'file');
            }

            // Прикрепил слушатель событий к input
            input.addEventListener('change', function() {
                // Если изменяется id, то в массив changeData изменение попадать не должно
                
                if(changeData[this.parentElement.getAttribute('data-product-id')]){
                    changeData[this.parentElement.getAttribute('data-product-id')][this.getAttribute('data-name')] = this.value;
                }else{
                    /*
                    {
                        id:{
                            name: 'Название книги',
                            pages: Количество страниц
                        }
                    }
                    */
                    changeData[this.parentElement.getAttribute('data-product-id')] = {};
                    changeData[this.parentElement.getAttribute('data-product-id')][this.getAttribute('data-name')] = this.value;
                }
                console.log(changeData);

                if(this.getAttribute('data-name') == 'image'){
                    // let dataRequest = new XMLHttpRequest();
                    let formData = new FormData();
                    formData.append('file', this.files[0]);
                    // console.log(this.files, formData.get('file'));

                    

                    // dataRequest.open('POST', './server.php');
                    // dataRequest.setRequestHeader('Content-type', 'image/png');
                    // dataRequest.setRequestHeader("Content-type", "text/html; charset=utf-8");
                    // dataRequest.send(formData);

                    $.ajax({
                        url: './server.php',
                        data: formData,
                        type: 'POST',
                        contentType: false, 
                        processData: false,
                        // success : function(data){
                        //     alert(data); 
                        // }
                    });
                }
            });

            form.setAttribute('data-product-id', storageKeys[i]);
            form.append(input);
        }
        let saveButton = document.createElement('button');
        let resetButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        saveButton.setAttribute('class', 'save-data');
        resetButton.setAttribute('class', 'reset-data');
        deleteButton.setAttribute('class', 'delete-data');

        saveButton.append('Сохранить');
        resetButton.append('Сбросить');
        deleteButton.append('Удалить');

        form.append(saveButton, resetButton, deleteButton);    

        sForms[0].append(form);
    }


    /*
    function output(){
        test = sForms[0].children;
    }
    
    setTimeout(output(), 5000);
    */

    // кнопка "Сброс"
    let resetButton = document.getElementsByClassName('reset-data'); 
    for(let i = 0; i < resetButton.length; i++){
        resetButton[i].addEventListener('click', function(event) {
            event.preventDefault();
            // console.log(this.parentNode.getElementsByClassName('product-data'));
            let inputs = this.parentNode.getElementsByClassName('product-data');
            for(let j = 0; j < inputs.length; j++) {
                inputs[j].value = inputs[j].getAttribute('value');
            }
        });
    }

    // Кнопка "Сохранить"
    let saveButton = document.getElementsByClassName('save-data'); 
    for(let i = 0; i < saveButton.length; i++){
        saveButton[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            // Если обеъект пустой, то выполняется выход из функции
            if(JSON.stringify(changeData) === '{}'){
                return 0;
            }else{
                //  Запрос для отправки новых(обновленных) данных на сервер 
                let dataRequest = new XMLHttpRequest();

                dataRequest.open('POST', './server.php');
                dataRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                dataRequest.send("newData="+JSON.stringify(getObjectById(changeData, Number([this.parentElement.getAttribute('data-product-id')]))));

                dataRequest.onload = clearObject(changeData, this);
            }
        });
    }

    // Кнопка "Удалить"
    let deleteButton = document.getElementsByClassName('delete-data'); 
    for(let i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', function(event) {
            event.preventDefault();

            // Запрос удаления данных об определенном товаре
            let dataRequest = new XMLHttpRequest();

            dataRequest.open('POST', './server.php');
            dataRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            dataRequest.send("deleteData="+JSON.stringify(this.parentElement.getAttribute('data-product-id')));
        });
    }
}


