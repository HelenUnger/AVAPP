<?php
if (isset($_GET['getAlbums'])) {
    include('connect.php');

    $query = 'SELECT * FROM tbl_album, tbl_rating, tbl_album_rating WHERE tbl_album.album_id = tbl_album_rating.album_id AND tbl_album_rating.rating_id = tbl_rating.rating_id AND tbl_rating.rating_id BETWEEN 1 AND :access';

    $access = $_GET['getAlbums'];

    $getAlbums = $pdo->prepare($query);
    $getAlbums->execute(
        array(
            ':access'=>$access
        )
    );

    $albums = array();

    while($result = $getAlbums->fetch(PDO::FETCH_ASSOC)) {
        $album = array();
        $album['id'] = $result['album_id'];
        $album['title'] = $result['album_title'];
        $album['year'] = $result['album_year'];
        $album['desc'] = $result['album_desc'];
        $album['img'] = $result['album_img'];

        $albums[] = $album;
    }

    echo json_encode($albums);
}

if (isset($_GET['singleAlbum'])) {
    include('connect.php');

    $id = $_GET['singleAlbum'];

    $query ='SELECT * FROM tbl_album, tbl_song WHERE tbl_album.album_id = tbl_song.album_id AND tbl_album.album_id = :album';

    $get_query = $pdo->prepare($query);
    $get_query->execute(
        array(
            ':album'=>$id
        ) 
    );

    $songs = array();
    while($result = $get_query->fetch(PDO::FETCH_ASSOC)) {
        $song = array();

        $song = $result;
        $songs[] = $song;
    }

    echo json_encode($songs);
}

?>