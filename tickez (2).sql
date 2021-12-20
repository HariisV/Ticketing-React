-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2021 at 07:34 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickez`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `invoice` varchar(277) NOT NULL,
  `userId` varchar(277) NOT NULL,
  `fullName` varchar(277) NOT NULL,
  `Email` varchar(277) NOT NULL,
  `phoneNumber` varchar(277) NOT NULL,
  `scheduleId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `dateBooking` date NOT NULL,
  `timeBooking` time NOT NULL,
  `totalTicket` int(11) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `statusPayment` varchar(50) NOT NULL,
  `statusUsed` enum('active','alreadyUsed') NOT NULL DEFAULT 'active',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `invoice`, `userId`, `fullName`, `Email`, `phoneNumber`, `scheduleId`, `movieId`, `dateBooking`, `timeBooking`, `totalTicket`, `totalPayment`, `paymentMethod`, `statusPayment`, `statusUsed`, `createdAt`, `updatedAt`) VALUES
(24, 'INV-5866-1-9', '5', 'Haris Viclates', 'Haris@gmail.com', '082288855562', 10, 9, '2021-10-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-01 04:41:45', NULL),
(25, 'INV-8181-7-9', '0', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-10-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-06 17:53:44', NULL),
(26, 'INV-7583-7-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-10-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-06 17:54:56', NULL),
(27, 'INV-4973-7-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-06-02 18:03:37', NULL),
(28, 'INV-1575-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:13:25', NULL),
(29, 'INV-6701-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:13:43', NULL),
(30, 'INV-3190-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:14:21', NULL),
(31, 'INV-7842-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:14:28', NULL),
(32, 'INV-6103-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:14:36', NULL),
(33, 'INV-1596-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:14:57', NULL),
(34, 'INV-6304-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:16:03', NULL),
(35, 'INV-4168-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:17:37', NULL),
(36, 'INV-2580-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:18:47', NULL),
(37, 'INV-6121-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:19:32', NULL),
(38, 'INV-6625-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:20:11', NULL),
(39, 'INV-3231-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:21:53', NULL),
(40, 'INV-7728-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:22:43', NULL),
(41, 'INV-8003-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 17:23:01', NULL),
(42, 'INV-6716-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'success', 'active', '2021-10-07 18:00:12', NULL),
(43, 'INV-1798-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'failed', 'active', '2021-10-07 18:02:03', NULL),
(44, 'INV-7058-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'bca_klikpay', 'success', 'active', '2021-10-07 18:08:12', NULL),
(45, 'INV-2285-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'bca_klikpay', 'success', 'active', '2021-10-07 18:10:01', NULL),
(46, 'INV-5970-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'bca_klikpay', 'success', 'active', '2021-10-07 18:11:41', NULL),
(47, 'INV-7189-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'bca_klikpay', 'success', 'active', '2021-10-07 18:12:35', NULL),
(48, 'INV-4589-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 02:26:03', NULL),
(49, 'INV-4731-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 02:27:20', NULL),
(50, 'INV-5891-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 03:03:19', NULL),
(51, 'INV-2357-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 03:04:20', NULL),
(52, 'INV-7647-8-9', '7373653e-12d1-45ec-895b-d873d48eb5af', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'bca_klikpay', 'success', 'active', '2021-10-08 03:09:58', NULL),
(53, 'INV-2642-8-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 08:55:52', NULL),
(54, 'INV-2967-8-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Fajri', 'Fajri@gmail.com', '082288855562', 10, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-08 08:55:57', NULL),
(55, 'INV-3190-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Fajri', 'Fajri@gmail.com', '082288855562', 29, 9, '2021-08-25', '19:00:00', 3, 60, 'Pulsa', 'Pending', 'active', '2021-10-24 16:11:37', NULL),
(56, 'INV-2415-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ahmad', 'Yani@gmail.com', '82288855562', 33, 73, '2021-10-24', '10:30:00', 1, 20, 'Midtrans', 'Pending', 'active', '2021-10-24 16:14:51', NULL),
(57, 'INV-3535-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'rez', 'asdasd@asdas.dcom', '424242', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:19:11', NULL),
(58, 'INV-8508-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '444', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:20:25', NULL),
(59, 'INV-8495-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '4444', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:20:59', NULL),
(60, 'INV-4230-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '444', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:21:13', NULL),
(61, 'INV-2328-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '444', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:21:50', NULL),
(62, 'INV-2990-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '4444', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:22:00', NULL),
(63, 'INV-5450-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '555', '555', '555', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:22:18', NULL),
(64, 'INV-4655-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reza', 'Arap@gmail.com', '8225556662', 33, 74, '2021-10-24', '19:00:00', 2, 40, 'Midtrans', 'Pending', 'active', '2021-10-24 16:22:40', NULL),
(65, 'INV-1573-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'sss', '33233323', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(66, 'INV-7957-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(67, 'INV-5808-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(68, 'INV-8245-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(69, 'INV-6695-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(70, 'INV-8958-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(71, 'INV-2793-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Ree', 'ss', '3323332', 34, 74, '2021-10-24', '20:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:24:29', NULL),
(72, 'INV-2395-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '444424', 33, 74, '2021-10-24', '19:00:00', 1, 20, 'Midtrans', 'Pending', 'active', '2021-10-24 16:25:09', NULL),
(73, 'INV-1420-24-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '312', 33, 73, '2021-10-24', '16:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-24 16:28:47', NULL),
(74, 'INV-1786-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '82288855562', 45, 73, '2021-10-25', '20:30:00', 1, 20, 'Midtrans', 'Pending', 'active', '2021-10-25 07:03:19', NULL),
(75, 'INV-5724-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '', 48, 73, '2021-10-25', '16:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 07:09:03', NULL),
(76, 'INV-2910-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '', '', '', 48, 73, '2021-10-25', '16:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 07:09:10', NULL),
(77, 'INV-3056-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '44', '44', '444', 48, 73, '2021-10-25', '16:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 07:10:11', NULL),
(78, 'INV-7026-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '44', '44', '444', 48, 73, '2021-10-25', '16:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 07:10:16', NULL),
(79, 'INV-7547-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '444424', 44, 74, '2021-10-25', '09:30:00', 2, 40, 'Midtrans', 'success', 'active', '2021-10-25 08:59:48', NULL),
(80, 'INV-8353-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '4444242412', 44, 74, '2021-10-25', '09:30:00', 7, 140, 'Midtrans', 'success', 'active', '2021-10-25 09:07:21', NULL),
(81, 'INV-7893-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', '444', '444', '444', 45, 65, '2021-10-25', '12:00:00', 4, 80, 'Midtrans', 'Pending', 'active', '2021-10-25 09:21:45', NULL),
(82, 'INV-2714-25-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '3333', 45, 65, '2021-10-25', '10:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 12:42:34', NULL),
(83, 'INV-8398-26-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '4444', 45, 64, '2021-10-25', '19:00:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-25 17:01:23', NULL),
(84, 'INV-8085-26-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Reee', 'ezlife9909@gmail.com', '82288855562', 44, 64, '2021-10-26', '09:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-26 03:11:12', NULL),
(85, 'INV-1609-26-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Haris', 'ezlife9909@gmail.com', '82288855562', 44, 64, '2021-10-26', '09:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-26 03:28:37', NULL),
(86, 'INV-2981-26-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Haris', 'ezlife9909@gmail.com', '82288855562', 44, 64, '2021-10-26', '09:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-26 03:28:38', NULL),
(87, 'INV-6801-26-9', 'f14b0810-249c-4217-93f6-6ce3580a109a', 'Nikma', 'E@gmail.com', '3333', 44, 64, '2021-10-26', '09:30:00', 3, 60, 'Midtrans', 'Pending', 'active', '2021-10-26 21:29:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `releaseDate` date NOT NULL,
  `duration` varchar(277) NOT NULL,
  `director` varchar(255) NOT NULL,
  `cast` varchar(255) NOT NULL,
  `sypnosis` longtext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `name`, `category`, `image`, `releaseDate`, `duration`, `director`, `cast`, `sypnosis`, `createdAt`, `updatedAt`) VALUES
(64, 'Spiderman 5Sx', 'Action, Crime', '2021-10-21T16-39-04.599Zmovie1.png', '2022-11-05', '2 Hourse 58 Minute', 'Sony', 'Iron Men', 'Di Ixtenco, Meksiko, Nick Fury dan Maria Hill menyelidiki badai yang tidak wajar dan bertemu dengan Elemental Bumi. Quentin Beck, seorang pria yang sangat bertenaga, datang untuk melawan makhluk itu. Di New York City, Midtown School of Science and Technol', '2021-08-21 16:39:04', NULL),
(65, 'Lion King', 'Action, Crime', '2021-10-21T16-40-41.903Zmovie2.png', '2025-11-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Film The Lion King berkisah tentang seekor anak singa bernama Simba yang terusir dari tanah kelahirannya setelah ayahnya dibunuh pamannya demi takhta. Awal kisah datang dari mimpi Simba untuk menjadi seekor raja hutan meneruskan takhta sang ayah, Mufasa. ', '2021-10-21 16:40:41', NULL),
(67, 'John Wick', 'Action, Crime', '2021-10-21T16-41-38.836Zmovie3.png', '2025-10-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pem', '2021-10-21 16:41:38', NULL),
(69, 'Avanger End', 'Action, Crime', '2021-10-21T16-43-51.746ZPoster_Film___Avengers_Endgame___Marvel_Studios___Movie_Post.jpg', '2025-10-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pem', '2021-10-21 16:43:51', NULL),
(70, 'Rasuk', 'Action, Crime', '2021-10-21T16-44-09.568Zposter-film-rasuk-2-1-1.jpg', '2025-11-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pem', '2021-10-21 16:44:09', NULL),
(73, 'Mata Batin', 'Action, Crime', '2021-10-21T16-46-19.721Ztwittercom78-895d98fd4676c59b40715bc677852199.jpg', '2025-12-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pem', '2021-10-21 16:46:19', '2021-10-21 16:54:22'),
(74, 'Spidey 5', 'Action, Crime', '2021-10-21T16-49-23.542Zmovie1.png', '2004-09-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pem', '2021-11-21 16:49:23', NULL),
(75, 'Spidey 6', 'Action, Crime', '2021-10-25T09-53-48.260Zmovie1.png', '2023-02-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-12-25 09:53:48', NULL),
(76, 'Spidey 7', 'Action, Crime', '2021-10-25T09-54-04.649Zmovie1.png', '2023-01-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-01-25 09:54:04', NULL),
(77, 'Spidey 8', 'Action, Crime', '2021-10-25T09-54-08.434Zmovie1.png', '2023-12-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-02-25 09:54:08', NULL),
(78, 'Spidey 9', 'Action, Crime', '2021-10-25T09-54-12.028Zmovie1.png', '2023-11-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-03-25 09:54:12', NULL),
(79, 'Spidey 10', 'Action, Crime', '2021-10-25T09-54-15.443Zmovie1.png', '2023-10-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-09-25 09:54:15', NULL),
(80, 'Spidey 11', 'Action, Crime', '2021-10-25T09-54-23.783Zmovie1.png', '2023-10-10', '5 Hours 30 Minute', 'Sony', 'Lional Messi', 'Seri ketiga \"John Wick\" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry)', '2021-10-25 09:54:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `movieID` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `premier` varchar(277) NOT NULL,
  `location` varchar(255) NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `time` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `movieID`, `price`, `premier`, `location`, `dateStart`, `dateEnd`, `time`, `createdAt`, `updatedAt`) VALUES
(44, 64, 20, 'EbuId - JKT  : 10', 'Aceh', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:57:51', NULL),
(45, 64, 20, 'EbuId 2- JKT  : 10', 'Sumatera Utara', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:58:03', NULL),
(46, 64, 20, 'EbuId 3- JKT  : 10', 'Jakarta', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:58:09', NULL),
(47, 64, 20, 'EbuId I - JKT  : 20', 'Jakarta', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:58:16', NULL),
(48, 64, 20, 'EbuId II - JKT  : 20', 'Jakarta', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:58:21', NULL),
(50, 64, 20, 'EbuId X- MDN  : 10', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:59:29', NULL),
(51, 64, 20, 'EbuId XX- MDN  : 10', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:59:38', NULL),
(52, 64, 20, 'EbuId XXX- MDN  : 10', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:59:42', NULL),
(53, 64, 20, 'EbuId V- MDN  : 20', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:59:49', NULL),
(54, 64, 20, 'EbuId VV- MDN  : 20', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-25 06:59:53', NULL),
(55, 64, 30, 'EbuId VI- MDN  : 30', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-30 07:19:15', NULL),
(56, 64, 30, 'EbuId VI- MDN  : 20', 'Medan', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-30 07:19:21', NULL),
(57, 64, 20, 'EbuId VI- JKT: 20', 'Jakarta', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-30 07:19:32', NULL),
(58, 64, 30, 'EbuId VI- JKT: 30', 'Jakarta', '2021-08-21', '2021-12-16', ' 09:30, 10:30, 12:00, 14:00, 16:30, 19:00, 20:30', '2021-10-30 07:19:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `seatbooking`
--

CREATE TABLE `seatbooking` (
  `id` int(11) NOT NULL,
  `bookingId` int(11) NOT NULL,
  `scheduleId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `dateSchedule` date DEFAULT NULL,
  `timeSchedule` time NOT NULL,
  `seat` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seatbooking`
--

INSERT INTO `seatbooking` (`id`, `bookingId`, `scheduleId`, `movieId`, `dateSchedule`, `timeSchedule`, `seat`, `createdAt`, `updatedAt`) VALUES
(62, 24, 10, 9, '2021-10-25', '19:00:00', 'V1', '2021-10-01 04:41:45', NULL),
(63, 24, 10, 9, '2021-10-25', '19:00:00', 'V2', '2021-10-01 04:41:45', NULL),
(64, 24, 10, 9, '2021-10-25', '19:00:00', 'V3', '2021-10-01 04:41:45', NULL),
(65, 25, 10, 9, '2021-10-25', '19:00:00', 'V1', '2021-10-06 17:53:44', NULL),
(66, 25, 10, 9, '2021-10-25', '19:00:00', 'V2', '2021-10-06 17:53:44', NULL),
(67, 25, 10, 9, '2021-10-25', '19:00:00', 'V3', '2021-10-06 17:53:44', NULL),
(68, 26, 10, 9, '2021-10-25', '19:00:00', 'V1', '2021-10-06 17:54:56', NULL),
(69, 26, 10, 9, '2021-10-25', '19:00:00', 'V2', '2021-10-06 17:54:56', NULL),
(70, 26, 10, 9, '2021-10-25', '19:00:00', 'V3', '2021-10-06 17:54:56', NULL),
(71, 27, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-06 18:03:37', NULL),
(72, 27, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-06 18:03:37', NULL),
(73, 27, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-06 18:03:37', NULL),
(74, 28, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:13:25', NULL),
(75, 28, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:13:25', NULL),
(76, 28, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:13:25', NULL),
(77, 29, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:13:43', NULL),
(78, 29, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:13:43', NULL),
(79, 29, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:13:43', NULL),
(80, 30, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:14:21', NULL),
(81, 30, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:14:21', NULL),
(82, 30, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:14:21', NULL),
(83, 31, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:14:28', NULL),
(84, 31, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:14:28', NULL),
(85, 31, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:14:28', NULL),
(86, 32, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:14:36', NULL),
(87, 32, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:14:36', NULL),
(88, 32, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:14:36', NULL),
(89, 33, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:14:57', NULL),
(90, 33, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:14:57', NULL),
(91, 33, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:14:57', NULL),
(92, 34, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:16:03', NULL),
(93, 34, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:16:03', NULL),
(94, 34, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:16:03', NULL),
(95, 35, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:17:37', NULL),
(96, 35, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:17:37', NULL),
(97, 35, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:17:37', NULL),
(98, 36, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:18:47', NULL),
(99, 36, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:18:47', NULL),
(100, 36, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:18:47', NULL),
(101, 37, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:19:32', NULL),
(102, 37, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:19:32', NULL),
(103, 37, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:19:32', NULL),
(104, 38, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:20:11', NULL),
(105, 38, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:20:11', NULL),
(106, 38, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:20:11', NULL),
(107, 39, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:21:53', NULL),
(108, 39, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:21:53', NULL),
(109, 39, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:21:53', NULL),
(110, 40, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:22:43', NULL),
(111, 40, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:22:43', NULL),
(112, 40, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:22:43', NULL),
(113, 41, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 17:23:01', NULL),
(114, 41, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 17:23:01', NULL),
(115, 41, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 17:23:01', NULL),
(116, 42, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:00:12', NULL),
(117, 42, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:00:12', NULL),
(118, 42, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:00:12', NULL),
(119, 43, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:02:03', NULL),
(120, 43, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:02:03', NULL),
(121, 43, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:02:03', NULL),
(122, 44, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:08:12', NULL),
(123, 44, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:08:12', NULL),
(124, 44, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:08:12', NULL),
(125, 45, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:10:01', NULL),
(126, 45, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:10:01', NULL),
(127, 45, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:10:01', NULL),
(128, 46, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:11:41', NULL),
(129, 46, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:11:41', NULL),
(130, 46, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:11:41', NULL),
(131, 47, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-07 18:12:35', NULL),
(132, 47, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-07 18:12:35', NULL),
(133, 47, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-07 18:12:35', NULL),
(134, 48, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 02:26:03', NULL),
(135, 48, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 02:26:03', NULL),
(136, 48, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 02:26:03', NULL),
(137, 49, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 02:27:20', NULL),
(138, 49, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 02:27:20', NULL),
(139, 49, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 02:27:20', NULL),
(140, 50, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 03:03:19', NULL),
(141, 50, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 03:03:19', NULL),
(142, 50, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 03:03:19', NULL),
(143, 51, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 03:04:20', NULL),
(144, 51, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 03:04:20', NULL),
(145, 51, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 03:04:20', NULL),
(146, 52, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 03:09:58', NULL),
(147, 52, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 03:09:58', NULL),
(148, 52, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 03:09:58', NULL),
(149, 53, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 08:55:52', NULL),
(150, 53, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 08:55:52', NULL),
(151, 53, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 08:55:52', NULL),
(152, 54, 10, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-08 08:55:57', NULL),
(153, 54, 10, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-08 08:55:57', NULL),
(154, 54, 10, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-08 08:55:57', NULL),
(155, 55, 29, 9, '2021-08-25', '19:00:00', 'V1', '2021-10-24 16:11:37', NULL),
(156, 55, 29, 9, '2021-08-25', '19:00:00', 'V2', '2021-10-24 16:11:37', NULL),
(157, 55, 29, 9, '2021-08-25', '19:00:00', 'V3', '2021-10-24 16:11:37', NULL),
(158, 56, 33, 73, '2021-10-24', '10:30:00', 'G14', '2021-10-24 16:14:51', NULL),
(159, 57, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:19:11', NULL),
(160, 57, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:19:11', NULL),
(161, 58, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:20:25', NULL),
(162, 58, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:20:25', NULL),
(163, 59, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:20:59', NULL),
(164, 59, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:20:59', NULL),
(165, 60, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:21:13', NULL),
(166, 60, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:21:13', NULL),
(167, 61, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:21:50', NULL),
(168, 61, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:21:50', NULL),
(169, 62, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:22:00', NULL),
(170, 62, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:22:00', NULL),
(171, 63, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:22:18', NULL),
(172, 63, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:22:18', NULL),
(173, 64, 33, 74, '2021-10-24', '19:00:00', 'F7', '2021-10-24 16:22:40', NULL),
(174, 64, 33, 74, '2021-10-24', '19:00:00', 'F12', '2021-10-24 16:22:40', NULL),
(175, 65, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(176, 65, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(177, 65, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(178, 66, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(179, 66, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(180, 66, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(181, 67, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(182, 67, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(183, 67, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(184, 68, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(185, 68, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(186, 68, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(187, 69, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(188, 69, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(189, 69, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(190, 70, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(191, 70, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(192, 70, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(193, 71, 34, 74, '2021-10-24', '20:30:00', 'B11', '2021-10-24 16:24:29', NULL),
(194, 71, 34, 74, '2021-10-24', '20:30:00', 'B12', '2021-10-24 16:24:29', NULL),
(195, 71, 34, 74, '2021-10-24', '20:30:00', 'B13', '2021-10-24 16:24:29', NULL),
(196, 72, 33, 74, '2021-10-24', '19:00:00', 'F10', '2021-10-24 16:25:09', NULL),
(197, 73, 33, 73, '2021-10-24', '16:30:00', 'B8', '2021-10-24 16:28:47', NULL),
(198, 73, 33, 73, '2021-10-24', '16:30:00', 'B9', '2021-10-24 16:28:47', NULL),
(199, 73, 33, 73, '2021-10-24', '16:30:00', 'B10', '2021-10-24 16:28:47', NULL),
(200, 74, 45, 73, '2021-10-25', '20:30:00', 'E11', '2021-10-25 07:03:19', NULL),
(201, 75, 48, 73, '2021-10-25', '16:30:00', 'G10', '2021-10-25 07:09:03', NULL),
(202, 75, 48, 73, '2021-10-25', '16:30:00', 'F10', '2021-10-25 07:09:03', NULL),
(203, 75, 48, 73, '2021-10-25', '16:30:00', 'E10', '2021-10-25 07:09:03', NULL),
(204, 76, 48, 73, '2021-10-25', '16:30:00', 'G10', '2021-10-25 07:09:10', NULL),
(205, 76, 48, 73, '2021-10-25', '16:30:00', 'F10', '2021-10-25 07:09:10', NULL),
(206, 76, 48, 73, '2021-10-25', '16:30:00', 'E10', '2021-10-25 07:09:10', NULL),
(207, 77, 48, 73, '2021-10-25', '16:30:00', 'G10', '2021-10-25 07:10:11', NULL),
(208, 77, 48, 73, '2021-10-25', '16:30:00', 'F10', '2021-10-25 07:10:11', NULL),
(209, 77, 48, 73, '2021-10-25', '16:30:00', 'E10', '2021-10-25 07:10:11', NULL),
(210, 78, 48, 73, '2021-10-25', '16:30:00', 'G10', '2021-10-25 07:10:16', NULL),
(211, 78, 48, 73, '2021-10-25', '16:30:00', 'F10', '2021-10-25 07:10:16', NULL),
(212, 78, 48, 73, '2021-10-25', '16:30:00', 'E10', '2021-10-25 07:10:16', NULL),
(213, 79, 44, 74, '2021-10-25', '09:30:00', 'A1', '2021-10-25 08:59:48', NULL),
(214, 79, 44, 74, '2021-10-25', '09:30:00', 'G7', '2021-10-25 08:59:48', NULL),
(215, 80, 44, 74, '2021-10-25', '09:30:00', 'A8', '2021-10-25 09:07:21', NULL),
(216, 80, 44, 74, '2021-10-25', '09:30:00', 'A9', '2021-10-25 09:07:21', NULL),
(217, 80, 44, 74, '2021-10-25', '09:30:00', 'A10', '2021-10-25 09:07:21', NULL),
(218, 80, 44, 74, '2021-10-25', '09:30:00', 'A11', '2021-10-25 09:07:21', NULL),
(219, 80, 44, 74, '2021-10-25', '09:30:00', 'A12', '2021-10-25 09:07:21', NULL),
(220, 80, 44, 74, '2021-10-25', '09:30:00', 'A13', '2021-10-25 09:07:21', NULL),
(221, 80, 44, 74, '2021-10-25', '09:30:00', 'A14', '2021-10-25 09:07:21', NULL),
(222, 81, 45, 65, '2021-10-25', '12:00:00', 'A12', '2021-10-25 09:21:45', NULL),
(223, 81, 45, 65, '2021-10-25', '12:00:00', 'A11', '2021-10-25 09:21:45', NULL),
(224, 81, 45, 65, '2021-10-25', '12:00:00', 'B11', '2021-10-25 09:21:45', NULL),
(225, 81, 45, 65, '2021-10-25', '12:00:00', 'B12', '2021-10-25 09:21:45', NULL),
(226, 82, 45, 65, '2021-10-25', '10:30:00', 'B10', '2021-10-25 12:42:34', NULL),
(227, 82, 45, 65, '2021-10-25', '10:30:00', 'C10', '2021-10-25 12:42:34', NULL),
(228, 82, 45, 65, '2021-10-25', '10:30:00', 'C11', '2021-10-25 12:42:34', NULL),
(229, 83, 45, 64, '2021-10-25', '19:00:00', 'C9', '2021-10-25 17:01:23', NULL),
(230, 83, 45, 64, '2021-10-25', '19:00:00', 'B9', '2021-10-25 17:01:23', NULL),
(231, 83, 45, 64, '2021-10-25', '19:00:00', 'B10', '2021-10-25 17:01:23', NULL),
(232, 84, 44, 64, '2021-10-26', '09:30:00', 'C4', '2021-10-26 03:11:12', NULL),
(233, 84, 44, 64, '2021-10-26', '09:30:00', 'D4', '2021-10-26 03:11:12', NULL),
(234, 84, 44, 64, '2021-10-26', '09:30:00', 'D5', '2021-10-26 03:11:12', NULL),
(235, 85, 44, 64, '2021-10-26', '09:30:00', 'E4', '2021-10-26 03:28:37', NULL),
(236, 85, 44, 64, '2021-10-26', '09:30:00', 'E3', '2021-10-26 03:28:37', NULL),
(237, 85, 44, 64, '2021-10-26', '09:30:00', 'D4', '2021-10-26 03:28:37', NULL),
(238, 86, 44, 64, '2021-10-26', '09:30:00', 'E4', '2021-10-26 03:28:38', NULL),
(239, 86, 44, 64, '2021-10-26', '09:30:00', 'E3', '2021-10-26 03:28:38', NULL),
(240, 86, 44, 64, '2021-10-26', '09:30:00', 'D4', '2021-10-26 03:28:38', NULL),
(241, 87, 44, 64, '2021-10-26', '09:30:00', 'A7', '2021-10-26 21:29:31', NULL),
(242, 87, 44, 64, '2021-10-26', '09:30:00', 'A8', '2021-10-26 21:29:31', NULL),
(243, 87, 44, 64, '2021-10-26', '09:30:00', 'B8', '2021-10-26 21:29:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `status` enum('notActive','active') NOT NULL DEFAULT 'notActive',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `password`, `image`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
('f14b0810-249c-4217-93f6-6ce3580a109a', 'M', 'Rahuld', 'ezlife9909@gmail.com', '0812383782', '$2b$10$uegjaLLhqBY9LoHC7gQwLufpjlbathgOPgEcSojoNOwB9rCBP0Lk6', NULL, 'admin', 'active', '2021-10-08 03:02:22', '2021-10-08 03:05:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seatbooking`
--
ALTER TABLE `seatbooking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `seatbooking`
--
ALTER TABLE `seatbooking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
