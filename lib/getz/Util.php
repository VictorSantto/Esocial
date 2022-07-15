<?php

	/**
	 * Utilities
     *
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	/**
	 * Enable CORS for external calls.
	 */
	function enableCORS() {
		/* 
		 * Allow from any origin.
		 */
		if (isset($_SERVER["HTTP_ORIGIN"])) {
			header("Access-Control-Allow-Origin: " . $_SERVER["HTTP_ORIGIN"]);
			header("Access-Control-Allow-Credentials: true");
			header("Access-Control-Max-Age: 86400"); // cache for 1 day
			header("Content-type: application/json; charset=UTF-8");
		}

		/* 
		 * Access-Control headers are received during OPTIONS requests.
		 */
		if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
			if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
				header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

			if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
				header("Access-Control-Allow-Headers: " . 
						$_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]);

			exit(0);
		}

		return true;
	}	 

	/**
	 * @param {String} date
	 * @return {String}
	 */
	function getDay($date) {
		$arr = explode("-", $date);
		$day = explode(" ", $arr[2]);
		
		return $day[0];
	}

	/**
	 * @param {Integer} mounth
	 * @param {Integer} year
	 * @return {Date}
	 */
	function getLastDay($mounth, $year) {
		return date("d", mktime(0, 0, 0, $mounth + 1, 1, $year) - 1);
	}
	
	/**
	 * @param {String} ent
	 */
	function getMounth($ent) {
		$retArr = explode("-", $ent);
		
		$ret = $retArr[1];
		
		if ($ret == "01") $ret = "Jan";
		else if ($ret == "02") $ret = "Fev";
		else if ($ret == "03") $ret = "Mar";
		else if ($ret == "04") $ret = "Abr";
		else if ($ret == "05") $ret = "Mai";
		else if ($ret == "06") $ret = "Jun";
		else if ($ret == "07") $ret = "Jul";
		else if ($ret == "08") $ret = "Ago";
		else if ($ret == "09") $ret = "Set";
		else if ($ret == "10") $ret = "Out";
		else if ($ret == "11") $ret = "Nov";
		else if ($ret == "12") $ret = "Dez";
		
		return $ret;
	}
	
	/**
	 * @param {String} date
	 * @return {String}
	 */
	function getYear($date) {
		$arr = explode("-", $date);
		$year = explode(" ", $arr[0]);
		
		return $year[0];
	}
	
	/**
	 * @param {String} date
	 * @return {String}
	 */
	function getTime($date) {
		$time = explode(" ", $date);
		$timeArr = explode(":", $time[1]);
		
		return $timeArr[0] . ":" . $timeArr[1];
	}

	/**
	 * @param {String} dateTime
	 * @return {Date}
	 */
	function getDateTime($dateTime) {
		return new DateTime($dateTime);
	}

	/**
	 * @param {DateTime} dateTime
	 * @return {String}
	 */
	function formatDate($dateTime) {
		return $dateTime->format("Y-m-d");
	}

	/**
	 * @param {DateTime} dateTime
	 * @return {String}
	 */
	function formatDateTime($dateTime) {
		return $dateTime->format("Y-m-d H:i:s");
	}

	/**
	 * @return {Date}
	 */
	function getCurrentDate() {
		$currentDatetime = new DateTime(null, new DateTimeZone("America/Sao_Paulo"));
		return $currentDatetime->format("Y-m-d");
	}

	/**
	 * @return {Date}
	 */
	function getCurrentDateTime() {
		$currentDatetime = new DateTime(null, new DateTimeZone("America/Sao_Paulo"));
		return $currentDatetime->format("Y-m-d H:i:s");
	}
	
	/**
	 * Convert price to double
	 *
	 * @param {String} ent
	 */
	function controllerDouble($ent) {
		$ret = str_replace(".", "", $ent); 
		$ret = str_replace(",", ".", $ret); 
		
		return $ret;
	}

	/**
	 * Convert dd/mm/YYYY to YYYY-mm-dd
	 *
	 * @param {String} ent
	 */
	function controllerDate($ent) {
		if ($ent == "null") {
			return "1900-01-01";
		} else {
			$retArr = explode("/", $ent);

			if (sizeof($retArr) > 1)
				$ret = $retArr[2] . "-" . $retArr[1] . "-" . $retArr[0];
			else
				$ret = "1900-01-01";
			
			return $ret;
		}
	}
	
	/**
	 * Convert dd/mm/YYYY 00:00 to YYYY-mm-dd 00:00
	 *
	 * @param {String} ent
	 */
	function controllerDateTime($ent) {
		if ($ent == "null") {
			return "1900-01-01 00:00";
		} else {
			$dateTime = explode(" ", $ent);
			$date = explode("/", $dateTime[0]);

			if (sizeof($date) > 1)
				$ret = $date[2] . "-" . $date[1] . "-" . $date[0];
			else
				$ret = "";

			return $ret . " " . $dateTime[1];
		}
	}
	
	/**
	 * Convert double to price
	 *
	 * @param {String} ent
	 */
	function modelDouble($ent) {
		$negative = stripos($ent, "-");
		
		if ($negative === 0)
			$ent = str_replace("-", "", $ent); 
		
		$retArr = explode(".", $ent);
		
		$ret = "";
		$number = "";
		$position = 0;
		
		for ($i = (strlen($retArr[0]) - 1); $i >= 0; $i--) {
			if ($position == 3) {
				$position = 0;
				
				$number = substr($retArr[0], $i, 1) . "." . $number;
			} else 
				$number = substr($retArr[0], $i, 1) . $number;

			$position++;
		}
		
		if (sizeof($retArr) > 1) {
			if (strlen($retArr[1]) > 1)
				$ret = $number . "," . substr($retArr[1], 0, 2);
			else
				$ret = $number . "," . substr($retArr[1], 0, 1) . "0";
		} else
			$ret = $number . ",00";
			
		if ($negative === 0)
			$ret = "-" . $ret; 

		return $ret;
	}

	/**
	 * Convert YYYY-mm-dd to dd/mm/YYYY
	 *
	 * @param {String} ent
	 */
	function modelDate($ent) {
		if ($ent == "1900-01-01") {
			$ret = "";
		} else {
			$retArr = explode("-", $ent);

			if (sizeof($retArr) > 1)
				$ret = $retArr[2] . "/" . $retArr[1] . "/" . $retArr[0];
			else
				$ret = "";
		}
		return $ret;
	}
	
	/**
	 * Convert YYYY-mm-dd 00:00 to dd/mm/YYYY 00:00
	 *
	 * @param {String} ent
	 */
	function modelDateTime($ent) {
		$dateTime = explode(" ", $ent);
		$date = explode("-", $dateTime[0]);

		if (sizeof($date) > 1)
			$ret = $date[2] . "/" . $date[1] . "/" . $date[0];
		else
			$ret = "";
			
		$time = explode(":", $dateTime[1]);
		
		return $ret . " " . $time[0] . ":" . $time[1];
	}
	
	/**
	 * Convert YYYY-mm-dd 00:00:00 to 00:00
	 *
	 * @param {Date} ent
	 */
	function modelTime($ent) {
		$dateTime = explode(" ", $ent);
		$time = substr($dateTime[1], 0, 5);
		
		return $time;
	}
	
	/**
	 * @param {String} date
	 * @return {String}
	 */
	function modelExtensionDate($date) {	
		return getDay($date) . " de " . getMounth($date) . " de " . getYear($date);
	}
	
	/**
	 * @param {String} date
	 * @return {String}
	 */
	function modelExtensionDatetime($date) {	
		return getDay($date) . " de " . getMounth($date) . " de " . getYear($date) . " às " . getTime($date);
	}
	
	/**
	 * Spaces to photo name
	 *
	 * @param {string} ent
	 */
	function modelPhoto($ent) {
		return str_replace(" ", "%20", $ent); 
	}
	
	/**
	 * Model Code
	 *
	 * @param {integer} ent
	 */
	function modelCode($ent) {
		$ret = $ent;
		$size = 6 - strlen($ent);
		
		for ($i = 0; $i < $size; $i++) {
			$ret = "0" . $ret;
		}

		return $ret;
	}

	/**
	 * Break line for internal property.
	 *
	 * @param {string} ent
	 */
	function modelTextArea($ent) {
		return str_replace("<BR/>", "&#10;", str_replace("<br/>", "&#10;", str_replace("<br />", "&#10;", $ent))); 
	}
	
	/**
	 * Double quotes for internal property.
	 *
	 * @param {string} ent
	 */
	function modelDoubleQuotes($ent) {
		return str_replace("\"", "&quot;", $ent);
	}
	
	/**
	 * Double quotes for json property.
	 *
	 * @param {string} ent
	 */
	function modelDoubleQuotesJson($ent) {
		return str_replace("\"", "\\\"", $ent);
	}
	
	/**
	 * Null
	 *
	 * @param {Object} ent
	 */
	function logicNull($ent) {
		return $ent == "null" ? "" : $ent;
	}
	
	/**
	 * Zero
	 *
	 * @param {Object} ent
	 */
	function logicZero($ent) {
		return ($ent == "null" || $ent == "") ? 0 : $ent;
	}
	
	/**
	 * String
	 *
	 * @param {Integer} line
	 * @param {Integer} count	 
	 */
	function modelStartLine($line, $count) {	
		while ($line > $count) {
			$line -= $count;
		}

		if ($line == 1)
			return "<div class='dv-line'>"; // return "<div class='dv-line-" . getNameLine($count) . "'>";
		else
			return "";
	}
	
	/**
	 * String
	 *
	 * @param {Integer} line
	 * @param {Integer} count	 
	 */
	function modelEndLine($line, $count) {
		while ($line > $count) {
			$line -= $count;
		}
		
		if ($line == $count)
			return "</div>";
		else
			return "";
	}
	
	/**
	 * String
	 *
	 * @param {Integer} line
	 * @param {Integer} count	 
	 */
	function modelCheckEndLine($line, $count) {
		while ($line > $count) {
			$line -= $count;
		}

		if ($line != $count)
			return "</div>";
		else
			return "";
	}
	
	/**
	 * String
	 *
	 * @param {Integer} count
	 */
	function getNameLine($count) {
		if ($count == 2)
			return "two";
		else if ($count == 3)
			return "three";
		else if ($count == 4)
			return "four";
	}
	
	/**
	 * Add line when blank
	 */
	function addLine($ent) {
		$accent = array("à", "á", "ã", "é", "ê", "í", "ó", "ô", "õ", "ú", "ç");
		$normal = array("a", "a", "a", "e", "e", "i", "o", "o", "o", "u", "c");
		$ent = mb_strtolower($ent);
		$ent = str_replace($accent, $normal, $ent);
		$ent = preg_replace("/-/", "%0", $ent);
		$ent = preg_replace("/\//", "%1", $ent);
		return rawurlencode(preg_replace("/ /", "-", $ent));
	}
	
	/**
	 * Remove line
	 *
	 * @param {string} ent
	 */
	function removeLine($ent){
		$ent = preg_replace("/-/", " ", $ent);
		$ent = preg_replace("/%0/", "-", $ent);
		return rawurldecode(preg_replace("/%1/", "\/", $ent));
	}
	
	/**
	 * Two houses
	 *
	 * @param {double} ent
	 */
	function twoHouses($ent){
		return sprintf("%.2f", $ent);
	}
	
	/**
	 * Check is Leap Year.
	 *
	 * @param {Integer} year
	 */
	function isLeapYear($year) {
		return date("L", mktime(0, 0, 0, 1, 1, $year));
	}
	
?>