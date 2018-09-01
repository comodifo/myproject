set names utf8;
DROP DATABASE IF EXISTS projectOne;
create database projectOne charset=utf8;
use projectOne;
create table homeTopNav(
 Tid tinyint primary key auto_increment,
 TN_name varchar(40) unique,
 contentOne varchar(100),
 img_urlOne varchar(30),
 contentTwo varchar(100),
 img_urlTwo varchar(30),
 contentThree varchar(100),
 img_urlThree varchar(30),
 contentFour varchar(100),
 img_urlFour varchar(30)
);
create table homeMiddleContent(
  Mid tinyint primary key auto_increment,
  MC_name varchar(40) unique,
  head varchar(40),
  content varchar(100),
  btn_text varchar(15),
  img_url varchar(30),
  img_text varchar(50),
  img_head varchar(15)
);
create table homeBottomContent(
  Bid tinyint primary key auto_increment,
  BC_name varchar(40) unique,
  head varchar(40),
  contentOne varchar(100),
  img_urlOne varchar(40),
  contentTwo varchar(100),
  img_urlTwo varchar(40),
  contentThree varchar(100),
  img_urlThree varchar(40),
  contentFour varchar(100),
  img_urlFour varchar(40)
);
create table PagesImgContent(
  PICid int primary key auto_increment,
  PIC_name varchar(40) unique,
  img_url varchar(40),
  img_head varchar(40),
  side_head varchar(40)
);
create table PagesSideText(
  PSTid int primary key auto_increment,
  textOne varchar(20),
  textTwo varchar(20),
  textThree varchar(20),
  side_head varchar(20)
);
create table Overview(
  O_id int primary key auto_increment,
  top_text varchar(40),
  img_url varchar(40),
  birthday date,
  mailbox varchar(20),
  Details varchar(100),
  url_text varchar(20)
);
create table Feedback(
  Fid tinyint primary key auto_increment,
  F_name varchar(20),
  content varchar(100)
);
create table denglu(
  id int primary key auto_increment,
  name varchar(10),
  pwd int
);
insert into denglu values(1,'明明',123456);
insert into denglu values(2,'kk',123456);