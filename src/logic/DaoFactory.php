<?php

	/**
	 * Dao Factory
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz 
	 */
	 
	namespace src\logic;

	use lib\getz;	
	use src\logic;
	use src\model;	
	
	class DaoFactory extends getz\Dao {
	
		public function __construct($_DAO_FACTORY_IS_OFFICIAL) {
			parent::__construct(new logic\Connection($_DAO_FACTORY_IS_OFFICIAL));
		}

		/*
		 * Generated by Getz
		 */
		
		public function getCoresDao() {
			return new model\CoresDao($this->getConnection());
		}
		
		public function getMenu_submenusDao() {
			return new model\Menu_submenusDao($this->getConnection());
		}
		
		public function getMenusDao() {
			return new model\MenusDao($this->getConnection());
		}
		
		public function getPerfil_telaDao() {
			return new model\Perfil_telaDao($this->getConnection());
		}
		
		public function getPerfisDao() {
			return new model\PerfisDao($this->getConnection());
		}
		
		public function getSituacoes_registrosDao() {
			return new model\Situacoes_registrosDao($this->getConnection());
		}
		
		public function getTelasDao() {
			return new model\TelasDao($this->getConnection());
		}
		
		public function getTipos_coresDao() {
			return new model\Tipos_coresDao($this->getConnection());
		}
		
		public function getTipos_menusDao() {
			return new model\Tipos_menusDao($this->getConnection());
		}
		
		public function getTipos_permissoesDao() {
			return new model\Tipos_permissoesDao($this->getConnection());
		}
		
		public function getUsuariosDao() {
			return new model\UsuariosDao($this->getConnection());
		}
		
	}
	
?>