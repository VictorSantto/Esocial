<?php

	/**
	 * Data reader to the HTML
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */
	 
	namespace lib\getz;
	
	use lib\getz;

	class Darth {
	
		private $root;
		private $module;
		private $package;
		private $language;
		private $title;
		private $description;
		private $keywords;
		private $theme;
		
		public function __construct($_ROOT, $_MODULE, $_PACKAGE) { 
			$this->setRoot($_ROOT);
			$this->setModule($_MODULE);
			$this->setPackage($_PACKAGE);
			$this->language = new getz\Language();
		}
		
		public function setRoot($root) {
			$this->root = $root;
		}
		
		public function getRoot() {
			return $this->root;
		}
		
		public function setModule($module) {
			$this->module = $module;
		}
		
		public function getModule() {
			return $this->module;
		}
		
		public function setPackage($package) {
			$this->package = $package;
		}
		
		public function getPackage() {
			return $this->package;
		}
		
		public function setTitle($title) {
			$this->title = $title;
		}
		
		public function getTitle() {
			return $this->title;
		}
	
		public function setDescription($description) {
			$this->description = $description;
		}
		
		public function getDescription() {
			return $this->description;
		}

		public function setKeywords($keywords) {
			$this->keywords = $keywords;
		}
		
		public function getKeywords() {
			return $this->keywords;
		}	

		public function setTheme($theme) {
			$this->theme = $theme;
		}
		
		public function getTheme() {
			return $this->theme;
		}			

		/**
		 * Data to object
		 *
		 * @param {Array} array
		 * @return {Json}
		 */
		public function json($array) {
			if ($array != "") {
				$json = "[";
				
				/*
				 * For each collection
				 */
				foreach ($array as $each_array) {
					// For each line
					$json .= "{";
					
					/*
					 * For each column
					 */
					foreach ($each_array as $key => $value) {
						$json .= "\"" . $key . "\":\"" . str_replace("\"", "\\\"", $value) . "\",";
					}
					
					// Remove the last key of line
					$json = substr($json, 0, -1);
					
					$json .= "},";
				}	

				// Remove the last key of brackets
				$json = substr($json, 0, -1);

				$json .= "]";
				
				return $json;
			} else
				return "{}";
		}
		
		/**
		 * HTML constructor
		 *
		 * @param {Array} array
		 * @param {String} view
		 * @return {String}
		 */
		public function view($array, $view) {		
			$html = "";
			$for = "";
			$all = "false";
			$one = "false";
			$object = "";
				
			$char = file_get_contents($view);
	
			/*
			 * For each characther
			 */
			for ($i = 0; $i < strlen($char); $i++) {
				if ($all == "true") {
					if ($char[$i] == "<" && $char[$i + 1] == "/" && 
							$char[$i + 2] == "f" && $char[$i + 3] == "o" && 
							$char[$i + 4] == "r" && $char[$i + 5] == ">") { 
							
						// Set next position	
						$i = $i + 5;
						
						if ($array != "") {
							if (isset($array[0][$object]) && is_array($array[0][$object]) && 
									sizeof($array[0][$object]) != 0)
								$html .= $this->all($array[0][$object], $for);
						}

						$for = "";
						$all = "false";
					} else
						$for .= $char[$i];
				} else if ($one == "true") {
					if ($char[$i] == "<" && $char[$i + 1] == "/" && 
							$char[$i + 2] == "o" && $char[$i + 3] == "n" && 
							$char[$i + 4] == "e" && $char[$i + 5] == ">") { 
							
						// Set next position	
						$i = $i + 5;
						
						if ($array != "") {
							if (isset($array[0][$object]) && is_array($array[0][$object]) && 
									sizeof($array[0][$object]) != 0)
								$html .= $this->one($array[0][$object], $for);
						}
						
						$for = "";
						$one = "false";
					} else
						$for .= $char[$i];
				} else {
					/*
					 * Check the tag
					 */
					if ($char[$i] == "<" && $char[$i + 1] == "f" && 
							$char[$i + 2] == "o" && $char[$i + 3] == "r" &&
							$char[$i + 4] == "(") { 
							
						// Set next position	
						$i = $i + 4;
						
						// The object
						$object = "";
						
						for ($j = ($i + 1); $j < strlen($char); $j++) {
							if ($char[$j] == ")" && $char[$j + 1] == ">") {
								$i = $j + 1;
							
								break;
							} else
								$object .= $char[$j];
						}		

						$all = "true";
					} else if ($char[$i] == "<" && $char[$i + 1] == "o" && 
							$char[$i + 2] == "n" && $char[$i + 3] == "e" &&
							$char[$i + 4] == "(") { 
							
						// Set next position	
						$i = $i + 4;
						
						// The object
						$object = "";
						
						for ($j = ($i + 1); $j < strlen($char); $j++) {
							if ($char[$j] == ")" && $char[$j + 1] == ">") {
								$i = $j + 1;
							
								break;
							} else
								$object .= $char[$j];
						}		
							
						$one = "true";
					} else
						$html .= $char[$i];
				}
			}
			
			// Current datetime
			$html = str_replace("@_DATETIME", date("d/m/Y H:i", (time() - 3600 * 3)), $html);
			
			// Current date
			$html = str_replace("@_DATE", date("d/m/Y", (time() - 3600 * 3)), $html);		
			
			// Root
			$html = str_replace("@_ROOT", $this->getRoot(), $html);
			
			// Module
			$html = str_replace("@_MODULE", $this->getModule(), $html);
			
			// Package
			$html = str_replace("@_PACKAGE", $this->getPackage(), $html);		
			
			// Title
			$html = str_replace("@_TITLE", $this->getTitle(), $html);
			
			/*
			 * SEO
			 */
			if ($this->getDescription() != "") {
				$html = str_replace("@_DESCRIPTION", $this->getDescription(), $html);
				$html = str_replace("@_KEYWORDS", $this->getKeywords(), $html);
				$html = str_replace("@_ROBOTS", "index, follow", $html);
			} else {
				$html = str_replace("@_DESCRIPTION", "", $html);
				$html = str_replace("@_KEYWORDS", "", $html);
				$html = str_replace("@_ROBOTS", "noindex, nofollow", $html);
			}
			
			// Theme
			$html = str_replace("@_THEME", $this->getTheme(), $html);
			
			/*
			 * Language
			 */
			$html = str_replace("@_LAN_CREATE", $this->language->getCreate(), $html);
			$html = str_replace("@_LAN_UPDATE", $this->language->getUpdate(), $html);
			$html = str_replace("@_LAN_GO_BACK", $this->language->getGoBack(), $html);
			$html = str_replace("@_LAN_ADD", $this->language->getAdd(), $html);
			$html = str_replace("@_LAN_SEARCH_FOR", $this->language->getSearchFor(), $html);
			$html = str_replace("@_LAN_SEARCH", $this->language->getSearch(), $html);
			$html = str_replace("@_LAN_DELETE", $this->language->getDelete(), $html);
			$html = str_replace("@_LAN_ITEMS_PAGE", $this->language->getItemsPage(), $html);
			$html = str_replace("@_LAN_OF", $this->language->getOf(), $html);
			$html = str_replace("@_LAN_FIRST", $this->language->getFirst(), $html);
			$html = str_replace("@_LAN_PREVIOUS", $this->language->getPrevious(), $html);
			$html = str_replace("@_LAN_NEXT", $this->language->getNext(), $html);
			$html = str_replace("@_LAN_LAST", $this->language->getLast(), $html);
			$html = str_replace("@_LAN_CONFIRM", $this->language->getConfirm(), $html);
			$html = str_replace("@_LAN_CANCEL", $this->language->getCancel(), $html);
			$html = str_replace("@_LAN_CLOSE", $this->language->getClose(), $html);
			$html = str_replace("@_LAN_LOGIN", $this->language->getLogin(), $html);
			$html = str_replace("@_LAN_CHANGE", $this->language->getChange(), $html);
			
			/*
			if ($array != "")
				return $html . "<size>" . $array[0]["size"];	
			else
				return $html;
			*/
	
			return $html;
		}

		/**
		 * @param {Array} array
		 * @param {String} for
		 * @return {String}
		 */
		private function all($array, $for) {
			$html = "";
			$foreach = false;
			
			/*
			 * For each result
			 */
			for ($count = 0; $count < count($array); $count++) {
				/*
				 * For all character
				 */
				for ($i = 0; $i < strlen($for); $i++) {
					/*
					 * Check the tag
					 */
					if ($for[$i] == "<" && $for[$i + 1] == "g" && 
							$for[$i + 2] == "z" && $for[$i + 3] == ">") {

						// Set next position
						$i = $i + 3;
						
						// Reset
						$tag = "";
						
						/*
						 * Tag content
						 */
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == "<" && $for[$j + 1] == "/" && 
									$for[$j + 2] == "g" && $for[$j + 3] == "z" && 
									$for[$j + 4] == ">") {
									
								// Set next position	
								$i = $j + 4;
								
								// Set HTML
								$html .= isset($array[$count][$tag]) ? $array[$count][$tag] : "";
								
								break;
							} else
								// Set field name
								$tag .= $for[$j];
						}
					} else if ($for[$i] == "<" && $for[$i + 1] == "f" && 
							$for[$i + 2] == "o" && $for[$i + 3] == "r" &&
							$for[$i + 4] == "e" && $for[$i + 5] == "a" &&
							$for[$i + 6] == "c" && $for[$i + 7] == "h" &&
							$for[$i + 8] == "(") {

						// Set next position
						$i = $i + 8;
						
						// The object
						$object = "";
						
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == ")" && $for[$j + 1] == ">") {
								$i = $j + 1;
							
								break;
							} else
								$object .= $for[$j];
						}

						$objectArr = isset($array[$count][$object]) ? $array[$count][$object] : array();
						
						/*
						 * Object array check
						 */
						if (sizeof($objectArr) == 0) {
							for ($j = ($i + 1); $j < strlen($for); $j++) {
								if ($for[$j] == "<" && $for[$j + 1] == "/" && 
										$for[$j + 2] == "f" && $for[$j + 3] == "o" &&
										$for[$j + 4] == "r" && $for[$j + 5] == "e" &&
										$for[$j + 6] == "a" && $for[$j + 7] == "c" &&
										$for[$j + 8] == "h" && $for[$j + 9] == ">") {
										
									// Set next position	
									$i = $j + 9;
									
									break;
								} else
									$i = $j;
							}
						} else {
							$base = $i;
							
							for ($o = 0; $o < sizeof($objectArr); $o++) {
								$i = $base;
								
								/*
								 * Tag content
								 */
								for ($j = ($i + 1); $j < strlen($for); $j++) {
									if ($for[$j] == "<" && $for[$j + 1] == "/" && 
											$for[$j + 2] == "f" && $for[$j + 3] == "o" &&
											$for[$j + 4] == "r" && $for[$j + 5] == "e" &&
											$for[$j + 6] == "a" && $for[$j + 7] == "c" &&
											$for[$j + 8] == "h" && $for[$j + 9] == ">") {
											
										// Set next position	
										$i = $j + 9;
										
										break;
									} else {
										if ($for[$j] == "<" && $for[$j + 1] == "g" && 
												$for[$j + 2] == "z" && $for[$j + 3] == ">") {

											/*
											 * Set next position
											 */
											$i = $j + 3;
											$j = $j + 3;
											
											// Reset
											$tag = "";
											
											/*
											 * Tag content
											 */
											for ($k = ($j + 1); $k < strlen($for); $k++) {
												if ($for[$k] == "<" && $for[$k + 1] == "/" && 
														$for[$k + 2] == "g" && $for[$k + 3] == "z" && 
														$for[$k + 4] == ">") {
														
													/* 
													 * Set next position	
													 */
													$i = $k + 4;
													$j = $k + 4;
													
													// Set HTML
													$html .= isset($objectArr[$o][$tag]) ? $objectArr[$o][$tag] : "";
													
													break;
												} else {
													// Set field name
													$tag .= $for[$k];
													
													/* 
													 * Set next position	
													 */
													$i++;
													$j++;			
												}
											}
										} else {
											$html .= $for[$j];

											// Set next position	
											$i++;
										}
									}
								}
							}
						}
					} else
						$html .= $for[$i];
				}
			}

			return $html;
		}
		
		/**
		 * @param {Array} array
		 * @param {String} for
		 * @return {String}
		 */
		private function one($array, $for) {
			$html = "";
			
			/*
			 * For each result
			 */
			for ($count = 0; $count < 1; $count++) {
				/*
				 * For all character
				 */
				for ($i = 0; $i < strlen($for); $i++) {
					/*
					 * Check the tag
					 */
					if ($for[$i] == "<" && $for[$i + 1] == "g" && 
							$for[$i + 2] == "z" && $for[$i + 3] == ">") {

						// Set next position
						$i = $i + 3;
						
						// Reset
						$tag = "";
						
						/*
						 * Tag content
						 */
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == "<" && $for[$j + 1] == "/" && 
									$for[$j + 2] == "g" && $for[$j + 3] == "z" && 
									$for[$j + 4] == ">") {
									
								// Set next position	
								$i = $j + 4;
								
								// Set HTML
								$html .= isset($array[$count][$tag]) ? $array[$count][$tag] : "";
								
								break;
							} else
								// Set field name
								$tag .= $for[$j];
						}
					} else
						$html .= $for[$i];
				}
			}

			return $html;
		}
		
	}

?>