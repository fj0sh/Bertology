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

/*Table structure for table `booked_service` */

DROP TABLE IF EXISTS `booked_service`;

CREATE TABLE `booked_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceId` int DEFAULT NULL,
  `bookingId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_fk` (`bookingId`),
  KEY `service_fk` (`serviceId`),
  CONSTRAINT `booking_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_fk` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booked_service` */

insert  into `booked_service`(`id`,`serviceId`,`bookingId`) values 
(63,9,60),
(64,10,60),
(65,11,60);

/*Table structure for table `booking` */

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `contactNumber` varchar(11) DEFAULT NULL,
  `municipality` varchar(45) DEFAULT NULL,
  `barangay` varchar(45) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `carModel` varchar(45) DEFAULT NULL,
  `additionalDetails` varchar(128) DEFAULT NULL,
  `proofOfPayment` varchar(255) DEFAULT NULL,
  `bookedDate` varchar(45) DEFAULT NULL,
  `status` enum('PENDING','APPROVED','DECLINED','VERIFYING') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mode` enum('ONSITE','HOMESERVICE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

insert  into `booking`(`id`,`firstName`,`lastName`,`email`,`contactNumber`,`municipality`,`barangay`,`landmark`,`carModel`,`additionalDetails`,`proofOfPayment`,`bookedDate`,`status`,`mode`) values 
(60,'Francis ','Cutamora','francisjoshuacutamora@gmail.com','9941205303',NULL,'',NULL,'Ford Freestar','test','https://res.cloudinary.com/dgxlqujte/image/upload/v1730767825/snry7x8ujohhd5bivkos.jpg','2024-11-14 7:00-8:00','DECLINED','ONSITE');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_cart_fk` (`userId`),
  KEY `product_cart_fk` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `cart` */

insert  into `cart`(`id`,`userId`,`productId`,`dateAdded`) values 
(4,16,32,'2024-09-10 19:52:54'),
(5,16,35,'2024-09-10 20:04:08'),
(6,16,35,'2024-09-10 20:07:25'),
(8,15,32,'2024-09-10 20:17:59'),
(13,NULL,35,'2024-10-09 18:06:20');

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

/*Table structure for table `payment` */

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_type` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `payment` */

insert  into `payment`(`id`,`payment_type`) values 
(1,'Cash'),
(2,'Gcash'),
(3,'PayPal');

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
  KEY `product_category_fk` (`productType`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `products` */

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(63) DEFAULT NULL,
  `serviceDuration` varchar(31) DEFAULT NULL,
  `servicePrice` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`serviceDuration`,`servicePrice`) values 
(9,'LED','Installation',400),
(10,'TEST','10',10000),
(11,'Test2','5',1200),
(12,'TEst3','3',1200),
(13,'test4','4',23424),
(14,'test5','6',564564),
(15,'test6','8',10000);

/*Table structure for table `time_slot` */

DROP TABLE IF EXISTS `time_slot`;

CREATE TABLE `time_slot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `bookingId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_time_fk` (`bookingId`),
  CONSTRAINT `booking_time_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `time_slot` */

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
