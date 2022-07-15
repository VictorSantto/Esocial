/**
 * Getz JS.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/getz
 * @version 1.0.0, 26 Jun 2014
 */
 
/*
 * Languages
 * pt-BR
 * en-US
 */ 
var language = "pt-BR"; 
var tinymce;

/* 
 * Texts
 */
if (language == "pt-BR") {
	var gz_inputSearch = "Pesquisar por...";
	var gz_titleAttetion = "Atenção!";
	var gz_titleWait = "Aguarde!";
	var gz_titleConfirmation = "Confirmação!";
	var gz_msgErrorForm = "Existem campos obrigatórios que não foram preenchidos! Verifique o formulário.";
	var gz_msgErrorPermission = "Este usuário não possui permissão para executar essa ação!";
	var gz_msgWait = "Os dados estão sendo carregados...";
	var gz_msgNoItemSelected = "Nenhum item foi selecionado! Tente novamente.";
	var gz_msgMoreThanOneItemSelected = "Existe mais de um item selecionado! Tente novamente.";
	var gz_msgConfirmDelete = "Deseja realmente excluir a(s) linha(s) selecionada(s)?";
	var gz_msgConfirmRemove = "Deseja realmente remover o arquivo?";															 
	var gz_msgCloseMsg = "Fechar esta mensagem";
	var gz_msgCancelOperation = "Cancelar a operação";
	var gz_msgConfirmOperation = "Confirmar a operação";
	var gz_msgUpdateScreen = "Atualizar esta tela";
	var gz_msgLastPage = "Ir para a última página";
	var gz_msgNextPage = "Avançar uma página";
	var gz_msgBackPage = "Voltar uma página";
	var gz_msgFirsPage = "Ir para a primeira página";
	var gz_titleOf = "de";
	var gz_titlePagination = "Itens - Página";
	var gz_msgErrorServer = "O servidor não conseguiu responder! Tente novamente.";
	var gz_msgErrorChangeInfo = "E-mail e/ou senha incorretos! Tente novamente.";
	var gz_msgSuccess = "Ação concluída com sucesso!";
	var gz_msgFk = "Não foi possível excluir o registro. Ele está em uso em outra tela.";
	var gz_msgExist = "Já existe um registro com os dados informados! Tente novamente.";
} else if (language == "en-US") {
	var gz_inputSearch = "Search for...";
	var gz_titleAttetion = "Attetion!";
	var gz_titleWait = "Wait!";
	var gz_titleConfirmation = "Confirmation!";
	var gz_msgErrorForm = "There are mandatory fields that have not been filled in! Check the form.";
	var gz_msgErrorPermission = "This user does not have permission to perform this action!";
	var gz_msgWait = "Data is loading...";
	var gz_msgNoItemSelected = "No item was selected! Try again.";
	var gz_msgMoreThanOneItemSelected = "There is more than one selected item! Try again.";
	var gz_msgConfirmDelete = "Are you sure to delete the selected row(s)?";
	var gz_msgCloseMsg = "Close this message";
	var gz_msgCancelOperation = "Cancel the operation";
	var gz_msgConfirmOperation = "Confirm the operation";
	var gz_msgUpdateScreen = "Refresh this screen";
	var gz_msgLastPage = "Go to the last page";
	var gz_msgNextPage = "Next page";
	var gz_msgBackPage = "Previous page";
	var gz_msgFirsPage = "Go to the first page";
	var gz_titleOf = "of";
	var gz_titlePagination = "Items - Page";
	var gz_msgErrorServer = "The server could not answer! Try again.";
	var gz_msgErrorChangeInfo = "The e-mail or password is incorrect! Try again.";
	var gz_msgSuccess = "Successfully completed the action!";
	var gz_msgFk = "The record could not be deleted. It is in use on another screen.";
	var gz_msgExist = "There is already a record with the data entered! Try again.";
}

/**
 * Set attribute
 *
 * @param {Element} e Element
 * @param {String} a Attribute
 * @param {String} f Function
 */
function sA(e, a, f) {
	try {
		e.setAttribute(a, f);
	} catch(e) { }
}

/**
 * Get attribute
 *
 * @param {Element} e Element
 * @param {String} a Attribute
 * @return {String} Function
 */
function gA(e, a) {
	try {
		return e.getAttribute(a);
	} catch(e) { }
}

/**
 * Set border
 *
 * @param {Element} e Element
 * @param {String} b Border
 */
function sB(e, b) {
	try {
		e.style.border = b;
	} catch(e) { }
}

/**
 * Get border
 *
 * @param {Element} e Element
 * @return {String} Border
 */
function gB(e) {
	try {
		return e.style.border;
	} catch(e) { }
}

/**
 * Set border top
 *
 * @param {Element} e Element
 * @param {String} b Border top
 */
function sBt(e, b) {
	try {
		e.style.borderTop = b;
	} catch(e) { }	
}

/**
 * Get border top
 *
 * @param {Element} e Element
 * @return {String} Border top
 */
function gBt(e) {
	try {
		return e.style.borderTop;
	} catch(e) { }
}

/**
 * Set border right
 *
 * @param {Element} e Element
 * @param {String} b Border right
 */
function sBr(e, b) {
	try {
		e.style.borderRight = b;
	} catch(e) { }	
}

/**
 * Get border right
 *
 * @param {Element} e Element
 * @return {String} Border right
 */
function gBr(e) {
	try {
		return e.style.borderRight;
	} catch(e) { }
}

/**
 * Set border bottom
 *
 * @param {Element} e Element
 * @param {String} b Border bottom
 */
function sBb(e, b) {
	try {
		e.style.borderBottom = b;
	} catch(e) { }
}

/**
 * Get border bottom
 *
 * @param {Element} e Element
 * @return {String} Border bottom
 */
function gBb(e) {
	try {
		return e.style.borderBottom;
	} catch(e) { }
}

/**
 * Set border left
 *
 * @param {Element} e Element
 * @param {String} b Border left
 */
function sBl(e, b) {
	try {
		e.style.borderLeft = b;
	} catch(e) { }
}

/**
 * Get border left
 *
 * @param {Element} e Element
 * @return {String} Border left
 */
function gBl(e) {
	try {
		return e.style.borderLeft;
	} catch(e) { }
}

/**
 * Set class
 *
 * @param {Element} e Element
 * @param {String} c Class
 */
function sC(e, c) {
	try {
		e.className = c;
	} catch(e) { }
}

/**
 * Get class
 *
 * @param {Element} e Element
 * @return {String} Class
 */
function gC(e) {
	try {
		return e.className;
	} catch(e) { }
}

/**
 * Set display
 *
 * @param {Element} e Element
 * @param {String} d Display
 */
function sD(e, d) {
	try {
		e.style.display = d;
	} catch(e) { }	
}

/**
 * Get display
 *
 * @param {Element} e Element
 * @return {String} Display
 */
function gD(e) {
	try {
		return e.style.display;
	} catch(e) { }
}

/**
 * Set height
 *
 * @param {Element} e Element
 * @param {String} h Height
 */
function sE(e, h) {
	try {
		e.style.height = h;
	} catch(e) { }	
}

/**
 * Get height
 *
 * @param {Element} e Element
 */
function gE(e) {
	try {
		return e.style.height;
	} catch(e) { }	
}

/**
 * Get display
 *
 * @param {Element} e Element
 * @return {String} Display
 */
function gD(e) {
	try {
		return e.style.display;
	} catch(e) { }
}

/**
 * Set focus
 *
 * @param {Element} e Element
 */
function sF(e) {
	try {
		e.focus();
	} catch(e) { }
}

/**
 * Set background
 *
 * @param {Element} e Element
 * @param {String} g Background
 */
function sG(e, g) {
	try {
		e.style.background = g;
	} catch(e) { }
}

/**
 * Get background
 *
 * @param {Element} e Element
 * @return {String} Background
 */
function gG(e) {
	try {
		return e.style.background;
	} catch(e) { }
}

/**
 * Set HTML
 *
 * @param {Element} e Element
 * @param {String} h HTML
 */
function sH(e, h) {
	try {
		e.innerHTML = h;
	} catch(e) { }
}

/**
 * Get HTML
 *
 * @param {Element} e Element
 * @return {String} HTML
 */
function gH(e) {
	try {
		return e.innerHTML;
	} catch(e) { }
}

/**
 * Get id
 *
 * @param {String} i Id
 * @return {Element} Element
 */
function gI(i) {
	try {
		return document.getElementById(i);
	} catch(e) { }
}

/**
 * Get length
 *
 * @param {Element} e Element
 * @return {Integer} Length
 */
function gL(e) {
	try {
		return e.length;
	} catch(e) { }
}

/**
 * Get childs
 *
 * @param {Element} e Element
 * @param {String} c Child
 * @return {Array} Elements
 */
function gN(e, c) {
	try {
		return e.getElementsByTagName(c);
	} catch(e) { }
}

/**
 * Set color
 *
 * @param {Element} e Element
 * @param {String} o Color
 */
function sO(e, o) {
	try {
		e.style.color = o;
	} catch(e) { }	
}

/**
 * Get parent node
 *
 * @param {Element} e Element
 * @return {Element} Element
 */
function gP(e) {
	try {
		return e.parentNode;
	} catch(e) { }
}

/**
 * Set placeholder
 *
 * @param {String} e Element
 * @param {String} p Placeholder
 */
function sPh(e, p) {
	try {
		e.placeholder = p;
	} catch(e) { }	
}

/**
 * Get placeholder
 *
 * @param {String} e Element
 * @return {String} Placeholder
 */
function gPh(e) {
	try {
		return e.placeholder;
	} catch(e) { }
}

/**
 * Get classes
 *
 * @param {String} c Classes
 * @return {Array} Elements
 */
function gS(c) {
	try {
		return document.getElementsByClassName(c);
	} catch(e) { }
}

/**
 * Get tag name
 *
 * @param {String} n
 * @return {Array} Elements
 */
function gT(n) {
	try {
		return document.getElementsByTagName(n);
	} catch(e) { }
}

/**
 * Set value
 *
 * @param {Element} e Element
 * @param {String} v Value
 */
function sV(e, v) {
	try {
		e.value = v;
	} catch(e) { }
}

/**
 * Get value
 *
 * @param {Element} e Element
 * @return {String} Value
 */
function gV(e) {
	try {
		return e.value;
	} catch(e) { }
}

/**
 * Set width
 *
 * @param {Element} e Element
 * @param {String} w Width
 */
function sW(e, w) {
	try {
		e.style.width = w;
	} catch(e) { }	
}

/**
 * Get width
 *
 * @param {Element} e Element
 */
function gW(e) {
	try {
		return e.style.width;
	} catch(e) { }	
}

/**
 * Get type
 *
 * @param {Element} e Element
 * @return {String} Type
 */
function gY(e) {
	try {
		return e.type;
	} catch(e) { }
}

// Window has focus
var gz_refresh = false;

/* 
 * Screen
 */
var gz_screenSearch = "";
var gz_screenPosition = "";
var gz_screenTable = "";
var gz_screenBase = "";
var gz_screenTheme = "";

// Key access
var gz_ctrlKey = false;

/* 
 * Begin aplication
 */
window.onload = view;
window.onfocus = reload;

/**
 * View
 */
function view() {		
    /*
	 * Selected Menu
	 */
	if (gz_screen != "login")
		sD(gP(gI("gz-" + gz_screen)), "block");
	
	if (gz_method == "stateCreate") create();
	else if (gz_method == "stateRead" || gz_method == "stateReadAll") read();
	else if (gz_method == "stateUpdate") update();
	else if (gz_method == "stateCalled" || gz_method == "stateCalledAll") called();
}

/**
 * Reload
 */
function reload() {
	if (gz_refresh) {
		if (gD(gI("gz-screen")) == "block")
			goScreen();
		else
			toPage(gz_position);
	}
}

/**
 * Initialize the request
 */
function initRequest() {
    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf("MSIE") != -1)
            isIE = true;

        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
		
        try {   	
            return new ActiveXObject("Microsoft.XMLHTTP");	
        } catch(e) {
    	    try {
    	        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    	    } catch(e) { }
        }
    }
}

