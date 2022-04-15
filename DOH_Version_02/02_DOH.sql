-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: 003_doh
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `book_date` datetime NOT NULL,
  `ride_start_date` datetime NOT NULL,
  `duration_hrs` int NOT NULL,
  `pickup_addr` varchar(100) NOT NULL,
  `actual_ride_end_time` datetime DEFAULT NULL,
  `total_fare` decimal(8,2) DEFAULT NULL,
  `ride_status` varchar(45) NOT NULL,
  `city_id` int NOT NULL,
  `destination_city_id` varchar(45) NOT NULL,
  `driver_id` int DEFAULT '0',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `fk_pickup_city_id_idx` (`city_id`),
  KEY `fk_destination_city_id_idx` (`destination_city_id`),
  KEY `fk_driver_id_idx` (`driver_id`),
  KEY `FKeyog2oic85xg7hsu2je2lx3s6` (`user_id`),
  CONSTRAINT `fk_driver_id` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`driver_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pickup_city_id` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`),
  CONSTRAINT `FKeyog2oic85xg7hsu2je2lx3s6` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'2022-03-26 00:00:00','2022-03-28 00:00:00',72,'Bibwewadi Pune 37','2022-03-30 00:00:00',3900.00,'completed',1,'5',1,1),(2,'2022-04-07 15:28:14','2022-04-09 15:28:00',24,'Bandra,Mumbai','2022-04-10 00:00:00',1500.00,'completed',5,'Delhi',1,1),(3,'2022-04-07 17:26:33','2022-04-09 19:28:00',144,'Hawai Mahal,Jodhpur','2022-04-15 00:00:00',7500.00,'ride ended',4,'Jaipur',1,1),(4,'2022-04-15 11:25:19','2022-04-17 14:27:00',48,'Katraj,Pune','2022-04-19 00:00:00',2700.00,'confirmed',1,'Mumbai',1,1),(5,'2022-04-15 11:30:32','2022-04-17 14:33:00',12,'Mohali,Punjab','2022-04-18 00:00:00',900.00,'pending',2,'Patiala',1,1),(6,'2022-04-15 13:22:34','2022-04-17 13:26:00',24,'Kondhwa,Pune','2022-04-18 00:00:00',1500.00,'pending',1,'Karad',1,1),(7,'2022-04-08 13:27:52','2022-04-10 13:27:00',6,'Railway Station,Mohali','2022-04-10 00:00:00',600.00,'completed',2,'Ludhiana',1,1),(8,'2022-04-08 18:21:04','2022-04-10 21:23:00',120,'Camp, Pune','2022-04-15 00:00:00',6300.00,'ride ended',1,'Sanglii',1,1),(9,'2022-04-21 18:27:49','2022-04-23 21:30:00',24,'Hadapsar,Pune','2022-04-24 00:00:00',1500.00,'cancelled',1,'Satara',1,1),(10,'2022-04-06 09:30:45','2022-04-08 11:32:00',96,'Swargate,Pune','2022-04-12 00:00:00',5100.00,'cancelled',1,'Kolhapur',1,1);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `pickup_availability` int NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Pune','Maharashtra',1),(2,'Moholi','Punjab',1),(3,'Noida','Delhi',1),(4,'Jodhpur','Rajasthan',1),(5,'Mumbai','Maharashtra',1);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_payments`
--

DROP TABLE IF EXISTS `customer_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int NOT NULL,
  `cust_pay_time` datetime NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `payment_mode` varchar(45) NOT NULL,
  `transaction_id` varchar(45) NOT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `transaction_id_UNIQUE` (`transaction_id`),
  KEY `fk_booking_id_idx` (`booking_id`),
  CONSTRAINT `fk_booking_id` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_payments`
--

LOCK TABLES `customer_payments` WRITE;
/*!40000 ALTER TABLE `customer_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_payments`
--

DROP TABLE IF EXISTS `driver_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int NOT NULL,
  `driver_payment_time` datetime NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `payment_mode` varchar(45) NOT NULL,
  `transaction_id` varchar(45) NOT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `transaction_id_UNIQUE` (`transaction_id`),
  KEY `fk_booking_id_idx` (`booking_id`),
  CONSTRAINT `fk_booking_id1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_payments`
--

LOCK TABLES `driver_payments` WRITE;
/*!40000 ALTER TABLE `driver_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drivers` (
  `driver_id` int NOT NULL AUTO_INCREMENT,
  `license_no` varchar(20) NOT NULL,
  `aadhar_no` varchar(12) NOT NULL,
  `experience` int NOT NULL,
  `availability_status` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`driver_id`),
  UNIQUE KEY `license_no_UNIQUE` (`license_no`),
  UNIQUE KEY `aadhar_no_UNIQUE` (`aadhar_no`),
  KEY `fk_uid_idx` (`user_id`),
  CONSTRAINT `fk_uid1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers`
--

LOCK TABLES `drivers` WRITE;
/*!40000 ALTER TABLE `drivers` DISABLE KEYS */;
INSERT INTO `drivers` VALUES (1,'MH1220171162322','978752371231',2,1,5),(2,'MH1279861200348','789503405678',5,0,6);
/*!40000 ALTER TABLE `drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `email_id` varchar(45) NOT NULL,
  `password` varchar(12) NOT NULL,
  `role` varchar(45) NOT NULL,
  `security_que` varchar(100) NOT NULL,
  `security_ans` varchar(100) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `fk_uid_idx` (`user_id`),
  CONSTRAINT `fk_uid` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'revankante@gmail.com','Revan@123','customer','In what city were you born?','pune',1),(2,'narendrawalvekar@gmail.com','Narendra@123','customer','What is the name of your favorite pet?','tommy',2),(3,'paragtaide@gmail.com','Parag@123','customer','What is the name of your favorite pet?','leo',3),(4,'ashrafpathan@gmail.com','Ashraf@123','customer','What high school did you attend?','moze',4),(5,'chinmayjadhav@gmail.com','Chinmay@123','driver','What was the make of your first car?','toyota',5),(6,'piyushjagtap@gmail.com','Piyush@123','driver','What was your favorite food as a child?','wadapav',6),(7,'Admin@doh.com','Admin@123','admin','Which was your first company?','infosys',7);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `rating_value` int NOT NULL,
  `review` varchar(100) NOT NULL,
  `booking_id` int NOT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `fk_book_id_idx` (`booking_id`),
  CONSTRAINT `fk_book_id` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `state` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `contact_UNIQUE` (`contact`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Revan','Kante','8087162121','Maharashtra','Pune'),(2,'Narendra','Walvekar','9325176325','Punjab','Mohali'),(3,'Parag','Taide','8655453034','Delhi','Noida'),(4,'Ashraf','Pathan','8446735342','Rajasthan','Jodhpur'),(5,'ChinmaY','Jadhav','8789562102','Maharashtra','Pune'),(6,'Piyush','Jagtap','7744998789','Rajasthan','Jodhpur'),(7,'Admin','01','0000000000','Maharashtra','Mumbai'),(8,'Sumit','More','9623557898','Gujrat','Wapi'),(10,'Rahul','Sawant','7896259878','Maharashtra','Pune'),(11,'Kshitij','Jadhav','0089789625','Maharashtra','Pune'),(12,'Suresh','Jagtap','1234567890','Goa','panji'),(13,'Sumit','Jadhav','9798994467','Maharashtra','Nagpur'),(14,'Ashish','More','1234561234','Maharashtra','Nashik');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-14 20:05:52
