/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 8.0.36 : Database - brtgy_draft
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`brtgy_draft` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `brtgy_draft`;

/*Table structure for table `booking` */

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(127) DEFAULT NULL,
  `fbAccount` varchar(63) DEFAULT NULL,
  `contact` varchar(11) DEFAULT NULL,
  `serviceRequest` varchar(64) DEFAULT NULL,
  `carModel` varchar(64) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `serviceId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `dateBooked` datetime DEFAULT NULL,
  `status` enum('Pending','Approved','Cancelled','Declined') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_fk` (`serviceId`),
  KEY `user_booking_fk` (`userId`),
  CONSTRAINT `service_fk` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`),
  CONSTRAINT `user_booking_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_cart_fk` (`userId`),
  KEY `product_cart_fk` (`productId`),
  CONSTRAINT `product_cart_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `user_cart_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `cart` */

/*Table structure for table `draft` */

DROP TABLE IF EXISTS `draft`;

CREATE TABLE `draft` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `draft` */

insert  into `draft`(`id`,`test`) values 
(27,'asdsDD'),
(28,'zxczxc'),
(29,'asds'),
(30,'asdasdasd'),
(31,'asdasdasd'),
(32,'asd'),
(34,'asd'),
(35,'asd'),
(36,'asd');

/*Table structure for table `product_type` */

DROP TABLE IF EXISTS `product_type`;

CREATE TABLE `product_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `product_type` */

insert  into `product_type`(`id`,`type`) values 
(1,'Interiors'),
(2,'Exteriors'),
(3,'Performance'),
(4,'Safety'),
(5,'Electronics'),
(6,'Convenience');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(63) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stocks` int DEFAULT NULL,
  `productType` int DEFAULT NULL,
  `amountSold` int DEFAULT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_category_fk` (`productType`),
  CONSTRAINT `product_category_fk` FOREIGN KEY (`productType`) REFERENCES `product_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`productName`,`description`,`price`,`stocks`,`productType`,`amountSold`,`productImage`,`isDeleted`) values 
(32,'LeBonboners','Sunshine',1000000,10,3,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722653480/vdudfprko3erhegpcgj0.jpg',0),
(35,'Alden Recharge X Cat','dasdasdad',123,123,2,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722491753/kinbe27yxdcireool56r.jpg',0),
(40,'Martin','This guy has a dream',25,1,2,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722579385/jpfrdk9otbtimzpruyc4.jpg',0),
(41,'Random Germon','Random German with unique mustache',1000000,1,4,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722579657/bzm3jz2xqxpyasu5pnbl.jpg',0),
(42,'Arvie Ingal Gwapo','Buang',900000,2,3,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722655001/j4jqtoiffpbc7xoir41j.png',0),
(43,'wofo','qweqwe',123,123,2,0,'',0),
(44,'tset','test',123,123,1,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1722826222/ipgli9n7fkght3zgimi1.gif',0),
(45,'qwe','zxczxczxczxc',123,123,3,0,'',0),
(46,'tst','asdfcvbcvbg',34534,1,2,0,'',0),
(47,'adas','qweqweqwe',123,345,1,0,'/images/empty-image.png',0),
(48,'zxczxc','asdasdasdazxczxcz zcasdasdasd',123,45,5,0,'',0),
(49,'jhu marie','jhu marie aringay',10000000,20,5,0,'https://res.cloudinary.com/dgxlqujte/image/upload/v1724834070/jfawl5t4od1qdmf3z0yc.jpg',0);

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(63) DEFAULT NULL,
  `serviceDescription` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`serviceDescription`) values 
(1,'Test','Test description');

/*Table structure for table `user_purchase` */

DROP TABLE IF EXISTS `user_purchase`;

CREATE TABLE `user_purchase` (
  `userPurchaseId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`userPurchaseId`),
  KEY `user_fk` (`userId`),
  KEY `product_fk` (`productId`),
  CONSTRAINT `product_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `user_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user_purchase` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(64) DEFAULT NULL,
  `lastname` varchar(64) DEFAULT NULL,
  `phoneNumber` varchar(11) DEFAULT NULL,
  `emailAddress` varchar(64) DEFAULT NULL,
  `password` varchar(23) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `role` enum('ADMIN','CUSTOMER') DEFAULT NULL,
  `dateCreated` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` enum('ACTIVE') DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`firstname`,`lastname`,`phoneNumber`,`emailAddress`,`password`,`username`,`role`,`dateCreated`,`status`) values 
(15,'Mike','Oxlong','096969669','mike@gmail.com','mikeOxlong','Mike','ADMIN','2024-07-29 09:18:52','ACTIVE'),
(16,'Moe','Lester','09696969669','moe@gmail.com','moeLester','Moe','CUSTOMER','2024-07-29 09:18:52','ACTIVE'),
(17,'Joe','Mama','0969696966','joe@gmail.com','joeMama','Joe','CUSTOMER','2024-07-29 09:18:52','ACTIVE'),
(18,'Fae','Dofilia','9669991051','Fae@gmail.com','FaeDo','FaeDo','CUSTOMER','2024-07-29 09:24:25','ACTIVE'),
(19,'Test','test','9668891051','Test@gmail.com',NULL,'Test','CUSTOMER','2024-07-29 09:44:43','ACTIVE');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
