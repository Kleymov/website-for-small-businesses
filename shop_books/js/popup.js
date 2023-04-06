// Закрытие popup
$('#popup-close').click(function() {
    $('.popup-back').css('display', 'none');
    $('html').css('overflow-y', '');
});
$('#show-popup').click(function() {
    $('html').css('overflow-y', 'hidden');
    $('.popup-back').css('display', 'flex');
});

$('#enter').click(function(event) {
    event.preventDefault();

    let form = $('#autorization-form');
    let autorizationData = {
        'login': form.find('input[type="login"]').val(),
        'password': form.find('input[type="password"').val(),
    }

    $.ajax({
        url: '../php/autorization.php',
        method: 'post',
        headers: {'data':JSON.stringify(autorizationData)},
        success: function(response) {
            console.log(response)
        }
    });
})
