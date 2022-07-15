<?php 

	header("Content-Type: application/json; charset=utf-8");

	require_once("../../Autoload.php"); 
	require_once("../../src/controller/" . ucfirst($_GET["screen"]) . ".php");

?>