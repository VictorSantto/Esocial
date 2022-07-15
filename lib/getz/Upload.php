<?php

	/**
	 * Upload
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 * @since 2014-07-26
	 */
	 
	namespace lib\getz;

	class Upload {
	
		private $name;
		private $extension;
		
		/**
		 * @param {Object} file
		 * @param {Integer} size
		 */
		function __construct($file, $size) {
			/*
			 * Document
			 */
			if ($size == 0) {
				$temp_link = "../../res/doc/";
				$path_info = pathinfo($file["name"]);
				$this->name = md5(uniqid(time())) . "." . $path_info["extension"];
				$this->extension = $path_info["extension"];
				move_uploaded_file($file["tmp_name"], $temp_link . $this->name);
			}
			
			/* 
			 * Image
			 */
			else {
				$temp_link = "../../res/img/";

				move_uploaded_file($file["tmp_name"], $temp_link . $file["name"]);
						
				/*
				 * Get extension
				 */
				preg_match("/\.(gif|bmp|png|jpg|jpeg|PNG|JPG|JPEG){1}$/i", $file["name"], $ext);  
				$this->name = md5(uniqid(time())) . "." . $ext[1];  
				$this->extension = $ext[1];  
				
				/*
				 * Check extension
				 */
				if ($ext[1] == "jpg" || $ext[1] == "jpeg" || $ext[1] == "JPG" || $ext[1] == "JPEG")
					$image = @imagecreatefromjpeg($temp_link . $file["name"]);
				else if ($ext[1] == "gif")
					$image = @imagecreatefromgif($temp_link . $file["name"]);
				else if ($ext[1] == "png" || $ext[1] == "PNG") {
					$image = @imagecreatefrompng($temp_link . $file["name"]);

					imagealphablending($image, true);
				}
	
				/*
				 * Get original size
				 */
				$orig_width = imagesx($image);
				$orig_height = imagesy($image);
		
				/*
				 * High definition
				 */
				$height = (($orig_height * $size) / $orig_width);

				$hdpi = imagecreatetruecolor($size, $height);
				
				/*
				 * PNG
				 */
				if ($ext[1] == "png" || $ext[1] == "PNG") {
					imagealphablending($hdpi, false);
					imagesavealpha($hdpi, true);
				}
				
				imagecopyresampled($hdpi, $image, 0, 0, 0, 0, $size, 
						$height, $orig_width, $orig_height);
						
				if ($ext[1] == "jpg" || $ext[1] == "jpeg" || $ext[1] == "JPG" || $ext[1] == "JPEG")
					imagejpeg($hdpi, $temp_link . "/hdpi/" . $this->name, 100);
				else if ($ext[1] == "gif")
					imagegif($hdpi, $temp_link . "/hdpi/" . $this->name);
				else if ($ext[1] == "png" || $ext[1] == "PNG")
					imagepng($hdpi, $temp_link . "/hdpi/" . $this->name, 0);

				/*
				 * Medium definition
				 */
				$height = (($orig_height * 320) / $orig_width);

				$mdpi = imagecreatetruecolor(320, $height);
				
				/*
				 * PNG
				 */
				if ($ext[1] == "png" || $ext[1] == "PNG") {
					imagealphablending($mdpi, false);
					imagesavealpha($mdpi, true);
				}

				imagecopyresampled($mdpi, $image, 0, 0, 0, 0, 320, 
						$height, $orig_width, $orig_height);
						
				if ($ext[1] == "jpg" || $ext[1] == "jpeg" || $ext[1] == "JPG" || $ext[1] == "JPEG")
					imagejpeg($mdpi, $temp_link . "/mdpi/" . $this->name, 100);
				else if ($ext[1] == "gif")
					imagegif($mdpi, $temp_link . "/mdpi/" . $this->name);
				else if ($ext[1] == "png" || $ext[1] == "PNG")
					imagepng($mdpi, $temp_link . "/mdpi/" . $this->name, 0);
					
				/*
				 * Low definition
				 */
				$height = (($orig_height * 160) / $orig_width);

				$ldpi = imagecreatetruecolor(160, $height);
				
				/*
				 * PNG
				 */
				if ($ext[1] == "png" || $ext[1] == "PNG") {
					imagealphablending($ldpi, false);
					imagesavealpha($ldpi, true);
				}

				imagecopyresampled($ldpi, $image, 0, 0, 0, 0, 160, 
						$height, $orig_width, $orig_height);
						
				if ($ext[1] == "jpg" || $ext[1] == "jpeg" || $ext[1] == "JPG" || $ext[1] == "JPEG")
					imagejpeg($ldpi, $temp_link . "/ldpi/" . $this->name, 100);
				else if ($ext[1] == "gif")
					imagegif($ldpi, $temp_link . "/ldpi/" . $this->name);
				else if ($ext[1] == "png" || $ext[1] == "PNG")
					imagepng($ldpi, $temp_link . "/ldpi/" . $this->name, 0);					
					
				// Remove original photo
				unlink($temp_link . $file["name"]);
			}
		}
		
		/**
		 * @return {String}
		 */
		public function getName() {
			return $this->name;
		}
		
		/**
		 * @return {String}
		 */
		public function getExtension() {
			return $this->extension;
		}
		
	}

?>