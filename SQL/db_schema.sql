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
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booked_service` */

insert  into `booked_service`(`id`,`serviceId`,`bookingId`) values 
(93,10,276),
(98,10,280),
(99,12,280),
(100,11,280),
(101,10,281),
(102,11,281),
(103,12,281),
(104,10,282),
(105,11,282),
(106,12,282),
(107,10,283),
(108,11,283);

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
  `additionalDetails` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `proofOfPayment` varchar(255) DEFAULT NULL,
  `bookedDate` varchar(45) DEFAULT NULL,
  `status` enum('PENDING','APPROVED','DECLINED','VERIFYING','DONE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mode` enum('ONSITE','HOMESERVICE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

insert  into `booking`(`id`,`firstName`,`lastName`,`email`,`contactNumber`,`municipality`,`barangay`,`landmark`,`carModel`,`additionalDetails`,`proofOfPayment`,`bookedDate`,`status`,`mode`) values 
(276,'Jaira','Gallo','jairagallo@gmail.com','12312312312',NULL,'',NULL,'Audi Quattro','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor risus, venenatis ut lobortis et, gravida sed dolor. Nunc in convallis sem, eget bibendum arcu. Pellentesque quis ipsum nec nibh viverra tempor. Integer laoreet porta sem, quis rutrum odio vulputate suscipit. Curabitur consequat eleifend tellus, sit amet laoreet felis sodales quis. Nam hendrerit velit sed purus volutpat fringilla. Nunc commodo sapien at nisl efficitur, eu semper nisi ultrices.','https://res.cloudinary.com/dgxlqujte/image/upload/v1730980339/ghxashgn0tcpqbe8lstq.jpg','2024-11-09 7:00-8:00','PENDING','ONSITE'),
(280,'Dexter','Lab','Dex@gmail.com','12312312312','ALEGRIA','GUADALUPE','Narra tree','Alfa Romeo GTV-6','test','https://res.cloudinary.com/dgxlqujte/image/upload/v1730980710/m111dx3s7yticvzoc63w.jpg','2024-11-16 4:00-7:00','PENDING','HOMESERVICE'),
(281,'Numb','Skull','Numb@gmail.com','12312312312','ALEGRIA','GUADALUPE','','Alfa Romeo GTV-6','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor risus, venenatis ut lobortis et, gravida sed dolor. Nunc in convallis sem, eget bibendum arcu. Pellentesque quis ipsum nec nibh viverra tempor. Integer laoreet porta sem, quis rutrum odio vulputate suscipit. Curabitur consequat eleifend tellus, sit amet laoreet felis sodales quis. Nam hendrerit velit sed purus volutpat fringilla. Nunc commodo sapien at nisl efficitur, eu semper nisi ultrices.','https://res.cloudinary.com/dgxlqujte/image/upload/v1730980710/m111dx3s7yticvzoc63w.jpg','2024-11-16 7:00-10:00','PENDING','HOMESERVICE'),
(282,'Chester','Benington','Chester@gmail.com','12312312312','ALEGRIA','GUADALUPE','punks not dead','Alfa Romeo GTV-6','PUNKS NOT DEAD','https://res.cloudinary.com/dgxlqujte/image/upload/v1730980710/m111dx3s7yticvzoc63w.jpg','2024-11-29 4:00-7:00','PENDING','HOMESERVICE'),
(283,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312','ALCANTARA','CABADIANGAN','Petron Gas Station','Buick Electra','Lorem ','https://res.cloudinary.com/dgxlqujte/image/upload/v1730981525/maibgducqdv0upgjq7b3.jpg','2024-11-22 4:00-7:00','PENDING','HOMESERVICE');

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
  `servicePrice` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`servicePrice`) values 
(10,'LED installation',1000),
(11,'Horn Installation',1200),
(12,'Central Locking',1200),
(13,'Car Sound Setup',2000),
(14,'DashCam',1500),
(15,'Stereo',10000),
(16,'Speaker',2000),
(17,'SubWoofer',1000),
(18,'Turbo Timer',500),
(19,'Keyless Entry Installation',1500),
(20,'Spoiler',1500),
(21,'Rain Visor',800),
(22,'Skirt',700),
(23,'Sound System Troubleshoot',800),
(24,'Door Lock Problems',1000),
(25,'Parking Sensor',1000),
(26,'DRL Installation',2000),
(27,'Bulbs Installation',500);

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
