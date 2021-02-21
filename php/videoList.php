<?php
    include('dbcon.php');

    $sql = "SELECT *             
            FROM video_list      
            ORDER BY upload DESC";
    $result = mysqli_query($con, $sql);

    $list_array = array();
    while($row = mysqli_fetch_array($result)) {
        array_push($list_array, array(
            'idx' => $row[0],
            'link' => $row[1],
            'thumbnail' => $row[2],
            'title' => $row[3],
            'views' => $row[4],
            'upload' => $row[5])
        );
    }
    $result_array = json_encode($list_array);
    echo $result_array;
?>