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

        $id = $_GET['singleShow'];

        //gets all episodes
        //$query = 'SELECT JSON_OBJECT( "show", tbl_show.show_title, "season", tbl_season.season_title, "episodes", json_arrayagg( JSON_OBJECT( "title", tbl_episode.episode_title, "link", tbl_episode.episode_link ) ) ) FROM tbl_show, tbl_season, tbl_episode WHERE :showID = tbl_show.show_id AND tbl_show.show_id = tbl_season.show_id AND tbl_season.season_id = tbl_episode.season_id GROUP BY tbl_season.season_title';

        $query ='SELECT tbl_show.show_title, tbl_show.show_year, tbl_season.season_title, json_arrayagg( JSON_OBJECT( "title", tbl_episode.episode_title, "link", tbl_episode.episode_link ) ) AS "episodes" FROM tbl_show, tbl_season, tbl_episode WHERE :showID = tbl_show.show_id AND tbl_show.show_id = tbl_season.show_id AND tbl_season.season_id = tbl_episode.season_id GROUP BY tbl_season.season_title';

        // SELECT tbl_show.*, tbl_season.*, JSON_ARRAYAGG(JSON_OBJECT( tbl_episode.episode_title, tbl_episode.episode_link )) AS "episodes" FROM tbl_show, tbl_season, tbl_episode WHERE 1 = tbl_show.show_id AND tbl_show.show_id = tbl_season.show_id AND tbl_season.season_id = tbl_episode.season_id GROUP BY tbl_season.season_title

        //SELECT tbl_show.*, tbl_season.*, JSON_ARRAYAGG(tbl_episode.episode_title) AS "episodes" FROM tbl_show, tbl_season, tbl_episode WHERE :showID = tbl_show.show_id AND tbl_show.show_id = tbl_season.show_id AND tbl_season.season_id = tbl_episode.season_id GROUP BY tbl_season.season_title

        $get_query = $pdo->prepare($query);
        $get_query->execute(
            array(
                ':showID'=>$id
            )
        );

        $episodes = array();
        while($result = $get_query->fetch(PDO::FETCH_ASSOC)) {
            $ep = array();
            $ep = $result;
            $episodes[] = $ep;
        }

        echo json_encode($episodes, JSON_PRETTY_PRINT);


        // //gets all seasons
        // $season_query = 'SELECT * FROM tbl_season WHERE :showID = tbl_season.show_id';

        // $getSeasons = $pdo->prepare($season_query);
        // $getSeasons->execute(
        //     array(
        //         ':showID'=>$id
        //     )
        // );

        // $seasons = array();
        // while($rslt = $getSeasons->fetch(PDO::FETCH_ASSOC)) {
        //     $season = array();
        //     $season = $rslt;
        //     $seasons[] = $season;
        // }

        // echo json_encode($seasons);
    }
?>