<?php 

	require_once("../../Autoload.php"); 
	require_once("../../lib/getz/Parameters.php");
	
	if (!@include_once("../../src/controller/" . ucfirst($_GET["screen"]) . ".php")) {
		echo "<script>window.location = '" . $_ROOT . "/404';</script>";
	}
	
?>