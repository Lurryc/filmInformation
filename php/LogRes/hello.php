<?php
	header("Content-Type:text/plain;charset=UTF-8");
	session_start();
	$uid=$_SESSION["uid"];
	if($uid){
		require_once("../init.php");
		$sql="SELECT uname  from ys_user where uid=$uid";
		$result=mysqli_query($conn,$sql);
		$uname=mysqli_fetch_assoc($result);
		echo "Welcome"+$uname;
	}else{
		echo '<a href="#">登录</a>';
	}
?>