/**
 * Is empty
 *
 * @param {Object} object
 */
function isEmpty(object) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
			return false;
		}
    }
    return true;
} 

/**
 * Create
 */
function create() {
	gz_historyBack = gz_historyBack - 1;
	event();	
	mask();
	eval(gz_screen + "HDL();");
}

/**
 * Read
 */
function read() {
	gz_historyBack = 0;
	event();
	mask();

	if (gz_search != "")
		sV(gI("gz-search"), gz_search);

	if (gz_order != "")
		colorOrderBy(gz_order);
		
	colorLine();
	if (gz_method == "stateReadAll") {
		sD(gI("gz-pagination"), "none");
	}
	eval(gz_screen + "HDL();");
}

/** 
 * Update
 */
function update() {	
	gz_historyBack = gz_historyBack - 1;
	event();
	mask();
	eval(gz_screen + "HDL();");
}

/**
 * Called
 */
function called() {
	gz_historyBack = gz_historyBack - 1;
	event();
	
	if (gz_search != "")
		sV(gI("gz-search"), gz_search);

	if (gz_order != "")
		colorOrderBy(gz_order);
		
	colorLine();
	if (gz_method == "stateCalledAll") {
		sD(gI("gz-pagination"), "none");
	}
	eval(gz_screen + "HDL();");
}

/**
 * Go to Screen
 *
 * @param {String} id
 */
function goScreen() {
	sD(gI("gz-form"), "none");
	
	var combo = gz_screenTable.split(".");
	var table = combo[1];

	if (gz_screenPosition == "")
		gz_screenPosition = 1;

	var url = "";

	if (gz_screenSearch != "")
		url = gz_root + "/ws/" + table + "/sys-screen/" + gz_screenSearch + "/" + gz_screenPosition;	
	else	
		url = gz_root + "/ws/" + table + "/sys-screen/" + gz_screenPosition;

	var formData = new FormData();
	formData.append("form", "");
	formData.append("base", gz_screenBase);

	var req = initRequest();
	req.open("POST", url, true);
	req.send(formData);	

	req.onreadystatechange = function() { 
		if (req.readyState == 4 && req.status == 200) {
			if (req.responseText == "session")
				goTo("/login/custom");
			else {
				theme(req.responseText);
				
				sH(gI(table + "-screen"), response(req.responseText))

				if (gz_screenSearch != "")
					sV(gI("gz-search"), gz_screenSearch);		
						
				if (gz_screenPosition != "") 
					paginationScreen(table, counter(req.responseText));

				sD(gI("gz-block"), "block");
				
				sF(gI("gz-search"));
				
				colorLine();
			}
		}
	};
}

/**
 * Go to Screen
 *
 * @param {String} id
 * @param {Integer} line
 */
function screenHandler(id, line) {
	var combo = id.split(".");
	var table = combo[1];
	
	url = gz_root + "/ws/" + table + "/sys-screenHandler/" + line;

	var formData = new FormData();
	formData.append("form", "");
	formData.append("base", gz_screenBase);
	
	var req = initRequest();
	req.open("POST", url, true);
	req.send(formData);	

	req.onreadystatechange = function() { 
		if (req.readyState == 4 && req.status == 200) {
			if (req.responseText == "session")
				goTo("/login/custom");
			else {
				if (gC(gI(id)).indexOf("gz-option") > 0)
					sH(gI(id), gH(gI(id)) + response(req.responseText));
				else
					sH(gI(id), response(req.responseText));

				closeScreen();
				
				eval(combo[0] + "_" + combo[1] + "SHDL();");
			}
		}
	};
}

/**
 * gz_search in Screen
 */
function screenSearch() {
	gz_screenSearch = (gV(gI("gz-search")) == gz_inputSearch ||
			gV(gI("gz-search")) == "") ? "" : gV(gI("gz-search"));

	gz_screenPosition = 1;
	
	goScreen();
}

/**
 * Option Remove
 * 
 * @param {String} id Select
 */
function optionRemove(id) {
	gI(id).remove(gI(id).selectedIndex);
}

/**
 * Option Remove Event
 * 
 * @param {String} id Select
 * @param {Event} e Event
 */
function optionRemoveEvent(id, e) {
	if (e.keyCode == 13)
		optionRemove(id);
}

/**
 * Action
 *
 * @param {String} table
 */
function request(table, method) {
	showLoading();
	
	var url = "";
	var formCheck = true;

	if (method == "create")
		url = gz_root + "/ws/" + table + "/sys-" + method;
	else if (method == "update" || method == "delete")
		url = gz_root + "/ws/" + table + "/sys-" + method + "/" + gz_code;
	else
		url = gz_root + "/ws/" + table + "/" + method;
			
	if (method == "create" || method == "update" || method == "login") {
		if (!validate(gI("gz-form")))		
			formCheck = false;
	}
	
	if (method == "remove") {
		method = "update";
		url = gz_root + "/ws/" + table + "/sys-" + method + "/" + gz_code;
	}
	
	if (method == "replicar") {
		method = "update";
		url = gz_root + "/ws/" + table + "/sys-" + method + "/" + getSelectedLineId();
	}

	if (formCheck) {	
		var formData = new FormData();
		formData.append("form", getForm());
		formData.append("base", gz_base);
		
		if (gI("upload") != undefined) {
			var fileInput = gI("upload");
			
			if (fileInput.value != "")
				formData.append("upload", fileInput.files[0]);
		}
		
		if (gI("upload2") != undefined) {
			var fileInput = gI("upload2");
			
			if (fileInput.value != "")
				formData.append("upload2", fileInput.files[0]);
		}
		
		var req = initRequest();
		req.open("POST", url, true);
		req.send(formData);	
		
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				closeLoading();
				
				var res = JSON.parse(req.responseText);
				
				if (res["message"] == "session")
					goTo("/login/1");
				else if (res["message"] == "permission")
					showMessage(gz_titleAttetion, gz_msgErrorPermission, 
							"cancel();");
				else {
					eval(table + "RES(" + JSON.stringify(req.responseText) + ", \"" + method + "\");");
				}
			}
		};	
	} else {
		closeLoading();
		
		showMessage(gz_titleAttetion, gz_msgErrorForm, "");	
	}
}

function requestHandler(method) {
	if (gz_base != "") {
		if (gz_search != "") {
			if (gz_order != "")
				goTo("/" + gz_screen + "/called/" + 
						gz_base + "/search/" + gz_search + "/" + 
						gz_position + "/" + gz_order + "/historyBack/" + gz_historyBack);		
			else
				goTo("/" + gz_screen + "/called/" + 
						gz_base + "/search/" + gz_search + "/" + 
						gz_position + "/historyBack/" + gz_historyBack);
		} else {
			if (gz_order != "")
				goTo("/" + gz_screen + "/called/" +
						gz_base + "/" + gz_position + "/" + 
						gz_order + "/historyBack/"  + gz_historyBack);							
			else
				goTo("/" + gz_screen + "/called/" +
						gz_base + "/" + gz_position + "/historyBack/" + gz_historyBack);	
		}
	} else {
		if (gz_search != "") {
			if (gz_order != "")
				goTo("/" + gz_screen + "/search/" + gz_search + 
						"/" + gz_position + "/" + gz_order);		
			else
				goTo("/" + gz_screen + "/search/" + gz_search + 
						"/" + gz_position);
		} else {
			if (gz_order != "")
				goTo("/" + gz_screen + "/" + gz_position + "/" + 
						gz_order);							
			else
				goTo("/" + gz_screen + "/" + gz_position);
		}
	}
}

/**
 * Response
 *
 * @param {String} r Response
 * @return {String} The Response
 */
function response(r) {
	var retArr = r.split("<size>");

	return retArr[0];
}

/**
 * Counter
 *
 * @param {String} r Response
 * @return {Integer} The Size
 */
function counter(r) {
	var retArr = r.split("<size>");
	var retSize = retArr[1].split("<theme>");
	
	return retSize[0];
}

/**
 * Theme
 *
 * @param {String} r Response
 */
function theme(r) {
	var retArr = r.split("<theme>");
	
	gz_screenTheme = retArr[1];
}

/**
 * Get Form Elements Values
 *
 * @return {String} The Values
 */
function getForm() {
	var one = true;
	var option = true;
	var get = "";
	var repeat = false;

	if (gI("gz-form") != undefined) {
		var fields = gI("gz-form");
		
		for (var i = 0; i < gL(fields); i++) {
			if (gY(fields.elements[i]) != "submit" && gY(fields.elements[i]) != "button") {
				if (i == 0 || repeat) {
					repeat = false;

					if (gY(fields.elements[i]) == "checkbox") 
						get = fields.elements[i].checked;
					else {
						if (gC(fields.elements[i]).indexOf("gz-option") > 0) {
							var options = fields.elements[i].options;
							
							for (var j = 0; j < options.length; j++) {
								option = false;
								
								if (j == 0)
									get = options[j].value;
								else
									get += "<,>" + options[j].value;
							}
						} else {
							if (gY(fields.elements[i]) == "textarea") {
								/*
								 * @see nicEdit.js
								 */	
								var textStyle = document.getElementsByClassName("nicEdit-main");
								
								if (gH(textStyle[0]) != undefined)
									get = gH(textStyle[0]);			
								else {
									if (tinymce != undefined && tinymce.get(fields.elements[i].id) != null) {
										var tinyContent = tinymce.get(fields.elements[i].id).getContent();
										get = tinyContent;
									} else {
										var normalized_enters = gV(fields.elements[i]).replace(/\r|\n/g, "\r\n");
										var text_with_br = normalized_enters.replace(/\r\n/g, "<br />");
										get = (gL(gV(fields.elements[i])) == 0) ? "null" : text_with_br;
									}
								}
							} else {
								if (gC(fields.elements[i]).includes("gz-datalist-") > 0) {
									if (gC(fields.elements[i]).includes("gz-non-datalist") > 0) {
										get = gV(fields.elements[i]);
									} else {
										var datalist = gC(fields.elements[i]).split("gz-datalist-")[1];
										for (var j = 0; j < gI(datalist.split("-to-")[0]).options.length; j++) {
											if (gI(datalist.split("-to-")[0]).options[j].value == 
													document.getElementsByName(datalist.split("-to-")[1])[0].value) {
												get = gI(datalist.split("-to-")[0]).options[j].getAttribute("data-id");
												j = gI(datalist.split("-to-")[0]).options.length;
											}
										}
									}
								} else if (gY(fields.elements[i]) == "file")
									repeat = true;
								else			
									get = (gL(gV(fields.elements[i])) == 0) ? 
											"null" : gV(fields.elements[i]);
							}
						}
					}
				} else {
					if (gY(fields.elements[i]) == "checkbox") 
						get += "<gz>" + fields.elements[i].checked;
					else {
						if (gC(fields.elements[i]).indexOf("gz-option") > 0) {
							var options = fields.elements[i].options;
							
							for (var j = 0; j < options.length; j++) {
								if (option)
									get += options[j].value;
								else
									get += "<,>" + options[j].value;
							}
						} else {	
							if (gY(fields.elements[i]) == "textarea") {
								/*
								 * @see nicEdit.js
								 */
								var textStyle = document.getElementsByClassName("nicEdit-main");

								if (gH(textStyle[0]) != undefined)
									get += "<gz>" + gH(textStyle[0]);				
								else {
									if (tinymce != undefined && tinymce.get(fields.elements[i].id) != null) {
										var tinyContent = tinymce.get(fields.elements[i].id).getContent();
										get += "<gz>" + tinyContent;
									} else {									
										var normalized_enters = gV(fields.elements[i]).replace(/\r|\n/g, "\r\n");
										var text_with_br = normalized_enters.replace(/\r\n/g, "<br />");
										get += "<gz>" + ((gL(gV(fields.elements[i])) == 0) ? "null" : text_with_br);
									}
								}
							} else {
								if (gC(fields.elements[i]).includes("gz-datalist-") > 0) {
									if (gC(fields.elements[i]).includes("gz-non-datalist") > 0) {
										get += "<gz>" + gV(fields.elements[i]);
									} else {
										var datalist = gC(fields.elements[i]).split("gz-datalist-")[1];
										for (var j = 0; j < gI(datalist.split("-to-")[0]).options.length; j++) {
											if (gI(datalist.split("-to-")[0]).options[j].value == 
													document.getElementsByName(datalist.split("-to-")[1])[0].value) {
												if (get != "") {
													get += "<gz>" + gI(datalist.split("-to-")[0]).options[j].getAttribute("data-id");
												} else {	
													get += gI(datalist.split("-to-")[0]).options[j].getAttribute("data-id");
												}
												j = gI(datalist.split("-to-")[0]).options.length;
											}
										}
									}
								} else if (gY(fields.elements[i]) != "file") {
									if (get != "") {
										one = false;
										
										get += "<gz>" + 
												((gL(gV(fields.elements[i])) == 0) 
												? "null" : gV(fields.elements[i]));
									} else {
										one = true;
										
										get += ((gL(gV(fields.elements[i])) == 0) 
												? "null" : gV(fields.elements[i]));	
									}
								}
							}
						}
					}
				}
			}
		}
	}

	if (one)
		get += "<gz>";
		
	return get;
}

