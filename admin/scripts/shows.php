<?php 

    if (isset($_GET['getshows'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_show, tbl_rating, tbl_rating_show WHERE tbl_show.show_id = tbl_rating_show.show_id
            AND tbl_rating_show.rating_id = tbl_rating.rating_id AND tbl_rating.rating_id BETWEEN 1 AND :access';

        $access = $_GET['getshows'];

        $getShows = $pdo->prepare($query);
        $getShows->execute(
            array(
                ':access'=>$access
            )
        );

        $shows = array();

        while($result = $getShows->fetch(PDO::FETCH_ASSOC)) {
            $show = array();
            $show['id'] = $result['show_id'];
            $show['title'] = $result['show_title'];
            $show['year'] = $result['show_year'];
            $show['img'] = $result['show_img'];
            // $movies['genre'] = $result['genre_name'];
            $shows[] = $show;
        }

        echo json_encode($shows);
    }

    if (isset($_GET['singleShow'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_season, tbl_episode WHERE :showID = tbl_season.show_id AND tbl_season.season_id = tbl_episode.season_id';

        $id = $_GET['singleShow'];

        $getShows = $pdo->prepare($query);
        $getShows->execute(
            array(
                ':showID'=>$id
            )
        );

        $shows = array();

        while($result = $getShows->fetch(PDO::FETCH_ASSOC)) {
            $show = array();
            // $show['show_id'] = $result['show_id'];
            // $show['show_title'] = $result['show_title'];
            // $show['show_year'] = $result['show_year'];
            // $show['show_img'] = $result['show_img'];
            // $movies['genre'] = $result['genre_name'];
            $show = $result;
            $shows[] = $show;
            // var_dump($result);
        }

        echo json_encode($shows);
    }
?>