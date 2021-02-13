<?php
    include('dbcon.php');

    $idInfo = json_decode(file_get_contents('php://input'), true);
    $id = $idInfo['id'];

    $sql = "SELECT COUNT(*)
            FROM member
            WHERE id='$id'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    if($row[0] === '0') {
        $idCheck = true;
    }
    else {
        $idCheck = false;
    }

    $list_array = array('idCheck' => $idCheck);

    $result_array = json_encode($list_array);
        
    echo $result_array;
?>