/**
 * Combo Pagination Size
 *
 * @param {Integer} size
 */
function pagination(size) {
	if (gI("gz-select-pagination") != undefined) {
		var limit = Math.ceil(size / gz_itensPerPage);
	
		for (var line = 1; line <= limit; line++) {
			gI("gz-select-pagination").options[line] = new Option(line, line);

			if (line < 9999) {
				if (gI("gz-select-pagination").options[line].text == gz_position)
					gI("gz-select-pagination").options[line].selected = true;
			}
		}
	}
}

/**
 * Pagination The Screen
 *
 * @param {String} table
 * @param {Integer} size
 */
function paginationScreen(table, size) {
	var footer = 	
		"<div id=\"gz-footer-screen\" class=\"dv-f-l dv-pt-mdpi dv-pb-mdpi\" onclick=\"clearSelection();\">" +
			"<div class=\"dv-f-l dv-mt-hdpi dv-mr-mdpi dv-mb-mdpi dv-ml-xdpi\">" +
				"<p>" + size + " " + gz_titlePagination + "</p>" +
			"</div>" +
			"<select id=\"gz-select-pagination\" " + 
					"class=\"gz-select-hdpi dv-f-l dv-mt-mdpi dv-mr-mdpi dv-mb-mdpi\" " +
					"onchange=\"goPageScreen()\"></select>" +
			"<div class=\"dv-f-l dv-mt-hdpi dv-mr-hdpi dv-mb-mdpi dv-pr-mdpi\">" +
				"<p>" + gz_titleOf + " " + Math.ceil(size / 5) + "</p>" +
			"</div>" +
			"<div class=\"gz-button dv-f-l dv-mt-mdpi dv-mr-hdpi dv-mb-mdpi\" " +
					"onclick=\"goFirstScreen();\">" +
				"<a href=\"#\" class=\"gz-tooltip\" onclick=\"return false;\"> " +
					"<img src=\"" + gz_root + "/mod/cms/img/icon/first.png\" /> " +
					"<span class=\"gz-span-top-right " + gz_screenTheme + "\"> " +
						gz_msgFirsPage +
					"</span> " +
				"</a> " +
			"</div>" +	
			"<div class=\"gz-button dv-f-l dv-mt-mdpi dv-mr-hdpi dv-mb-mdpi\" " +
					"onclick=\"goBackScreen();\">" +
				"<a href=\"#\" class=\"gz-tooltip\" onclick=\"return false;\"> " +
					"<img src=\"" + gz_root + "/mod/cms/img/icon/back.png\" /> " +
					"<span class=\"gz-span-top-right " + gz_screenTheme + "\"> " +
						gz_msgBackPage +
					"</span> " +
				"</a> " +
			"</div>" +
			"<div id=\"gz-button-next\" class=\"gz-button dv-f-l dv-mt-mdpi dv-mr-hdpi dv-mb-mdpi\" " + 
					"onclick=\"goNextScreen(" + size + ");\">" +
				"<a href=\"#\" class=\"gz-tooltip\" onclick=\"return false;\"> " +
					"<img src=\"" + gz_root + "/mod/cms/img/icon/next.png\" /> " +
					"<span class=\"gz-span-top-right " + gz_screenTheme + "\"> " +
						gz_msgNextPage +
					"</span> " +
				"</a> " +
			"</div>" +	
			"<div id=\"gz-button-last\" class=\"gz-button dv-f-l dv-mt-mdpi dv-mr-hdpi dv-mb-mdpi\" " + 
					"onclick=\"goLastScreen(" + size + ");\">" +
				"<a href=\"#\" class=\"gz-tooltip\" onclick=\"return false;\"> " +
					"<img src=\"" + gz_root + "/mod/cms/img/icon/last.png\" /> " +
					"<span class=\"gz-span-top-right " + gz_screenTheme + "\"> " +
						gz_msgLastPage +
					"</span> " +
				"</a> " +
			"</div>" +	
			"<div id=\"gz-button-refresh\" class=\"gz-button dv-f-r dv-mt-mdpi dv-mr-xdpi dv-mb-mdpi\" " + 
					"onclick=\"goScreen();\">" +
				"<a href=\"#\" class=\"gz-tooltip\" onclick=\"return false;\"> " +
					"<img src=\"" + gz_root + "/mod/cms/img/icon/refresh.png\" /> " +
					"<span class=\"gz-span-top-left " + gz_screenTheme + "\"> " +
						gz_msgUpdateScreen +
					"</span> " +
				"</a> " +
			"</div>" +				
		"</div>";

	sH(gI(table + "-screen-pagination"), footer);

	if (gI("gz-select-pagination") != undefined) {
		for (line = 1; line <= Math.ceil(size / 5); line++) {
			gI("gz-select-pagination").options[line] = new Option(line, line);

			if (gI("gz-select-pagination").options[line].text == gz_screenPosition)
				gI("gz-select-pagination").options[line].selected = true;
		}
	}
}

/**
 * Go To Page
 *
 * @param {Integer} p Page Position
 */
function toPage(p) {	
	if (gz_base != "") {
		if (gz_search != "") {
			if (gz_order != "")
				goTo("/" + gz_screen + "/called/" + 
						gz_base + "/search/" + gz_search + "/" + p + "/" + gz_order + "/historyBack/" + gz_historyBack);
			else
				goTo("/" + gz_screen + "/called/" +
						gz_base + "/search/" + gz_search + "/" + p + "/historyBack/" + gz_historyBack);
		} else {
			if (gz_order != "")
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + p + "/" + gz_order + "/historyBack/" + gz_historyBack);	
			else
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + p + "/historyBack/" + gz_historyBack);	
		}	
	} else {
		if (gz_search != "") {
			if (gz_order != "")
				goTo("/" + gz_screen + "/search/" + gz_search + "/" + p + "/" +
						gz_order);	
			else
				goTo("/" + gz_screen + "/search/" + gz_search + "/" + p);
		} else {
			if (gz_order != "")
				goTo("/" + gz_screen + "/" + p + "/" + gz_order);		
			else
				goTo("/" + gz_screen + "/" + p);
		}
	}
}

/**
 * Go To Page With Combo Position
 */
function goPage() {
	if (gV(gI("gz-select-pagination")) != "")
		toPage(gV(gI("gz-select-pagination")));
}

/**
 * Go To Page With Combo gz_position in Called Screen
 */
function goPageScreen() {
	if (gL(gV(gI("gz-select-pagination"))) != 0) {				
		gz_screenPosition = gV(gI("gz-select-pagination"));

		goScreen();
	}
}

/**
 * Go To First Page Position
 */
function goFirst() {
	toPage(1);
}

/**
 * Go To First Page gz_position in Called Screen
 */
function goFirstScreen() {	
	gz_screenPosition = 1;

	goScreen();
}

/**
 * Go To Back Page Position
 */
function goBack() {
	var p = (gz_position * 1) - 1;

	if (p < 1)
		p = 1;

	toPage(p);
}

/**
 * Go To Back Page gz_position in Called Screen
 */
function goBackScreen() {
	var p = (gz_screenPosition * 1) - 1;

	if (p < 1)
		p = 1;
		
	gz_screenPosition = p;

	goScreen();
}

/**
 * Go To Next Page Position
 *
 * @param {Integer} size
 */
function goNext(size) {
	var p = (gz_position * 1) + 1;
	
	if (p >= Math.ceil(size / gz_itensPerPage))
		goLast(size);
	else
		toPage(p);
}

/**
 * Go To Next Page gz_position in Called Screen
 *
 * @param {Integer} size
 */
function goNextScreen(size) {
	var p = (gz_screenPosition * 1) + 1;

	if (p >= Math.ceil(size / 5))
		goLastScreen(size);
	else {
		gz_screenPosition = p;
		
		goScreen();
	}
}

/**
 * Go To Last Page Position
 *
 * @param {Integer} size
 */
function goLast(size) {
	if (size > gz_itensPerPage) {
		var zero = "";
		var p = 0;

		for (var i = gL("" + size); i <= gL("" + size); i++) {
			zero += "0"; 
		}

		var end = (Math.ceil(size / gz_itensPerPage)) + zero;
		
		/*
 		 * !important 10
		 */
		p = end - 10;
		p = (p / 10) + 1;
		
		toPage(p);
	}
}

/**
 * Go To Last Page gz_position in Called Screen
 *
 * @param {Integer} size
 */
function goLastScreen(size) {
	if (size > 5) {
		var zero = "";
		var p = 0;

		for (var i = gL("" + size); i <= gL("" + size); i++) {
			zero += "0"; 
		}

		var end = (Math.ceil(size / 5)) + zero;
		
		/*
 		 * !important 10
		 */
		p = end - 10;
		p = (p / 10) + 1;
 		
		gz_screenPosition = p;
		
		goScreen();
	}
}

/**
 * Event Construct
 */
function event() {
	document.body.onkeydown = function(event) {
		goToEvent(event);
	}

	document.body.onkeyup = function(event) {
		keyReset(event);
	}
}

/**
 * Go To The Specific Event
 *
 * @param {Event} e Event
 */
