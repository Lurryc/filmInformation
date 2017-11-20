/*载入商品详情*/
/*有序运动*/
function orderMove(arr,className){
	for(let i=0;i<arr.length;i++){
		setTimeout(function(){
			arr[i].className=className;
		},300*i)
	}
}
$(document).ready(function(){
  var headerHeight=parseInt($("#header").css("height"));
  $("#product-details").css("padding-top",headerHeight);
  $(window).scroll(function() {
    var srollTop = $(window).scrollTop(); 
	$("#header").css("height",headerHeight-srollTop);
  });
});
/*载入整个页面的图片*/
(function(){
	var lid=location.search.split("=");
	var lid=lid[lid.length-1];
	$.ajax({
		type:"GET",
		url:"php/index/product_details.php",
		data:{lid:lid},
		success:function(data){
			var html="";
			for(var p of data.detail){
				html+=`<p class="show_title">${p.title}</p>
							<ul class="show_date clear">
								<li><span></span>${p.edit_time}</li>
								<li><span></span>${p.editor}</li>
							</ul>
							<p class="show_article">${p.intro}</p>
							<p class="price"><span>${p.child_ticket}</span></p>
							<p>选择</p>
							<ul class="ticket_class clear">
								<li><a href="javascript:;">儿童票</a></li>
								<li><a href="javascript:;">成人票</a></li>
							</ul> 
							<p >数量</p>
							<ul class="ticket_count clear">
								<li><a href="javascript:;">-</a></li>
								<li><span>1</a></span>
								<li><a href="javascript:;">+</a></li>
							</ul>
							<p class="total_count">库存${p.inventory}</p>
							<p class="total">小计<span></span></p>	
							<ul class="buy">
								<li><a href="javascript:;">立即购买</a></li>
								<li><a href="javascript:;" class="getShoppingCart">加入购物车</a></li>
							</ul>`;
			}
			$("p.detail_pic").html(`<img src="${p.detail_pic}" alt="">`);
			$("div.show-details").html(html);
			/*购物车*/
			$("div.show-details").on("click","ul.ticket_class a",e=>{
				var n=1;
				var ticketClass=null;
				if($(e.target).html()=="儿童票"){
					$("p.price").html(`<span>${p.child_ticket}</span>`);
					$("p.total>span").html(`<span>${p.child_ticket}</span>`)
					ticketClass="儿童票";
				}else if($(e.target).html()=="成人票"){
					$("p.price").html(`<span>${p.adult_ticket}</span>`);
					$("p.total>span").html(`<span>${p.adult_ticket}</span>`)
					ticketClass="成人票";
				}
				$("ul.ticket_count span").html(n);
				var price=parseInt($("p.price>span").html());
				var total=price;
				$("div.show-details").on("click","ul.ticket_count a",e=>{
					e.preventDefault();
					if($(e.target).html()=="+"){
						n++;	
					}else{
						n--
						if(n<=0){
							n=1
						}
					}
					total=price*n;
					$("p.total>span").html(total)
					$("ul.ticket_count span").html(n);
				})
				/*加入购物车*/
				var price=parseInt($("p.price>span").html());
				var count=parseInt($("ul.ticket_count span").html());
				var name=`${p.title}`;
				var stock=`${p.inventory}`;
				var $trs = $("#goods>tr");  
				  	
			})
			var html="";
			for(img of data.pics){
				for(var index in img){
					if(img[index]!=''){
						html+=`
							<li><img src="${img[index]}" alt=""></li>
						`
					}	
				}
			}
			$("ul.lg").html(html);
			$("ul.sm").html(html);
			var lgWid=(parseInt($("ul.lg>li").css("width"))+1)*$("ul.lg>li").length;
			var wid=parseInt($("ul.lg>li").css("width"));
			$("ul.lg").css("width",lgWid);
			var html="";
			for(var index in data.banners){
				html+=`<li>
							<a href="shopping.html?lid=${data.banners[index].laptop_id}"><img src="${data.banners[index].img}" alt=""></a>
							<p>${data.banners[index].title}</p>
							<p>${data.banners[index].price}</p>
						</li>`
			}
			$("ul.bannerList").html(html);		
			(function(){	
				$("ul.sm").on("mouseover","li",e=>{
					var index=$(e.target).parent().index();	
					$("ul.lg").css("right",wid*index);
				})
			})();
		},
		error:function(){
			alert("网络错误");
		}
	});
})();   

