/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : muying

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 20:21:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL COMMENT '商品路径',
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品名称',
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品描述',
  `qty` int(11) DEFAULT NULL COMMENT '商品数量',
  `price` decimal(10,2) DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品规格',
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '商品颜色',
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '商品添加的时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('laoxie', '123456');
INSERT INTO `user` VALUES ('张三', '123456');
INSERT INTO `user` VALUES ('李四', '123456');
INSERT INTO `user` VALUES ('王五', '123456');
INSERT INTO `user` VALUES ('', 'e10adc3949ba59abbe56e057f20f883e');
SET FOREIGN_KEY_CHECKS=1;
