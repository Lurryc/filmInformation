<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$uname=$_REQUEST['uname'];
	@$upwd=$_REQUEST['upwd'];
	@$email=$_REQUEST['email'];
	@$phone=$_REQUEST['phone'];
	$sql="INSERT INTO ys_user (uname, upwd,email,phone) VALUES ('$uname', '$upwd','$email','$phone')";
	$result=mysqli_query($conn,$sql);
	if($result===true){ //SQL执行成功
		echo '{"code":1,"msg":"注册成功"}';
	}else {//SQL语句执行失败！最可能的原因是SQL语法错误
		echo '{"code":-1,"msg":"注册失败"}';
	}
?>