<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$fname=$_REQUEST['fname'];
	if($fname=="全部"){
			$sql="SELECT img,family_id,title,laptop_id FROM ys_index_carousel";
	}else{
		$sql="SELECT img,family_id,title,laptop_id FROM ys_index_carousel WHERE family_id=(SELECT family_id FROM ys_laptop_family WHERE name='$fname')";
	}
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($row);  