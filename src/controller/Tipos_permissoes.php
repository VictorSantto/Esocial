<?php

	/**
	 * Generated by Getz Framework
	 *
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */
	 
	use lib\getz;
	use src\logic;	 
	use src\model;	 
	
	require_once($_DOCUMENT_ROOT . "/lib/getz/Activator.php");
	
	/*
	 * Filters
	 */
	$where = "";
	
	if ($search != "")
		$where = "tipos_permissoes.tipo_permissao LIKE \"%" . $search . "%\"";	
		
	if ($code != "")
		$where = "tipos_permissoes.id = " . $code;
	
	if (isset($_GET["friendly"]))
		$where = "tipos_permissoes.tipo_permissao = \"" . removeLine($_GET["friendly"]) . "\"";	
		
	$limit = "";	
	
	if ($order != "") {
		$o = explode("<gz>", $order);
		if ($method == "stateReadAll" || $method == "stateCalledAll") {
			$limit = $o[0] . " " . $o[1];
		} else {
			$limit = $o[0] . " " . $o[1] . " LIMIT " . 
					(($position * $itensPerPage) - $itensPerPage) . ", " . $itensPerPage;
		}		
	} else {
		if ($method == "stateReadAll" || $method == "stateCalledAll") {
			$limit = "tipos_permissoes.ordem ASC";	
		} else {
			if ($position > 0 && $itensPerPage > 0) {
				$limit = "tipos_permissoes.id DESC LIMIT " . 
						(($position * $itensPerPage) - $itensPerPage) . ", " . $itensPerPage;	
			}
		}
	}
	
	/**************************************************
	 * Webpage
	 **************************************************/		
	
	/*
	 * Page
	 */
	if ($method == "page") {
		/*
		 * SEO
		 */
		$view->setTitle(ucfirst($screen));
		$view->setDescription("");
		$view->setKeywords("");
		
		$daoFactory->beginTransaction();
		$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->read($where, $limit, true);
		$daoFactory->close();
		
		if (isset($_GET["friendly"]))
			$view->setTitle($response["tipos_permissoes"][0]["tipos_permissoes.tipo_permissao"]);

		echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/header.html", $response);
		
		echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . 
				(isset($_GET["friendly"]) ? "/html/tipos_permissoes.html" : "/html/tipos_permissoes.html"), $response);
		
		echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/footer.html", $response);
	}
	
	/**************************************************
	 * Webservice
	 **************************************************/	

	/*
	 * Create
	 */
	else if ($method == "api-create") {
		enableCORS();
		if (isset($_POST["request"])) {
			$request = json_decode($_POST["request"], true);
			// $request[0]["@_PARAM"] = $daoFactory->prepare($request[0]["@_PARAM"]); // Prepare with sql injection.

			$daoFactory->beginTransaction();
			$tipos_permissoes = new model\Tipos_permissoes();
			$tipos_permissoes->setTipo_permissao(logicNull($request["tipos_permissoes.tipo_permissao"]));
			$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setCor($request["tipos_permissoes.cor"]);
			
			$resultDao = $daoFactory->getTipos_permissoesDao()->create($tipos_permissoes);

			if ($resultDao) {
				$daoFactory->commit();
				$response["message"] = "success";
			} else {							
				$daoFactory->rollback();
				$response["message"] = "error";
			}

			$daoFactory->close();
		} else {
			$response["message"] = "error";
		}
		
		echo $view->json($response);
	}
	
	/*
	 * Read
	 */
	else if ($method == "api-read") {
		enableCORS();
		
		if (isset($_POST["request"])) {
			$request = json_decode($_POST["request"], true);
			
			$limit = "tipos_permissoes.id DESC LIMIT " . 
					(($request[0]["page"] * $request[0]["pageSize"]) - 
					$request[0]["pageSize"]) . ", " . $request[0]["pageSize"];	
		}
		
		$daoFactory->beginTransaction();
		$tipos_permissoes = $daoFactory->getTipos_permissoesDao()->read("", $limit, false);
		$daoFactory->close();
		
		echo $view->json($tipos_permissoes);
	}
	
	/*
	 * Update
	 */
	else if ($method == "api-update") {	
		enableCORS();
		if (isset($_POST["request"])) {
			$request = json_decode($_POST["request"], true);
			// $request[0]["@_PARAM"] = $daoFactory->prepare($request[0]["@_PARAM"]); // Prepare with sql injection.
			
			$tipos_permissoes = new model\Tipos_permissoes();
			$tipos_permissoes->setId($request["tipos_permissoes.id"]);
			$tipos_permissoes->setTipo_permissao(logicNull($request["tipos_permissoes.tipo_permissao"]));
			$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setCor($request["tipos_permissoes.cor"]);
			
			$daoFactory->beginTransaction();
			$resultDao = $daoFactory->getTipos_permissoesDao()->update($tipos_permissoes);

			if ($resultDao) {
				$daoFactory->commit();
				$response["message"] = "success";
			} else {							
				$daoFactory->rollback();
				$response["message"] = "error";
			}

			$daoFactory->close();
		} else {
			$response["message"] = "error";
		}
		
		echo $view->json($response);
	}
	
	/* 
	 * Delete
	 */
	else if ($method == "api-delete") {
		enableCORS();
		if (isset($_POST["request"])) {
			$request = json_decode($_POST["request"], true);
			$request["tipos_permissoes.id"] = $daoFactory->prepare($request["tipos_permissoes.id"]); // Prepare with sql injection.
				
			$result = true;
			$lines = explode("<gz>", $request["tipos_permissoes.id"]);

			$daoFactory->beginTransaction();

			for ($i = 0; $i < sizeof($lines); $i++) {
				$where = "tipos_permissoes.id = " . $lines[$i];
				
				$resultDao = $daoFactory->getTipos_permissoesDao()->delete($where);
				$result = !$result ? false : (!$resultDao ? false : true);
			}

			if ($result) {
				$daoFactory->commit();
				$response["message"] = "success";
			} else {							
				$daoFactory->rollback();
				$response["message"] = "error";
			}

			$daoFactory->close();
		} else {
			$response["message"] = "error";
		} 

		echo $view->json($response);
	}
	
	else if ($method == "changeOrder") {		
		$result = true;
		$daoFactory->beginTransaction();
		$call = $daoFactory->getTipos_permissoesDao()->read("tipos_permissoes.id = " . $form[0], "", false);
		$answer = $daoFactory->getTipos_permissoesDao()->read("tipos_permissoes.id = " . $form[1], "", false);
		$tipos_permissoesDao = $daoFactory->getTipos_permissoesDao()->read("tipos_permissoes.ordem >= " . $answer[0]["tipos_permissoes.ordem"], "", false);
		if (is_array($tipos_permissoesDao) && sizeof($tipos_permissoesDao) > 0) {
			for ($x = 0; $x < sizeof($tipos_permissoesDao); $x++) {
				$tipos_permissoes = new model\Tipos_permissoes();
				$tipos_permissoes->setId($tipos_permissoesDao[$x]["tipos_permissoes.id"]);
				$tipos_permissoes->setTipo_permissao(logicNull($tipos_permissoesDao[$x]["tipos_permissoes.tipo_permissao"]));
			$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setCor($tipos_permissoesDao[$x]["tipos_permissoes.cor"]);
			
				$resultDao = $daoFactory->getTipos_permissoesDao()->update($tipos_permissoes);			
				$result = !$result ? false : (!$resultDao ? false : true);
			}
			$tipos_permissoes = new model\Tipos_permissoes();
			$tipos_permissoes->setId($call[0]["tipos_permissoes.id"]);
			$tipos_permissoes->setTipo_permissao(logicNull($call[0]["tipos_permissoes.tipo_permissao"]));
			$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
			$tipos_permissoes->setCor($call[0]["tipos_permissoes.cor"]);
			
			$resultDao = $daoFactory->getTipos_permissoesDao()->update($tipos_permissoes);			
			$result = !$result ? false : (!$resultDao ? false : true);
		}
		if ($result) {
			$daoFactory->commit();
			$response[0]["message"] = "success";
		} else {							
			$daoFactory->rollback();
			$response[0]["message"] = "error";
		}
		$daoFactory->close();
		echo $darth->json($response);
	}
	
	/**************************************************
	 * System
	 **************************************************/	
	
	else {
		if (!getActiveSession($_ROOT . $_MODULE)) 
			echo "<script>goTo(\"/login/1\");</script>";
		else {
			/*
			 * Create
			 */
			if ($method == "stateCreate") {
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method))
					echo "<script>goTo(\"/login/1\");</script>";	
				else {
					$daoFactory->beginTransaction();
					$response["titles"] = $daoFactory->getTelasDao()->read("telas.identificador = \"" . $screen . "\"", "", true);
					$response["cores"] = $daoFactory->getCoresDao()->read("cores.tipo_cor = 1", "cores.id ASC", false);
					$daoFactory->close();

					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/menus/menusCST.html", getMenu($daoFactory, $_USER, $screen));
					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesCRT.html", $response);
				}
			}

			/*
			 * Read
			 */
			else if ($method == "stateRead" || $method == "stateReadAll") {
				if ($method == "stateReadAll") {
					$method = "stateRead";
				}
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method))
					echo "<script>goTo(\"/login/1\");</script>";	
				else {
					$daoFactory->beginTransaction();
					$response["titles"] = $daoFactory->getTelasDao()->read("telas.identificador = \"" . $screen . "\"", "", true);
					$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->read($where, $limit, true);
					if (!is_array($response["tipos_permissoes"])) {
						$response["data_not_found"][0]["value"] = "<p>Não possui registro.</p>";
					}
					$daoFactory->close();

					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/menus/menusCST.html", getMenu($daoFactory, $_USER, $screen));
					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesRD.html", $response);
				}
			}

			/*
			 * Update
			 */
			else if ($method == "stateUpdate") {
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method))
					echo "<script>goTo(\"/login/1\");</script>";	
				else {
					$daoFactory->beginTransaction();
					$response["titles"] = $daoFactory->getTelasDao()->read("telas.identificador = \"" . $screen . "\"", "", true);
					$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->read($where, "", true);
					$response["tipos_permissoes"][0]["tipos_permissoes.cores"] = $daoFactory->getCoresDao()->read("cores.tipo_cor = 1", "cores.id ASC", false);
					for ($x = 0; $x < sizeof($response["tipos_permissoes"][0]["tipos_permissoes.cores"]); $x++) {
						if ($response["tipos_permissoes"][0]["tipos_permissoes.cores"][$x]["cores.id"] == 
								$response["tipos_permissoes"][0]["tipos_permissoes.cor"]) {
							$response["tipos_permissoes"][0]["tipos_permissoes.cores"][$x]["cores.selected"] = "selected";
						}
					}
					$daoFactory->close();

					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/menus/menusCST.html", getMenu($daoFactory, $_USER, $screen));
					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesUPD.html", $response);
				}
			}

			/*
			 * Called
			 */
			else if ($method == "stateCalled" || $method == "stateCalledAll") {
				if ($method == "stateCalledAll") {
					$method = "stateCalled";
				}
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method))
					echo "<script>goTo(\"/login/1\");</script>";	
				else {
					/*
					 * Insert your foreign key here
					 */
					if ($where != "")
						$where .= " AND tipos_permissoes.@_FOREIGN_KEY = " . $base;
					else 
						$where = "tipos_permissoes.@_FOREIGN_KEY = " . $base;
						
					$daoFactory->beginTransaction();
					$response["titles"] = $daoFactory->getTelasDao()->read("telas.identificador = \"" . $screen . "\"", "", true);
					$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->read($where, $limit, true);
					if (!is_array($response["tipos_permissoes"])) {
						$response["data_not_found"][0]["value"] = "<p>Não possui registro.</p>";
					}
					$daoFactory->close();

					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/menus/menusCST.html", getMenu($daoFactory, $_USER, $screen));
					echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesCLL.html", $response);
				}
			}

			/*
			 * Screen
			 */
			else if ($method == "screen") {
				if ($base != "") {
					$arrBase = explode("<gz>", $base);
					
					if (sizeof($arrBase) > 1) {
						if ($where != "")
							$where .= " AND tipos_permissoes.@_FOREIGN_KEY = " . $arrBase[1];
						else
							$where = "tipos_permissoes.@_FOREIGN_KEY = " . $arrBase[1];
					}
				}
				
				$limit = "tipos_permissoes.id DESC LIMIT " . (($position * 5) - 5) . ", 5";

				$daoFactory->beginTransaction();
				$response["titles"] = $daoFactory->getTelasDao()->read("telas.identificador = \"" . $screen . "\"", "", true);
				$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->read($where, $limit, true);
				$daoFactory->close();

				echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesSCR.html", $response) . 
						"<size>" . (is_array($response["tipos_permissoes"]) ? $response["tipos_permissoes"][0]["tipos_permissoes.size"] : 0) . "<theme>455a64";
			}

			/*
			 * Screen handler
			 */
			else if ($method == "screenHandler") {	
				$where = "";

				// Get value from combo
				$cmb = explode("<gz>", $search);

				if ($cmb[1] != "")
					$where = "tipos_permissoes.id = " . $cmb[1];

				$daoFactory->beginTransaction();
				$response["tipos_permissoes"] = $daoFactory->getTipos_permissoesDao()->comboScr($where);
				$daoFactory->close();

				echo $view->parse($_DOCUMENT_ROOT . $_PACKAGE . "/html/tipos_permissoes/tipos_permissoesCMB.html", $response);
			}

			/*
			 * Create
			 */
			else if ($method == "create") {
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method)) {
					$response["message"] = "permission";
					
					echo $view->json($response);
				} else {
					$tipos_permissoes = new model\Tipos_permissoes();
					$tipos_permissoes->setTipo_permissao(logicNull($form[0]));
					$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
					$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
					$tipos_permissoes->setCor($form[1]);
					
					$daoFactory->beginTransaction();
					$resultDao = $daoFactory->getTipos_permissoesDao()->create($tipos_permissoes);

					if ($resultDao) {
						$daoFactory->commit();
						$response["message"] = "success";				
					} else {							
						$daoFactory->rollback();
						$response["message"] = "error";
					}

					$daoFactory->close();

					echo $view->json($response);
				}
			}

			/*
			 * Action update
			 */
			else if ($method == "update") {	
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method)) {
					$response["message"] = "permission";
					
					echo $view->json($response);
				} else {
					$tipos_permissoes = new model\Tipos_permissoes();
					$tipos_permissoes->setId($code);
					$tipos_permissoes->setTipo_permissao(logicNull($form[0]));
					$tipos_permissoes->setCadastrado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
					$tipos_permissoes->setModificado(date("Y-m-d H:i:s", (time() - 3600 * 3)));
					$tipos_permissoes->setCor($form[1]);
					
					$daoFactory->beginTransaction();
					$resultDao = $daoFactory->getTipos_permissoesDao()->update($tipos_permissoes);

					if ($resultDao) {
						$daoFactory->commit();
						$response["message"] = "success";
					} else {							
						$daoFactory->rollback();
						$response["message"] = "error";
					}

					$daoFactory->close();

					echo $view->json($response);
				}
			}
			
			/* 
			 * Action delete
			 */
			else if ($method == "delete") {
				if (!getPermission($_ROOT . $_MODULE, $daoFactory, $screen, $method)) {
					$response["message"] = "permission";
					
					echo $view->json($response);
				} else {
					$result = true;
					$lines = explode("<gz>", $code);

					$daoFactory->beginTransaction();

					for ($i = 1; $i < sizeof($lines); $i++) {
						$where = "tipos_permissoes.id = " . $lines[$i];
						
						$resultDao = $daoFactory->getTipos_permissoesDao()->delete($where);
						$result = !$result ? false : (!$resultDao ? false : true);
					}

					if ($result) {
						$daoFactory->commit();
						$response["message"] = "success";
					} else {							
						$daoFactory->rollback();
						$response["message"] = "error";
					}

					$daoFactory->close();

					echo $view->json($response);	
				}
			}
		}
	}

?>