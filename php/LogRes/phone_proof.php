<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$phone=$_REQUEST['data'];
	$sql="SELECT * FROM ys_user WHERE phone='$phone'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	 if($row==null){
		 echo '{"code":-1,"msg":""}';
	 }else{
		$uid = $row["uid"];
		echo '{"code":1,"msg":"手机号已存在请重新输入","uid":'.$uid.'}';
	 }
?>