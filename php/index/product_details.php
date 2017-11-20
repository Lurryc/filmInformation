	<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	@$lid=$_REQUEST['lid'];
	$product=[];
	$sql="SELECT family_id,title,intro,detail_pic,editor,child_ticket,adult_ticket,edit_time,sold_count,inventory FROM ys_laptop WHERE is_onsale=1 AND isdel=0 AND lid=$lid";
	$result=mysqli_query($conn,$sql);
	$detail=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$sql="SELECT sm1,sm2,sm3,sm4 FROM ys_laptop_pic WHERE laptop_id=$lid AND isdel=0";
	$result=mysqli_query($conn,$sql);
	$pics=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$sql="SELECT img,family_id,title,laptop_id,price FROM ys_index_carousel WHERE family_id=(SELECT family_id FROM ys_laptop WHERE is_onsale=1 AND isdel=0 AND lid=$lid ORDER BY sold_count) LIMIT 0,6";
	$result=mysqli_query($conn,$sql);
	$banners=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$product["detail"]=$detail;
	$product["pics"]=$pics;
	$product["banners"]=$banners;
	echo json_encode($product);
?>