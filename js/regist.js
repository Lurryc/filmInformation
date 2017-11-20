var unameReg=/^[a-zA-Z]\w{2,11}$/;
var upwdReg=/^\w{6,12}$/;
var emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var phoneReg=/^1(3|4|5|7|8)[0-9]\d{8}$/
var result=false;
/*封装验证函数*/
function validate(obj,Reg,result1,result2,url,inputObj){
	var msg=obj.val();
	if(msg==""){
		inputObj.html(result1);
		result=false;
		return;
	}else if(!Reg.test(msg)){
		inputObj.html(result2);
		result=false;
		return;
	}else{
		$.ajax({
			type:"POST",
			url:url,
			data:{data:msg},
			success:function(data){
				if(data.code=="-1"){
					inputObj.html(data.msg);
					result=true;
				}else{
					inputObj.html(data.msg);
					result=false;
					return;
				}
			}
		})  
	}
}
$("#uname").blur(function(){
	validate(
							$("#uname"),
							unameReg,
							"用户名不能为空",
							"用户名格式不正确，应为字母开头的3到12位字母、数字、下划线组成 ",
							"php/LogRes/uname_proof.php",
							$("#unameInput")
						)
	})
$("#email").blur(function(){
		validate(
			$("#email"),
			emailReg,
			"邮箱不能为空",
			"邮箱格式不正确",
			"php/LogRes/email_proof.php",
			$("#emailInput")
		)
})
$("#phone").blur(function(){
		validate(
		$("#phone"),
		phoneReg,
		"手机号不能为空",
		"手机号格式不正确",
		"php/LogRes/phone_proof.php",
		$("#phoneInput")
	)
})
$("#upwd").blur(function(){
		var msg=$("#upwd").val();
		if(msg==""){
			$("#upwdInput").html("密码不能为空");
			result=false;
			return;
		}else if(!upwdReg.test(msg)){
			$("#upwdInput").html("密码由6-12位的字符组成");
			result=false;
			return;
		}else{
			$("#upwdInput").html(" ");
			return;
		}
})
$("#vpwd").blur(function(){
		var msg=$("#vpwd").val();
		if(msg!==$("#upwd").val()){
			$("#vpwdInput").html("两次输入的密码不一致");
			result=false;
			return;
		}else if(msg==""){			
			result=false;
			return;
		}else{
			$("#vpwdInput").html("");
			result=true;
			return;
		}
})

$("#btn").click(function(){
	var uname=$("#uname").val();
	var upwd=$("#upwd").val();
	var email=$("#email").val();
	var phone=$("#phone").val();
	validate(
					$("#uname"),
					unameReg,
					"用户名不能为空",
					"用户名格式不正确，应为字母开头的3到8位字母、数字、下划线组成 ",
					"php/LogRes/uname_proof.php",
					$("#unameInput")
				),
	validate(
		$("#email"),
		emailReg,
		"邮箱不能为空",
		"邮箱格式不正确",
		"php/LogRes/email_proof.php",
		$("#emailInput")
	),
	validate(
		$("#phone"),
		phoneReg,
		"手机号不能为空",
		"手机号格式不正确",
		"php/LogRes/phone_proof.php",
		$("#phoneInput")
	)
	setTimeout(function(){
		if(result==true){
			$.ajax({
				type:"POST",
				url:"php/LogRes/regist.php",
				data:{uname:uname,upwd:upwd,email:email,phone:phone},
				success:function(data){
					var num=5;
					$("#regist").css("display","none");
					$("#registSuccess").css("display","block");
					var time=setInterval(function(){	
										$("#second").html(num)
										num--;
										if(num==-1){
											location.href="login.html";
											clearInterval(time);
										}
									},1000)
				}
			})		
		}
	},300)	
})