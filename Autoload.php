<?php

	/**
	 * Autoload
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	/*
	 * SPL
	 */	 	
	spl_autoload_register(function ($class) {
		require __DIR__ . "/" .  str_replace("\\", "/", $class) . ".php";
	});	 
	
	define("VENDOR_AUTOLOAD", "vendor/autoload.php");
	require_once(VENDOR_AUTOLOAD);
	
	/*
	 * Root
     */	 
	$_ROOT_SETTINGS = simplexml_load_file("../../settings.xml");
	$_DAO_FACTORY_IS_OFFICIAL = $_ROOT_SETTINGS->connection->is_official;
	$_PROJECT = $_ROOT_SETTINGS->project != "" ? $_ROOT_SETTINGS->project . "" : "";	
	$_ROOT = $_ROOT_SETTINGS->package != "" ? "/" . $_ROOT_SETTINGS->package : "";	
	$_DOCUMENT_ROOT = $_SERVER["DOCUMENT_ROOT"] . $_ROOT;
	$_PORTAL = $_ROOT_SETTINGS->portal;
	$_SHOW_ERRORS = $_ROOT_SETTINGS->show_erros;
	$_JWT = $_ROOT_SETTINGS->jwt;
	define("JWT", $_JWT);
	
	/*
	 * Module
     */	 
	$_MODULE_SETTINGS = simplexml_load_file("settings.xml");
	$_MODULE = "/" . $_MODULE_SETTINGS->module;
	$_PACKAGE = $_MODULE_SETTINGS->package != "" ? "/" . $_MODULE_SETTINGS->package : "";
	
	$_ITENS_PER_PAGE = $_MODULE_SETTINGS->daoFactory->itens_per_page != "" ? 
			$_MODULE_SETTINGS->daoFactory->itens_per_page : "";
			
	$_HOME = $_MODULE_SETTINGS->home_page;
	
	/*
	 * Library generator
	 */
	$_LIBRARIES = $_MODULE_SETTINGS->libraries;
	
	foreach ($_LIBRARIES as $_LIBRARY) {
		foreach ($_LIBRARY as $_KEY => $_VALUE) {
			eval("\$" . $_KEY . " = \"\$_VALUE\";");
		}
	}

?>