SET NAMES UTF8;
DROP DATABASE IF EXISTS cinema;
CREATE DATABASE cinema CHARSET=UTF8;
USE cinema;
#注册
CREATE TABLE ys_user(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(32) NOT NULL DEFAULT "",
	upwd VARCHAR(32) NOT NULL DEFAULT "",
	email VARCHAR(64) NOT NULL DEFAULT "",
	phone VARCHAR(16) NOT NULL UNIQUE,	
	isdel INT NOT NULL DEFAULT 0);
INSERT INTO ys_user VALUES
(NULL,'dingdong','123456','1561116@qq.com','15615616187',0);

#购物车表，记载所有用户的购物车数据关联到用户表，商品表
CREATE TABLE ys_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT NOT NULL ,
	product_id INT NOT NULL ,
	count INT NOT NULL DEFAULT 0
);
INSERT INTO ys_shopping_cart VALUES
(NULL,1,1,5);
#订单表，记载所有用户的订单
CREATE TABLE ys_order(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT NOT NULL ,
	address_id INT NOT NULL ,
	status INT NOT NULL , 
	order_time BIGINT NOT NULL ,
	pay_time BIGINT NOT NULL ,
	deliver_time BIGINT NOT NULL,
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_order VALUES
(1,1,1,2,14598415112345,14598415162345,14599415112345,0);
#订单详细表，记载订单的详细信息关联到订单表
CREATE TABLE ys_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT NOT NULL ,
	product_id INT NOT NULL ,
	count INT NOT NULL 
);
INSERT INTO ys_order_detail VALUES
(1,231321,1,1);
#商品种类表，记载所有的商品种类
CREATE TABLE ys_laptop_family(
	family_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(32) NOT NULL DEFAULT "",
	isdel INT NOT NULL DEFAULT 0
	);
INSERT INTO ys_laptop_family VALUES
(1,'科幻定制',0),
(2,'火爆动作',0),
(3,'爱情唯美',0);

