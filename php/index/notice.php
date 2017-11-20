<?php
	header('Content-Type: application/json;charset=UTF-8');
	require("../init.php");
	$sql="SELECT title,movielink,href,pic,release_date,movie_type,protagonist,language,film_introduction FROM ys_index_product";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>