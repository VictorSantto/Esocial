/**
 * Extras.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */

var dv_root = "http://localhost:8000/" + gz_project;
// var dv_root = "https://@_YOUR_PROJECT.com.br";
var dv_gateway = "http://wf.codiub.net/" + gz_project;
// var dv_gateway = "https://@_YOUR_PROJECT.com.br/@_YOUR_PROJECT-api";

/**
 * Request example.
 */
function requestExample() {
	if (validate(gI("dv-form"))) {
		var data = {
			"@_YOUR_COLUMN_01" : gV(gI("@_YOUR_COLUMN_01")),
			"@_YOUR_COLUMN_02" : gV(gI("@_YOUR_COLUMN_02"))
		};		
		request("POST", dv_gateway + "/@_YOUR_API", "", data, "responseExample", true, getCookie(gz_jwt));
	}
}

/**
 * Response example.
 *
 * @param {String} response 
 */
function responseExample(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			showMessage("Sucesso!", "A operação foi concluída com sucesso.", "location.reload();");
		} else {	
			showMessage("Erro!", json.response.message, "showMessage();");			
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");	
	}
}

/**
 * Get selected line example.
 *
 * @param {Object} element 
 */
function getSelectedLineExample(element) {
	alert("Check your console.log");
	console.log(element.id);
}

/**
 * Form example.
 */
function formExample() {
	if (validate(gI("dv-form"))) {
		alert("Check your console.log");
		var data = {
			"users.name" : gV(gI("users.name")),
			"users.nick" : gV(gI("users.nick")),
			"users.birthday" : gV(gI("users.birthday")),
			"users.photo" : gV(gI("users.photo-base64")),
			"users.about" : gV(gI("users.about")),
			"users.city" : gV(gI("users.city")),
			"users.cities" : getDataListId("cities", "city"),
			"users.cellphone" : gV(gI("users.cellphone")),
			"users.mail" : gV(gI("users.mail")),
			"radio" : gI("first-radio").checked ? gV(gI("first-radio")) : gI("second-radio").checked ? 
					gV(gI("second-radio")) : gV(gI("third-radio")),
			"checkbox" : [
				{
					"item" : gI("first-checkbox").checked ? gV(gI("first-checkbox")) : null
				}, 
				{
					"item" : gI("second-checkbox").checked ? gV(gI("second-checkbox")) : null	
				},
				{
					"item" : gI("third-checkbox").checked ? gV(gI("third-checkbox")) : null	
				},
				{
					"item" : gI("fourth-checkbox").checked ? gV(gI("fourth-checkbox")) : null	
				}				
			]
		};
		console.log(data);
	}
}

/**
 * Go to search page.
 */
function searchExample() {
	goTo("/posts/search/" + gV(gI("search")));
}

/*
 * Controller response.
 *
 * @param {String} response 
 */
function controllerResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			sD(gI("dv-message"), "none");
			showMessage("Sucesso!", "A operação foi concluída com sucesso.", "location.reload();");
		} else {
			sD(gI("dv-message"), "none");
			showMessage("Erro!", json.response.message, "showMessage();");		
		}
	} else {
		sD(gI("dv-message"), "none");
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");		
	}
}

/*
 * Crud show create.
 */
function crudShowCreate() {
	sV(gI("crud.id"), "");
	sV(gI("crud.field"), "");				
	sV(gI("crud.file-base64"), "");
	sD(gI("dv-clear-selected-file-crud.file"), "none");
	sD(gI("dv-download-file-crud.file"), "none");
	sH(gI("dv-form-controller-title-content"), "Adicionar um novo registro");
	sD(gI("form"), "block");
	sF(gI("crud.field"));
}

/*
 * Crud show update.
 */
function crudShowUpdate(id) {
	request("GET", dv_gateway + "/crud/resource/" + id, "", null, "crudShowUpdateResponse", true, getCookie(gz_jwt));
}

/*
 * Crud show update response.
 *
 * @param {String} response 
 */
function crudShowUpdateResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			sV(gI("crud.id"), json[0]["crud.id"]);
			sV(gI("crud.field"), json[0]["crud.field"]);				
			sD(gI("dv-clear-selected-file-crud.file"), "none");
			if (json[0]["crud.file"] != "") {
				gI("dv-download-file-crud.file").onclick = function() {
					goToBlank(dv_root + "/file/crud/" + json[0]["crud.id"]);
				};
				sD(gI("dv-download-file-crud.file"), "inline-block;");
			} else {
				sD(gI("dv-download-file-crud.file"), "none");
			}
			sH(gI("dv-form-controller-title-content"), "Editar os dados do registro");
			sD(gI("form"), "block");
			sF(gI("crud.field"));
		} else {
			showMessage("Erro!", json.response.message, "location.reload();");		
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "location.reload();");		
	}
}

/*
 * Crud delete.
 */
function crudDelete(id) {
	showMessage("Confirmação!", "Você realmente deseja excluir o registro?", "crudDeleteRequest(" + id + ");");
}
	
/*
 * Crud delete request.
 */