function goToEvent(e) {
	if (!document.activeElement.tagName.includes("INPUT") || gI("gz-search") == document.activeElement) {
		if (e.keyCode == 17) {
			gz_ctrlKey = true;
		} else if (e.keyCode == 13) {
			if (gD(gI("gz-message")) == "block") {
				
			} else if (getSelectedLineId() == "") {
				if (gz_method == "stateRead" || gz_method == "stateReadAll" || gz_method == "stateCalled" || 
						gz_method == "stateCalledAll") {
					eval(gA(gI("gz-button-search"), "onclick"));
				} else if (gz_method == "stateCreate" || gz_method == "stateUpdate" || gz_method == "statePrint") {
					if (gD(gI("gz-screen")) == "block") {
						eval(gA(gI("gz-button-search"), "onclick"));
					} else { 
						var fields = gI("gz-form");
						if (gL(fields) == 1) {
							if (fields[0] == document.activeElement) {
								e.returnValue = false; 
							}
						}
					}
				}		
			} else {
				if (gD(gI("gz-screen")) == "block")	{
					screenHandler(gz_screenTable, getSelectedLineId());
				} else {
					e.preventDefault();
					showUpdate();
				}
			}
		} else if (e.keyCode == 45) {		
			if (gD(gI("gz-screen")) == "block")	{	
				eval(gI("gz-button-create").getAttribute("onclick"));
			} else {
				if (gI("gz-button-create").getAttribute("onclick") == "showCreate();") {
					showCreate();
				} else {
					eval(gz_screen + "ACT();");	
				}
			}
		} else if (e.keyCode == 46) {
			if (gz_method == "stateRead" || gz_method == "stateReadAll" || gz_method == "stateCalled" || 
					gz_method == "stateCalledAll") {
				showDelete();
			}
		} else if (e.keyCode == 37) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					if (gI("gz-search") != document.activeElement) {
						goBack();
					}
				}
			} else if (gD(gI("gz-screen")) == "block") {
				if (gI("gz-search") != document.activeElement) {
					goBackScreen();
				}
			}
		} else if (e.keyCode == 38) {
			if (gz_method == "stateRead" || gz_method == "stateReadAll" || gz_method == "stateCalled" || 
					gz_method == "stateCalledAll") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					if (gz_ctrlKey) {
						if (getSelectedLineId() != "") {
							if (getSelectedLineUp() != 0) {
								selected(getSelectedLineUp() - 1);
							}
						} else {
							selected(getCountLine() - 1);
						}
					} else {
						if (getSelectedLineId() != "") {
							if (getSelectedLineUp() != 0) {
								selected(getSelectedLineUp() - 1);
							}
						} else {
							selected(getCountLine() - 1);
						}
					}
				}
			} else if (gD(gI("gz-screen")) == "block") {
				if (getSelectedLineId() != "") {
					if (getSelectedLineUp() != 0) {
						selected(getSelectedLineUp() - 1);
					}
				} else {
					selected(getCountLine() - 1);
				}
			}
		} else if (e.keyCode == 39) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					if (gI("gz-search") != document.activeElement) {
						eval(gA(gI("gz-button-next"), "onclick"));
					}
				}
			} else if (gD(gI("gz-screen")) == "block") {
				if (gI("gz-search") != document.activeElement) {
					eval(gA(gI("gz-button-next"), "onclick"));
				}
			}
		} else if (e.keyCode == 40) {
			if (gz_method == "stateRead" || gz_method == "stateReadAll" || gz_method == "stateCalled" || 
					gz_method == "stateCalledAll") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					if (getSelectedLineId() != "") {	
						if (getSelectedLine() != (getCountLine() - 1)) {
							selected(getSelectedLine() + 1);
						}
					} else {
						selected(0);
					}
				}
			} else if (gD(gI("gz-screen")) == "block") {
				if (getSelectedLineId() != "") {
					if (getSelectedLine() != (getCountLine() - 1)) {
						selected(getSelectedLine() + 1);
					}
				} else {
					selected(0);
				}
			}
		} else if (e.keyCode == 27) {
			if (gD(gI("gz-message")) == "block") {
				if (gH(gI("gz-message-title")) == gz_titleAttetion || gH(gI("gz-message-title")) == gz_titleConfirmation ||
						gH(gI("gz-message-title")) == gz_titleWait) {
					closeMessage();
				}
			} else {					
				if (gD(gI("gz-screen")) == "block") {
					closeScreen();
				} else if (gD(gI("gz-form-screen")) == "block") {
					window.close();
				} else if (gz_method == "stateCreate" || gz_method == "stateUpdate") {
					cancel();
				} else {
					if (getSelectedLineId() != "") {
						clearSelection();
					}
				}
			}
		} else if (e.keyCode == 36) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					goFirst();
				}
			} else if (gD(gI("gz-screen")) == "block") {
				goFirstScreen();
			}
		} else if (e.keyCode == 35) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					eval(gA(gI("gz-button-last"), "onclick"));
				}
			} else if (gD(gI("gz-screen")) == "block") {
				eval(gA(gI("gz-button-last"), "onclick"));
			}
		} else if (e.keyCode == 33) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					eval(gA(gI("gz-button-next"), "onclick"));
				}
			} else if (gD(gI("gz-screen")) == "block") {
				eval(gA(gI("gz-button-next"), "onclick"));
			}
		} else if (e.keyCode == 34) {
			if (gz_method == "stateRead" || gz_method == "stateCalled") {
				if (gD(gI("gz-message")) == "none" || gD(gI("gz-message")) == "") {
					goBack();
				}
			} else if (gD(gI("gz-screen")) == "block") {
				goBackScreen();
			}
		}
	}
}

/**
 * Console rule Reset Key
 *
 * @param {Event} e Event
 */
function keyReset(e) {
	if (e.keyCode == 17) {
		gz_ctrlKey = false;
	}
}

/*
 * Remove CTRL + J
 */
function ctrlJ(e) {
	var tecla = e.keyCode;
	var ctrl = e.ctrlKey;
	if (ctrl && tecla == 74) {
		e.returnValue = false;
	}
}

/**
 * Go To Table Link
 *
 * @param {String} table
 * @since 1.0.0
 */
function goToTable(table) {
	location.href = gz_root + gz_module + "/" + table + "/1";
}

/**
 * Target blank
 *
 * @param {String} table
 */
function target_blank(table) {
	window.open(gz_root + gz_module + "/" + table + "/1");
}

/**
 * Go To Link
 *
 * @param {String} link
 */
function goTo(link) {
	location.href = gz_root + gz_module + link;
}

/**
 * Go To Link With Target Blank
 *
 * @param {String} link
 */
function goToBlank(link) {
	window.open(gz_root + gz_module + link);
}

/**
 * Similar <a href="link" target="_blank"></a>
 *
 * @param {String} link
 */
function href(link) {
	window.open(link);
}

/**
 * Go To Link With Searh
 *
 * @param {String} link
 */
function goSearch() {
	if (gz_base != "") {
		goTo(gV(gI("gz-search")) == gz_inputSearch ||
				gV(gI("gz-search")) == "" 
				? "/" + gz_screen + "/called/" + gz_base + "/1" + "/historyBack/" + gz_historyBack
				: "/" + gz_screen + "/called/" + gz_base + 
				"/search/" + removeBar(gV(gI("gz-search"))) + "/1" + "/historyBack/" + gz_historyBack);
	} else { 
		goTo(gV(gI("gz-search")) == gz_inputSearch ||
				gV(gI("gz-search")) == "" 
				? "/" + gz_screen + "/1"
				: "/" + gz_screen + "/search/" + 
				removeBar(gV(gI("gz-search"))) + "/1");
	}
}

/**
 * Render Color Line
 */
function colorLine() {
	var table = gT("table");

    for (var i = 0; i < gL(table); i++) {
    	var tr = table[i].getElementsByTagName("tr");

        for (var j = 0; j < gL(tr); j++) {
			if (j == 0)
				sC(tr[j], "noSelected");

			var td = tr[j].getElementsByTagName("td");

			for (var k = 0; k < gL(td); k++) {
				sBt(td[k], "solid 1px #e0e0e0");
				sBb(td[k], "solid 1px transparent");
			}

        	if (j % 2 == 0)
        		sG(tr[j], "#fafafa");
        	else 
        		sG(tr[j], "transparent");
        }
    }
}

/**
 * On Focus Line
 *
 * @param {Integer} line
 */
function onFocus(line) {
    if (gC(gI(line)) != "selected") {
		var td = gI(line).getElementsByTagName("td");
	
		for (var i = 0; i < gL(td); i++) {
			sBt(td[i], "solid 1px #90caf9");
			sBb(td[i], "solid 1px #90caf9");
		}

    	sG(gI(line), "linear-gradient(#ffffff, #e3f2fd)");
	}
}

/**
 * Out Focus Line
 *
 * @param {Integer} line
 */
function outFocus(line) {
    if (gC(gI(line)) != "selected") {
		var td = gI(line).getElementsByTagName("td");
	
		for (var i = 0; i < gL(td); i++) {
			sBt(td[i], "solid 1px #e0e0e0");
			sBb(td[i], "solid 1px transparent");
		}
		
    	if (line % 2 == 0)
    		sG(gI(line), "transparent");
    	else
    		sG(gI(line), "#fafafa");
    }
}

/**
 * Selected Line
 *
 * @param {Integer} line
 */
function selected(line) {
	gI("gz-search").blur();
	gI("gz-select-pagination").blur();

	if (gC(gI(line)) == "selected") {
		if (gD(gI("gz-screen")) == "block")
			screenHandler(gz_screenTable, getSelectedLineId());
		else if (gz_ctrlKey) {
			if (gC(gI(line)) == "selected") {
				if (line % 2 == 0)
					sG(gI(line), "transparent");
				else
					sG(gI(line), "transparent");
					
				sC(gI(line), "noSelected");
			} else {
				sG(gI(line), "linear-gradient(#ffffff, #e3f2fd)");
				sC(gI(line), "selected");
			}
		} else
			showUpdate();
	} else {
		if (gz_ctrlKey) {
			var td = gI(line).getElementsByTagName("td");
		
			for (var i = 0; i < gL(td); i++) {
				sBt(td[i], "solid 1px #90caf9");
				sBb(td[i], "solid 1px #90caf9");
			}

			sG(gI(line), "linear-gradient(#ffffff, #e3f2fd)");
			sC(gI(line), "selected");
		} else {
			var table = gT("table");
			
			for (var i = 0; i < gL(table); i++) {
				var tr = gN(table[i], "tr");
				
				for (var j = 0; j < gL(tr); j++) {
					sC(tr[j], "noSelected");
				}
			}

			colorLine();
			
			sC(gI(line), "selected");
			
			var td = gI(line).getElementsByTagName("td");
		
			for (var i = 0; i < gL(td); i++) {
				sBt(td[i], "solid 1px #90caf9");
				sBb(td[i], "solid 1px #90caf9");
			}

			sG(gI(line), "linear-gradient(#ffffff, #e3f2fd)");
		}
	}
}

/**
 * Selected All Line
 */
function selectedAll() {
	gI("gz-search").blur();
	gI("gz-select-pagination").blur();
	
	var table = gT("table");
	
	for (var i = 0; i < gL(table); i++) {
		var tr = gN(table[i], "tr");
		
		for (var j = 0; j < gL(tr); j++) { 
			if (j > 0) {
				sG(tr[j], "linear-gradient(#ffffff, #e3f2fd)");
				sC(tr[j], "selected");
				
				var td = gI(tr[j].id).getElementsByTagName("td");
			
				for (var k = 0; k < gL(td); k++) {
					sBt(td[k], "solid 1px #90caf9");
					sBb(td[k], "solid 1px #90caf9");
				}		
			}
		}
	}
}

/**
 * Clear Selected Line
 */
function clearSelection() {
	var table = gT("table");
	
	for (var i = 0; i < gL(table); i++) {
		var tr = gN(table[i], "tr");
		
		for (var j = 0; j < gL(tr); j++) {
			sC(tr[j], "noSelected");
		}
	}

	colorLine();
}

/**
 * Get Selected Line
 *
 * @return {Integer} The Selected Line
 */
function getSelectedLine() {
	var ret = "";
	var table = gT("table");
	var tr = gN(table[0], "tr");

	for (var i = 0; i < gL(tr); i++) {
		if (gC(tr[i]) == "selected")
			ret = i - 1;	
	}

	return ret;
}

/**
 * Get Line Up
 *
 * @param {Integer} The Selected Line Up
 */
function getSelectedLineUp() {
	var ret = "";
	var table = gT("table");
	var tr = gN(table[0], "tr");
	
	for (var i = 0; i < gL(tr); i++) {
		if (gC(tr[i]) == "selected")
			return (i - 1);
	}

    return ret;
}

/**
 * Get Selecteds Lines Ids
 *
 * @return {String} The Selecteds Lines
 */
function getSelectedLineId() {
	var ret = "";
	var table = gT("table");
	
    for (var i = 0; i < gL(table); i++) {
		var tr = gN(table[i], "tr");
		
        for (var j = 0; j < gL(tr); j++) {
        	if (gC(tr[j]) == "selected") {
				var td = gN(tr[j], "td");

				ret += "<gz>" + gH(td[0]);
        	}	
        }
    }

    return ret;
}

/**
 * Get No Selecteds Lines
 *
 * @return {Integer} The No Selecteds Lines
 */
function getNoSelectedLine() {
	var ret = 0;
	var table = gT("table");
	
    for (var i = 0; i < gL(table); i++) {
		var tr = gN(table[i], "tr");
		
        for (var j = 0; j < gL(tr); j++) {
        	if (gC(tr[j]) == "noSelected")
				ret++;
        }
    }

    return ret;
}

/**
 * Get Line Size
 *
 * @return {Integer} The Size
 */
function getCountLine() {
	var ret = "";
	var table = gT("table");
	
    for (var i = 0; i < gL(table); i++) {
		var tr = gN(table[i], "tr");
		
        for (var j = 0; j < gL(tr); j++) {
			ret = j;
        }
    }

    return ret;
}

/**
 * Show Loading
 */