#商品表，记载所有商品的信息关联到种类表
CREATE TABLE ys_laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT NOT NULL ,
	title VARCHAR(128) NOT NULL DEFAULT "",
	intro VARCHAR(1280) NOT NULL DEFAULT "",
	detail_pic VARCHAR(128) NOT NULL DEFAULT "",
	editor VARCHAR(128) NOT NULL DEFAULT "",
	child_ticket DECIMAL(4,2) NOT NULL ,
	adult_ticket DECIMAL(4,2) NOT NULL ,
	details	VARCHAR(1024) NOT NULL DEFAULT "",	
	edit_time BIGINT NOT NULL , 
	sold_count INT NOT NULL DEFAULT 0,   
	inventory INT NOT NULL DEFAULT 0,
	is_onsale BOOLEAN NOT NULL DEFAULT 0,
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_laptop VALUES
(1,1,'正义联盟','“美国正义联盟”里聚集了DC Comics旗下几乎所有知名的漫画英雄，包括蝙蝠侠、超人、闪电侠等等，众多英雄们聚集在一起除暴安良，保卫地球。','pic/1497667098695866.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(2,1,'星际迷航3','《星际迷航3：超越星辰》是2009年开启的新三部曲中的第三部，也是该系列第13部大银幕作，是由美国派拉蒙影业公司、美国天空之舞制片公司联合出品，由林诣彬执导，克里斯·派恩、扎克瑞·昆图、佐伊·索尔达娜、西蒙·佩吉、索菲亚·宝特拉、索瑞·安达斯鲁联合主演的科幻冒险片。《星际迷航3：超越星辰》的背景设定于《暗黑无界》之后，讲述了科克船长带领着企业号船员们到一个未知的星域去解救失事的飞船，却在途中遭遇了当地种族袭击的故事。','pic/1497679689969419.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(3,1,'明日边缘','道格·里曼执导的科幻动作电影，由汤姆·克鲁斯和艾米莉·布朗特等主演，改编自樱坂洋2004年所著日本轻小说《All You Need Is Kill》。该片以神秘外星生物袭击地球为背景，少校比尔·凯奇首次出战就“折戟沙场”惨烈牺牲，但他却由于某种不明原因重获新生，在一次一次的生死循环中，比尔越来越明了制敌方法，最终走向胜利。《明日边缘》于2014年6月6日凌晨中美同步上映。','pic/mingri.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(4,1,'钢铁侠3','该片于2013年5月1日在中国内地上映。影片根据漫威漫画改编，故事时间发生在《复仇者联盟》纽约大战结束之后，讲述了托尼·斯塔克的生活被强敌毁灭殆尽，无路可退的他必须依靠精良的高科技装备以及过人才智，保护自己和身边最亲近的人，同时揪出真正的幕后元凶的故事。','pic/1497680278644443.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(5,1,'奇异博士','本尼迪克特·康伯巴奇、切瓦特·埃加福特、瑞秋·麦克亚当斯、蒂尔达·斯文顿联合主演。该片讲述了神经外科医生史蒂芬·斯特兰奇在一次车祸中失去了双手的能力，最后在神秘的至尊魔法师的帮助下让他成为了拥有超凡魔力的奇异博士。该片于2016年11月4日以3D、IMAX 3D、中国巨幕3D版本在中国、美国同步上映。','pic/1497677558139659.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(6,1,'英雄归来','"英雄归来"是2017年漫威影业与哥伦比亚影业联合出品，索尼电影娱乐公司发行的一部科幻动作电影，由乔恩·沃茨执导，汤姆·赫兰德、迈克尔·基顿、小罗伯特·唐尼、玛丽莎·托梅等主演。该片取材自漫威漫画，是漫威电影宇宙的第十六部电影。讲述了彼得·帕克在超级英雄身份与高中生活之间面临的抉择。该片于2017年7月7日在北美公映，9月8日在中国大陆公映。','pic/1497674823674264.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(7,1,'最后的骑士','"千年之后，地球陷入毁灭危机。以凯德·伊格尔（马克·沃尔伯格饰）、艾德蒙·伯顿爵士（安东尼·霍普金斯饰）、伊莎贝拉（伊莎贝拉·莫奈饰）为首的人类反抗小组，与汽车人联手反击霸天虎在内的入侵者，一场史诗浩劫彻底将地球变成了战场。','pic/1497674276116181.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(8,1,'钢铁之躯','"英雄归来"是2017年漫威影业与哥伦比亚影业联合出品，索尼电影娱乐公司发行的一部科幻动作电影，由乔恩·沃茨执导，汤姆·赫兰德、迈克尔·基顿、小罗伯特·唐尼、玛丽莎·托梅等主演。该片取材自漫威漫画，是漫威电影宇宙的第十六部电影。讲述了彼得·帕克在超级英雄身份与高中生活之间面临的抉择。该片于2017年7月7日在北美公映，9月8日在中国大陆公映。','pic/1497681288651070.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(9,2,'仙球大战','《仙球大战》集结了快乐家族、Twins及开心麻花等一众“爆笑天团”，豪华笑星阵容强强联手讲述了一个以蹴鞠为主题的爆笑故事。影片中，朝廷内忧外患，为保国之安定，无奈召集中原各大门派掌门联手，与异族超能蹴鞠队展开了一场以割裂国土为条件的蹴鞠大战。在乱世中各大门派掌门流离失所，为贫穷所累，在适应市井生活的过程摩擦不断，笑点频出。','pic/1497686101716307.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(10,2,'原谅他77次','影片以一对相爱九年情侣因小事分手为起点展开，周柏豪饰演的男主角无意中发现了女主角蔡卓妍留下的一本“心碎日记”，才发现长久以来一直忽视了身边爱人的种种感受。知错的男主角全力挽回，可是面对种种心碎过往，女主角还会不会原谅他第78次？','pic/1497685918596721.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(11,2,'重生之门','明朝嘉靖期间，"一英三杰"----贺英、龙、虎、獒在朝堂内外赫赫有名。贺英（甄子丹饰）和獒（王宝强饰）曾为孤儿被桃源村收留，二人自小加入锦衣卫训练营并由此结识龙（任达华饰）、虎（喻亢饰）两兄弟，四人在训练成长中结下深厚友谊，歃血为盟。','pic/1497685417265764.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(12,2,'悟空传','这不是西游记的任何章节，这是悟空的故事，彼时孙悟空还不是震撼天地的齐天大圣，他只是只桀傲不驯的猴子。天庭毁掉他的花果山以掌控众生命运，他便决心跟天庭对抗，毁掉一切戒律。在天庭，孙悟空遇到不能爱的阿紫，一生的宿敌杨戬，和思念昔日爱人阿月的天蓬，他们的身份注定永生相杀，但其实不甘命运摆布的又何止孙悟空一人？却没想到反抗却带来更大的浩劫。','pic/wukong.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(13,3,'二次初恋','叶兰（朱茵饰）与路建国（王志飞饰）结婚多年，常常因生活中鸡毛蒜皮的琐事拌嘴，在第20个结婚纪念日，两人终于再起争执闹到离婚，路建国一气之下离家出走并失去联系。此时路建国的侄子路大民（杜天皓饰）却突然出现，打乱了叶兰原。','pic/1497687576580842.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(14,3,'秘果','讲述了一个关于秘密和成长的故事，段柏文和于池子是一起长大的发小，17岁的他们各自有各自的秘密和思考，在跌跌撞撞中不断摸索，而当最后所有的秘密得以公开，他们才发现“所有秘密的结果，无非是一个新的开始”，长大了的他们对未来更有期待，也更有勇气面对未知的挑战。','pic/1497687291395203.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(15,3,'与君相恋100次','濑户当地的一所大学，热爱音乐的大学女生日向葵海（miwa 饰）和长谷川陆（坂口健太郎 饰）、松田直哉（龙星凉 饰）、中村铁太（泉泽佑希 饰）这三个大男孩组成了一支轻音乐团STROBESCOPE。他们刻苦训练，朝着心中的目标笃定前行。陆是葵海的青梅竹马，他英俊帅气，音乐素养也显著超过其他成员，俨然是这支乐队的灵魂人物与主心骨。','pic/1497686817486517.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0),
(16,3,'明月几时有','影片讲述了以香港传奇女性“方姑”为代表的仁人志士，在1940年代风云变幻的香港展开生死救援的故事。片中，历史上著名的“东江纵队生死大营救”事件是重要的叙事线索——彼时，广东人民抗日游击队根据中共中央指示，克服重重困难，将何香凝、柳亚子、茅盾、邹韬奋等数百文化名人及爱国民主人士成功营救出战火纷飞的香港。','pic/1497686686.jpg','Metinfo',28.00,39.00,'',14982211232151,20,990,1,0);
#商品详情图表，记载商品的缩放图中的素材路径关联到商品表
CREATE TABLE ys_laptop_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT , 
	laptop_id INT NOT NULL ,
	title VARCHAR(128) NOT NULL,
	sm1 VARCHAR(128) NOT NULL DEFAULT "",  
	sm2 VARCHAR(128) NOT NULL DEFAULT "",
	sm3 VARCHAR(128) NOT NULL DEFAULT "",
	sm4 VARCHAR(128) NOT NULL DEFAULT "",
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_laptop_pic VALUES
(NULL,1,'正义联盟','pic/1497667098132245.jpg','pic/1497667098430403.jpg','','',0),
(NULL,2,'星际迷航3','pic/1497680590.jpg','pic/1497680443.jpg','','',0),
(NULL,3,'明日边缘','pic/1497678988.jpg','pic/1497678820.jpg','','',0),
(NULL,4,'钢铁侠3','pic/1497680394.jpg','pic/1497680781.jpg','','',0),
(NULL,5,'奇异博士','pic/1497677901.jpg','pic/1497677926.jpg','pic/1497677879.jpg','',0),
(NULL,6,'英雄归来','pic/1497675721.jpg','pic/1497675376.jpg','pic/1497675199.jpg','',0),
(NULL,7,'最后的骑士','pic/1497675252.jpg','pic/1497674372.jpg','pic/1497674985.jpg','',0),
(NULL,8,'钢铁之躯','pic/1497681760.jpg','pic/1497681981.jpg','','',0),
(NULL,9,'仙球大战','pic/1497686201.jpg','pic/1497686618.jpg','pic/1497686749.jpg','',0),
(NULL,10,'原谅他77次','pic/1497686201.jpg','pic/1497686618.jpg','pic/1497686749.jpg','',0),
(NULL,11,'重生之门','pic/1497685852.jpg','pic/1497685473.jpg','pic/1497685439.jpg','',0),
(NULL,12,'悟空传','pic/1497665349.jpg','pic/1497665779.jpg','','',0),
(NULL,13,'二次初恋','pic/1497688259.jpg','pic/1497687754.jpg','pic/1497688010.jpg','',0),
(NULL,14,'秘果','pic/1497687383.jpg','pic/1497687897.jpg','pic/1497688143.jpg','',0),
(NULL,15,'与君相恋100次','pic/1497687734.jpg','pic/1497687027.jpg','pic/1497687142.jpg','',0),
(NULL,16,'明月几时有','pic/1497687390.jpg','pic/1497687341.jpg','pic/1497687290.jpg','pic/1497686686.jpg',0);


#首页轮播图标，商品展示列表，关联到商品表
CREATE TABLE ys_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT NOT NULL,
	laptop_id INT NOT NULL UNIQUE,
	img VARCHAR(128) NOT NULL DEFAULT "",
	title VARCHAR(64) NOT NULL DEFAULT "", 
	price DECIMAL(4,2) NOT NULL,
	isdel INT NOT NULL DEFAULT 0,
	FOREIGN KEY (laptop_id) REFERENCES ys_laptop(lid)
);
INSERT INTO ys_index_carousel VALUES
(NULL,1,2,'pic/1497680590.jpg','星际迷航3',29.00,0),
(NULL,1,3,'pic/1497678988.jpg','明日边缘',29.00,0),
(NULL,1,1,'pic/1497667098132245.jpg','正义联盟',29.00,0),
(NULL,1,4,'pic/1497680394.jpg','钢铁侠3',29.00,0),
(NULL,1,5,'pic/1497677901.jpg','奇异博士',29.00,0),
(NULL,1,6,'pic/1497675721.jpg','英雄归来',29.00,0),
(NULL,1,7,'pic/1497675252.jpg','最后的骑士',29.00,0),
(NULL,1,8,'pic/1497681760.jpg','钢铁之躯',29.00,0),
(NULL,2,9,'pic/1497686201.jpg','仙球大战',29.00,0),
(NULL,2,10,'pic/1497686185.jpg','原谅他77次',29.00,0),
(NULL,2,11,'pic/1497685852.jpg','重生之门',29.00,0),
(NULL,2,12,'pic/1497665349.jpg','悟空传',29.00,0),
(NULL,3,13,'pic/1497688259.jpg','二次初恋',29.00,0),
(NULL,3,14,'pic/1497687383.jpg','秘果',29.00,0),
(NULL,3,15,'pic/1497687734.jpg','与君相恋100次',29.00,0),
(NULL,3,16,'pic/1497687390.jpg','明月几时有',29.00,0);

#首页电影预告
CREATE TABLE ys_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64) NOT NULL DEFAULT "",
	movielink VARCHAR(1024) NOT NULL DEFAULT "", 
	href VARCHAR(1024) NOT NULL DEFAULT "", 
	pic VARCHAR(1024) NOT NULL DEFAULT "",
	release_date BIGINT NOT NULL ,
	movie_type VARCHAR(32) NOT NULL DEFAULT "",
	protagonist VARCHAR(32) NOT NULL DEFAULT "",
	language varchar(16) NOT NULL DEFAULT "",
	film_introduction VARCHAR(1024) NOT NULL DEFAULT "",
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_index_product VALUES
(NULL,'蜘蛛侠：英雄归来','video/854x4805927eda35b91487b8a0aaec3b758ab1c.mp4','javascript:;','pic/1497618161.jpg',1501516800,'动作，奇幻，冒险','乔恩·沃茨，迈克尔·基顿','英语（中文翻译）','《蜘蛛侠：英雄归来》由乔恩·沃茨导演，由汤姆·霍兰德 / 小罗伯特·唐尼 / 玛丽莎·托梅 / 迈克尔·基顿主演。《蜘蛛侠：英雄归来》的上映日期是2017年08月01日。',0),
(NULL,'神奇女侠','video/854x480d9370a5bfcb540c4a09e4a3d00e72319.mp4','javascript:;','pic/1497619129.jpg',1496332800,'动作，奇幻，冒险','派蒂·杰金斯，盖尔·加朵','英文（中文字幕）','由女导演派蒂·杰金斯(Patty Jenkins，代表作品《女魔头》)执导，盖尔·加朵、克里斯·派恩(Chris Pine，代表作品《星际迷航》系列)等好莱坞当红明星主演',0),
(NULL,'新木乃伊','video/2053347012b94145ad7ba847427ae778.mp4','javascript:;','pic/1497618065.jpg',1496937600,'动作，奇幻，冒险','安娜贝拉·沃丽丝','英文（中文字幕）','新版《木乃伊》讲述了一个全新故事，木乃伊公主阿玛内特穿梭到现代伦敦，企图寻回她曾被夺去的一切。本片由动作巨星汤姆·克鲁斯主演。',0),
(NULL,'加勒比海盗5','video/854x48048034498937d40f1b44f0153009bc710.mp4','javascript:;','pic/1497619388.jpg',1495728000,'澳大利亚，动作，奇幻','艾斯彭·山德伯格','英文（中文翻译）','故事发生在《加勒比海盗3：世界的尽头》沉船湾之战20年后。 亡灵萨拉查船长（哈维尔·巴登 Javier Bardem 饰）率领自己的亡灵海军杀出了世界的尽头，“深海阎王”威尔·特纳（奥兰多·布鲁姆 Orlando Bloom 饰）乘飞翔的荷兰人号前来追杀却被其引入百慕大三角生死未卜。',0),
(NULL,'异形：契约','video/854x48063ef0c702131416d8e217aee92538aa2.mp4','javascript:;','pic/1497620071.jpg',1495123200,'科幻，惊悚，恐怖','丹尼·麦克布耐德','英文（中文字幕）','“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后。',0),
(NULL,'重返·狼群','video/854x4806750e14f32af42a391d6d93338a9f444.mp4','javascript:;','pic/1497620016.jpg',1497542400,'纪录片，历史','亦风','中文，普通话','美女画家李微漪在一次草原采风中意外收养了狼王遗孤，为其取名格林，并带回成都喂养。但繁华的都市无法容纳一匹野性的草原狼。',0),
(NULL,'中国推销员','video/854x4807ec52052e5734d2389ff474304bc2492.mp4','javascript:;','pic/1497620835.jpg',1497542400,'动作','檀冰，李东学，迈克·泰森','中文，普通话','这是一个令人拍案惊奇的真实故事。中国DH移动通讯公司的推销员严键（李东学 饰）来到了南北长期分裂、冲突不断的北非某国开拓业务。',0),
(NULL,'借眼','video/1146x480c07b258286d3412c9fe9e60496b51045.mp4','javascript:;','pic/1497620606.jpg',1497542400,'爱情，悬疑，惊悚','张洋，陈浩民，薛佳凝','中文，普通话','女主角明依（薛佳凝 饰）是位失明的单身母亲，带着女儿欢欢独自经营一家花店，后经过眼科医生高木（陈浩民 饰）的治疗，明依得以重见光明。',0);
#首页海报
CREATE TABLE ys_poster(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(1024) NOT NULL DEFAULT "",
	title VARCHAR(64) NOT NULL DEFAULT "",
	href VARCHAR(64) NOT NULL DEFAULT "",
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_poster VALUES
(NULL,'pic/1497596507.jpg','最后的骑士','javascript',0),
(NULL,'pic/1497608063.jpg','最后的骑士','javascript',0),
(NULL,'pic/1497608327.jpg','最后的骑士','javascript',0),
(NULL,'pic/1497609224.jpg','最后的骑士','javascript',0),
(NULL,'pic/1497609553.jpg','最后的骑士','javascript',0),
(NULL,'pic/1497609702.jpg','最后的骑士','javascript',0);
#首页推荐电影 热搜新闻查询时要用hot(热度)查询
CREATE TABLE ys_recommend(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(1024) NOT NULL DEFAULT "",
	title VARCHAR(32) NOT NULL DEFAULT "",		
	release_time BIGINT NOT NULL ,
	author VARCHAR(32) NOT NULL DEFAULT "",
	details VARCHAR(1024) NOT NULL DEFAULT "",
	label1 VARCHAR(16) NOT NULL DEFAULT "",
	label2 VARCHAR(16) NOT NULL DEFAULT "",
	label3 VARCHAR(16) NOT NULL DEFAULT "",
	label4 VARCHAR(16) NOT NULL DEFAULT "",
	href VARCHAR(1024) NOT NULL DEFAULT "",
	hot INT NOT NULL DEFAULT 0,
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_recommend VALUES

(NULL,'pic/1497583664.jpg','《上古情歌》东方神话剧的想象力',1232138472189,'Metinfo','黄晓明与宋茜主演的《上古情歌》，目前已经在社交网络上形成了话题效应。《上古情歌》以中国古典神话体系《山海经》为背景，创造了奇绝瑰丽、充满东方想象的上古世界，展现了大荒纷争聚合下的战争史与悲情挽歌。东方神话本身就是一个杂糅的复合体，它的内部基因里不仅有中国仙侠小说的传统，《上古情歌》在东方式的上古世界里上演着一个西方神话传统中追寻自由与爱情的浪漫主义故事。','上古情歌','山海经','奇绝瑰丽','仙侠小说','javascript:;',158,0),
(NULL,'pic/1497591807.jpg','看完《健忘村》，我感觉到了后背的一丝凉意',1232138472189,'Metinfo','今年的贺岁档影片一如既往地以喜剧为主，但同时又都包含了暴力元素：小镇街头暴力、古典魔幻暴力、印度风情双倍暴力以及虚构民国桃花源暴力。这些暴力场景主要是为了表现喜剧元素而存在，有不怎么好笑的，也有干脆不好笑的，《健忘村》就属于笑得很冷而且有点恐怖的那种。贺岁档期是电影院线的战国时代，“片子太多、场次不够用”，大多数人对于《健忘村》在群雄争霸中战局失利的原因讳而','舒淇饰演','养父村长','王千源','遭遇水土不服','javascript:;',160,0),
(NULL,'pic/1497583664.jpg','《A上古情歌》东方神话剧的想象力',1232138472189,'Metinfo','黄晓明与宋茜主演的《上古情歌》，目前已经在社交网络上形成了话题效应。《上古情歌》以中国古典神话体系《山海经》为背景，创造了奇绝瑰丽、充满东方想象的上古世界，展现了大荒纷争聚合下的战争史与悲情挽歌。东方神话本身就是一个杂糅的复合体，它的内部基因里不仅有中国仙侠小说的传统，《上古情歌》在东方式的上古世界里上演着一个西方神话传统中追寻自由与爱情的浪漫主义故事。','上古情歌','山海经','奇绝瑰丽','仙侠小说','javascript:;',68,0),
(NULL,'pic/1497591807.jpg','B看完《健忘村》，我感觉到了后背的一丝凉意',1232138472189,'Metinfo','今年的贺岁档影片一如既往地以喜剧为主，但同时又都包含了暴力元素：小镇街头暴力、古典魔幻暴力、印度风情双倍暴力以及虚构民国桃花源暴力。这些暴力场景主要是为了表现喜剧元素而存在，有不怎么好笑的，也有干脆不好笑的，《健忘村》就属于笑得很冷而且有点恐怖的那种。贺岁档期是电影院线的战国时代，“片子太多、场次不够用”，大多数人对于《健忘村》在群雄争霸中战局失利的原因讳而','舒淇饰演','养父村长','王千源','遭遇水土不服','javascript:;',77,0),
(NULL,'pic/1497583664.jpg','C《上古情歌》东方神话剧的想象力',1232138472189,'Metinfo','黄晓明与宋茜主演的《上古情歌》，目前已经在社交网络上形成了话题效应。《上古情歌》以中国古典神话体系《山海经》为背景，创造了奇绝瑰丽、充满东方想象的上古世界，展现了大荒纷争聚合下的战争史与悲情挽歌。东方神话本身就是一个杂糅的复合体，它的内部基因里不仅有中国仙侠小说的传统，《上古情歌》在东方式的上古世界里上演着一个西方神话传统中追寻自由与爱情的浪漫主义故事。','上古情歌','山海经','奇绝瑰丽','仙侠小说','javascript:;',88,0),
(NULL,'pic/1497591807.jpg','D看完《健忘村》，我感觉到了后背的一丝凉意',1232138472189,'Metinfo','今年的贺岁档影片一如既往地以喜剧为主，但同时又都包含了暴力元素：小镇街头暴力、古典魔幻暴力、印度风情双倍暴力以及虚构民国桃花源暴力。这些暴力场景主要是为了表现喜剧元素而存在，有不怎么好笑的，也有干脆不好笑的，《健忘村》就属于笑得很冷而且有点恐怖的那种。贺岁档期是电影院线的战国时代，“片子太多、场次不够用”，大多数人对于《健忘村》在群雄争霸中战局失利的原因讳而','舒淇饰演','养父村长','王千源','遭遇水土不服','javascript:;',77,0);

#首页新闻资讯
CREATE TABLE ys_news(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(1024) NOT NULL DEFAULT "",
	title VARCHAR(32) NOT NULL DEFAULT "",
	href VARCHAR(1024) NOT NULL DEFAULT "",
	article VARCHAR(64) NOT NULL DEFAULT "",
	news_time BIGINT NOT NULL,
	type VARCHAR(32) NOT NULL DEFAULT "",
	isdel INT NOT NULL DEFAULT 0
);
INSERT INTO ys_news VALUES
(NULL,'pic/1497591807(1).jpg','健忘村','#','看完《健忘村》，我感觉到了后背的一丝凉意',1883921391,'明星策划',0),
(NULL,'pic/1497588426.jpg','捉妖记','#','2015年白百合井柏然喜剧奇幻片《捉妖记》',1883921391,'明星策划',0),
(NULL,'pic/1497593423.jpg','越光宝盒','#','《越光宝盒》：十六年前的那段情事终于可以释怀了',1883921391,'明星策划',0),
(NULL,'pic/1497586404.jpg','万万没想到','#','屌丝喜剧吊打精英文化 曾志伟、赵文瑄等新老明星助阵《万万没想到》',1883921391,'明星策划',0),
(NULL,'pic/1497592380.jpg','美人鱼2','#','星爷《美人鱼2》立项玩',1883921391,'娱乐八卦',0),
(NULL,'pic/1497593116.jpg','九层妖塔','#','《九层妖塔》被判侵犯署名权 原著作者天下霸唱将获得电影署名',1883921391,'娱乐八卦',0),
(NULL,'pic/1497587695.jpg','降龙大师','#','《降龙大师》禅意主题展现民族符号',1883921391,'娱乐八卦',0);