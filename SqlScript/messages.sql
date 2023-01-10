create DATABASE phoneserverdb;

CREATE TABLE `messages` (
  `Id` int(11) NOT NULL,
  `Sender` varchar(255) NOT NULL,
  `Receiver` varchar(255) NOT NULL,
  `Message` varchar(255) NOT NULL,
  `RegDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Content` varchar(225) DEFAULT NULL
);
