/*通用函数*/
/*有序运动*/
function orderMove(arr,className){
	for(let i=0;i<arr.length;i++){
		setTimeout(function(){
			arr[i].className=className;
		},300*i)
	}
}
/*转化时间*/
function changeDate(date){
	return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日";
}
//判断滚动距离，如果大于1080就加载全部，免得滚动到一半时没东西，加载完后修改自定义属性 isLoad为true
(function(){
	if($(window).scrollTop()>1080){
		container2()
		container2Move()
		container3()
		container3Move()
		container4()
		container4Move()
		container5()
		container5Move()
		$(`body>div`).attr("isLoad","true");
	}else{
		$(`body>div`).attr("isLoad","false");
	}
})();
/*元素到窗口顶部的距离*/
(function(){
	$("#nav>li>a").click(e=>{
		var num=$(e.target).parent().index();
		var height=parseInt($("body>div:gt(0)").css("height"));
		if(num>2&&num<7){
			//增加自定义属性，如果自定义属性为false,才进行加载
			if($(`body>div:eq(${num})`).attr("isLoad")=="false"){
				var functionName="container"+(num-1); 
				eval("this."+functionName+"()"); 
				$(`body>div:eq(${num})`).attr("isLoad","true");
			}
			var moveName="container"+(num-1)+"Move"; 
			eval("this."+moveName+"()"); 
		}
	});	
})();
(function(){  
	var elemt = 540;           //加载元素高度
	var num = 1.5;  
	$(window).scroll(function(){
		var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)  
		total=num*elemt;
		/*每次滚动到元素一半时加载*/
		if(srollPos>total&&num<5.5){
			num++;
			if($(`body>div:eq(${num+0.5})`).attr("isLoad")=="false"){
				if(num==4.5){
				}else{
					var moveName="container"+(num-0.5)+"Move"; 
					eval("this."+moveName+"()"); 
				}
				$(`body>div:eq(${num+0.5})`).attr("isLoad","true");
				var functionName="container"+(num-0.5); 
				eval("this."+functionName+"()"); 
			}
		}
	})
})();
/*导航栏动画*/
(function(){
	$("div.line").click(function(){
		$("div.line>hr:nth-child(2)").toggleClass("moveLeft");
		$("div.line>hr:nth-child(3)").toggleClass("moveRight");
		$("div.line>hr:nth-child(1)").toggleClass("clockwise");
		$("div.line>hr:nth-child(4)").toggleClass("anticlockwise");
		$("div.leftList").toggleClass("leftNavMove");
	})
	$("#nav>li:gt(0):lt(7)").click(function(){
		var height=parseInt($("#header").css("height"));
		$("#main").css("top",-(($(this).index())-1)*height);
	})
})();
/*首页小圆点位置*/
(function(){
	var left=(parseInt($("#header").css("width"))-parseInt($("#cna").css("width")))/2
	$("#cna").css("left",left);
})();
/*首页header样式*/
(function(){
	/*控制文字动画*/
	var bannerWidth=parseInt($("div.header-2").css("width"))+1;
	$("#banner").append($("#banner>div:nth-child(1)").clone(true));
	var bannerNum=$("#banner").children().length;
	$("#banner").css("width",bannerWidth*bannerNum);
	function headerRemove(){
		$("#header").find("*").removeClass("toBig")
							.removeClass("leftToRight")
							.removeClass("rightToLeft")
							.removeClass("bottomToTop")
							.removeClass("topToBottom")
							.removeClass("upperLeft")
							.removeClass("upperRight")
							.removeClass("lowerLeft")
							.removeClass("lowerRight")
							.removeClass("uLB")
							.removeClass("uRB")
							.removeClass("lLB")
							.removeClass("lRB");
	}
	/*header轮播*/
	var n=0;
	$(`#cna>li:nth-child(${n+1})`).addClass("active");
	$(`#cna>li:nth-child(${n+1})`).siblings().removeClass("active");
	function move(){
		$("#banner>div").css("left",-bannerWidth*n);
		$(`#cna>li:nth-child(${n+1})`).addClass("active");
		$(`#cna>li:nth-child(${n+1})`).siblings().removeClass("active");
		n++;
		if(n==bannerNum){
			headerRemove()
			leftMove();
		}else if(n==2){
			headerRemove()
			midMove();
			lineMove2();
		}else {
			rightMove();
			lineMove3();
		}
		if(n>bannerNum-1){
			$(`#cna>li:nth-child(1)`).addClass("active");
			$(`#cna>li:nth-child(1)`).siblings().removeClass("active");
			setTimeout(function(){
				$("#banner>div").css("transition","all 0s linear");
				$("#banner>div").css("left",0);
				n=0;
				setTimeout(function(){
					$("#banner>div").css("transition","all 0.5s linear");
				},100)
			},4000)
		}
	}
	/*header-1 文字动画*/
	function leftMove(){
		$("div.header-1>div>span:nth-child(1)").addClass("toBig");
		setTimeout(function(){
			$("div.header-1>div>span:nth-child(3)").addClass("leftToRight");
			$("div.header-1>div>span:nth-child(4)").addClass("leftToRight");
			setTimeout(function(){
				$("div.header-1>div>span:nth-child(5)").addClass("bottomToTop");
				$("div.header-1>div>span:nth-child(6)").addClass("bottomToTop");
				$("div.header-1>div>span:nth-child(2)").addClass("leftToRight");
				setTimeout(function(){
					$("div.header-1>div>span:nth-child(9)").addClass("bottomToTop");
						setTimeout(function(){
							$("div.header-1>div>span:nth-child(8)").addClass("bottomToTop");
							setTimeout(function(){
								$("div.header-1>div p").addClass("rightToLeft");
								$("div.header-1>div>span:nth-child(7)").addClass("bottomToTop");
							},300)
						},300)
				},300)
			},500)
		},1200)
	}
	leftMove();
	/*header-2 文字动画*/
	function midMove(){
			$("div.header-2>div>span:nth-child(1)").addClass("upperLeft");
			$("div.header-2>div>span:nth-child(2)").addClass("lowerRight");
			setTimeout(function(){
				$("div.header-2>div>span:nth-child(3)").addClass("topToBottom");
				$("p.zixun").addClass("bottomToTop");
				setTimeout(function(){
					$("div.youdian>p:nth-child(1)").addClass("lowerLeft");
					$("div.youdian>p:nth-child(2)").addClass("bottomToTop");
					$("div.youdian>p:nth-child(3)").addClass("lowerRight");
				},600)
			},600)	
	}
	/*header-2 线条动画*/
	function lineMove2(){
		var c2=document.getElementById("c2");
		var ctx = c2.getContext("2d");
		ctx.clearRect(0,0,547,258);
		ctx.strokeStyle="#fff"; 
		var x=0;
		var y=0;
		//左到右
		function canvasRight(X,Y,tar){
			var timer=setInterval(function(){
				ctx.beginPath();
				ctx.moveTo(X,Y);
				x-=1;
				ctx.lineTo(X-x,Y);
				ctx.stroke();
				ctx.closePath();
				if(x<=tar){
					clearInterval(timer);
				}
			},30);
		}
		canvasRight(395,106,-76);
		canvasRight(456,136,-13);
		//右到左
		function canvasLeft(X,Y,tar){
			var timer=setInterval(function(){
				ctx.beginPath();
				ctx.moveTo(X,Y);
				x-=1;
				ctx.lineTo(X+x,Y);
				ctx.stroke();
				ctx.closePath();
				if(x<=tar){
					clearInterval(timer);
				}
			},30);
		}
		canvasLeft(150,106,-76);
		canvasLeft(89,136,-16);
		//下到上
		function canvasTop(X,Y,tar){
			var timer2=setInterval(function(){
				ctx.beginPath();
				ctx.moveTo(X,Y);
				y-=1;
				ctx.lineTo(X,Y+y);
				ctx.lineTo(X,Y-y);
				ctx.stroke();
				ctx.closePath();
				if(y<=tar){
					clearInterval(timer2);
				}
			},30);
		}
		canvasTop(73,120,-15);
		canvasTop(471,121,-13);
	}
	/*header-3*/
	function rightMove(){
		$("div.header-3 p > span:nth-child(1)").addClass("lRB");
		setTimeout(function(){	
			$("div.header-3 p > span:nth-child(2)").addClass("lLB");
			setTimeout(function(){
				$("div.header-3 p > span:nth-child(3)").addClass("uRB");
				setTimeout(function(){
					$("div.header-3 p > span:nth-child(4)").addClass("toBig");
				},300)
			},300)
		},300)
	}
	/*header-3 线条动画*/
	function lineMove3(){
		var c3=document.getElementById("c3");
		var ctx = c3.getContext("2d");
		var n=0;
		ctx.strokeStyle="#fff";
		ctx.clearRect(0,0,323,323);
		ctx.beginPath();
		ctx.moveTo(18,112);
		ctx.lineTo(199,112);
		ctx.closePath();
		ctx.moveTo(112,18);
		ctx.lineTo(112,199);
		ctx.stroke();
		var timer=setInterval(function(){
			n++;
			//左上角
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(n,0);
			ctx.closePath();
			ctx.moveTo(0,0);
			ctx.lineTo(0,n);
			ctx.stroke();
			//右上角
			ctx.beginPath();
			ctx.moveTo(223,0);
			ctx.lineTo(223-n,0);
			ctx.closePath();
			ctx.moveTo(223,0);
			ctx.lineTo(223,n);
			ctx.stroke();
			//右下角
			ctx.beginPath();
			ctx.moveTo(223,223);
			ctx.lineTo(223,223-n);
			ctx.closePath();
			ctx.moveTo(223,223);
			ctx.lineTo(223-n,223);
			ctx.stroke();
			//左下角
			ctx.beginPath();
			ctx.moveTo(0,223);
			ctx.lineTo(0,223-n);
			ctx.closePath();
			ctx.moveTo(0,223);
			ctx.lineTo(n,223);
			ctx.stroke();
			if(n==24){
				clearInterval(timer);
			}	
			ctx.strokeStyle="#fcbe12";
		},60)
	}
	/*执行轮播*/
	var timer=setInterval(function(){
		move();
	},4000)
	/*按钮点击事件*/
	$("#cna").on("click","li>a",e=>{
		clearInterval(timer);
		$(e.target).parent().addClass("active");
		$(e.target).parent().siblings().removeClass("active");
		var n=$(e.target).parent().index();
		$("#banner>div").css("left",-(parseInt($("div.header-2").css("width"))+1)*n);
		if(n==0){
			headerRemove()
			leftMove();
		}else if(n==1){
			headerRemove()
			midMove();	
			lineMove2();
		}else{
			headerRemove()
			rightMove();
			lineMove3();
		}
	})
})();

