import { buildingAssortment } from "./buildassortment.js";

$('.button-basket').click(function(){
    console.log(1)
})

window.onload = function() {
    $.ajax({
        data: 'getdata',
        url: '../php/server.php',
        method: 'get',
        success: function(response) {
            buildingAssortment(response);
        }
    });
}




