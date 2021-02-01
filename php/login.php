<?php
    $host = 'localhost';
    $user = 'snap';
    $pw = '0201';
    $dbName = 'snap';
     
    $conn = mysqli_connect($host, $user, $pw, $dbName);

    if(($_SERVER['REQUEST_METHOD'] == 'POST') && isset($_POST['submit'])) {
        $id = $_POST['id'];
        $password = $_POST['password'];
    
        $sql = "INSERT INTO member(id, password, token)
                VALUES($id, $password, '-')";
    
        if($conn->query($sql) === TRUE) {
            $list_array = array("login" => "true");
        } else {
            $list_array = array("login" => "false");
        }
    
        $result_array = json_encode($list_array);
            
        echo $result_array;
    }
?>