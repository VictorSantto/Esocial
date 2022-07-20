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
function alterar_a_minha_senhaHDL() { /* TODO document why this function 'alterar_a_minha_senhaHDL' is empty */ }

function ativar_a_minha_contaHDL() {  /* TODO document why this function 'ativar_a_minha_contaHDL' is empty */ }

function criar_uma_contaHDL() { /* TODO document why this function 'criar_uma_contaHDL' is empty */ }

function esqueci_a_minha_senhaHDL() { /* TODO document why this function 'esqueci_a_minha_senhaHDL' is empty */ }

function homeHDL() {  
	gI("enviar").disabled = "disabled";
	getEmpresas();
	getMeses();
}
	

function retornoHDL() {
	const retornos = [
		{
			"id" : 1, 
			"mes" : "07/2020",
			"recibo"  : "teste de cadastro",
			"situacao" : "validado com sucesso" 
		},
		{
			"id" : 2, 
			"mes" : "09/2022",
			"recibo"  : "teste de visualização",
			"situacao" : "não enviado" 
		},
		{
			"id" : 3, 
			"mes" : "11/2021",
			"recibo"  : "teste de situação",
			"situacao" : "validado com erro" 
		}
	];
	const tBodyRetornos = gI("retornos")
	for (let retorno of retornos ){
		const tr = document.createElement("tr");
		const tdId = document.createElement("td");
		const tdMes = document.createElement("td");
		const tdRec = document.createElement("td");
		const tdSit = document.createElement("td");
		sH(tdId,retornos.id);
		sH(tdMes,retornos.mes);
		sH(tdRec,retornos.recibo);
		sH(tdSit,retornos.situacao);
		tr.appendChild(tdId);
		tr.appendChild(tdMes);
		tr.appendChild(tdRec);
		tr.appendChild(tdSit);
		tBodyRetornos.appendChild(tr);
	} 
		
}


function inicioHDL() {
	gI("enviar").disabled = "disabled";
	getEmpresas();
	getMeses();
 }

function politica_de_privacidadeHDL() { /* TODO document why this function 'politica_de_privacidadeHDL' is empty */ }

function termos_de_usoHDL() { /* TODO document why this function 'termos_de_usoHDL' is empty */ }

function reportHDL() {
	addPageNumbers();
}

function paginationHDL() {
	paginationController();
}