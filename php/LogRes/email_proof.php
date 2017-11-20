<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$email=$_REQUEST['data'];
	$sql="SELECT * FROM ys_user WHERE email='$email'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row==null){
	 echo '{"code":-1,"msg":""}';
	}else{
	 $uid = $row["uid"];
	 echo '{"code":1,"msg":"此邮箱已存在请更换邮箱","uid":'.$uid.'}';
	}
?>