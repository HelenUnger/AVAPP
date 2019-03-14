-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 14, 2019 at 07:04 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_album`
--

DROP TABLE IF EXISTS `tbl_album`;
CREATE TABLE IF NOT EXISTS `tbl_album` (
  `album_id` int(11) NOT NULL AUTO_INCREMENT,
  `album_title` varchar(40) NOT NULL,
  `album_artist` varchar(20) NOT NULL,
  `album_year` int(4) NOT NULL,
  `album_desc` text NOT NULL,
  `album_img` varchar(20) NOT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_album`
--

INSERT INTO `tbl_album` (`album_id`, `album_title`, `album_artist`, `album_year`, `album_desc`, `album_img`) VALUES
(1, 'Sister', 'Sonic Youth', 1967, 'sister.. wow', 'sonicyouth.jpg'),
(2, 'Red Album', 'The Beatles', 1977, 'woohoo ', 'redalbum.jpg'),
(3, 'Insomiac', 'Green Day', 1998, 'emo yo', 'insomiac.jpg'),
(4, 'Blind Passager', 'Jens Rugsted', 1954, 'what even is this??', 'blindpassager.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_album_rating`
--

DROP TABLE IF EXISTS `tbl_album_rating`;
CREATE TABLE IF NOT EXISTS `tbl_album_rating` (
  `album_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `album_id` int(11) NOT NULL,
  `rating_id` int(11) NOT NULL,
  PRIMARY KEY (`album_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_album_rating`
--

INSERT INTO `tbl_album_rating` (`album_rating_id`, `album_id`, `rating_id`) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 4),
(4, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_episode`
--

DROP TABLE IF EXISTS `tbl_episode`;
CREATE TABLE IF NOT EXISTS `tbl_episode` (
  `episode_id` int(11) NOT NULL AUTO_INCREMENT,
  `episode_title` varchar(50) NOT NULL,
  `episode_link` varchar(70) NOT NULL,
  `season_id` int(11) NOT NULL,
  PRIMARY KEY (`episode_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_episode`
--

INSERT INTO `tbl_episode` (`episode_id`, `episode_title`, `episode_link`, `season_id`) VALUES
(1, 'Pilot', 'mashs1e1.mp4', 1),
(2, 'Market to Market', 'mashs1e2.mp4', 1),
(3, 'Requiem for a Lightweight', 'mashs1e3.mp4', 1),
(4, 'Chef Surgeon Who?', 'mashs1e4.mp4', 1),
(5, 'Icecream Man', 'mashs2e1.mp4', 2),
(6, 'Holy What?', 'mashs2e2.mp4', 2),
(7, 'This or That?', 'mashs2e3.mp4', 2),
(8, 'Party Girls', 'mashs3e1.mp4', 3),
(9, 's1e1', 'lhotps1e1.mp4', 4),
(10, 's1e2', 'lhotps1e2.mp4', 4),
(11, 's2e1', 'lhotps2e1.mp4', 5),
(12, 's2e2', 'lhotps2e2.mp4', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
CREATE TABLE IF NOT EXISTS `tbl_genre` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(20) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'action'),
(2, 'animation'),
(3, 'horror'),
(4, 'drama'),
(5, 'comedy'),
(6, 'family');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movie`
--

DROP TABLE IF EXISTS `tbl_movie`;
CREATE TABLE IF NOT EXISTS `tbl_movie` (
  `mov_id` int(11) NOT NULL AUTO_INCREMENT,
  `mov_title` varchar(50) NOT NULL,
  `mov_year` int(4) NOT NULL,
  `mov_desc` text NOT NULL,
  `mov_link` varchar(70) NOT NULL,
  `mov_img` varchar(40) NOT NULL,
  PRIMARY KEY (`mov_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_movie`
--

INSERT INTO `tbl_movie` (`mov_id`, `mov_title`, `mov_year`, `mov_desc`, `mov_link`, `mov_img`) VALUES
(1, 'Stuart Little', 1999, 'The Little family adopt a charming young mouse named Stuart, but the family cat wants rid of him.', 'stuart1999.mp4', 'stuart1999.jpg'),
(2, 'Toy Story 2', 1999, 'Woody is stolen by Al who is a toy collector of Al\'s Toy Barn. Buzz and his friends are on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.', 'toy2.mp4', 'toy21999.jpg'),
(3, 'Toy Story', 1995, 'Woody the cowboy and Buzz Lightyear Space Ranger have arrived on the Super Nintendo! TOY STORY is a game that follows the story from the hit computer-generated movie. ', 'toy.mp4', 'toy1995.jpg'),
(4, 'Titanic', 1997, 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'titanic.mp4', 'titanic1997.jpg'),
(5, 'The Matrix', 1999, 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'matrix.mp4', 'matrix1999.jpg'),
(6, 'Fight Club', 1999, 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', 'fightclub.mp4', 'fight1999.jpg'),
(7, 'Scream', 1997, 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.', 'scream.mp4', 'scream1996.jpg'),
(9, 'The Land Before Time', 1988, 'An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.', 'landbeforetime.mp4', 'land1988.jpg'),
(10, 'Robocop', 1987, 'In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.', 'robocop.mp4', 'robocop1987.jpg'),
(12, 'The Breakfast Club', 1985, 'Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.', 'bclub.mp4', 'breakfastclub1985.jpg'),
(13, 'The Karate Kid', 1984, 'A martial arts master agrees to teach karate to a bullied teenager.', 'karate.mp4', 'karatekid1984.jpg'),
(14, 'Alien', 1979, 'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.', 'alien.mp4', 'alien1979.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_genre`
--

DROP TABLE IF EXISTS `tbl_mov_genre`;
CREATE TABLE IF NOT EXISTS `tbl_mov_genre` (
  `mov_genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `mov_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`mov_genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov_genre`
--

INSERT INTO `tbl_mov_genre` (`mov_genre_id`, `mov_id`, `genre_id`) VALUES
(1, 1, 6),
(2, 2, 2),
(3, 2, 6),
(4, 3, 6),
(5, 3, 2),
(6, 4, 4),
(7, 5, 1),
(8, 6, 1),
(9, 7, 3),
(10, 7, 1),
(11, 8, 2),
(12, 8, 6),
(13, 9, 2),
(14, 9, 6),
(15, 10, 1),
(16, 11, 1),
(17, 11, 6),
(18, 12, 4),
(19, 13, 4),
(20, 14, 3),
(21, 15, 1),
(22, 16, 3),
(23, 17, 4),
(24, 18, 3),
(25, 19, 6),
(26, 19, 2),
(27, 20, 3),
(28, 21, 2),
(29, 21, 6),
(30, 22, 2),
(31, 22, 6),
(32, 23, 2),
(33, 23, 6),
(34, 24, 2),
(35, 24, 6),
(36, 25, 2),
(37, 25, 6),
(38, 26, 2),
(39, 26, 6),
(40, 27, 6),
(41, 28, 2),
(42, 28, 6),
(43, 29, 6),
(44, 30, 2),
(45, 30, 6),
(46, 31, 4),
(47, 32, 4),
(48, 33, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_rating`
--

DROP TABLE IF EXISTS `tbl_mov_rating`;
CREATE TABLE IF NOT EXISTS `tbl_mov_rating` (
  `mov_rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `mov_id` int(11) NOT NULL,
  `rating_id` int(11) NOT NULL,
  PRIMARY KEY (`mov_rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov_rating`
--

INSERT INTO `tbl_mov_rating` (`mov_rating_id`, `mov_id`, `rating_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 3),
(5, 5, 4),
(6, 6, 5),
(7, 7, 5),
(8, 8, 1),
(9, 9, 1),
(10, 10, 5),
(11, 11, 2),
(12, 12, 4),
(13, 13, 4),
(14, 14, 6),
(15, 15, 2),
(16, 16, 6),
(17, 17, 4),
(18, 18, 3),
(19, 19, 1),
(20, 20, 6),
(21, 21, 1),
(22, 22, 1),
(23, 23, 1),
(24, 24, 1),
(25, 25, 1),
(26, 26, 1),
(27, 27, 2),
(28, 28, 2),
(29, 29, 1),
(30, 30, 2),
(31, 31, 2),
(32, 32, 2),
(33, 33, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rating`
--

DROP TABLE IF EXISTS `tbl_rating`;
CREATE TABLE IF NOT EXISTS `tbl_rating` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `rating_type` varchar(5) NOT NULL,
  `rating_desc` text NOT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_rating`
--

INSERT INTO `tbl_rating` (`rating_id`, `rating_type`, `rating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give parental guidance. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'PG-15', 'PG-15 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 15. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(5, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(6, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rating_show`
--

DROP TABLE IF EXISTS `tbl_rating_show`;
CREATE TABLE IF NOT EXISTS `tbl_rating_show` (
  `rating_show_id` int(11) NOT NULL AUTO_INCREMENT,
  `rating_id` int(11) NOT NULL,
  `show_id` int(11) NOT NULL,
  PRIMARY KEY (`rating_show_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_rating_show`
--

INSERT INTO `tbl_rating_show` (`rating_show_id`, `rating_id`, `show_id`) VALUES
(1, 1, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_season`
--

DROP TABLE IF EXISTS `tbl_season`;
CREATE TABLE IF NOT EXISTS `tbl_season` (
  `season_id` int(11) NOT NULL AUTO_INCREMENT,
  `season_title` varchar(10) NOT NULL,
  `show_id` int(11) NOT NULL,
  PRIMARY KEY (`season_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_season`
--

INSERT INTO `tbl_season` (`season_id`, `season_title`, `show_id`) VALUES
(1, 'Season 1', 1),
(2, 'Season 2', 1),
(3, 'Season 3', 1),
(4, 'Season 1', 2),
(5, 'Season 2', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_show`
--

DROP TABLE IF EXISTS `tbl_show`;
CREATE TABLE IF NOT EXISTS `tbl_show` (
  `show_id` int(11) NOT NULL AUTO_INCREMENT,
  `show_title` varchar(50) NOT NULL,
  `show_year` int(4) NOT NULL,
  `show_link` varchar(70) NOT NULL,
  `show_img` varchar(70) NOT NULL,
  PRIMARY KEY (`show_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_show`
--

INSERT INTO `tbl_show` (`show_id`, `show_title`, `show_year`, `show_link`, `show_img`) VALUES
(1, 'M*A*S*H', 1972, 'mashtrailer.mp4', 'mash.jpg'),
(2, 'Little House on the Prairie', 1974, 'lhotp_theme.mp4', 'lhotp.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_song`
--

DROP TABLE IF EXISTS `tbl_song`;
CREATE TABLE IF NOT EXISTS `tbl_song` (
  `song_id` int(11) NOT NULL AUTO_INCREMENT,
  `song_title` varchar(40) NOT NULL,
  `song_src` varchar(20) NOT NULL,
  `album_id` int(11) NOT NULL,
  PRIMARY KEY (`song_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_song`
--

INSERT INTO `tbl_song` (`song_id`, `song_title`, `song_src`, `album_id`) VALUES
(1, 'Sig Du Vil', 'sigduvil.mp3', 4),
(2, 'Tiderne Skifter', 'tiderneskifter.mp3', 4),
(3, 'Spil Dit Spil', 'spilditspil.mp3', 4),
(4, 'Altid En', 'altiden.mp3', 4),
(5, 'Stop Nu Op', 'stopbuop.mp3', 4),
(6, 'Schizophrenia', 'schizophrenia.mp3', 1),
(7, 'Catholic Block', 'catholicblock.mp3', 1),
(8, 'Beauty Lies in the Eye', 'beautyintheeye.mp3', 1),
(9, 'Stereo Sanctity', 'stereosanctity.mp3', 1),
(10, 'Armatage Shanks', 'armatageshanks.mp3', 2),
(11, 'Brat', 'brat.mp3', 2),
(12, 'Stuck With Me', 'stuckwithme.mp3', 2),
(13, 'Love Me Do', 'lovemedo.mp3', 3),
(14, 'Please Please Me', 'pleasepleaseme.mp3', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `user_pass` varchar(80) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_admin` tinyint(1) NOT NULL DEFAULT '0',
  `user_access` tinyint(1) NOT NULL,
  `user_icon` varchar(20) NOT NULL DEFAULT 'yellow.jpg',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_pass`, `user_email`, `user_admin`, `user_access`, `user_icon`) VALUES
(10, 'adult', '$2y$10$41cRyoGMaaL0TuKQoiGdS.71RxnoJ5F.yeWl3/ZXTzX0Wi62GHWFS', 'adult@user.ca', 0, 5, 'blue.jpg'),
(9, 'master', '$2y$10$ktsmPEsKhnFj187ZhMrwvej2sLlLZrXoMjshEjHS6v6oqSHpk.cIe', 'master@admin.ca', 1, 6, 'neon.jpg'),
(11, 'teen', '$2y$10$L2G.dyLtBA2FthKX.WnfGuQGjrN/lYWZDZ/NT9KgmHf7gRphxYbY2', 'teen@user.ca', 0, 4, 'yellow.jpg'),
(12, 'child', '$2y$10$Tq3dk1WT16ZPfAwBTkPMruxekc4SMjzN9yvVli/cvw0/8TojelBBK', 'child@user.ca', 0, 1, 'yellow.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
