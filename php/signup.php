<?php
    include('dbcon.php');

    $authInfo = json_decode(file_get_contents('php://input'), true);
    $id = $authInfo['id'];
    $password = $authInfo['password'];

    $sql = "INSERT INTO member (id, password, token)
           VALUES ('$id', '$password', '-')";
    
    $result = mysqli_query($con, $sql);

    if($result === true) {
        $signup = true;
    }
    else {
        $signup = mysqli_error($conn);
    }

    $list_array = array('signup' => $signup);

    $result_array = json_encode($list_array);
        
    echo $result_array;
?>