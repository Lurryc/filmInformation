<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$uname=$_REQUEST['data'];
	$sql="SELECT * FROM ys_user WHERE uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	 if($row==null){
		 echo '{"code":-1,"msg":""}';
	 }else{
		$uid = $row["uid"];
		echo '{"code":1,"msg":"用户名已存在请重新输入","uid":'.$uid.'}';
	 }
?>