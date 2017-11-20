function isNull( str ){
	if ( str == "" ) return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}
$("#uname").blur(function(){
	var uname=$("#uname").val();
	if(isNull(uname)==true){
		$("#unameCheck").html("用户名不能为空")
	}else{
		$("#unameCheck").html("")
	}
})
$("#upwd").blur(function(){
	var upwd=$("#upwd").val();
	if(isNull(upwd)==true){
		$("#upwdCheck").html("密码不能为空")
	}else{
		$("#upwdCheck").html("")
	}
})
$("#btn").click(function(e){
	e.preventDefault();
	var uname=$("#uname").val();
	var upwd=$("#upwd").val();
	$.ajax({
		type:"POST",
		url:"php/LogRes/login_do.php",
		data:{uname:uname,upwd:upwd},
		success:function(data){
			if(data.code>0){
			    sessionStorage.setItem("uname",uname);
				sessionStorage.setItem("uid",data.uid);
				location.href="index.html";
			}else{
				alert("用户名或密码错误");
			}
		},
		error:function(){
			alert("网络故障");
		}
	})
})