/*首页container-1样式*/

(function(){
	var pWidtn=parseInt($("p.imgs>img:nth-child(1)").css("width"))+1;
	var num=$("p.imgs").children().length;
	$("p.imgs").css("width",pWidtn*num);
	var n=0;
	function move(){
			$("p.imgs").css("left",-pWidtn*n);
			n++
			if(n>num){
				$("p.imgs").css("left",0);
				n=1;
			}
	}
	setInterval(move,2000);
})();

/*首页container-2样式*/
function container2Move(){
	$("div.cinema-1>a").removeClass("bottomToTop");
	setTimeout(function(){
		orderMove($("div.cinema-1>a"),"bottomToTop");
	},300)
}
function container2(){
	/*AJAX载入图片列表*/
	function ajax(fname){
		$.ajax({
			type:"GET",
			url:"php/index/carousel.php",
			data:{fname:fname},
			success:function(data){
				var html="";
				for(var p of data){
					html+=`<a href="shopping.html?lid=${p.laptop_id}">
										<p><img src="${p.img}"></p>
										<p>
											<span>+</span>
											<span>${p.title}</span>
										</p>
									</a>`
				}
				$('div.cinema-1').html(html);
				var pWidth=parseInt($("div.cinema-1").find("a").css("width"))+parseInt($("div.cinema-1").find("a").css("margin-right"))+1;
				var num=$("div.cinema-1").find("a").length;
				$("div.cinema-1").css("width",num*pWidth);
			},
			error:function(){
				alert("网络故障");
			}
		})
	}
	ajax("全部")
	var n=0;
	$("div.cinemaList").on("click","a",e=>{
		var fname=$(e.target).next().html();
		ajax(fname);
		$(e.target).addClass("active");
		$(e.target).siblings().not("span").removeClass("active");
		$("div.cinema-1").css("transition","all 0s linear");
		$("div.cinema-1").removeClass("bottomToTop");
		$("div.cinema-1").css("left",0);
		n=0;
		setTimeout(function(){
			$("div.cinema-1").css("transition","all 0.3s linear");
			orderMove($("div.cinema-1>a"),"bottomToTop");
		},300)
	})
	$("#mR").click(function(){
		n++;
		var pWidth=parseInt($("div.cinema-1").find("a").css("width"))+parseInt($("div.cinema-1").find("a").css("margin-right"))+1;
		var num=$("div.cinema-1").find("a").length;
		$("div.cinema-1").css("left",-pWidth*n);
		if(n>=num-4){
			n=num-4;
			$("div.cinema-1").css("left",-pWidth*n);
		}	
	})
	$("#mL").click(function(){
		n--;
		var pWidth=parseInt($("div.cinema-1").find("a").css("width"))+parseInt($("div.cinema-1").find("a").css("margin-right"))+1;
		var num=$("div.cinema-1").find("a").length;
		$("div.cinema-1").css("left",-pWidth*n);
		if(n<=0){
			n=0;
			$("div.cinema-1").css("left",-pWidth*n);
		}
	})
}
/*首页container-3样式*/
function container3Move(){
	$("div.introList>ul>li").removeClass("bottomToTopNoDelay");
	setTimeout(function(){
		orderMove($("div.introList>ul>li"),"bottomToTopNoDelay");
	},300)
}
function container3(){
	$.ajax({
		type:"GET",
		url:"php/index/notice.php",
		
		success:function(data){
			var html="";
			var src=null;
			var img="";
			for(var p of data){
				img+=`<li><a href="${p.href}""><img src="${p.pic}"  data-link='${p.movielink}'></a><a href="javascript:;">${p.title}</a></li>`;
			}
			/*开始载入是就AJAX蜘蛛侠*/
			var release_date=changeDate(new Date(parseInt(data[0].release_date)));
			html+=  `<li>${data[0].title}</li>
					 <li>发布：${release_date}</li>	
					 <li>类型：${data[0].movie_type}</li>	
					 <li>主演：${data[0].protagonist}</li>	
					 <li>语言：${data[0].language}</li>
					 <li>${data[0].film_introduction}</li>
					 <li><a href="${data[0].href}">READ MORE>>></a></li>`;
			$("ul.container-3_media_jieshao").html(html);
			/*开始载入蜘蛛侠的影片*/
			$("#v1").attr("src",(data[0]).movielink);
			$("div.introList>ul").html(img);
			$("div.introList>ul").on("click","img",e=>{
				$("#v1").attr("src",$(e.target).data("link"));
				var index=$(e.target).parent().parent().index();
				var val=data[index];
				var date=changeDate(new Date(parseInt(val.release_date)));
				html=`<li>${val.title}</li>
							 <li>发布：${release_date}</li>	
							 <li>类型：${val.movie_type}</li>	
							 <li>主演：${val.protagonist}</li>	
							 <li>语言：${val.language}</li>
							 <li>${val.film_introduction}</li>
							 <li><a href="${val.href}">READ MORE>>></a></li>`;
				$("ul.container-3_media_jieshao").html(html);
			})
		},
		error:function(){
			alert:"网络错误";
		}	
	})
};
/*首页container-4样式*/
function container4Move(){
	$("#container-4_wrap").removeClass("topToBottom");
	setTimeout(function(){
		orderMove($("#container-4_wrap"),"topToBottom");
	},300)
}
function container4(){
	/*传入海报图片*/
	$.ajax({
		type:"GET",
		url:"php//index/poster.php",
		success:function(data){
			var html="";
			for(var p of data){
				html+=`<div class="wrap">
							<img src="${p.pic}" alt="">
							<p><a href="${p.href}">${p.title}</a></p>
						</div>`
			}
		$("#container-4_wrap").html(html);
		orderMove($("#container-4_wrap"),"topToBottom");
		},
		error:function(){
			alert("网络出错");
		}
	})
};

