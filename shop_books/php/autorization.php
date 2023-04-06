<?php
    session_start();
    if(isset($_POST['session'])){
        $session = json_decode($_POST['session'], true);
        $_SESSION['admin'] = false;
    }

    //Данные пользователей 
    $admin = array(
        array(
            'login' => 'Artyom1',
            'password' => '123', 
            'role' => 'admin'
        ), 
        array(
            'login' => 'Artyom2',
            'password' => '123', 
            'role' => 'manager'
        ),
        array(
            'login' => 'DEN',
            'password' => '123', 
            'role' => 'torgovec'
        )
    );

    // Переменная, которая показывает вошел пользователь или нет
    // echo json_encode($_POST);

    // Получаю POST-запрос с ключом session, чтобы пользователь смог выйти из аккаунта
    if(isset($_POST['session'])){
        // print_r(json_decode($_POST['session'], true));
        $_SESSION['session'] = json_decode($_POST['session'], true);
        // print_r(gettype($_SESSION['session']));
        if($_SESSION['session'] == false) {
            $_SESSION = [];
        }
    }
    foreach (getallheaders() as $name => $value) {
        
        if($name == 'data'){
            // $data = json_decode($value);       
            echo $value['login']; 
    
            for($i = 0; $i < count($admin); $i ++){
                if($data['login'] == $admin[$i]['login'] &&  $data['password'] == $admin[$i]['password']) {
                    if($admin[$i]['role'] == 'admin'){
                        $_SESSION['admin'] = true;
                    }
                    if($admin[$i]['role'] == 'manager'){
                        $_SESSION['manager'] = true;
                    }
                }
            } 
            // echo "$name: $value['login']\n";
        }  
        
    }
    // Получаю POST-запрос с ключом data, тут передаются логин и пароль, также производится их проверка
    

    
    // print_r($data['login']);
?>