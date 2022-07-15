<?php

	/**
	 * Language
	 * 
	 * @author Mario Sakamoto <mskamot@gmail.com>
	 * @see https://wtag.com.br/getz
	 */
	
	namespace lib\getz;

	class Language {
		
		private $language;

		public function __construct() { 
			/*
			 * Languages
			 * pt-BR
			 * en-US
			 */
			$this->setLanguage("pt-BR");
		}
		
		public function setLanguage($language) {
			$this->language = $language;
		}
		
		public function getLanguage() {
			return $this->language;
		}
		
		public function getCreate() {
			if ($this->getLanguage() == "pt-BR")
				return "Criação";
			else if ($this->getLanguage() == "en-US")
				return "Create";
		}
		
		public function getUpdate() {
			if ($this->getLanguage() == "pt-BR")
				return "Alteração";
			else if ($this->getLanguage() == "en-US")
				return "Update";
		}
		
		public function getGoBack() {
			if ($this->getLanguage() == "pt-BR")
				return "Voltar para a tela anterior";
			else if ($this->getLanguage() == "en-US")
				return "Return to the previous screen";
		}
		
		public function getAdd() {
			if ($this->getLanguage() == "pt-BR")
				return "Adicionar um novo registro";
			else if ($this->getLanguage() == "en-US")
				return "Add a new registration";
		}
		
		public function getSearch() {
			if ($this->getLanguage() == "pt-BR")
				return "Pesquisar registros";
			else if ($this->getLanguage() == "en-US")
				return "Search registrations";
		}
		
		public function getSearchFor() {
			if ($this->getLanguage() == "pt-BR")
				return "Pesquisar por...";
			else if ($this->getLanguage() == "en-US")
				return "Search for...";
		}	
		
		public function getDelete() {
			if ($this->getLanguage() == "pt-BR")
				return "Excluir registros selecionados";
			else if ($this->getLanguage() == "en-US")
				return "Delete selected registration";
		}
		
		public function getItemsPage() {
			if ($this->getLanguage() == "pt-BR")
				return "Itens - Página";
			else if ($this->getLanguage() == "en-US")
				return "Items - Page";
		}

		public function getOf() {
			if ($this->getLanguage() == "pt-BR")
				return "de";
			else if ($this->getLanguage() == "en-US")
				return "of";
		}

		public function getFirst() {
			if ($this->getLanguage() == "pt-BR")
				return "Ir para a primeira página";
			else if ($this->getLanguage() == "en-US")
				return "Go to the first page";
		}
		
		public function getPrevious() {
			if ($this->getLanguage() == "pt-BR")
				return "Voltar uma página";
			else if ($this->getLanguage() == "en-US")
				return "Previous page";
		}

		public function getNext() {
			if ($this->getLanguage() == "pt-BR")
				return "Avançar uma página";
			else if ($this->getLanguage() == "en-US")
				return "Next page";
		}

		public function getLast() {
			if ($this->getLanguage() == "pt-BR")
				return "Ir para a última página";
			else if ($this->getLanguage() == "en-US")
				return "Go to the last page";
		}	
		
		public function getConfirm() {
			if ($this->getLanguage() == "pt-BR")
				return "Confirmar a operação";
			else if ($this->getLanguage() == "en-US")
				return "Confirm the operation";
		}
		
		public function getCancel() {
			if ($this->getLanguage() == "pt-BR")
				return "Cancelar a operação";
			else if ($this->getLanguage() == "en-US")
				return "Cancel the operation";
		}
		
		public function getClose() {
			if ($this->getLanguage() == "pt-BR")
				return "Fechar esta tela";
			else if ($this->getLanguage() == "en-US")
				return "Close this screen";
		}
		
		public function getLogin() {
			if ($this->getLanguage() == "pt-BR")
				return "Logar no sistema";
			else if ($this->getLanguage() == "en-US")
				return "Login";
		}
		
		public function getChange() {
			if ($this->getLanguage() == "pt-BR")
				return "Mudar foto";
			else if ($this->getLanguage() == "en-US")
				return "Change photo";
		}	
		
		public function getShowAllRegisters() {
			if ($this->getLanguage() == "pt-BR")
				return "Mostrar todos os registros";
			else if ($this->getLanguage() == "en-US")
				return "Show all registers";
		}	
		
	}

?>