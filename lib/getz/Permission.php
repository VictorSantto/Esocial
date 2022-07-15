<?php

	/**
	 * Permission
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */

	/**
	 * @param {String} module
	 * @param {Object} daoFactory
	 * @param {String} tela
	 * @param {String} method
	 * @return {Boolean}
	 */
	function getPermission($module, $daoFactory, $tela, $method) {
		$permissao = false;
		$permissaoCondition = "";
		$usuarios = getUserSession($module);

		if ($method == "stateCreate" || $method == "create") {
			$permissaoCondition = 
					"(tipos_permissoes.id = 2 OR tipos_permissoes.id = 3 OR tipos_permissoes.id = 4) AND " .
					"usuarios.id = " . $usuarios[0]["usuarios.id"] . " AND " .
					"telas.identificador = \"" . $tela . "\"";
		} else if ($method == "stateRead" || $method == "stateCalled") {
			$permissaoCondition =
					"usuarios.id = " . $usuarios[0]["usuarios.id"] . " AND " .
					"telas.identificador = \"" . $tela . "\"";
		} else if ($method == "stateUpdate" || $method == "update") {
			$permissaoCondition = 
					"(tipos_permissoes.id = 3 OR tipos_permissoes.id = 4) AND " .
					"usuarios.id = " . $usuarios[0]["usuarios.id"] . " AND " .
					"telas.identificador = \"" . $tela . "\"";
		} else if ($method == "delete") {
			$permissaoCondition = 
					"(tipos_permissoes.id = 4) AND " .
					"usuarios.id = " . $usuarios[0]["usuarios.id"] . " AND " .
					"telas.identificador = \"" . $tela . "\"";
		}

		$sql = "SELECT " . 
					"tipos_permissoes.id AS \"tipos_permissoes.id\" " . 
				"FROM " .
					"usuarios usuarios, " .
					"perfis perfis, " .
					"telas telas, " .
					"perfil_tela perfil_tela, " .
					"tipos_permissoes tipos_permissoes, " .
					"situacoes_registros situacoes_registros " .
				"WHERE " .
					"usuarios.perfil = perfis.id AND " .
					"perfis.id = perfil_tela.perfil AND " .
					"perfil_tela.tela = telas.id AND " .
					"perfil_tela.tipo_permissao = tipos_permissoes.id AND " .
					"usuarios.situacao_registro = situacoes_registros.id AND " .
					"situacoes_registros.id = 1 AND " .
					$permissaoCondition;

		$daoFactory->beginTransaction();						
		$result = $daoFactory->getConnection()->execute($sql);

		while ($row = $result->fetch_assoc()) {
			$permissao = true;
		}
		
		$daoFactory->getConnection()->free($result);
		$daoFactory->close();
		
		return $permissao;
	}
	
	/**
	 * @param {Object} daoFactory
	 * @param {Object} user
	 * @param {String} screen 
	 * @return {Array}
	 */
	function getMenu($daoFactory, $user, $screen) {
		$response["usuarios"][0]["usuarios.foto"] = $user[0]["usuarios"][0]["usuarios.foto"];
		$response["pre-cadastros"] = getMenuItem($daoFactory, $user, $screen, 7);
		$response["cadastros"] = getMenuItem($daoFactory, $user, $screen, 2);
		$response["layout"] = getMenuItem($daoFactory, $user, $screen, 9);
		$response["formularios"] = getMenuItem($daoFactory, $user, $screen, 8);
		$response["relatorios"] = getMenuItem($daoFactory, $user, $screen, 6);
		$response["configuracoes"] = getMenuItem($daoFactory, $user, $screen, 3);
		
		/* Insert your code here */

		return $response;
	}

	/**
	 * @param {Object} daoFactory
	 * @param {Object} user
	 * @param {String} screen
	 * @param {Integer} menu
	 * @return {Array}
	 */
	function getMenuItem($daoFactory, $user, $screen, $menu) {
		$response = null;
		$line = 0;

		$sql = "SELECT " . 
					"telas.tela AS \"telas.tela\", " . 
					"telas.identificador AS \"telas.identificador\" " . 
				"FROM " .
					"usuarios usuarios, " .
					"perfis perfis, " .
					"telas telas, " .
					"perfil_tela perfil_tela, " .
					"situacoes_registros situacoes_registros, " .
					"menus menus " .
				"WHERE " .
					"usuarios.perfil = perfis.id AND " .
					"perfis.id = perfil_tela.perfil AND " .
					"perfil_tela.tela = telas.id AND " .
					"usuarios.situacao_registro = situacoes_registros.id AND " .
					"situacoes_registros.id = 1 AND " .
					"usuarios.id = " . $user[0]["usuarios"][0]["usuarios.id"] . " AND " .
					"telas.menu = menus.id AND " .
					"telas.menu = " . $menu . " " .
				"ORDER BY " .
					"telas.tela ASC";

		$daoFactory->beginTransaction();						
		$result = $daoFactory->getConnection()->execute($sql);

		while ($row = $result->fetch_assoc()) {
			$response[$line]["telas.tela"] = $row["telas.tela"];
			$response[$line]["telas.identificador"] = $row["telas.identificador"];
			
			if ($screen == $row["telas.identificador"]) {
				$response[$line]["telas.selected"] = "gz-dark-blue-grey";
			} else {
				$response[$line]["telas.selected"] = "";
			}
			$line++;
		}

		$daoFactory->getConnection()->free($result);
		$daoFactory->close();

		return $response;
	}

?>