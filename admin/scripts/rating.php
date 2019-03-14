<?php
    if (isset($_GET['allRatings'])) {
            include('connect.php');

            $query = 'SELECT * FROM tbl_rating';

            $getRating = $pdo->prepare($query);
            $getRating->execute();

            $rating = array();

            while($result = $getRating->fetch(PDO::FETCH_ASSOC)) {
                $rate = array();
                $rate = $result;
                $rating[] = $rate;
            }

            echo json_encode($rating);
        }

?>