<?php 

function login($username, $password, $ip){
	require_once('connect.php');
	//Check if username exists

	$check_exist_query = 'SELECT COUNT(*) FROM tbl_user';
	$check_exist_query .= ' WHERE user_name = :username';

	$user_set = $pdo->prepare($check_exist_query);
	$user_set->execute(
		array(
			':username'=>$username
		)
	);


	if($user_set->fetchColumn()>0){
		$get_user_query = 'SELECT * FROM tbl_user WHERE user_name = :username';

		$get_user_set = $pdo->prepare($get_user_query);

		//TODO: don't forget to bind the placeholders in here!
		$get_user_set->execute(
			array(
				':username'=>$username
			)
		);

		while($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
			$id = $found_user['user_id'];
			$hash = $found_user['user_pass'];

			$_SESSION['user_id'] = $id;
			$_SESSION['user_name'] = $found_user['user_name'];

			if (password_verify($password, $hash)) {
			
			//get some user information and pass it back to our ajax call
			$user = array();
			$user['id'] = $found_user['user_id'];
			$user['username'] = $found_user['user_name'];
			$user['admin'] = $found_user['user_admin'];
			$user['access'] = $found_user['user_access'];
			//send anything else you need for the user

			return $user;
			}else{
				$message = 'wraong password';
				return $message;
			}

		}

		if(empty($id)){
			$message = 'Login Failed';
			return $message;
		}

		// redirect_to('index.php');
	}else{
		$message = 'Login Failed';
		return $message;
	}
}