function showLoading() {
	sD(gI("gz-loading"), "block");

	sH(gI("gz-loading"),
			"<h1 id=\"gz-message-title\" class=\"dv-ta-l dv-mt-hdpi dv-mb-mdpi dv-pb-mdpi\">" + gz_titleWait + "</h1>" +
			"<p class=\"dv-ta-l dv-pt-mdpi dv-mb-xdpi\">" + gz_msgWait + "</p>" +	
			"<div id=\"gz-loader\" class=\"dv-mt-xdpi\"></div>" +
		"</div>");

	sD(gI("gz-block"), "block");
}

/**
 * Close Loading
 */
function closeLoading() {
	sD(gI("gz-loading"), "none");
	sD(gI("gz-block"), "none");
}

/**
 * Show Message
 *
 * @param {String} gz_title 
 * @param {String} message
 * @param {Function} action
 */
function showMessage(gz_title , message, action) {
	sD(gI("gz-block"), "block");
	sD(gI("gz-message"), "block");

	if (gz_title == gz_titleConfirmation) {
		sH(gI("gz-message"),
				"<h1 id=\"gz-message-title\" class=\"dv-ta-l dv-mt-hdpi dv-mb-mdpi dv-pb-mdpi\">" + 
						gz_title  + "</h1>" +
				"<p class=\"dv-ta-l dv-pt-mdpi dv-mb-mdpi dv-pb-mdpi\">" + message + "</p>" +
				"<div class=\"gz-button dv-f-l dv-mt-hdpi dv-mr-mdpi\">" +
					"<a href=\"#\" onclick=\"" + action + " closeMessage(); return false;\"  class=\"gz-tooltip\">" +
						"<img src=\"" + gz_root + "/mod/cms/img/icon/ok.png\" />" +
						"<span class=\"gz-span-msg\">" +
							gz_msgConfirmOperation +
						"</span>" +
					"</a>" +
				"</div>" +
				"<div class=\"gz-button dv-f-l dv-mt-hdpi dv-ml-mdpi\">"+					
					"<a id=\"gz-a-cancel\" href=\"#\" onclick=\"closeMessage(); return false;\"  class=\"gz-tooltip\">" +
						"<img src=\"" + gz_root + "/mod/cms/img/icon/cancel.png\">" +
						"<span class=\"gz-span-msg\">" +
							gz_msgCancelOperation +
						"</span>" +
					"</a>" +
				"</div>");

		sF(gI("gz-a-cancel"));
	} else if (gz_title == gz_titleAttetion) {
		sH(gI("gz-message"),
				"<h1 id=\"gz-message-title\" class=\"dv-ta-l dv-mt-hdpi dv-mb-mdpi dv-pb-mdpi\">" + 
						gz_title  + "</h1>" +
				"<p class=\"dv-ta-l dv-pt-mdpi dv-mb-mdpi dv-pb-mdpi\">" + message + "</p>" +
				"<div class=\"gz-button dv-f-l dv-mt-hdpi\">" +
					"<a id=\"gz-a-action\" href=\"#\" onclick=\"closeMessage(); " + action + " return false;\"  class=\"gz-tooltip\">" +
						"<img src=\"" + gz_root + "/mod/cms/img/icon/ok.png\">" +
						"<span class=\"gz-span-msg\">" +
							gz_msgCloseMsg +
						"</span>" +
					"</a>" +
				"</div>");

		sF(gI("gz-a-action"));
	} else if (gz_title == gz_titleWait) {
		sH(gI("gz-message"),
				"<h1 id=\"gz-message-title\" class=\"dv-ta-l dv-mt-hdpi dv-mb-mdpi dv-pb-mdpi\">" + 
						gz_title  + "</h1>" +
				"<p class=\"dv-ta-l dv-pt-mdpi dv-mb-mdpi dv-pb-mdpi\">" + message + "</p>" +	
				"<img src=\"" + gz_root + "/mod/cms/img/icon/loading.gif\" class=\"dv-mt-hdpi\"/>" +
			"</div>");
	}
}

/**
 * Close Message
 */
function closeMessage() {
	sD(gI("gz-message"), "none");
	sD(gI("gz-block"), "none");
}

/**
 * Call For Any Screen
 *
 * @param {String} id Table Screen
 * @param {String} selectId Select
 */
function showScreen(id, selectId) {
	gz_refresh = true;
	gz_screenTable = id;

	var selectBase = gV(gI(selectId));
	var combo = gz_screenTable.split(".");
	var table = combo[1];

	if (selectId != "") {
		if (selectBase == "")
			showMessage(gz_titleAttetion, gz_msgNoItemSelected, "");
		else {
			gz_screenBase = gz_base + "<gz>" + selectBase;
			
			sD(gI("gz-screen"), "block");

			sH(gI("gz-screen"), 
					"<div id=\"" + table + "-screen\"></div>" +
					"<div id=\"" + table + "-screen-pagination\"></div>");

			sD(gI("gz-block"), "block");

			goScreen();
		}
	} else {
		gz_screenBase = gz_base;
	
		sD(gI("gz-screen"), "block");

		sH(gI("gz-screen"), 
				"<div id=\"" + table + "-screen\"></div>" +
				"<div id=\"" + table + "-screen-pagination\"></div>");

		sD(gI("gz-block"), "block");

		goScreen();
	}
}

/**
 * Call For Any Screen with a filter
 *
 * @param {String} id Table Screen
 * @param {Integer} filter Filter
 */
function showFilterScreen(id, filter) {
	gz_refresh = true;
	gz_screenTable = id;

	var combo = gz_screenTable.split(".");
	var table = combo[1];

	if (filter != "") {
		gz_screenBase = gz_base + "<gz>" + filter;
		
		sD(gI("gz-screen"), "block");

		sH(gI("gz-screen"), 
				"<div id=\"" + table + "-screen\"></div>" +
				"<div id=\"" + table + "-screen-pagination\"></div>");

		sD(gI("gz-block"), "block");

		goScreen();
	} else {
		gz_screenBase = gz_base;
	
		sD(gI("gz-screen"), "block");

		sH(gI("gz-screen"), 
				"<div id=\"" + table + "-screen\"></div>" +
				"<div id=\"" + table + "-screen-pagination\"></div>");

		sD(gI("gz-block"), "block");

		goScreen();
	}
}

/**
 * Close Called Screen
 */
function closeScreen() {
	gz_refresh = false;
	
	sD(gI("gz-form"), "");
	sD(gI("gz-screen"), "none");
	sD(gI("gz-block"), "none");

	clearSelection();

	sF(gI(gz_screenTable));

	gz_screenTable = "";
	gz_screenSearch = "";
	gz_screenPosition = "";
}

/**
 * Screen Enter Event
 * 
 * @param {String} id Table Screen
 * @param {String} selectId Select
 * @param {Event} e Event
 */
function showScreenEvent(id, selectId, e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		
		showScreen(id, selectId);
	}
}

/**
 * Screen Enter Event
 * 
 * @param {String} id Table Screen
 * @param {Integer} filter Filter
 * @param {Event} e Event
 */
function showFilterScreenEvent(id, filter, e) {
	if (e.keyCode == 13) {
		e.preventDefault();
		
		showFilterScreen(id, filter);
	}
}

/**
 * Check Empty in Search
 *
 * @param {String} id Input Id
 */
function emptySearch(id) {
	var element = gI(id);
	var defaultValue = element.defaultValue;
	var value = gV(element);
    
	if (defaultValue == value)
		sV(element, "");

	sO(element, "#455a64");
	
	clearSelection();
}

/**
 * gz_search Default Value
 *
 * @param {String} id Table Screen
 */
function showSearch(id) {
	var element = gI(id);
	var defaultValue = element.defaultValue;
	var value = gV(element);    

	if (value == "")
		sV(element, gz_inputSearch);

	sO(element, "#9e9e9e");
}

function historyBack() {
	window.history.go(-1);
}

function cancel() {
	if (location.hash == "#from-screen") {
		window.close();
	} else {
		toPage(gz_position);
	}
}

/**
 * Go To Create Screen
 */
function showCreate() {
	if (gz_screenTable != "") {
		var screenName = gz_screenTable.split(".");
			
		goToBlank("/" + screenName[1] + "/create/");				
	} else {
		if (gz_base != "") {
			if (gz_search != "") {
				if (gz_order != "")
					goTo("/" + gz_screen + "/called/" +
							gz_base + "/create/" + gz_search + "/" + gz_position + "/" + gz_order + "/historyBack/" + gz_historyBack);			
				else
					goTo("/" + gz_screen + "/called/" +  
							gz_base + "/create/" + gz_search + "/" + gz_position + "/historyBack/" + gz_historyBack);
			} else {
				if (gz_order != "")
					goTo("/" + gz_screen + "/called/" +  
							gz_base + "/create/" + gz_position + "/" + gz_order + "/historyBack/" + gz_historyBack);			
				else
					goTo("/" + gz_screen + "/called/" + 
							gz_base + "/create/" + gz_position + "/historyBack/" + gz_historyBack);
			}
		} else { 
			if (gz_search != "") {
				if (gz_order != "")
					goTo("/" + gz_screen + "/create/" + gz_search + "/" + gz_position + "/" + gz_order);			
				else
					goTo("/" + gz_screen + "/create/" + gz_search + "/" + gz_position);
			} else {
				if (gz_order != "")
					goTo("/" + gz_screen + "/create/" + gz_position + "/" + gz_order);			
				else
					goTo("/" + gz_screen + "/create/" + gz_position);
			}
		}
	}
}

/**
 * Go To Update Screen
 */
function showUpdate() {
	var lines = getSelectedLineId().split("<gz>");

	if (gL(lines) > 2) {
		showMessage(gz_titleAttetion, gz_msgMoreThanOneItemSelected, "");		
	} else {
		if (gz_base != "") {
			if (gz_search != "") {
				if (gz_order != "")
					goTo("/" + gz_screen + "/called/" + gz_base + 
							"/update/" + lines[1] + "/" + gz_search + "/" + gz_position + 
							"/" + gz_order + "/historyBack/" + gz_historyBack);				
				else
					goTo("/" + gz_screen + "/called/" + gz_base + 
							"/update/" + lines[1] + "/" + gz_search + "/" + gz_position + "/historyBack/" + gz_historyBack);
			} else {
				if (gz_order != "")
					goTo("/" + gz_screen + "/called/" + gz_base + 
							"/update/" + lines[1] + "/" + gz_position + "/" + gz_order + "/historyBack/" + gz_historyBack);				
				else 
					goTo("/" + gz_screen + "/called/" + gz_base + 
							"/update/" + lines[1] + "/" + gz_position + "/historyBack/" + gz_historyBack);
			}
		} else { 
			if (gz_search != "") {
				if (gz_order != "")
					goTo("/" + gz_screen + "/update/" + lines[1] + "/" + gz_search + "/" +
							gz_position + "/" + gz_order);				
				else
					goTo("/" + gz_screen + "/update/" + lines[1] + "/" + gz_search + "/" +
							gz_position);
			} else {
				if (gz_order != "")
					goTo("/" + gz_screen + "/update/" + lines[1] + "/" + gz_position + 
							"/" + gz_order);	
				else
					goTo("/" + gz_screen + "/update/" + lines[1] + "/" + gz_position);
			}
		}
	}
}

/**
 * Go To Delete Screen
 */
function showDelete() {
	if (getSelectedLineId() != "")
		showMessage(gz_titleConfirmation, gz_msgConfirmDelete, 
				"goDelete('" + getSelectedLineId() + "');");
	else
		showMessage(gz_titleAttetion, gz_msgNoItemSelected, "");
}

/**
 * Go To Called Screen
 *
 * @param {String} t Table Screen
 */
function goCalled(t) {
	var lines = getSelectedLineId().split("<gz>");

	if (getSelectedLineId() == "")
		showMessage(gz_titleAttetion, gz_msgNoItemSelected, "");
	else if (lines.length > 2) {
		showMessage(gz_titleAttetion, gz_msgMoreThanOneItemSelected, "");
	} else			
		goTo("/" + t + "/called/" + lines[1] + "/1/historyBack/" + gz_historyBack);
}

/**
 * Go To Called Screen with base
 *
 * @param {String} t Table Screen
 */
