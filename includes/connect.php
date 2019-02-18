<?php 

    $user = "root";
    $pass = "";

    try {
        $conn = new PDO("mysql:host=localhost;dbname=testusers", $user, $pass);
        // var_dump($conn);
    }   catch(PDOException $exception){
        echo 'connection error: somethings wrong' . $exception->getMessage();
    }

?>