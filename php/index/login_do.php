<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$sql="SELECT uid,uname FROM ys_user WHERE uname='$uname' AND upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	 if($row==null){
		 echo '{"code":-1,"msg":"�û��������벻ȷ"}';
	 }else{
		$uid = $row["uid"];
		echo '{"code":1,"msg":"��¼�ɹ�","uid":'.$uid.'}';
	 }
?>