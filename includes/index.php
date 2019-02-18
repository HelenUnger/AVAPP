<?php 

    include 'functions.php';

    //remember to sanitize input 
    //mysqli_stmt_prepare() and HTML_ENTITIES
    //
    //do authentication (password validation first)
    if (isset($_GET['username'])) {
        $data = validate_login($conn, $_GET['username'], $_GET['password']);
        echo json_encode($data);
    }else if (isset($_GET['user'])){
        $data = get_single_user($conn, $_GET['user']);
        echo json_encode($data);
    }else{
        $data = get_all_users($conn);
        echo json_encode($data);
    }

    ?>