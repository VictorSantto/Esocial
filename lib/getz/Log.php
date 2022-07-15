<?php

	/**
	 * Log
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */
	 
	namespace lib\getz;

	class Log {
	
		public function __construct() { }
		
		public function write($name, $log) { 
			$fo = fopen("../../_dev/log/log.txt", "a");
			
			$fw = fwrite($fo, "Date: " . date("Y-m-d H:i:s") . "
LOG [" . $name . "]: " . $log . "

");

			fclose($fo);
		}
		
	}

?>