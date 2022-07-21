/**
 * Extras.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */

 const dv_root = "http://localhost/esocial";
 const dv_gateway = "http://localhost:8080";
 const dv_contribPrevApi = "http://localhost:8080";
 const dv_rhApi = "http://localhost:8081";
 let contribPrev = [];
 let empresaObj = {};
 
/**
 * Efetuar o logout.
 */
 function efetuarOLogout() {
	removeCookie(gz_project + "-clientId");
	removeCookie(gz_project + "-empresa");
	removeCookie(gz_project + "-cpf");
	removeCookie(gz_project);

	goTo("/home");
}

function loginSpringResponse(json) {
	const response = JSON.parse(json);
	if (!isEmpty(response)) {
		setCookie(gz_project + "-nome", response.nome);
		setCookie(gz_project + "-nomeMatricula", "Matricula: " + response.id.matricula + " - " + response.nome.split(" ")[0] + " Seja bem vindo");
		setCookie(gz_project + "-clientId", gI("sel-empresa").options[gI("sel-empresa").selectedIndex].text.split(" - ")[0], 365);
		setCookie(gz_project + "-empresa", response.id.empresa);
		setCookie(gz_project + "-matricula", response.id.matricula);
		setCookie(gz_project + "-professor", response.extratoProfessor);
		setCookie(gz_project + "-cpf", gV(gI("cpf")).replaceAll(".", "").replaceAll("-", ""));
		setCookie(gz_project + "-dataFechamento", response.dataFechamento);
		goTo("/inicio");
	} else {
		sD(gI("dv-message"), "none");
		showMessage("Erro!", "Atenção! Usuário ou senha inválidos.<br><button type=\"button\" id=\"dv-close-message\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-blue dv-underline dv-cursor\" onclick=\"showMessage();\"><img class=\"dv-vertical-align-middle dv-margin-right-ldpi\" src=\"" +
			dv_root + "/mod/page/img/icon/gray-close-circle-line.svg\" width=16>Fechar a mensagem</button>",
			"red-close-circle-line.svg", "showMessage();");
	}
}

function getContribuicoes() {
	const anoMes = parseInt(gV(gI("ano")) + (gV(gI("mes")) < 10 ? "0" : "") + gV(gI("mes")));
	const emp = parseInt(gV(gI("selEmpresas")));

	getContribuicoesByChange(emp, anoMes);
}

function getContribuicoesByChange(empresa, anoMes) {
	removeCookie(gz_project + "-empresa");
	setCookie(gz_project + "-empresa", empresa);
	removeCookie(gz_project + "-clientId");
	empresaObj = getEmpresa(empresa);
	setCookie(gz_project + "-clientId", empresaObj.sigla);
	springRequest("GET", dv_rhApi + `/contribuicoes/${empresa}/${anoMes}`, "", {}, "getContribuicoesResponse", false, null);
}

function getContribuicoesResponse(json) {
	const response = JSON.parse(json);
	if (!isEmpty(response)) {

		let content = "";
		for (const value of response) {
			contribPrev.push(value);
			content += setContent(value);
		}
		sH(gI("content"), content);
		gI("enviar").disabled = "";

	} else {
		sD(gI("dv-message"), "none");
		showMessage("Erro!", "Atenção! Não há contribuições para a empresa " + empresaObj.nome + ".<br><button type=\"button\" id=\"dv-close-message\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-blue dv-underline dv-cursor\" onclick=\"showMessage();\"><img class=\"dv-vertical-align-middle dv-margin-right-ldpi\" src=\"" +
			dv_root + "/mod/page/img/icon/gray-close-circle-line.svg\" width=16>Fechar a mensagem</button>",
			"red-close-circle-line.svg", "showMessage();");
	}
}

function setContent(value) {
	const empresa = getEmpresa(value.empresa);
	return "<hr class=\"dv-margin-bottom\"/>" +
		"<strong>" + empresa.empresa + " - " + empresa.nome +
		" ID: " + value.codOrgao + 
		" Mês/Ano: " + `${value.mesCompetencia < 10 ? '0' : ''}${value.mesCompetencia}/${value.anoCompetencia}` +
		"</strong>" +
		"<div class=\"dv-line dv-padding-hdpi\">" +
		"	<div class=\"dv-column\">" +		
		"		<div class=\"dv-line dv-padding-mdpi\"> " +
		"			<div class=\"dv-column\">" +
		"				Recido: " + value.recibo +
		"			</div>" +
		"		</div>" +
		"		<div class=\"dv-line dv-padding-mdpi\"> " +
		"			<div class=\"dv-column\">" +
		"				Tipo Fundo: " + value.situacao +
		"			</div>" +
		"		</div>" +
		"</div>";
}

function getEmpresa(empresa) {
	return empresas.filter(emp => emp.empresa === empresa)[0];
}

function enviarDados() {
	springRequest("POST", dv_contribPrevApi + "/contribuicoes/list", "", contribPrev, "enviarDadosResponse", false, null);
}

function enviarDadosResponse(json) {
	const response = JSON.parse(json);
	gI("enviar").disabled = "disabled";
	contribPrev = [];
	if (!isEmpty(response)) {
		sD(gI("dv-message"), "none");
		showMessage("Sucesso!", "Dados salvos com sucesso." +
		"<br><button type=\"button\" id=\"dv-close-message\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-blue dv-underline dv-cursor\" onclick=\"location.reload();\">" +
		"<img class=\"dv-vertical-align-middle dv-margin-right-ldpi\" src=\"" +
		dv_root + "/mod/page/img/icon/gray-close-circle-line.svg\" width=16>Fechar a mensagem</button>",
		"green-check-circle-line.svg", "location.reload();");
	} else {
		sD(gI("dv-message"), "none");
		showMessage("Erro!", "Atenção! Erro interno no sistema.<br><button type=\"button\" id=\"dv-close-message\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-blue dv-underline dv-cursor\" onclick=\"showMessage();\"><img class=\"dv-vertical-align-middle dv-margin-right-ldpi\" src=\"" +
			dv_root + "/mod/page/img/icon/gray-close-circle-line.svg\" width=16>Fechar a mensagem</button>",
			"red-close-circle-line.svg", "showMessage();");
	}
}

function getEmpresas() {
	const selEmpresas = gI("selEmpresas");
	empresas.filter(emp => emp.principal === true).forEach(emp => {
		const option = document.createElement("option");
		option.value = emp.empresa;
		sH(option, emp.nome);
		selEmpresas.appendChild(option);
	});
}

function getMeses() {
	const selMes = gI("mes");
	for (let mes = 1; mes <= 12; mes++) {
		const option = document.createElement("option");
		option.value = mes;
		sH(option, getNomeMes(mes));
		selMes.appendChild(option);
	}
}

function getNomeMes(mes) {
	return ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][mes];
}


