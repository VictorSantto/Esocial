<?php
	 
	namespace src\logic;

    use Firebase\JWT\JWT as FirebaseJWT;
	use Firebase\JWT\Key;
    use src\model;

    class JWT {

        private $isValid;
		private $token;
		
		public function __construct($jwt) {
            $publicKey = <<<EOD
			-----BEGIN PUBLIC KEY-----
			MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAtm/3pRDvrprj+AC4UrRx
			tvXminqrrDbckLPRkSOJJkBcN7XYAYCT2UKQk6Bnmhza+DDgfA/UiEnF6fSgQwCY
			f09O7TwOCh3qOx6i9T64+GyEBquHh/AmHozQGtD62lAfei9fk8TcKd60sqo2ZgO0
			ssXP4HPAX/Z1bp7z5NneQrfIYtdYia0/uDmHrFuVOT3iXcnr4b78n0t+lrDmqAVz
			ynk68RZgeKy6xSLTIEo3U0BbISZ3/VfBrNurrRLLQ9+d3XS+J59zQ1ptvOZk8KiD
			GReKoC3dG174Laiye1bZEx7eS8fYHegY0q62iLP/hVaxcVjZaLHfgtphSw6tafYD
			eElxV3E5YtP5RJcHcOoxjnbeF3nMU35vS41UGEePss5enlIO56mY+1Fmycxp7pQE
			DzKXgCFWBe4HkdihWLmg+CkD8JcVmHBPmRaxCLtc1ldI08rTvxkrHlpBQJoLTxc8
			2k2o1k4vc58uP2RsG+EF82EeVSCsTACSdUjhpzfCYwANAgMBAAE=
			-----END PUBLIC KEY-----
			EOD;
            try {
				$firebaseJwtDecode = FirebaseJWT::decode($jwt, new Key($publicKey, "RS256"));
                $this->token = new model\Token($firebaseJwtDecode);
				$this->isValid = true;
            } catch (\Throwable $throwable) {
                $this->isValid = false;
            }
		}

		public function getToken() {
			return $this->token;
		}

        public function isValid() {
            return $this->isValid;
		}
		
	}