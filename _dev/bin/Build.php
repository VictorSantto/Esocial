<?php

	/**
	 * Build to production.
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */
	 
	/**
	 * @param {String} filePath
	 * @param {String} type 
	 */
	function build($filePath, $type) { 
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
					if (substr(str_replace(" ", "", 
							trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "/" && 
							substr(str_replace(" ", "", 
							trim(preg_replace("@[\n\r]@s","", $line))), 0, 1) != "*")
							
						$min .= trim(preg_replace("@[\n\r]@s","", $line));
				}
			}
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
	
	function copyDir($diretorio, $destino) {
		if ($destino{strlen($destino) - 1} == "/")
			$destino = substr($destino, 0, -1);

		if (!is_dir($destino))
			mkdir($destino, 0755);

		$folder = opendir($diretorio);

		while ($item = readdir($folder)){
			if ($item == "." || $item == "..")
				continue;
	
			if (is_dir("{$diretorio}/{$item}"))
				copyDir($diretorio . "/" . $item, $destino . "/" . $item);
			else
				copy($diretorio . "/" . $item, $destino . "/" . $item);
		}
	}
	
	function deleteDir($dir) {
		if (is_file($dir))
			return unlink($dir);
		else if (is_dir($dir)) {
			$scan = glob(rtrim($dir, "/") . "/*");
			
			foreach($scan as $index => $path) {
				deleteDir($path);
			}
			
			return rmdir($dir);
		}
	}
	
	$settings = simplexml_load_file("settings.xml");
	
	$root = $_SERVER["DOCUMENT_ROOT"] . "/" . $settings->project . "/";
	$path = $root . "res/css/";
	$file = "divmon-1.0.0";	// Divmon.
	$type = "css";
	
	build($path . $file, $type);
	
	mkdir($path . "_dev"); // Create directory.
	
	$origem = $path . $file . "-min." . $type;
	$destino = $path . "_dev/" . $file . "." . $type;
	rename($origem, $destino);
	
	$file = "flygon-1.0.0";	// Flygon.
	
	build($path . $file, $type);
	
	$origem = $path . $file . "-min." . $type;
	$destino = $path . "_dev/" . $file . "." . $type;
	rename($origem, $destino);
	
	$file = "gzstan-1.0.0"; // Getz standard.
	
	build($path . $file, $type);
	
	$origem = $path . $file . "-min." . $type;
	$destino = $path . "_dev/" . $file . "." . $type;
	rename($origem, $destino);
	
	/*
	 * Move directories.
	 */
	$origem = $root . "/lib";
	$destino = $root . "_dev/WebContent/lib";
	copyDir($origem, $destino);
	
	$origem = $root . "/mod";
	$destino = $root . "_dev/WebContent/mod";
	copyDir($origem, $destino);
	
	$origem = $root . "/res";
	$destino = $root . "_dev/WebContent/res";
	copyDir($origem, $destino);
	
	$origem = $root . "/src";
	$destino = $root . "_dev/WebContent/src";
	copyDir($origem, $destino);
	
	/*
	 * Copy and remove directory.
	 */
	$origem = $root . "/res/css/_dev";
	$destino = $root . "_dev/WebContent/res/css";
	copyDir($origem, $destino);
	deleteDir($root . "/res/css/_dev");
	deleteDir($root . "_dev/WebContent/res/css/_dev");
	
	/*
	 * Files.
	 */
	$origem = $root . ".htaccess";
	$destino = $root . "_dev/WebContent/.htaccess";
	copy($origem, $destino);
	
	$origem = $root . "Autoload.php";
	$destino = $root . "_dev/WebContent/Autoload.php";
	copy($origem, $destino);
	
	$origem = $root . "robots.txt";
	$destino = $root . "_dev/WebContent/robots.txt";
	copy($origem, $destino);	

	$origem = $root . "settings.xml";
	$destino = $root . "_dev/WebContent/settings.xml";
	copy($origem, $destino);
	
	$origem = $root . "sitemap.xml";
	$destino = $root . "_dev/WebContent/sitemap.xml";
	copy($origem, $destino);

?>