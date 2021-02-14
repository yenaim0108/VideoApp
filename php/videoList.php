<?php
    include('dbcon.php');

    $sql = "SELECT *
            FROM video_list";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    while($row = mysqli_fetch_array($result)) {
        $list_array = array('thumbnail' => $row[0],
                             'title' => $row[2],
                             'views' => $row[3],
                             'upload' => $row[4]);
        $result_array = json_encode($list_array);
            
        echo $result_array;
    }
?>