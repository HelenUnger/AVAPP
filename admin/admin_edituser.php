<?php 
	require_once('scripts/config.php');
	confirm_logged_in();
	
	if(empty($_POST['username']) || empty($_POST['rating'])){
		$message = 'something is blank';
	}else{
		$username = $_POST['username'];
        $rating = $_POST['rating'];
        $id = $_POST['id'];

		$message = edituser($username,$rating,$id);
	}

	echo json_encode($message);
?>
