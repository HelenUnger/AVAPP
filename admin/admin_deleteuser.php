<?php 
	require_once('scripts/config.php');
	confirm_logged_in();
	
	if(empty($_POST['id'])){
		$message = 'no id';
	}else{
        $id = $_POST['id'];

		$message = deleteuser($id);
	}

	echo json_encode($message);
?>
