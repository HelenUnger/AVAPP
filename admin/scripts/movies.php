<?php 

    if (isset($_GET['getmovies'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_movie, tbl_rating, tbl_mov_rating, tbl_genre, tbl_mov_genre WHERE tbl_movie.mov_id = tbl_mov_genre.mov_id AND tbl_mov_genre.genre_id = tbl_genre.genre_id AND tbl_movie.mov_id = tbl_mov_rating.mov_id AND tbl_mov_rating.rating_id = tbl_rating.rating_id AND tbl_rating.rating_id BETWEEN 1 AND :access';

        $access = $_GET['getmovies'];

        $getMovies = $pdo->prepare($query);
        $getMovies->execute(
            array(
                ':access'=>$access
            )
        );

        $movies = array();

        while($result = $getMovies->fetch(PDO::FETCH_ASSOC)) {
            $mov = array();
            $mov['id'] = $result['mov_id'];
            $mov['title'] = $result['mov_title'];
            $mov['year'] = $result['mov_year'];
            $mov['link'] = $result['mov_link'];
            $mov['img'] = $result['mov_img'];
            $mov['genre'] = $result['genre_name'];
            $mov['genreID'] = $result['genre_id']; 
            
            $movies[] = $mov;
        }

        echo json_encode($movies);
    }
?>