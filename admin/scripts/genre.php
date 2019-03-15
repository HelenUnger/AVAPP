<?php 
    if (isset($_GET['getgenres'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_genre';

        $getGenres = $pdo->prepare($query);
        $getGenres->execute();

        $genres = array();

        while($result = $getGenres->fetch(PDO::FETCH_ASSOC)) {
            $item = array();
            $item = $result;
            $genres[] = $item;
        }

        echo json_encode($genres);
    }

?>