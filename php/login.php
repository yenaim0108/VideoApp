<?php
    $host = 'localhost';
    $user = 'snap';
    $pw = '0201';
    $dbName = 'snap';
     
    $conn = mysqli_connect($host, $user, $pw, $dbName);
    
    // true는 Array 객체로 반환($authInfo['id']), false는 Object로 반환($authInfo -> {'id'})
    $authInfo = json_decode(file_get_contents('php://input'), true);
    $id = $authInfo['id'];
    $password = $authInfo['password'];

    $sql = "INSERT INTO member(id, password, token)
            VALUES('$id', '$password', '-')";

    $result = mysqli_query($conn, $sql);
    
    if($result === true) {
        $list_array = array('login' => true);
    } else {
        $list_array = array('login' => mysqli_error($conn));
    }

    $result_array = json_encode($list_array);
        
    echo $result_array;
?>