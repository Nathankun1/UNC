<?php 

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: X-Requested-With");
	header('Content-type: application/json');
	header('Access-Control-Allow-Credentials: true');
	//header('Access-Control-Allow-Origin: *');

	$conn =new mysqli('localhost', 'root', '' , 'demo')
	OR die('Could not connect to MySQL: ' .
	mysqli_connect_error());

	//require 'DB.php';


	//require_once 'connect.php';

	if(mysqli_connect_errno())
	{
		printf("Connection Failed: %s", mysqli_connect_errno());
		exit();
	}

	$query = "SELECT * FROM test";
		
	if($result = $conn->query($query))
	{
			
		$obj=$result->fetch_object();
		echo json_encode($obj);
	//	return $obj;

		$newCode_data = json_encode($obj);
		$result->close();
		$conn->close();

	}
?>