<?php 

    if (isset($_GET['allusers'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_user ORDER BY user_id ASC';

        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute();

        $users = array();

        while($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
            $currentuser =  array();
            $currentuser['id'] = $user['user_id'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['access'] = $user['user_access'];
            $currentuser['icon'] = $user['user_icon'];

            $users[] = $currentuser;
        }

        echo json_encode($users);
    }

    if (isset($_GET['singleUser'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_user WHERE user_id = :id';

        $id = $_GET['singleUser'];

        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute(
            array(
                ':id'=>$id
            )
        );

        $user = array();

        while($result = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
            $user =  $result;
        }

        echo json_encode($user);
    }


?>