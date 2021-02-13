<?php
    include('dbcon.php');
    
    // true는 Array 객체로 반환($authInfo['id']), false는 Object로 반환($authInfo -> {'id'})
    $authInfo = json_decode(file_get_contents('php://input'), true);
    $id = $authInfo['id'];
    $password = $authInfo['password'];

    $sql = "SELECT COUNT(*)
            FROM member
            WHERE id='$id'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    if($row[0] !== '0') {
        $idCheck = true;
    }
    else {
        $idCheck = false;
    }

    $sql = "SELECT password
            FROM member
            WHERE id='$id'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    if($row['password'] === $password) {
        $pwdCheck = true;
    }
    else {
        $pwdCheck = false;
    }
    
    $list_array = array('idCheck' => $idCheck,
                        'pwdCheck' => $pwdCheck);

    $result_array = json_encode($list_array);
        
    echo $result_array;
?>