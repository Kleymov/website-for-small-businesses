let enterButton = document.getElementsByClassName('enter');
// enterButton[0].preventDefault();
console.log(enterButton.length)
if(enterButton.length != 0){
    enterButton[0].addEventListener('click', function(event) {
        event.preventDefault();
    
        var login = document.getElementsByClassName('data')[0];
        var password = document.getElementsByClassName('data')[1];
    
        // var data = JSON.stringify(login.value);
        var request = new XMLHttpRequest();
    
        let formData = {
            "login": login.value, 
            "password": password.value
        }
    
        request.open('POST', './autorization.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send('data='+JSON.stringify(formData));
    });
}

let exitButton = document.getElementById('exit');

console.log(exitButton);
if(exitButton != null) {
    exitButton.addEventListener('click', function(event) {
        event.preventDefault();
    
        // var data = JSON.stringify(login.value);
        var request = new XMLHttpRequest();
    
        let session = false;
    
        request.open('POST', './autorization.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send('session='+JSON.stringify(session));
    });
}



