<?php
    $host = 'localhost';
    $user = 'snap';
    $pw = '0201';
    $dbName = 'snap';
     
    $conn = mysqli_connect($host, $user, $pw, $dbName);

    if(isset($_POST['submit'])) {
        $id = $_POST['id'];
        $password = $_POST['password'];

        $sql = "INSERT INTO member(id, password, token)
                VALUES('$id', '$password', '-')";

        $result = mysqli_query($conn, $sql);

        if($result === true) {
            $list_array = array("login" => true);
        } else {
            $list_array = array("login" => mysqli_error($conn));
        }

        $result_array = json_encode($list_array);
            
        echo $result_array;
    }
?>