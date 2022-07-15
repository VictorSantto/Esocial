/**
 * Handler.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/getz
 * @version 1.0.0, 26 Jul 2014
 */
 
window.onload = handler;

function handler() {
	mask();
	eval(gz_screen + "HDL();");
	if (!navigator.cookieEnabled) {
		alert("Atenção! É necessário ativar o cookie do navegador para que o website funcione corretamente!");
	} else {	
		if (getCookie("cookie") == "") {
			sD(gI("dv-cookie"), "block");
		}	
	}
}

/*
 * Insert your code here.
 */
function alterar_a_minha_senhaHDL() { }

function ativar_a_minha_contaHDL() { }

function criar_uma_contaHDL() { }

function esqueci_a_minha_senhaHDL() { }

function homeHDL() {
	const retornos = [
		{
			"id" : 1, 
			"ocorrencia" : 320,
			"descricao"  : "teste de cadastro" 
		},
		{
			"id" : 2, 
			"ocorrencia" : 360,
			"descricao"  : "teste de visualização" 
		},
		{
			"id" : 3, 
			"ocorrencia" : 651,
			"descricao"  : "teste de situação" 
		}
	];
	const tBodyRetorno = gI("retornos")
	for (let retorno of retornos ){
		const tr = document.createElement("tr");
		const tdId = document.createElement("td");
		const tdOco = document.createElement("td");
		const tdDesc = document.createElement("td");
		sH(tdId,retorno.id);
		sH(tdDesc,retorno.descricao);
		sH(tdOco,retorno.ocorrencia);
		tr.appendChild(tdId);
		tr.appendChild(tdOco);
		tr.appendChild(tdDesc);
		tBodyRetorno.appendChild(tr);
	} 
		
}


function inicioHDL() { }

function politica_de_privacidadeHDL() { }

function termos_de_usoHDL() { }

function reportHDL() {
	addPageNumbers();
}

function paginationHDL() {
	paginationController();
}