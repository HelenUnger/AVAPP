<?php 
	require_once('scripts/config.php');

	confirm_logged_in();

	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['password']) || empty($_POST['rating'])){
		$message = 'something is blank';
	}else{
		$username = $_POST['name'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$rating = $_POST['rating'];
		$admin = $_POST['admin'];
        

		$message = createuser($username, $email, $password, $rating, $admin);
	}

	echo json_encode($message);
?>