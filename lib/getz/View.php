<?php

	/**
	 * Data reader to the HTML
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 * @since 2021-08-26
	 * 
	 * Render html with context and new tags <if> <in>, context
	 * @author Gabriel Santos Resende <gabriel.s.resende99@gmail.com> 
	 *
	 */
	 
	namespace lib\getz;
	
	use lib\getz;

	class View {
	
		private static $singleton;
		private $documentRoot;
		private $root;
		private $module;
		private $package;
		private $language;
		private $title;
		private $description;
		private $keywords;
		private $theme;
		private $parameters;
		
		public function __construct($_ROOT, $_MODULE, $_PACKAGE, $_PARAMETERS = null, $_DOCUMENT_ROOT = null) { 
			$this->setRoot($_ROOT);
			$this->setModule($_MODULE);
			$this->setPackage($_PACKAGE);
			$this->language = new getz\Language();
			$this->parameters = $_PARAMETERS;
			$this->documentRoot = $_DOCUMENT_ROOT;
			View::$singleton = $this;
		}

		public static function getInstance(): View {
			return View::$singleton;
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

		public function replace_routes($string) {
			$string = str_replace("@_ROOT", $this->getRoot(), $string);
			$string = str_replace("@_MODULE", $this->getModule(), $string);
			$string = str_replace("@_PACKAGE", $this->getPackage(), $string);
			$string = str_replace("@_DOCUMENT_ROOT", $this->documentRoot, $string);
			return $string;
		}

		public function parse($file, $array=[]) {
			$html = file_get_contents($file);
			$html = $this->_parse($html, $array)["parsed"];
			$html = str_replace("@_DATETIME", date("d/m/Y H:i", (time() - 3600 * 3)), $html);
			$html = str_replace("@_DATE", date("d/m/Y", (time() - 3600 * 3)), $html);		
			$html = str_replace("@_ROOT", $this->getRoot(), $html);
			$html = str_replace("@_MODULE", $this->getModule(), $html);
			$html = str_replace("@_PACKAGE", $this->getPackage(), $html);		
			$html = str_replace("@_TITLE", $this->getTitle(), $html);
			if ($this->getDescription() != "") {
				$html = str_replace("@_DESCRIPTION", $this->getDescription(), $html);
				$html = str_replace("@_KEYWORDS", $this->getKeywords(), $html);
				$html = str_replace("@_ROBOTS", "index, follow", $html);
			} else {
				$html = str_replace("@_DESCRIPTION", "", $html);
				$html = str_replace("@_KEYWORDS", "", $html);
				$html = str_replace("@_ROBOTS", "noindex, nofollow", $html);
			}
			// $html = str_replace("@_THEME", $this->getTheme(), $html);
			$html = str_replace("@_THEME", "gz-dark-blue-grey", $html);
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
			$html = str_replace("@_LAN_SHOW_ALL_REGISTERS", $this->language->getShowAllRegisters(), $html);
			$html = str_replace("@_LAN_CONFIRM", $this->language->getConfirm(), $html);
			$html = str_replace("@_LAN_CANCEL", $this->language->getCancel(), $html);
			$html = str_replace("@_LAN_CLOSE", $this->language->getClose(), $html);
			$html = str_replace("@_LAN_LOGIN", $this->language->getLogin(), $html);
			$html = str_replace("@_LAN_CHANGE", $this->language->getChange(), $html);
			$html = str_replace("@_PARAMETERS", $this->parameters, $html);
			return $html;
		}

		private function _parse($html, $array, $cursor_init=0, $close_tag=null){
			$cursor = $cursor_init;
			$parsed_html = "";
			while ($cursor < strlen($html)) {
				$char = $html[$cursor];
				if ($char == "<") {
					if ($html[$cursor + 1] == "/") {
						if ($close_tag && $close_tag == substr($html, $cursor, strlen($close_tag))) {
							$cursor += strlen($close_tag);
							break;
						} else {
							$parsed_html .= $char;
						}
					} else {
						$tag_info = $this->_getTag($html, $cursor + 1);
						$tag = $tag_info["tag"];
						$params = $tag_info["params"];
						switch ($tag) {
							case "gz":
								$cursor = $tag_info["current_cursor"];
								$char = $html[$cursor];
								$target = "";
								while ($char != "<") {
									$target .= $char;
									$cursor++;
									$char = $html[$cursor];
								}
								$cursor += 4;
								if (array_key_exists($target, $array) && ($array[$target] == 0 || 
										$array[$target] != null)) {
									$parsed_html .= $array[$target];
								}
								break;
							case "for":
								$cursor = $tag_info["current_cursor"];
								if (array_key_exists($params[0], $array) && $array[$params[0]] != null) {
									$target = $array[$params[0]];
									if (is_array($target) && sizeof($target) > 0) {
										foreach ($target as $key => $value) {
											$result = $this->_parse($html, $value, $cursor, "</for>");
											$parsed_html .= $result["parsed"];
										}
										$cursor = $result["cursor"];
									} else {
										$cursor = $this->jump_tag($html, $cursor, "for");
									}
								} else {
									$cursor = $this->jump_tag($html, $cursor, "for");
								}
								break;
							case "foreach":
								$cursor = $tag_info["current_cursor"];
								$target = $array[$params[0]];
								if (is_array($target) && sizeof($target) > 0) {
									foreach ($target as $key => $value) {
										$context = ["value" => $value, "key" => $key];
										$result = $this->_parse($html, $context, $cursor, "</foreach>");
										$parsed_html .= $result["parsed"];
									}
									$cursor = $result["cursor"];
								} else {
									$cursor = $this->jump_tag($html, $cursor, "foreach");
								}
								break;
							case "in":
								$cursor = $tag_info["current_cursor"];
								$target = $array[$params[0]];
								if (is_array($target) && sizeof($target) > 0) {
									$result = $this->_parse($html, $target, $cursor, "</in>");
									$cursor = $result["cursor"];
									$parsed_html .= $result["parsed"];
								} else {
									$cursor = $this->jump_tag($html, $cursor, "in");
								}
								break;
							case "one":
								$cursor = $tag_info["current_cursor"];
								if (array_key_exists($params[0], $array) && $array[$params[0]] != null) {
									$target = $array[$params[0]][0];
									if (is_array($target) && sizeof($target) > 0) {
										$result = $this->_parse($html, $target, $cursor, "</one>");
										$cursor = $result["cursor"];
										$parsed_html .= $result["parsed"];
									} else {
										$cursor = $this->jump_tag($html, $cursor, "one");
									}
								} else {
									$cursor = $this->jump_tag($html, $cursor, "one");
								}
								break;
							case "if": /************************ In test. ************************/
								/* Check condition if equals, if not equals, if more than, if less than, if between... */
								$cursor = $tag_info["current_cursor"];
								$target = $array[$params[0]];
								$condition = true;
								if (isset($params[1])) {
									$condition = $params[1];
								}
								if ($target === $condition) {
									$result = $this->_parse($html, $array, $cursor, "</if>");
									$cursor = $result["cursor"];
									$parsed_html .= $result["parsed"];
								} else {
									$cursor = $this->jump_tag($html, $cursor, "if");
								}
								break;
							case "file":
								$cursor = $tag_info["current_cursor"];
								$cursor--;
								$target = $params[0];
								$target = $this->replace_routes($target);
								if (file_exists($target)) {
									$content = file_get_contents($target);
									$parsed_html .= $content;
									// $parsed_html .= $this->_parse($content, $array)["parsed"];
								} else {
									/* Insert code here. */
								}
								break;
							default:
								$parsed_html .= $char;
								break;
						}
					}
				} else {
					$parsed_html .= $char;
				}
				$cursor++;
			}
			return [
				"parsed" => $parsed_html,
				"cursor" => $cursor - 1,
			];
		}

		private function _getTag($html, $cursor) {
			$current_cursor = $cursor;
			$tag = "";
			$full_tag = false;
			$params = [];
			while ($current_cursor < strlen($html)) {
				$char = $html[$current_cursor];
				if ($char == ">") {
					$current_cursor += 1;
					break;
				}
				if ($char == " ") {
					$current_cursor += 1;
					$full_tag = true;
					continue;
				}
				if ($char == "(") {
					$full_tag = true;
					$current_cursor += 1;
					$char = $html[$current_cursor];
					$param = "";
					while ($char != ")") {
						if ($char == ",") {
							$params[] = $param;
							$param = "";
						} else if ($char != " ") {
							$param .= $char;
						}
						$current_cursor += 1;
						$char = $html[$current_cursor];
					}
					$current_cursor += 1;
					$params[] = $param;
					continue;
				}
				if (!$full_tag) {
					$tag .= $char;
				}
				$current_cursor += 1;
			}
			return [
				"tag" => $tag,
				"params" => $params,
				"current_cursor" => $current_cursor,
			];
		}

		private function jump_tag($html, $cursor, $tag) {
			$tag_deep = 1;
			while ($tag_deep > 0 && strlen($html) > $cursor) {
				if ($html[$cursor] == "<") {
					if ($html[$cursor + 1] == "/") {
						if ($tag == substr($html, $cursor + 2, strlen($tag))) {
							$tag_deep--;
							$cursor += strlen($tag) + 2;
						}
					} else if ($tag == substr($html, $cursor + 1, strlen($tag))) { /* $cursor + 2? ******************************/
						$tag_deep++;
						$cursor += strlen($tag) + 0;
					}
				}
				$cursor++;
			}
			return $cursor - 1;
		}

		/**
		 * Data to object
		 *
		 * @param {Array} array
		 * @return {Json}
		 */
		public function json($array) {
			if ($array != "") {
				$json = "{";
				// foreach ($array as $each_array) {
					// foreach ($each_array as $key => $value) {
					foreach ($array as $key => $value) {
						$json .= "\"" . $key . "\":\"" . str_replace("\"", "\\\"", $value) . "\",";
					}
					// Remove the last key of line
					$json = substr($json, 0, -1);
					$json .= "},";
				// }	
				// Remove the last key of brackets
				$json = substr($json, 0, -1);
				$json .= "";
				return $json;
			} else {
				return "{}";
			}
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
			for ($i = 0; $i < strlen($char); $i++) {
				if ($all == "true") {
					if ($char[$i] == "<" && $char[$i + 1] == "/" && 
							$char[$i + 2] == "f" && $char[$i + 3] == "o" && 
							$char[$i + 4] == "r" && $char[$i + 5] == ">") { 
						$i = $i + 5;
						if ($array != "") {
							if (isset($array[0][$object]) && is_array($array[0][$object]) && 
									sizeof($array[0][$object]) != 0)
								$html .= $this->all($array[0][$object], $for);
						}
						$for = "";
						$all = "false";
					} else {
						$for .= $char[$i];
					}
				} else if ($one == "true") {
					if ($char[$i] == "<" && $char[$i + 1] == "/" && 
							$char[$i + 2] == "o" && $char[$i + 3] == "n" && 
							$char[$i + 4] == "e" && $char[$i + 5] == ">") { 
						$i = $i + 5;
						if ($array != "") {
							if (isset($array[0][$object]) && is_array($array[0][$object]) && 
									sizeof($array[0][$object]) != 0) {
								$html .= $this->one($array[0][$object], $for);
							}
						}
						$for = "";
						$one = "false";
					} else {
						$for .= $char[$i];
					}
				} else {
					if ($char[$i] == "<" && $char[$i + 1] == "f" && 
							$char[$i + 2] == "o" && $char[$i + 3] == "r" &&
							$char[$i + 4] == "(") { 
						$i = $i + 4;
						$object = "";
						for ($j = ($i + 1); $j < strlen($char); $j++) {
							if ($char[$j] == ")" && $char[$j + 1] == ">") {
								$i = $j + 1;
								break;
							} else {
								$object .= $char[$j];
							}
						}		
						$all = "true";
					} else if ($char[$i] == "<" && $char[$i + 1] == "o" && 
							$char[$i + 2] == "n" && $char[$i + 3] == "e" &&
							$char[$i + 4] == "(") { 
						$i = $i + 4;
						$object = "";
						for ($j = ($i + 1); $j < strlen($char); $j++) {
							if ($char[$j] == ")" && $char[$j + 1] == ">") {
								$i = $j + 1;
								break;
							} else {
								$object .= $char[$j];
							}
						}		
						$one = "true";
					} else {
						$html .= $char[$i];
					}
				}
			}
			$html = str_replace("@_DATETIME", date("d/m/Y H:i", (time() - 3600 * 3)), $html);
			$html = str_replace("@_DATE", date("d/m/Y", (time() - 3600 * 3)), $html);		
			$html = str_replace("@_ROOT", $this->getRoot(), $html);
			$html = str_replace("@_MODULE", $this->getModule(), $html);
			$html = str_replace("@_PACKAGE", $this->getPackage(), $html);		
			$html = str_replace("@_TITLE", $this->getTitle(), $html);
			if ($this->getDescription() != "") {
				$html = str_replace("@_DESCRIPTION", $this->getDescription(), $html);
				$html = str_replace("@_KEYWORDS", $this->getKeywords(), $html);
				$html = str_replace("@_ROBOTS", "index, follow", $html);
			} else {
				$html = str_replace("@_DESCRIPTION", "", $html);
				$html = str_replace("@_KEYWORDS", "", $html);
				$html = str_replace("@_ROBOTS", "noindex, nofollow", $html);
			}
			$html = str_replace("@_THEME", $this->getTheme(), $html);
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
			$html = str_replace("@_PARAMETERS", $this->parameters, $html);
			/* if ($array != "")
				return $html . "<size>" . $array[0]["size"];	
			else
				return $html; */
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
			for ($count = 0; $count < count($array); $count++) {
				for ($i = 0; $i < strlen($for); $i++) {
					if ($for[$i] == "<" && $for[$i + 1] == "g" && 
							$for[$i + 2] == "z" && $for[$i + 3] == ">") {
						$i = $i + 3;
						$tag = "";
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == "<" && $for[$j + 1] == "/" && 
									$for[$j + 2] == "g" && $for[$j + 3] == "z" && 
									$for[$j + 4] == ">") {
								$i = $j + 4;
								$html .= isset($array[$count][$tag]) ? $array[$count][$tag] : "";
								break;
							} else {
								$tag .= $for[$j];
							}
						}
					} else if ($for[$i] == "<" && $for[$i + 1] == "f" && 
							$for[$i + 2] == "o" && $for[$i + 3] == "r" &&
							$for[$i + 4] == "e" && $for[$i + 5] == "a" &&
							$for[$i + 6] == "c" && $for[$i + 7] == "h" &&
							$for[$i + 8] == "(") {
						$i = $i + 8;
						$object = "";
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == ")" && $for[$j + 1] == ">") {
								$i = $j + 1;
								break;
							} else {
								$object .= $for[$j];
							}
						}
						$objectArr = isset($array[$count][$object]) ? $array[$count][$object] : array();
						if (sizeof($objectArr) == 0) {
							for ($j = ($i + 1); $j < strlen($for); $j++) {
								if ($for[$j] == "<" && $for[$j + 1] == "/" && 
										$for[$j + 2] == "f" && $for[$j + 3] == "o" &&
										$for[$j + 4] == "r" && $for[$j + 5] == "e" &&
										$for[$j + 6] == "a" && $for[$j + 7] == "c" &&
										$for[$j + 8] == "h" && $for[$j + 9] == ">") {
									$i = $j + 9;
									break;
								} else {
									$i = $j;
								}
							}
						} else {
							$base = $i;
							for ($o = 0; $o < sizeof($objectArr); $o++) {
								$i = $base;
								for ($j = ($i + 1); $j < strlen($for); $j++) {
									if ($for[$j] == "<" && $for[$j + 1] == "/" && 
											$for[$j + 2] == "f" && $for[$j + 3] == "o" &&
											$for[$j + 4] == "r" && $for[$j + 5] == "e" &&
											$for[$j + 6] == "a" && $for[$j + 7] == "c" &&
											$for[$j + 8] == "h" && $for[$j + 9] == ">") {
										$i = $j + 9;
										break;
									} else {
										if ($for[$j] == "<" && $for[$j + 1] == "g" && 
												$for[$j + 2] == "z" && $for[$j + 3] == ">") {
											$i = $j + 3;
											$j = $j + 3;
											$tag = "";
											for ($k = ($j + 1); $k < strlen($for); $k++) {
												if ($for[$k] == "<" && $for[$k + 1] == "/" && 
														$for[$k + 2] == "g" && $for[$k + 3] == "z" && 
														$for[$k + 4] == ">") {
													$i = $k + 4;
													$j = $k + 4;
													$html .= isset($objectArr[$o][$tag]) ? $objectArr[$o][$tag] : "";
													break;
												} else {
													$tag .= $for[$k];
													$i++;
													$j++;			
												}
											}
										} else {
											$html .= $for[$j];	
											$i++;
										}
									}
								}
							}
						}
					} else {
						$html .= $for[$i];
					}
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
			for ($count = 0; $count < 1; $count++) {
				for ($i = 0; $i < strlen($for); $i++) {
					if ($for[$i] == "<" && $for[$i + 1] == "g" && 
							$for[$i + 2] == "z" && $for[$i + 3] == ">") {
						$i = $i + 3;
						$tag = "";
						for ($j = ($i + 1); $j < strlen($for); $j++) {
							if ($for[$j] == "<" && $for[$j + 1] == "/" && 
									$for[$j + 2] == "g" && $for[$j + 3] == "z" && 
									$for[$j + 4] == ">") {
								$i = $j + 4;
								$html .= isset($array[$count][$tag]) ? $array[$count][$tag] : "";
								break;
							} else {
								$tag .= $for[$j];
							}
						}
					} else {
						$html .= $for[$i];
					}
				}
			}
			return $html;
		}
		
	}

?>