<?php

	/**
	 * Session
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	/*
	 * Private cache
	 */
	session_cache_limiter("private");
	$cache_limiter = session_cache_limiter();

	/*
 	 * Timeout
	 */ 
	session_cache_expire(30);
	$cache_expire = session_cache_expire();

	/*
	 * Initialize session
	 */
	ob_start();
	@session_start();

	/**
	 * @param {String} module
	 */
	function setActiveSession($module) {
		$_SESSION[$module . "_active"] = true;
	}

	/**
	 * @param {String} module
	 * @return {Boolean}
	 */
	function getActiveSession($module) {
		if (isset($_SESSION[$module . "_active"]))
			return $_SESSION[$module . "_active"];
		else
			return false;
	}

	/**
	 * @param {String} module
	 * @param {Array} user
	 */
	function setUserSession($module, $user) {
		$_SESSION[$module . "_user"] = $user;
	}

	/**
	 * @param {String} module
	 * @return {Array}
	 */
	function getUserSession($module) {
		if (isset($_SESSION[$module . "_user"]))
			return $_SESSION[$module . "_user"];
		else
			return null;
	}

	/**
	 * @param {String} module
	 */
	function closeSession($module) {
		unset($_SESSION[$module . "_active"]);
		unset($_SESSION[$module . "_user"]);
	}

?>