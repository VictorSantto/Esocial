<?php

	/**
	 * Min
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	namespace lib\getz;
	
	class Min {
	
		/**
		 * @param {String} filePath
		 * @param {String} type 
		 */
		public function __construct($filePath, $type) { 
			$lines = file($filePath . "." . $type);
			$min = "";
			
			if ($type == "css") {
				foreach ($lines as $line_num => $line) {
					if (strripos($line, "*") === false)
							$min .= str_replace("} ", "}", 
									str_replace(" }", "}", 
									str_replace(" } ", "}", 
									str_replace("{ ", "{", 
									str_replace(" {", "{", 
									str_replace(" { ", "{", 
									str_replace(": ", ":", 
									str_replace(", ", ",", 
									trim(preg_replace("@[\n\r]@s","", $line))))))))));
				}
			} else if ($type == "js") {
				foreach ($lines as $line_num => $line) {
					if (strripos($line, "*") === false) {
						if (strripos($line, "//") === false)
							$min .= trim(preg_replace("@[\n\r]@s","", $line));
					} else {
						if (substr(str_replace(" ", "", trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "/" && 
								substr(str_replace(" ", "", trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "*")
								
							$min .= trim(preg_replace("@[\n\r]@s","", $line));
					}
				}
				
				/*
				foreach ($lines as $line_num => $line) {
					if (strripos($line, "*") === false) {
						if (strripos($line, "//") === false)
							$min .= str_replace("elsespaceif", "else if",
									str_replace("functionspace", "function ", 
									str_replace("varspace", "var ", 
									str_replace("quotespace", "\" \"",
									str_replace(" ", "", 
									str_replace("else if ", "elsespaceif",	
									str_replace("function ", "functionspace",
									str_replace("var ", "varspace", 
									str_replace("\" \"", "quotespace", 
									trim(preg_replace("@[\n\r]@s","", $line)))))))))));
					} else {
						if (substr(str_replace(" ", "", trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "/" && 
								substr(str_replace(" ", "", trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "*")
								
							$min .= str_replace("elsespaceif", "else if",
									str_replace("functionspace", "function ", 
									str_replace("varspace", "var ", 
									str_replace("quotespace", "\" \"",
									str_replace(" ", "", 
									str_replace("else if ", "elsespaceif",	
									str_replace("function ", "functionspace",
									str_replace("var ", "varspace", 
									str_replace("\" \"", "quotespace", 
									trim(preg_replace("@[\n\r]@s","", $line)))))))))));
					}
				}
				*/
			} else {
				foreach ($lines as $line_num => $line) {
					if (strripos($line, "<!--") === false)
						$min .= trim(preg_replace("@[\n\r]@s","", $line));
				}	
			}
			
			$fo = fopen($filePath . "-min." . $type, "w");
			$fw = fwrite($fo, $min);	
			fclose($fo);
		}
		
	}
	
?>