/*首页container-5样式*/
	/*破碎效果*/
function container5Move(){
	$("div.container-5_aside_list>ul").removeClass("bottomToTopNoDelay");
	setTimeout(function(){
		orderMove($("div.container-5_aside_list>ul"),"bottomToTopNoDelay");
	},300)
}
function broke(){
	var oList=document.getElementById("list");
	var a=document.querySelectorAll("div.newList>a");
	var aLi=oList.getElementsByTagName("li");
	//行数
	var iRows=oList.clientHeight/aLi[0].offsetHeight;
	//列数
	var iCeils=aLi.length/iRows;
	//	for(i=0;i<aLi.length;i++){
	//		aLi[i].style.cssText="background:url('pic/1497591807.jpg') no-repeat"
	 //	}
	//2、找到单元格所处的位置
	var oXyLi=setXy(aLi,iRows,iCeils);
	a[1].onclick=function(){
		//点击时从最后一个变化
		tab(oXyLi,iCeils-1,iRows-1,function(){
				with(this.style){
					 transition="1s background,0.2s border,0.3s 0.15s box-shadow,2s 0.3s transform,2s 0.3s opacity"/*9、背景图进场时的动画12、阴影过渡动画10、裂纹动画13、翻转过度动画透明度过度动画*/;
					/*9、增加裂缝*/
					borderColor="rgba(0,0,0,0.6)";
					boxShadow="0 0 20px blue"; /*11、阴影，产生光晕效果*/
					WebkitTransform="translate(-50px,-150px) rotateX(-720deg) rotateY(-360deg)";/*13、翻转效果*/
					opacity=0;
				}
			},50,-1,-1);
	};
	a[0].onclick=function(){
		//点击时从第一个变化
		tab(oXyLi,0,0,function(){
				with(this.style){
					transition="1s background,0.2s border,0.3s  box-shadow,1s transform ease-in,1s opacity ease-in";
					/*9、增加裂缝*/
					borderColor="rgba(0,0,0,0)";
					boxShadow="0 0 0 blue"; /*11、阴影，产生光晕效果*/
					WebkitTransform="translate(0px,0px) rotateY(0deg) rotateX(0deg)";/*13、翻转效果*/
					opacity=1;
				}
			},50,1,1);
	}
		//3、单击事件，获取位置 测试用
		/*for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				//5、执行切换函数
				tab(oXyLi,this.xIndex,this.yIndex,function(){
					this.style.background="yellow";
				},50)
			}
		}*/
	 
	//4、封装切换函数
	function tab(arr,x,y,fn,delay,xSpeed,ySpeed){
		//6、如果x,y不存在，就不执行函数
		if(!arr[y]||!arr[y][x]){
			return;
		}
		//如果函数存在时执行
		if(fn){
			fn.call(arr[y][x]);
			//6、延迟定时器
			setTimeout(function(){
				7//重置时要变成+1，所以不能写死，传xSpeed和ySpeed进去
				tab(arr,x,y+ySpeed,fn,delay,xSpeed,ySpeed);
				tab(arr,x+xSpeed,y,fn,delay,xSpeed,ySpeed); 
			},delay)	
		}
	}
	//1、建立X轴Y轴
	function setXy(objs,iRows,iCeils){
		var arr=[];
		var wid=parseInt($("#wrap").css("width"));
		var height=parseInt($("#wrap").css("height"));
		for(var i=0;i<iRows;i++){
			var arr2=[];
			for(var j=0;j<iCeils;j++){
				/*X坐标  objs[i*iCeils+j]代表第几个单元格*/
				objs[i*iCeils+j].xIndex=j;
				objs[i*iCeils+j].yIndex=i;
				/*8、每个单元格图片位置固定，把图片拼接*/
				objs[i*iCeils+j].style.backgroundPosition=-(j*36)+"px -"+(i*34)+"px";
				arr2.push(objs[i*iCeils+j]);
			}
			arr.push(arr2);
		}
		//接受坐标
		return arr;
	}
}
//	传入新闻图片
function container5(){
	$.ajax({
		type:"GET",
		url:"php/index/news.php",
		success:function(data){
				function aj(index){
					var html="";
					var imp="";
					for(var p of data.news[index]){
						html+=`<ul>
								<img src="${p.pic}" alt="">
								<li><a href="${p.href}">${p.article}</a></li>
								<li><span>${p.news_time}</span></li>
								</ul>`
				}
				$("div.container-5_aside_list").html(html);
				imp+=`	<p>${data.hot[index].title}</p>
						<ul class="clear zuozhe">
							<li>${data.hot[index].release_time}</li>
							<li>${data.hot[index].author}</li>
						</ul>
						<span>${data.hot[index].details}</span>
						<ul class="clear tag">
							<li><span>标签：</span></li>
							<li><span>${data.hot[index].label1}</span></li>
							<li><span>${data.hot[index].label2}</span></li>
							<li><span>${data.hot[index].label3}</span></li>
							<li><span>${data.hot[index].label4}</span></li>
						</ul>
						<a href="${data.hot[index].href}">READ MORE>>></a>
					`;
				$("div.hot_news").html(imp);
			}
			aj(0);
			$("#back").html(`<img src="${data.hot[1].pic}">`);
			$("#list>li").css("background","url("+data.hot[0].pic+") no-repeat");
			broke();
			$("div.newList").on("click","a",e=>{
				$(e.target).addClass("active");
				$(e.target).siblings().not("span").removeClass("active");
				var index=$(e.target).index()/2;
				aj(index);
				orderMove($("div.container-5_aside_list>ul"),"bottomToTopNoDelay");
			})	
		},
		error:function(){
			alert("网络出错");
		}
	})	
}

