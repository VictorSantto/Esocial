<?php
	 
	namespace src\logic;
    use src\logic;

	class Authorization {

        private $jwt;
        
        public function __construct() {
			$this->jwt = new logic\JWT($_COOKIE[JWT]);
        }

        public function getToken() {
            return $this->jwt->getToken();
        }

        public function isAuthenticated($root) {
            if (!$this->isValid()) {
				$this->redirect($root);
            }
        }
		
        public function isValid() {
            return $this->jwt->isValid();
        }		
		
		public function redirect($root) {
			setcookie(JWT, "", 0, "/", "", false);
			header("Location: " . $root . "/home");
        }
		
    }

?>