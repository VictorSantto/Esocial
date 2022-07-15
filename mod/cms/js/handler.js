/**
 * Handler
 * 
 * @author Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see https://wtag.com.br/getz
 */

/*
 * @example After response
 *
function tableRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success")
		alert("Success!");
	else
		alert("Error!");

	if (method == "method")
		alert("method");
}
 */

function loginRES(response, method) {
	var res = JSON.parse(response);

	if (method == "login") {
		if (res["message"] == "success")
			goTo("/" + gz_home + "/1");	
		else
			showMessage(gz_titleAttetion, gz_msgErrorChangeInfo, "cancel();");
	}
}

function logoutRES(response, method) {
	var res = JSON.parse(response);
	
	if (method == "logout") {
		if (res["message"] == "success")
			goTo("/login/1");
		else
			showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
	}
}

function minha_contaRES(response, method) {
	var res = JSON.parse(response);
	
	if (method == "update") {
		if (res["message"] == "success")
			showMessage(gz_titleAttetion, gz_msgSuccess, "goTo('/" + gz_home + "/1');");		
		else
			showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
	}
}

function mudar_fotoRES(response, method) {
	var res = JSON.parse(response);
	
	if (method == "update") {
		if (res["message"] == "success")
			showMessage(gz_titleAttetion, gz_msgSuccess, "goTo('/" + gz_home + "/1');");		
		else
			showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
	}
}

/*
 * Insert your code here
 */			

/*
 * @example After selecting the item in <select>
 *
function screen_tableSHDL() { 
	var select = gI("screen.reference");

	for (var i = 0; i < select.length; i++) {
		select.remove(i);
	}
}
 */

/*
 * Insert your code here
 */	 
 
/*
 * @example Execute after the render
 *
function screen_tableHDL() { }
 */

function loginHDL() {
	sD(gI("gz-menu"), "none");
}

/*
 * Insert your code here
 */	

/**
 * Dashboard HDL.
 * 
function dashboardHDL() { 
	graphic("column", columnl, columnc, "", "", false, "#009688");
	pizza("total");
} */
function dashboardHDL() { 
	pizza("total");
}

/**
 * Relatórios HDL.
 *
function relatoriosHDL() {
	gz_method = "statePrint";
} */
			
function coresHDL() { /* Insert your code here... */ }
				
function coresRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceTipo_cor(datalist) {
	if (document.getElementsByName("tipo_cor")[0].value == "") {
		for (var i = 0; i < gI("tipos_cores").options.length; i++) {
			if (gI("tipos_cores").options[i].value == datalistReference) {
				document.getElementsByName("tipo_cor")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function menu_submenusHDL() { /* Insert your code here... */ }
				
function menu_submenusRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceMenu(datalist) {
	if (document.getElementsByName("menu")[0].value == "") {
		for (var i = 0; i < gI("menus").options.length; i++) {
			if (gI("menus").options[i].value == datalistReference) {
				document.getElementsByName("menu")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
					
function datalistReferenceSituacao_registro(datalist) {
	if (document.getElementsByName("situacao_registro")[0].value == "") {
		for (var i = 0; i < gI("situacoes_registros").options.length; i++) {
			if (gI("situacoes_registros").options[i].value == datalistReference) {
				document.getElementsByName("situacao_registro")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function menusHDL() { /* Insert your code here... */ }
				
function menusRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceTipo_menu(datalist) {
	if (document.getElementsByName("tipo_menu")[0].value == "") {
		for (var i = 0; i < gI("tipos_menus").options.length; i++) {
			if (gI("tipos_menus").options[i].value == datalistReference) {
				document.getElementsByName("tipo_menu")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
					
function datalistReferenceSituacao_registro(datalist) {
	if (document.getElementsByName("situacao_registro")[0].value == "") {
		for (var i = 0; i < gI("situacoes_registros").options.length; i++) {
			if (gI("situacoes_registros").options[i].value == datalistReference) {
				document.getElementsByName("situacao_registro")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function perfil_telaHDL() { /* Insert your code here... */ }
				
function perfil_telaRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferencePerfil(datalist) {
	if (document.getElementsByName("perfil")[0].value == "") {
		for (var i = 0; i < gI("perfis").options.length; i++) {
			if (gI("perfis").options[i].value == datalistReference) {
				document.getElementsByName("perfil")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
					
function datalistReferenceTipo_permissao(datalist) {
	if (document.getElementsByName("tipo_permissao")[0].value == "") {
		for (var i = 0; i < gI("tipos_permissoes").options.length; i++) {
			if (gI("tipos_permissoes").options[i].value == datalistReference) {
				document.getElementsByName("tipo_permissao")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
					
function datalistReferenceTela(datalist) {
	if (document.getElementsByName("tela")[0].value == "") {
		for (var i = 0; i < gI("telas").options.length; i++) {
			if (gI("telas").options[i].value == datalistReference) {
				document.getElementsByName("tela")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function perfisHDL() { /* Insert your code here... */ }
				
function perfisRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
			
function situacoes_registrosHDL() { /* Insert your code here... */ }
				
function situacoes_registrosRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceCor(datalist) {
	if (document.getElementsByName("cor")[0].value == "") {
		for (var i = 0; i < gI("cores").options.length; i++) {
			if (gI("cores").options[i].value == datalistReference) {
				document.getElementsByName("cor")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function telasHDL() { /* Insert your code here... */ }
				
function telasRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceMenu(datalist) {
	if (document.getElementsByName("menu")[0].value == "") {
		for (var i = 0; i < gI("menus").options.length; i++) {
			if (gI("menus").options[i].value == datalistReference) {
				document.getElementsByName("menu")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function tipos_coresHDL() { /* Insert your code here... */ }
				
function tipos_coresRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
			
function tipos_menusHDL() { /* Insert your code here... */ }
				
function tipos_menusRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
			
function tipos_permissoesHDL() { /* Insert your code here... */ }
				
function tipos_permissoesRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceCor(datalist) {
	if (document.getElementsByName("cor")[0].value == "") {
		for (var i = 0; i < gI("cores").options.length; i++) {
			if (gI("cores").options[i].value == datalistReference) {
				document.getElementsByName("cor")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
			
function usuariosHDL() { /* Insert your code here... */ }
				
function usuariosRES(response, method) {
	var res = JSON.parse(response);

	if (res["message"] == "success") {
		if (location.hash == "#from-screen") {
			window.close();
		} else {
			requestHandler(method);
		}
	} else
		showMessage(gz_titleAttetion, gz_msgErrorServer, "cancel();");
}
					
function datalistReferenceSituacao_registro(datalist) {
	if (document.getElementsByName("situacao_registro")[0].value == "") {
		for (var i = 0; i < gI("situacoes_registros").options.length; i++) {
			if (gI("situacoes_registros").options[i].value == datalistReference) {
				document.getElementsByName("situacao_registro")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}
					
function datalistReferencePerfil(datalist) {
	if (document.getElementsByName("perfil")[0].value == "") {
		for (var i = 0; i < gI("perfis").options.length; i++) {
			if (gI("perfis").options[i].value == datalistReference) {
				document.getElementsByName("perfil")[0].value = datalistReference;
			}
		}	
	}
	isNull(datalist);
}