function goCalledBase(t) {
	if (gz_base == "")
		showMessage(gz_titleAttetion, gz_msgNoItemSelected, "");
	else			
		goTo("/" + t + "/called/" + gz_base + "/1/historyBack/" + gz_historyBack);
}

/**
 * Go To Called Screen With Search
 *
 * @param {String} t Table Screen
 */
function goCalledSearch(t) {	
	goTo(gV(gI("gz-search")) == gz_inputSearch ||
			gV(gI("gz-search")) == "" 
			? "/" + t + "/called/" + gz_base + "/1/historyBack/" + gz_historyBack
			: "/" + t + "/called/" + gz_base + "/search/" + 
			gV(gI("gz-search")) + "/1/historyBack/" + gz_historyBack);
}

/**
 * Go To Print Screen
 */
function goPrint() {
	goToBlank("/" + gz_screen + "/print");
}

/**
 * Go To Report Screen
 *
 * @param {String} r Report
 */
function goReport(r) {
	goToBlank("/" + gz_screen + "/report/" + r + "/" + removeBar(getForm()));
}

/**
 * Remove Bar
 *
 * @param {String} str String
 */
function removeBar(str) {
	return str.replace(/\//g, "-");
}

/**
 * Add Bar
 *
 * @param {String} str String
 */
function addBar(str) {
	return str.replace(/\-/g, "/");
}

/**
 * Delete Action
 *
 * @param {Integer} line
 */
function goDelete(line) {
	if (getNoSelectedLine() == 1)
		gz_position = gz_position - 1;
	else if (getCountLine() == 1)
		gz_position = gz_position - 1;

	if (gz_position < 1)
		gz_position = 1;
		
	gz_code = line;
		
	request(gz_screen, "delete");
}

/**
 * Ordenation
 *
 * @param {String} order
 */
function orderBy(order) {
	var type = "";
	
	var table = gT("table");

	if (gC(gI(order)) == "ASC")
		type = "DESC";
	else
		type = "ASC";
		
	if (gz_base != "") {
		if (gz_search != "")
			goTo("/" + gz_screen + "/called/" + 
					gz_base + "/search/" + gz_search + "/" + gz_position + "/" + 
					order + "<gz>" + type + "/historyBack/" + gz_historyBack);
		else
			goTo("/" + gz_screen + "/called/" +
					gz_base + "/" + gz_position + "/" + order + "<gz>" + type + "/historyBack/" + gz_historyBack);
	} else {
		if (gz_search != "")
			goTo("/" + gz_screen + "/search/" + gz_search + "/" + gz_position +
					"/" + order + "<gz>" + type);
		else
			goTo("/" + gz_screen + "/" + gz_position + "/" + order + 
					"<gz>" + type);	
	}
}

/**
 * Set Effect in Order
 *
 * @param {String} o Order
 */ 
function colorOrderBy(o) {
	var order = o.split("<gz>");

	var table = gT("table");
	
    for (var i = 0; i < gL(table); i++) {
		var th = gN(table[i], "th");

        for (var j = 0; j < gL(th); j++) {
			if (th[j].id == order[0]) {
				if (order[1] == "ASC") {
					sC(gI(order[0]), "ASC");
					// sO(gI(order[0]), "#2C3E50");
					
					sG(gI(order[0]), "url(" + gz_root + 
							"/mod/cms/img/icon/up.png) no-repeat right center, linear-gradient(#ffffff, #e0e0e0)");
				} else {
					sC(gI(order[0]), "DESC");
					// sO(gI(order[0]), "#2C3E50");
					
					sG(gI(order[0]), "url(" + gz_root + 
							"/mod/cms/img/icon/down.png) no-repeat right center, linear-gradient(#ffffff, #e0e0e0)");
				}
			}
        }
    }
}

/**
 * Mask Preparation.
 */
function mask() {
	var pattern = "";
	var inputs = gT("input");
	for (var x = 0; x < gL(inputs); x++) {
		if (gC(inputs[x]).indexOf("gz-datetime") > 0) {
			pattern = "__/__/____ __:__";
		} else if (gC(inputs[x]).indexOf("gz-date") > 0) {
			pattern = "__/__/____";
		} else if (gC(inputs[x]).indexOf("gz-time") > 0) {
			pattern = "__:__:__";
		} else if (gC(inputs[x]).indexOf("gz-integer") > 0) {
			sA(inputs[x], "oninput", "integer(this, event);");
		} else if (gC(inputs[x]).indexOf("gz-double") > 0) {
			sA(inputs[x], "oninput", "decimal(this, event);");
		} else if (gC(inputs[x]).indexOf("gz-cpf") > 0) {
			pattern = "___.___.___-__";
		} else if (gC(inputs[x]).indexOf("gz-cnpj") > 0) {
			pattern = "__.___.___/____-__";
		} else if (gC(inputs[x]).indexOf("gz-phone") > 0) {
			pattern = "__ ____-____";
		} else if (gC(inputs[x]).indexOf("gz-cellphone") > 0) {
			pattern = "__ _____-____";
		} else if (gC(inputs[x]).indexOf("gz-cep") > 0) {
			pattern = "_____-___";
		}
		if (pattern != "") {
			sPh(inputs[x], pattern);
			sA(inputs[x], "oninput", "maskMe(this, event, \"" + pattern + "\");");
			sA(inputs[x], "onblur", "isMask(this, \"" + pattern + "\"); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], 
					"onblur") : ""));
		} else if (gC(inputs[x]).indexOf("gz-required") > 0) {
			sA(inputs[x], "onblur", "isNull(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		} else if (gC(inputs[x]).indexOf("gz-datalist-") > 0 && gC(inputs[x]).indexOf("gz-non-datalist") < 0) {
			sA(inputs[x], "onblur", "isDatalist(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		} else if (gC(inputs[x]).indexOf("gz-email") > 0) {
			sA(inputs[x], "onblur", "isEmail(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		}
		pattern = "";
	}
	var textareas = gT("textarea");
	for (var x = 0; x < gL(textareas); x++) {
		if (gC(textareas[x]).indexOf("gz-required") > 0) {
			sA(textareas[x], "onblur", "isNull(this); " + (gA(textareas[x], "onblur") != null ? gA(textareas[x], "onblur") : ""));
		}
	}
	var selects = gT("select");
	for (var x = 0; x < gL(selects); x++) {
		if (gC(selects[x]).indexOf("gz-required") > 0) {
			sA(selects[x], "onblur", "isNull(this); " + (gA(selects[x], "onblur") != null ? gA(selects[x], "onblur") : ""));
		}
	}
}

/**
 * Mask effect.
 *
 * @param {Element} element
 * @param {Event} event
 * @param {String} pattern
 */
/*function maskMe(element, event, pattern) {
	if (parseInt(event.data) != event.data) {
		sV(element, "");
	}
	var position = [];
	var mask = [];
	for (var x = 0; x < gL(pattern); x++) {
		if (pattern.charAt(x) != "_") {
			position.push(x);
			mask.push(pattern.charAt(x));
		}
	}
	for (var x = 0; x < gL(position); x++) {
		if (gL(gV(element)) == position[x]) {
			sV(element, gV(element) + mask[x]);
		} 
		if (gL(gV(element)) > gL(pattern)) {
			sV(element, gV(element).slice(0, -1));
		}	 
	}		
}*/
function maskMe(element, event, pattern) {
	const values = element.value.replace(/\D/g, '').split('');
	let cursor = element.selectionStart;
	let new_value = '';	
	const erasing = !event.data;
	for (let position = 0; position < pattern.length; position++) {
		if (values.length === 0) {
			break;
		}
		const char = pattern[position];
		if (char === '_') {
			new_value += values.shift();
		} else {
			new_value += char;
			if (cursor - 1 === position && !erasing) {
				cursor++;
			}
		}
	}
	if (erasing) {
		while (cursor > 0 && pattern[cursor-1] !== '_') {
			cursor--;
		}
	}
	element.value = new_value;
	element.selectionStart = cursor;
	element.selectionEnd = cursor;
}

/**
 * Mask check.
 *
 * @param {Element} element
 * @param {String} pattern
 */
function isMask(element, pattern) {
	if (element.value == "" && gC(element).indexOf("gz-required") > 0) {
		sB(element, "solid 1px #cc2b2b");
		sG(element, "#fffafa");
		sPh(element, pattern + " Campo obrigatório");
	} else {
		mask = true;
		if (gL(gV(element)) == gL(pattern)) {
			for (var x = 0; x < gL(pattern); x++) {
				if (pattern.charAt(x) == "_") {
					if (isNaN(gV(element).charAt(x))) {
						mask = false;
						break;
					}
				} else {
					if (pattern.charAt(x) != gV(element).charAt(x)) {
						mask = false;
						break;
					}
				}
			}
			if (mask) {
				if (gC(element).indexOf("gz-datetime") > 0) {
					isDatetime(element);
				} else if (gC(element).indexOf("gz-date") > 0) {
					isDate(element);
				} else {
					sB(element, "");
					sG(element, "");
					sPh(element, pattern);
				}
			} else {
				if (gC(element).indexOf("gz-required") > 0) {
					sB(element, "solid 1px #cc2b2b");
					sG(element, "#fffafa");
					sV(element, "");
					sPh(element, pattern + " Campo obrigatório");
				} else {
					sB(element, "");
					sG(element, "");
					sV(element, "");
					sPh(element, pattern);
				}
			}
		} else {
			if (gC(element).indexOf("gz-required") > 0) {
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sV(element, "");
				sPh(element, pattern + " Campo obrigatório");
			} else {
				sB(element, "");
				sG(element, "");
				sV(element, "");
				sPh(element, pattern);
			}
		}
	}
}

/**
 * Null check.
 *
 * @param {Element} element
 */
function isNull(element) {
	if (gL(gV(element)) == 0) {
		sB(element, "solid 1px #cc2b2b");
		sG(element, "#fffafa");
		sPh(element, "Campo obrigatório");
	} else {
		if (gC(element).includes("gz-datalist-") && !gC(element).includes("gz-non-datalist")) {
			isDatalist(element);
		} else if (gC(element).indexOf("gz-datetime") > 0) {
			isDatetime(element);
		} else if (gC(element).indexOf("gz-date") > 0) {
			isDate(element);
		} else if (gC(element).indexOf("gz-email") > 0) {
			isEmail(element);
		} else {
			sB(element, "");
			sG(element, "");
			sPh(element, "");
		}
	}
}

/**
 * Id datalist
 *
 * @param {Element} element
 */
function isDatalist(element) {
	if (gC(element).includes("gz-datalist-") && !gC(element).includes("gz-non-datalist")) {
		var datalist = gC(element).split("gz-datalist-")[1];
		var datalistIsValid = false;
		for (var x = 0; x < gI(datalist.split("-to-")[0]).options.length; x++) {
			if (gI(datalist.split("-to-")[0]).options[x].value == 
					document.getElementsByName(datalist.split("-to-")[1])[0].value) {
				datalistIsValid = true;
				break;
			}
		}
		if (!datalistIsValid) {
			if (gC(element).indexOf("gz-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, "");
				sG(element, "");
				sPh(element, "Valor inválido");
			}
		} else {
			sB(element, "");
			sG(element, "");
			sPh(element, "");
		}
	}
}

/**
 * Clear datalist.
 *
 * @param {String} id
 */
function clearDatalist(id) {
	sV(gI(id), "");
	sF(gI(id));
}

/**
 * Is datetime
 *
 * @param {Element} element
 */
function isDatetime(element) {
	if (gV(element) != "") {
		var datePattern = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26]))) (2[0-3]|[0-1]?[\d]):[0-5][\d]$/;
        if (datePattern.test(gV(element))) {
			sB(element, "");
			sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("gz-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, "");
				sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, "");
		sG(element, "");
		sPh(element, "");
	}
}

/**
 * Is date
 *
 * @param {Element} element
 */
function isDate(element) {
	if (gV(element) != "") {
		var datePattern = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;
        if (datePattern.test(gV(element))) {
			sB(element, "");
			sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("gz-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, "");
				sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, "");
		sG(element, "");
		sPh(element, "");
	}
}

/**
 * Is email
 *
 * @param {Element} element
 */
function isEmail(element) {
	if (gV(element) != "") {
		var emailPattern = /\S+@\S+\.\S+/;
        if (emailPattern.test(gV(element))) {
			sB(element, "");
			sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("gz-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, "");
				sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, "");
		sG(element, "");
		sPh(element, "");
	}
}

/**
 * Integer check.
 *
 * @param {Element} element
 * @param {Event} event
 */
function integer(element, event) {
	if (parseInt(event.data) != event.data) {
		sV(element, "");
	}	
}

/**
 * Decimal effect.
 *
 * @param {Element} element
 * @param {Event} event
 */
function decimal(element, event) {
	if (parseInt(event.data) != event.data) {
		sV(element, "");
	} else {	
		var mask = "";
		var metadata = gV(element).replace(/\,/g, "").replace(/\./g, "");	
		if (metadata.charAt(0) == "0" && metadata.charAt(1) == "0") {
			metadata = metadata.replace("00", "");
		} else if (metadata.charAt(0) == "0") {
			metadata = metadata.replace("0", "");
		}
		if (gL(metadata) == 1) {
			mask = "0,0" + metadata;
		} else if (gL(metadata) == 2) {
			mask = "0," + metadata;
		} else if (gL(metadata) == 3) {
			mask = metadata.charAt(0) + "," + metadata.charAt(1) + metadata.charAt(2);
		}			
		else if (gL(metadata) > 3) {
			var number = metadata.substring(0, (gL(metadata) - 2));
			var decimal = metadata.substring((gL(metadata) - 2), gL(metadata));
			var position = 0;
			for (var i = (gL(number) - 1); i >= 0; i--) {
				if (position == 3) {
					position = 0;
					mask = number.charAt(i) + "." + mask;
				} else {
					mask = number.charAt(i) + mask
				}
				position++;
			}
			mask = mask + "," + decimal;
		}
		sV(element, mask);
	}
}

/**
 * Decimal back space.
 *
 * @param {Element} element
 * @param {Event} event
 */
function decimalClean(element, event) {
	if (event.keyCode == 8) {
		event.returnValue = false;
		var mask = "";
		var metadata = gV(element).replace(/\,/g, "").replace(/\./g, "") + String.fromCharCode(event.keyCode);			
		var data = metadata.substring(0, (gL(metadata) - 2));
		if (data.charAt(0) == "0" && data.charAt(1) == "0") {
			data = data.replace("00", "");
		} else if (data.charAt(0) == "0") {
			data = data.replace("0", "");
		}
		if (gL(data) == 1) {
			mask = "0,0" + data;
		} else if (gL(data) == 2) {
			mask = "0," + data;
		} else if (gL(data) == 3) {
			mask = data.charAt(0) + "," + data.charAt(1) + data.charAt(2);
		}
		else if (gL(data) > 3) {
			var number = data.substring(0, (gL(data) - 2));
			var decimal = data.substring((gL(data) - 2), gL(data));
			var position = 0;
			for (var x = (gL(number) - 1); x >= 0; x--) {
				if (position == 3) {
					position = 0;
					mask = number.charAt(x) + "." + mask;
				} else {
					mask = number.charAt(x) + mask
				}
				position++;
			}
			mask = mask + "," + decimal;
		}
		sV(element, mask);
	}
}

/**
 * Check form.
 *
 * @return {Element} element
 * @return {Boolean} The Validation
 */
function validate(element) {
	var ret = true;
	if (element != undefined) {
		for (var x = 0; x < gL(element); x++) {
			if (gY(element.elements[x]) != "submit") {
				if (gB(element.elements[x]).includes("#cc2b2b") || 
						gB(element.elements[x]).includes("rgb(204, 43, 43)")) {
					if (ret) {
						sF(element.elements[x]);
					}
					ret = false;
				}
				if (gC(element.elements[x]).indexOf("gz-required") > 0) {
					if (gV(element.elements[x]) == "") {
						sG(element.elements[x], "#fffafa");
						sB(element.elements[x], "solid 1px #cc2b2b");
						if (gC(element.elements[x]).indexOf("gz-datetime") > 0) {
							sPh(element.elements[x], "__/__/____ __:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-date") > 0) {
							sPh(element.elements[x], "__/__/____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-time") > 0) {
							sPh(element.elements[x], "__:__:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-cpf") > 0) {
							sPh(element.elements[x], "___.___.___-__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-phone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-cellphone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("gz-cep") > 0) {
							sPh(element.elements[x], "_____-___ Campo obrigatório");
						} else {
							sPh(element.elements[x], "Campo obrigatório");
						}
						if (ret) {
							sF(element.elements[x]);
						}
						ret = false;
					}
				}
			}
		}
	} else {
		ret = false;
	}
	return ret;
}

/**
 * Get data list id.
 *
 * @param  {String} listName
 * @param  {String} objectName
 * @return {Integer} id
 */
function getDataListId(listName, objectName) {
	var id;
	for (var x = 0; x < gI(listName).options.length; x++) {
		if (gI(listName).options[x].value == document.getElementsByName(objectName)[0].value) {
			id = gI(listName).options[x].getAttribute("data-id");
			break;
		}
	}
	return id;
}

/**
 * Date Time
 *
 * @return {Date} The Date
 */
function getDateTime() {
	var data = new Date();
	
	var dia = gL(data.getDate().toString()) == 1 
			? "0" + data.getDate() : data.getDate() ;
			
	var mes = gL((data.getMonth() + 1).toString()) == 1 
			? "0" + (data.getMonth() + 1) : (data.getMonth() + 1) ;

	var ano = data.getFullYear();
	
	return dia + "/" + mes + "/" + ano;
}

/**
 * Get Root
 *
 * @param {String} module
 */
function getRoot(module) {
	var modArr = module.split("/");

	if (modArr.length > 2) {
		var ret = "";
		
		for (var i = 1; i < modArr.length - 1; i++) {
			ret += "/" + modArr[i];
		}

		return ret;
	} else
		return "";
}

/**
 * Get Module
 *
 * @param {String} module
 */
function getModule(module) {
	var modArr = module.split("/");
	
	if (modArr.length > 0) {
		for (i = 0; i < modArr.length; i++) {
			module = modArr[i] ;
		}
	}

	return module;
}

/**
 * Image preview
 */
function imagePreview() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(gI("upload").files[0]);

	oFReader.onload = function (oFREvent) {
		gI("preview").src = oFREvent.target.result;
	};
}

/**
 * Image preview
 */
function imagePreview2() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(gI("upload2").files[0]);

	oFReader.onload = function (oFREvent) {
		gI("preview2").src = oFREvent.target.result;
	};
}

/**
 * Photo display controller
 */
function showRemovePhoto() {
	sD(gI("photo-view"), "block");
	sD(gI("photo-server"), "none");
}

/**
 * File display controller
 */
function showRemoveFile(file) {
	if (file != null) {
		if (gI(file).files[0] != null && gI(file).files[0].size > 0) {
			sD(gI("file-view-" + file), "block");
		} else {
			sD(gI("file-view-" + file), "none");
		}
		//sD(gI("file-server-" + file), "none");
	} else {
		sD(gI("file-view"), "block");
		//sD(gI("file-server"), "none");	
	}
}

/**
 * Photo reset
 */
function removePhotoView() {
	sD(gI("photo-view"), "none");
	gI("upload").value = "";
	gI("preview").src = "";
}

/**
 * File reset
 */
function removeFileView(file) {
	if (file != null) {
		sD(gI("file-view-" + file), "none");
		gI(file).value = "";
	} else {
		sD(gI("file-view"), "none");
		gI("upload").value = "";
	}
}

/**
 * Remove from server
 *
 * @param {String} tableClass
 */
function removeFromServer(tableClass) {
	showMessage(gz_titleConfirmation, gz_msgConfirmRemove, 
			"request('" + tableClass + "', 'remove');");
}

/**
 * Menus show
 *
 * @param {String} element
 */
function menuShow(element) {
	sD(gI("gz-pre-cadastros"), "none");
	sD(gI("gz-cadastros"), "none");
	sD(gI("gz-layout"), "none");
	sD(gI("gz-formularios"), "none");
	sD(gI("gz-configuracoes"), "none");
	sD(gI("gz-relatorios"), "none");
	
	sD(gI(element), "block");
	
	/*
	if (gD(gI(element)) == "none")
		sD(gI(element), "block");
	else
		sD(gI(element), "none");
	*/
}

/**
 * @param {Element} element
 */
function zoom(element) {
	var elementId = element.id.split("-");

	gI("zoom-img-" + elementId[1]).src = element.src;
	gI("zoom-img-" + elementId[1]).height = "100";
}

/**
 * Submit login
 *
 * @param {Event} e
 */
function loginOnKeyPress(e) {
	if (e.keyCode == 13)
		request("login", "login");
}

/**
 * Clean the select
 *
 * @param {String} id
 * @param {Event} e
 */
function clean(id, e) {
	if (e.keyCode == 13 || e.keyCode == undefined) {
		var select = document.getElementById(id);
		var length = select.options.length;
		
		for (i = 0; i < length; i++) {
			select.options[i] = null;
		}
	}
}

/**
 * Graphic generator
 *
 * @param {String} id
 * @param {Array} lines
 * @param {Array} columns
 * @param {String} preValue
 * @param {String} posValue
 * @param {Boolean} convertToDecimal
 */	
function graphic(id, lines, columns, 
		preValue = "", posValue = "", convertToDecimal = true,
		lineColor = "#bdbdbd") {

	/*
	 * Set div width
	 */
	sA(gI(id + "l"), "style", "width: " + (columns.length * 64) + "px; margin: 0 auto;"); 
	sA(gI(id + "c"), "style", "width: " + (columns.length * 64) + "px; margin: 0 auto;");
	
	/*
	 * Set line items
	 */
	var lineItems = "";
	
	var month = 4;
	
	for (var i = 0; i < lines.length; i++) {
		var date = new Date();
		date.setMonth(date.getMonth() - month);
		
		lineItems += "<p id=\"" + id + i + "l\" class=\"dv-f-l dv-ta-c gz-bold\" style=\"width: 64px;\"></p>";
				
		month--;
	}
	
	lineItems += "<div class=\"dv-clear\"></div>";
	
	sH(gI(id + "l"), lineItems);
	
	/*
	 * Set column items
	 */
	var columnItems = "";
	
	for (var i = 0; i < columns.length; i++) {
		columnItems += "<p id=\"" + id + i + "c\" class=\"dv-f-l dv-ta-c gz-bold\" style=\"width: 64px;\"></p>";
	}
	
	columnItems += "<div class=\"dv-clear\"></div>";
	
	sH(gI(id + "c"), columnItems);
	
	/*
	 * Canvas
	 */
	var canvas = document.getElementById(id);
	canvas.setAttribute("width", columns.length * 64);
	canvas.setAttribute("height", 100);
	
	/* 
	 * Context
	 */
	var context = canvas.getContext("2d");
	context.fillStyle = "#fff";
	context.strokeStyle = lineColor;
	context.fillRect(0, 0, window.innerWidth, 100);

	// Range of pixels
	var range = 0;

	/*
	 * Bigest and lowest value from line
	 */
	var valuesMax = Math.max.apply(Math, lines);
	var valuesMin = Math.min.apply(Math, lines);
	var subtraction = valuesMax - valuesMin;
	
	/*
	 * Set line values
	 */
	for (var i = 0; i < lines.length; i++) {
		sH(gI(id + i + "l"), preValue + (convertToDecimal ? 
				toDecimal(lines[i]) : lines[i]) + posValue);
				
		var value = ((valuesMax - lines[i]) == 0 ? 0.99 : (valuesMax - lines[i]));		
		var percentual = (value * 100) / (subtraction == 0 ? 0.99 : subtraction);
		
		lines[i] = 100 - percentual;
	}
	
	/*
	 * Set column values
	 */
	for (var i = 0; i < columns.length; i++) {
		sH(gI(id + i + "c"), columns[i]);
	}
	
	// Interval
	var interval = setInterval(builder, 10);
	
	/*
	 * Builder
	 */
	function builder() {
		if (range > window.innerWidth)
			clearInterval(interval);
			
		var j = 0;

		for (var i = 0; i < lines.length; i++) {
			// 32, 96, 160, 224, 288, 352...
			j = (32 * (i + 1)) + (32 * i);
			
			if (range == j) {
				context.lineTo(range, 100 - lines[i]);
				context.stroke();
			}
		}
		
		// 8 pixels
		range += 8;
	}
}

/**
 * Pizza generator
 *
 * @param {String} id
 */	
function pizza(id) {
	var data_table = gI(id + "t");
	var canvas = gI(id);
	var td_index = 1;
	var tds, data = [], color, colors = [], value = 0, total = 0;
	var trs = data_table.getElementsByTagName("tr");
	
	for (var i = 0; i < trs.length; i++) {
		tds = trs[i].getElementsByTagName("td");

		if (tds.length === 0) 
			continue;

		value = parseFloat(tds[td_index].innerHTML);

		data[data.length] = value;
		total += value;

		color = getColor(i);
		colors[colors.length] = color;
	}

	/* 
	 * exit if canvas is not supported
	 */
	if (typeof canvas.getContext === "undefined")
		return;

	var ctx = canvas.getContext("2d");
	var canvas_size = [canvas.width, canvas.height];
	var radius = Math.min(canvas_size[0], canvas_size[1]) / 2;
	var center = [canvas_size[0]/2, canvas_size[1]/2];

	var sofar = 0;
	
	for (var piece in data) {
		var thisvalue = data[piece] / total;

		ctx.beginPath();
		ctx.moveTo(center[0], center[1]);
	
		ctx.arc(  
			center[0],
			center[1],
			radius,
			Math.PI * (- 0.5 + 2 * sofar),
			Math.PI * (- 0.5 + 2 * (sofar + thisvalue)),
			false
		);

		ctx.lineTo(center[0], center[1]);
		ctx.closePath();
		ctx.fillStyle = colors[piece];
		ctx.fill();

		sofar += thisvalue;
	}
}

function getColor(position) {
	return "#80cbc4";
}

/**
 * Decimal converter
 *
 * @param {Double} value
 */
function toDecimal(value) {
	if (value == 0)
		return 0;
	else {
		var mask = "";
		
		var metadata = value.replace(/\,/g, "").replace(/\./g, "");	
		
		if (metadata.charAt(0) == "0" && metadata.charAt(1) == "0")
			metadata = metadata.replace("00", "");
		else if (metadata.charAt(0) == "0")
			metadata = metadata.replace("0", "");

		if (gL(metadata) == 1)
			mask = "0,0" + metadata;
		else if (gL(metadata) == 2)
			mask = "0," + metadata;
		else if (gL(metadata) == 3) 
			mask = metadata.charAt(0) + "," + metadata.charAt(1) + 
					metadata.charAt(2);
		else if (gL(metadata) > 3) {
			var number = metadata.substring(0, (gL(metadata) - 2));
			var decimal = metadata.substring((gL(metadata) - 2), gL(metadata));
			
			var position = 0;
			
			for (var i = (gL(number) - 1); i >= 0; i--) {
				if (position == 3) {
					position = 0;
					
					mask = number.charAt(i) + "." + mask;
				} else 
					mask = number.charAt(i) + mask

				position++;
			}
			
			mask = mask + "," + decimal;
		}
		
		return mask;
	}
}

/**
 * Image preview with default margin
 */ 
function imagePreviewMargin() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(gI("upload").files[0]);

	oFReader.onload = function (oFREvent) {
		gI("preview-margin").style = "margin-top: -0%";
		gI("preview-margin").src = oFREvent.target.result;
	};
} 
 
/**
 * Image preview with margin
 *
 * @param {Object} obj
 */  
function positionPreviewUpdate(obj) {
	gI("preview-margin").style = "margin-top: -" + obj.value + "%";
}

/**
 * Graphic generator
 *
 * @param {String} id
 * @param {Array} lines
 * @param {Array} columns
 * @param {String} preValue
 * @param {String} posValue
 * @param {Boolean} convertToDecimal
 * @example graphic("@_ID", @_IDl, @_IDc, "", "", true, "#009688");
 */	
function graphic(id, lines, columns, 
		preValue = "", posValue = "", convertToDecimal = true,
		lineColor = "#bdbdbd") {

	/*
	 * Set div width
	 */
	sA(gI(id + "l"), "style", "width: " + (columns.length * 64) + "px; margin: 0 auto;"); 
	sA(gI(id + "c"), "style", "width: " + (columns.length * 64) + "px; margin: 0 auto;");
	
	/*
	 * Set line items
	 */
	var lineItems = "";
	
	var month = 4;
	
	for (var i = 0; i < lines.length; i++) {
		var date = new Date();
		date.setMonth(date.getMonth() - month);
		
		lineItems += "<p id=\"" + id + i + "l\" class=\"dv-f-l dv-ta-c gz-bold\" style=\"width: 64px;\"></p>";
				
		month--;
	}
	
	lineItems += "<div class=\"dv-clear\"></div>";
	
	sH(gI(id + "l"), lineItems);
	
	/*
	 * Set column items
	 */
	var columnItems = "";
	
	for (var i = 0; i < columns.length; i++) {
		columnItems += "<p id=\"" + id + i + "c\" class=\"dv-f-l dv-ta-c gz-bold\" style=\"width: 64px;\"></p>";
	}
	
	columnItems += "<div class=\"dv-clear\"></div>";
	
	sH(gI(id + "c"), columnItems);
	
	/*
	 * Canvas
	 */
	var canvas = document.getElementById(id);
	canvas.setAttribute("width", columns.length * 64);
	canvas.setAttribute("height", 100);
	
	/* 
	 * Context
	 */
	var context = canvas.getContext("2d");
	context.fillStyle = "#fff";
	context.strokeStyle = lineColor;
	context.fillRect(0, 0, window.innerWidth, 100);

	// Range of pixels
	var range = 0;

	/*
	 * Bigest and lowest value from line
	 */
	var valuesMax = Math.max.apply(Math, lines);
	var valuesMin = Math.min.apply(Math, lines);
	var subtraction = valuesMax - valuesMin;
	
	/*
	 * Set line values
	 */
	for (var i = 0; i < lines.length; i++) {
		sH(gI(id + i + "l"), preValue + (convertToDecimal ? 
				toDecimal(lines[i]) : lines[i]) + posValue);
				
		var value = ((valuesMax - lines[i]) == 0 ? 0.001 : (valuesMax - lines[i]));		
		var percentual = (value * 100) / (subtraction == 0 ? 0.001 : subtraction);
		
		lines[i] = 100 - percentual;
	}
	
	/*
	 * Set column values
	 */
	for (var i = 0; i < columns.length; i++) {
		sH(gI(id + i + "c"), columns[i]);
	}
	
	// Interval
	var interval = setInterval(builder, 10);
	
	/*
	 * Builder
	 */
	function builder() {
		if (range > window.innerWidth)
			clearInterval(interval);
			
		var j = 0;

		for (var i = 0; i < lines.length; i++) {
			// 32, 96, 160, 224, 288, 352...
			j = (32 * (i + 1)) + (32 * i);
			
			if (range == j) {
				context.lineTo(range, 100 - lines[i]);
				context.stroke();
			}
		}
		
		// 8 pixels
		range += 8;
	}
}

/**
 * Pizza generator
 *
 * @param {String} id
 */	
function pizza(id) {
	var data_table = gI(id + "t");
	var canvas = gI(id);
	
	// Which TD contains the data
	var td_index = 1;

	// Get the data[] from the table
	var tds, data = [], color, colors = [], value = 0, total = 0;
	
	// All TRs
	var trs = data_table.getElementsByTagName("tr");
	
	for (var i = 0; i < trs.length; i++) {
		// All TRs
		tds = trs[i].getElementsByTagName("td");

		// no TDs here, move on
		if (tds.length === 0) continue;

		// get the value, update total
		value = parseFloat(tds[td_index].innerHTML);

		data[data.length] = value;
		total += value;

		// random color
		color = getColor(i);
		
		// save for later
		colors[colors.length] = color;
	}

	// exit if canvas is not supported
	if (typeof canvas.getContext === "undefined") { return; }

	// get canvas context, determine radius and center
	var ctx = canvas.getContext("2d");
	var canvas_size = [canvas.width, canvas.height];
	var radius = Math.min(canvas_size[0], canvas_size[1]) / 2;
	var center = [canvas_size[0]/2, canvas_size[1]/2];

	// keep track of progress
	var sofar = 0;
	
	// loop the data[]
	for (var piece in data) {
		var thisvalue = data[piece] / total;

		ctx.beginPath();
		
		// center of the pie
		ctx.moveTo(center[0], center[1]);
		
		/*
		 * draw next arc
		 */
		ctx.arc(
			center[0],
			center[1],
			radius,
			// -0.5 sets set the start to be top
			Math.PI * (- 0.5 + 2 * sofar),
			Math.PI * (- 0.5 + 2 * (sofar + thisvalue)),
			false
		);
		
		// line back to the center
		ctx.lineTo(center[0], center[1]);
		ctx.closePath();
		
		// color
		ctx.fillStyle = colors[piece];
		ctx.fill();

		// increment progress tracker
		sofar += thisvalue;
	}
}

function getColor(position) {
	return "#80cbc4";
}

var datalistReference = "";

function datalistClear(element) {
	if (element.value != "") {
		datalistReference = element.value;
	}
	element.value = "";
}

function addPageNumbers() {
	var a4Height = 1122.52;
	var theadHeight = gI("dv-thead").offsetHeight;
	sC(gI("dv-thead"), "dv-thead");
	var tfootHeight = gI("dv-tfoot").offsetHeight;
	sC(gI("dv-tfoot"), "dv-tfoot");
	var tbodyHeight = gI("dv-tbody").offsetHeight;
	var pageSize = a4Height - theadHeight - tfootHeight;
	var totalPages = Math.ceil(tbodyHeight / pageSize);
	for (var i = 1; i <= totalPages; i++) {
		var pageNumberDiv = document.createElement("div");
		sC(pageNumberDiv, "dv-print");
		pageNumberDiv.style.position = "absolute";
		pageNumberDiv.style.top = "calc((" + i + " * (1122.52px)) - 1122.52px + 20px - " + (i / 2) + "px)";
		pageNumberDiv.style.right = "20px";
		var pageNumberP = document.createElement("p");
		sC(pageNumberP, "dv-bold");
		var pageNumber = document.createTextNode("Página " + i + " de " + totalPages);
		pageNumberP.appendChild(pageNumber);
		pageNumberDiv.appendChild(pageNumberP);
		document.body.insertBefore(pageNumberDiv, document.getElementById("dv-report"));
	}
}

function dragStart(e) {
    e.dataTransfer.setData("data", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e, target, ws, id = null) {
	showLoading();
    e.preventDefault();
	var call = getDragLineId(document.getElementById(e.dataTransfer.getData("data")));
	var answer = getDragLineId(document.getElementById(target.id));
	var url = gz_root + "/ws/"+ ws + "/changeOrder";
	var formData = new FormData();
	formData.append("module", gz_module);	
	formData.append("screen", ws);	
	formData.append("method", "request");	
	formData.append("code", gz_code);	
	formData.append("search", "");	
	formData.append("position", "");
	formData.append("order", "");
	formData.append("base", "");	
	formData.append("form", call + "<gz>" + answer + "<gz>" + id);
	formData.append("itensPerPage", gz_itensPerPage);
	var req = initRequest();
	req.open("POST", url, true);
	req.send(formData);		
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			location.reload();
		} else {
			closeLoading();
		}
	};
}

function getDragLineId(tr) {
	var td = gN(document.getElementById(tr.id), "td");
	return gH(td[0]);
}

function showAllRegisters () {
	if (gz_method == "stateCalled") {
		goTo("/" + gz_screen + "/called/" + gz_base + "/all/historyBack/" + gz_historyBack);
	} else if (gz_method == "stateCalledAll") {
		goTo("/" + gz_screen + "/called/" + gz_base + "/all/historyBack/" + gz_historyBack);
	} else {
		goTo("/" + gz_screen + "/all");
	}
}