function crudDeleteRequest(id) {
	var data = {
		"id" : id
	};
	request("DELETE", dv_gateway + "/crud/resource/" + id, "", data, "controllerResponse", true, getCookie(gz_jwt));
}

/*
 * Crud controller.
 */
function crudController() {
	var data = {
		"id" : gV(gI("crud.id")),
		"field" : gV(gI("crud.field")),
		"file" : gV(gI("crud.file-base64")),
		"fkInput" : {
			"id" : gz_code
		}
	};	
	if (gV(gI("crud.id")) != "") {
		if (validate(gI("dv-form"))) {
			request("PUT", dv_gateway + "/crud/resource/" + gV(gI("crud.id")), "", data, "controllerResponse", true, 
					getCookie(gz_jwt));
		}
	} else {
		if (validate(gI("dv-form"))) {
			request("POST", dv_gateway + "/crud", "", data, "controllerResponse", true, getCookie(gz_jwt));
		}
	}
}

/*
 * Criar uma conta request.
 */
function criarUmaContaRequest() {
	if (!gI("dv-termos-uso").checked) {
		showMessage("Erro!", "É necessário marcar a opção \"Aceitar os termos de uso\" para continuar.", "showMessage();");
	} else {
		if (validate(gI("dv-form"))) {
			var data = {
				"usuario" : gV(gI("usuario")),
				"email" : gV(gI("email")),
				"senha" : gV(gI("senha"))
			};
			request("POST", dv_gateway + "/criar_uma_conta", "", data, "criarUmaContaResponse", true, getCookie(gz_jwt));
		}
	}
}

/**
 * Criar uma conta response.
 */
function criarUmaContaResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			showMessage("Sucesso!", "A sua conta foi criada com sucesso. Acesse a sua caixa de e-mail para ativar a sua conta.", 
					"goTo('/home');");
		} else {
			showMessage("Erro!", json.response.message, "showMessage();");
		}
	} else {
		showMessage("Erro!", "Houve alguma erro interno no sistema.", "showMessage();");
	}
}

/*
 * Efetuar o login request.
 */
function efetuarOLoginRequest() {
	if (validate(gI("dv-form"))) {
		var data = {
			"email" : gV(gI("email")),
			"senha" : gV(gI("senha"))
		};
		request("POST", dv_gateway + "/efetuar_o_login", "", data, "efetuarOLoginResponse", true, getCookie(gz_jwt));
	}
}

/**
 * Efetuar o login response.
 */
function efetuarOLoginResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			setCookie(gz_jwt, json.response.usuarios.value.access_token, 365);
			goTo("/inicio");
		} else {
			showMessage("Erro!", json.response.message, "showMessage();");		
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");	
	}
}

/*
 * Esqueci a minha senha request.
 */
function esqueciAMinhaSenhaRequest() {
	if (validate(gI("dv-form"))) {
		var data = {
			"email" : gV(gI("email"))
		};
		request("POST", dv_gateway + "/esqueci_a_minha_senha", "", data, "esqueciAMinhaSenhaResponse", true, 
				getCookie(gz_jwt));
	}
}

/**
 * Esqueci a minha senha response.
 */
function esqueciAMinhaSenhaResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			showMessage("Sucesso!", 
					"A operação foi realizada com sucesso. Acesse a sua caixa de e-mail para alterar a sua senha.", 
					"goTo('/home');");			
		} else {
			showMessage("Erro!", json.response.message, "showMessage();");				
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");	
	}
}

/*
 * Alterar a minha senha request.
 */
function alterarAMinhaSenhaRequest() {
	if (validate(gI("dv-form"))) {
		var data = {
			"senha" : gV(gI("senha"))
		};
		var authorization = gV(gI("password_token"));
		if (authorization == null || authorization == undefined) {
			authorization = getCookie(gz_jwt);
		}
		request("POST", dv_gateway + "/alterar_a_minha_senha", "", data, "alterarAMinhaSenhaResponse", true, authorization);
	}
}

/**
 * Alterar a minha senha response.
 */
function alterarAMinhaSenhaResponse(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			removeCookie(gz_jwt);
			showMessage("Sucesso!", "A operação foi realizada com sucesso.", "goTo('/home');");				
		} else {
			showMessage("Erro!", json.response.message, "showMessage();");				
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");	
	}
}

/**
 * Efetuar o logout.
 */
function efetuarOLogout() {
	removeCookie(gz_jwt);
	goTo("/home");
}

/**
 * Request example.
 */
 function requestRetornos() {
		request("GET", dv_gateway + "/movimentacoes/retornos", "", {}, "responseRetornos", true, null);
	
}

/**
 * Response example.
 *
 * @param {String} response 
 */
function responseRetornos(response) {
	var json = JSON.parse(response);
	if (!isEmpty(json)) {
		if (json.response.status == 200) {
			showMessage("Sucesso!", "A operação foi concluída com sucesso.", "location.reload();");
		} else {	
			showMessage("Erro!", json.response.message, "showMessage();");			
		}
	} else {
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");	
	}
}
