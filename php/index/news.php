<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	$arr=[];
	$news=[];
	/*全部明星*/
	$sql="SELECT pic,title,article,news_time,href FROM ys_news WHERE type='明星策划'";
	$result=mysqli_query($conn,$sql);
	$star=mysqli_fetch_all($result,MYSQLI_ASSOC);
	/*全部八卦*/
	$sql="SELECT pic,title,article,news_time,href FROM ys_news WHERE type='娱乐八卦'";
	$result=mysqli_query($conn,$sql);
	$new=mysqli_fetch_all($result,MYSQLI_ASSOC);
	/*热点*/
	$sql="SELECT pic,title,release_time,author,details,label1,label2,label3,label4,href FROM ys_recommend ORDER BY hot DESC LIMIT 0,2";
	$result=mysqli_query($conn,$sql);
	$hot=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$news[]=$star;
	$news[]=$new;
	$arr["hot"]=$hot;
	$arr["news"]=$news;
	echo json_encode($arr);
?>