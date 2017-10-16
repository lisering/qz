DROP DATABASE IF EXISTS state;
CREATE DATABASE state;
USE state;
DROP TABLE IF EXISTS state;
CREATE TABLE state(
  areaName VARCHAR(128) NOT NULL,
  stateName VARCHAR(128) NOT NULL,
  stateImg VARCHAR(255) NOT NULL,
  stateDescription VARCHAR(512) NOT NULL,
  stateVotes INT DEFAULT 0,
  recordTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET =utf8mb4 ROW_FORMAT=COMPACT;

-- INSERT INTO state VALUES ("华北大区/北京一区", "上地站", "images/1.jpg", "网站即网络站点的简称。是指在因特网上，根据一定的规则，使用HTML等工具制作的用于展示特定内容的相关网页的集合。简单地说，网站是一种通讯工具，就像布告栏一样，人们可以通过网站来发布自己想要公开的资讯，或者利用网站来提供相关的网络服务。人们可以通过网页浏览器来访问网站，获取自己需要的资讯或者享受网络服务。", 0, NOW()),
--                          ("西南大区/昆明一区", "莲花站", "images/2.jpg", "网站即网络站点的简称。是指在因特网上，根据一定的规则，使用HTML等工具制作的用于展示特定内容的相关网页的集合。简单地说，网站是一种通讯工具，就像布告栏一样，人们可以通过网站来发布自己想要公开的资讯，或者利用网站来提供相关的网络服务。人们可以通过网页浏览器来访问网站，获取自己需要的资讯或者享受网络服务。", 0, NOW());

DROP TABLE IF EXISTS device;
CREATE TABLE device(
  deviceId VARCHAR(64) NOT NULL,
  stateName VARCHAR(128) NOT NULL,
  voteTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET =utf8mb4 ROW_FORMAT=COMPACT;