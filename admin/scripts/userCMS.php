<?php 
	function createuser($username, $email, $password, $rating, $admin){
		include('connect.php');

		//encrypt password
        $encrypt = password_hash($password, PASSWORD_BCRYPT);
	
		$create_user_query = 'INSERT INTO tbl_user(user_name,user_pass,user_email,user_admin,user_access)';
		$create_user_query .= ' VALUES(:name,:pass,:email,:admin,:access)';

		$create_user_set = $pdo->prepare($create_user_query);
		$create_user_set->execute(
			array(
				':name'=>$username,
				':pass'=>$encrypt,
				':email'=>$email,
				':admin'=>$admin,
				':access'=>$rating
			)
		);

		if($create_user_set->rowCount()){
			$message = 'success';
			return $message;
		}else{
			$message = 'failed';
			return $message;
		}

	}

	function edituser($username, $rating, $id){
		include('connect.php');
	
		$update_user_query = 'UPDATE tbl_user SET user_name = :username, user_access = :access WHERE user_id = :id';
        $update_set = $pdo->prepare($update_user_query);
        $result = $update_set->execute(
            array(
                ':username'=> $username,
                ':access'=> $rating,
                ':id'=> $id
                )
        );

        //if some thing was created/updated.. then:
		if($update_set->rowCount()){
			$message = 'success';
			return $message;
		}else{
			$message = 'failed';
			return $message;
		}
	}

	function deleteuser($id){
		include('connect.php');
	
		$delete_user_query = 'DELETE FROM tbl_user WHERE user_id = :id';
        $delete_set = $pdo->prepare($delete_user_query);
        $result = $delete_set->execute(
            array(
                ':id'=> $id
                )
        );

        //if some thing was created/updated.. then:
		if($delete_set->rowCount()){
			$message = 'success';
			return $message;
		}else{
			$message = 'failed';
			return $message;
		}
	}