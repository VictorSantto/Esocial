<?php

	/**
	 * Libraries activator
	 *
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	use lib\getz; 
	use src\logic;
	
	/*
	 * External
	 */
	require_once($_DOCUMENT_ROOT . "/lib/getz/Session.php");
	require_once($_DOCUMENT_ROOT . "/lib/getz/Util.php");
	require_once($_DOCUMENT_ROOT . "/lib/getz/Permission.php");
	
	if ($_SHOW_ERRORS == "true") {
		ini_set("display_errors", 1);
		ini_set("display_startup_errors", 1);
		error_reporting(E_ALL);
	}
	
	/*
	 * Initializer
	 */
	$daoFactory = new logic\DaoFactory($_DAO_FACTORY_IS_OFFICIAL);
	$daoFactoryOld = new logic\DaoFactory(true);
	$session = getUserSession($_ROOT . $_MODULE);
	$view = new getz\View($_ROOT, $_MODULE, $_PACKAGE);
	$log = new getz\Log();
	$response = array();
	$where = "";
	$form = "";

	/*
	 * Prepare Statement
	 */
	$screen = $daoFactory->prepare(isset($_GET["screen"])?($_GET["screen"]!=null?$_GET["screen"]:""):"");
	$method = $daoFactory->prepare(isset($_GET["method"])?($_GET["method"]!=null?$_GET["method"]:""):"");
	$code = $daoFactory->prepare(isset($_GET["code"])?($_GET["code"]!=null?$_GET["code"]:""):"");
	$search = $daoFactory->prepare(isset($_GET["search"])?($_GET["search"]!=null?$_GET["search"]:""):"");
	$position = $daoFactory->prepare(isset($_GET["position"])?($_GET["position"]!=null?$_GET["position"]:""):"");
	$order = $daoFactory->prepare(isset($_GET["order"])?($_GET["order"]!=null?$_GET["order"]:""):"");
	$base = $daoFactory->prepare(isset($_GET["base"])?($_GET["base"]!=null?$_GET["base"]:""):"");
	$itensPerPage = $daoFactory->prepare($_ITENS_PER_PAGE);
	
	/*
	 * POST
	 */
	if (isset($_POST["form"])) 
		$form = explode("<gz>", $daoFactory->prepare($_POST["form"]));
	
	if (isset($_POST["base"])) 
		$base = $daoFactory->prepare($_POST["base"]);	
		
	/*
	 * daoFactory
	 */
	$daoFactory->setItensPerPage($itensPerPage);
	$daoFactory->setPosition($position);

	/* 
	 * User photo from session
	 */
	if ($method == "stateCreate" || $method == "stateRead" || $method == "stateReadAll" || $method == "stateUpdate" ||
			$method == "stateCalled" || $method == "stateCalledAll" || $method == "screen" || $method == "screenHandler" ||
			$method == "create" || $method == "update" || $method == "delete") {
		if (isset($session)) {
			$daoFactory->beginTransaction();
			
			$_USER[0]["usuarios"] = $daoFactory->getUsuariosDao()->read("usuarios.id = " .
					($session[0]["usuarios.id"] == null ? 0 : 
					$session[0]["usuarios.id"]), "", true);
					
			$daoFactory->close();
		}
	}
	
	if ($method == "page" && $_PORTAL == "true") {
		$daoFactory->beginTransaction();
		$response["menus"] = $daoFactory->getMenusDao()->read("menus.tipo_menu = 2 AND menus.situacao_registro = 1", 
				"menus.ordem ASC", true);
		for ($x = 0; $x < sizeof($response["menus"]); $x++) {
			$response["menus"][$x]["menu_submenus"] = $daoFactory->getMenu_submenusDao()->read("menu_submenus.menu = " . 
					$response["menus"][$x]["menus.id"] . " AND menu_submenus.situacao_registro = 1", 
					"menu_submenus.ordem ASC", true);
		}
		$daoFactory->close();
	}

?>