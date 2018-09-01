SET NAMES UTF8;
DROP DATABASE IF EXISTS cqu;
CREATE DATABASE cqu CHARSET=UTF8;
USE cqu;
/*商品列表*/
CREATE TABLE commodity( 
/*书号，书名，内容，出版日期，出版社，价格，作者，开本*/
  cid INT PRIMARY KEY AUTO_INCREMENT,
  ISBN VARCHAR(255) UNIQUE, 
  uname VARCHAR(40),
  content VARCHAR(255),
  publication_date INT,
  publishing_house VARCHAR(20),
  cost DECIMAL(9,2),
  writer VARCHAR(20),
  format VARCHAR(10),
  img_url VARCHAR(255)
);
INSERT INTO commodity VALUES (1,9787562450887,"问卷统计分析实务--SPSS操作与应用","本书的内容架构，在于完整介绍问卷调查法中的数据处理与其统计分析流程，统计分析技术以SPSS统计软件包的操作界面与应用为主，内容除基本统计原理的解析外，着重的是SPSS统计软件包在量化研究上的应用",1277827200000,"重庆大学出版社",69.00,"吴明隆","16开","img"),
(2,9787562459224,"中国昆虫生态大图鉴","《中国昆虫生态大图鉴》系百名中国昆虫分类学家、生态摄影师5年合作的结晶。本书通过大量野外生态照片以及识别特征、生活习性、分布地区的描述，图文并茂地介绍了六足总纲3纲29目2 200多种昆虫。作为国内目前最全面的昆虫物种生态图鉴，本书不仅呈现了昆虫分类系统研究的*成果，是极有价值的生物工具书，还以大量珍贵照片充分展现了自然的神秘和奇美，适合昆虫学研究者、昆虫爱好者、自然摄影爱好者等一切热爱自然的朋友们欣赏和收藏。",1304092800000,"重庆大学出版社",69.00,"张巍巍，李元胜","大16开","img");

/*用户列表*/
CREATE TABLE user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(20),
   upwd VARCHAR(64),
   img_url VARCHAR(255),
   cart VARCHAR(255)
);
INSERT INTO user VALUES(1,"dingding","123456","img","n"),
                       (2,"dingdong","123456","img","n"),
                       (3,"dongdong","123456","img","n");