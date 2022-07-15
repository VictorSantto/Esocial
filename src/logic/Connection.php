<?php

	/**
	 * Connection
	 *
	 * @author Mário Sakamoto <mskamot@gmail.com>
	 * @see http://mariosakamoto.com/getz 
	 */
	 
	namespace src\logic;

	class Connection {

		private $server;
		private $userName;
		private $password;
		private $dataBase;
	
		public function __construct($_DAO_FACTORY_IS_OFFICIAL) {
			if ($_DAO_FACTORY_IS_OFFICIAL == "true") {
				$this->setServer("@_SERVER");
				$this->setUserName("@_USERNAME");
				$this->setPassword("@_PASSWORD");
				$this->setDatabase("@_DATABASE");
			} else {
				$this->setServer("localhost");
				$this->setUsername("root");
				$this->setPassword("");
				$this->setDatabase("esocial");
			}
		}
		
		/**
		 * @param {String} server
		 */
		private function setServer($server) {
			$this->server = $server;
		}
		
		/**
		 * @return {String}
		 */
		public function getServer() {
			return $this->server;
		}
		
		/**
		 * @param {String} userName
		 */
		private function setUsername($username) {
			$this->username = $username;
		}
		
		/**
		 * @return {String}
		 */
		public function getUsername() {
			return $this->username;
		}
		
		/**
		 * @param {String} password
		 */
		private function setPassword($password) {
			$this->password = $password;
		}
		
		/**
		 * @return {String}
		 */
		public function getPassword() {
			return $this->password;
		}
		
		/**
		 * @param {String} dataBase
		 */ 
		private function setDatabase($database) {
			$this->database = $database;
		}
		
		/**
		 * @return {String}
		 */
		public function getDatabase() {
			return $this->database;
		}

	}

?>