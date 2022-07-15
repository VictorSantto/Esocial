/**
 * Divmon JS.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */

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

/**
 * Is empty.
 * 
 * @param  {Object} object 
 * @return {Boolean}
 */
function isEmpty(object) {
	return Object.keys(object).length === 0;
    /* for (var property in object) {
        if (object.hasOwnProperty(property)) {
			return false;
		}
    }
    return true; */
} 

/**
 * Initialize request.
 */
function initializeRequest() {
    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf("MSIE") != -1) {
            isIE = true;
		}
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        try {   	
            return new ActiveXObject("Microsoft.XMLHTTP");	
        } catch(e) {
    	    try {
    	        return new ActiveXObject("Msxml2.XMLHTTP");
    	    } catch(e) { }
        }
    }
}

/**
 * Request for a service.
 *
 * @param {String} url
 * @param {Object} data JSON object
 * @param {String} callback Function name
 * @param {Boolean} convertion Convert the data to JSON string format 
 */
function simpleRequest(url, data, callback, convertion) {
	sD(gI("dv-loading"), "block");
	var request = initializeRequest();
	request.open("POST", url, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			sD(gI("dv-loading"), "none");
			if (callback != null) {
				eval(callback + "(" + JSON.stringify(request.responseText) + ")");
			}
		} else if (request.readyState == 4 && request.status == 0) {
			sD(gI("dv-loading"), "none");
			eval(callback + "(\"CONNECTION\")");
		} else if (request.readyState == 4 && request.status == 500) {
			sD(gI("dv-loading"), "none");
			eval(callback + "(\"BAD_REQUEST\")");
		} else if (request.readyState == 4 && request.status == 404) {
			sD(gI("dv-loading"), "none");
			eval(callback + "(\"NOT_FOUND\")");
		}
	};
	request.send("data=" + (convertion ? JSON.stringify(data) : data));
}

/**
 * Request.
 *
 * @param {String} method The HTTP method
 * @param {String} uri The URI
 * @param {String} parameters The URI parameters
 * @param {String || Object} object The attributes with a JSON or Object 
 * @param {String} callback The name of function to call after response
 * @param {Boolean} convertion Convert the object to JSON string format 
 * @param {String} authorization Authorization token
 */
function request(method, uri, parameters, object, callback, convertion, authorization) {
	sD(gI("dv-loading"), "block");
	var request = initializeRequest();
	request.open(method, (parameters != "" ? (uri + "?" + parameters) : uri), true);			
	request.setRequestHeader("Authorization", authorization);
	request.setRequestHeader("Accept-Language", "pt-BR");
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.onreadystatechange = function() {
		if (request.readyState == 4 && (request.status == 200 || request.status == 300 || request.status == 400)) {
			sD(gI("dv-loading"), "none");
			eval(callback + "(" + JSON.stringify(request.responseText) + ")");
		} else if (request.readyState == 4 && request.status == 500) {
			sD(gI("dv-loading"), "none");
			showMessage("Erro!", "Houve um erro interno no sistema.", "showMessage();");					
		} else if (request.readyState == 4 && (request.status == 404 || request.status == 501 || 
				request.status == 502 || request.status == 503 || request.status == 504 || request.status == 505)) {
			sD(gI("dv-loading"), "none");
			showMessage("Erro!", "Houve um erro interno no sistema. Essa funcionalidade não foi encontrada.", "showMessage();");				
		}
	};
	var data = "";
	if (method == "POST" || method == "PUT") {
		data = "request=" + (convertion ? JSON.stringify(object) : object);
	}
	request.send(data);
}

/**
 * Spring request.
 *
 * @param {String} method The HTTP method
 * @param {String} uri The URI
 * @param {String} parameters The URI parameters
 * @param {String || Object} object The attributes with a JSON or Object 
 * @param {String} callback The name of function to call after response
 * @param {String} authorization Authorization token
 */
function springRequest(method, uri, parameters, object, callback, convertion, authorization) {
	sD(gI("dv-loading"), "block");
	var request = initializeRequest();
	request.open(method, (parameters != "" ? (uri + "?" + parameters) : uri), true);	
	if (gI("empresa") != "null") {
		request.setRequestHeader("clientid", gI("empresa").options[gI("empresa").selectedIndex].text);
	}	
	request.setRequestHeader("Authorization", authorization);
	request.setRequestHeader("Accept-Language", "pt-BR");
	request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	request.onreadystatechange = function() {
		if (request.readyState == 4 && (request.status == 200 || request.status == 201 || 
				request.status == 300)) {
			sD(gI("dv-loading"), "none");
			eval(callback + "('" + request.responseText + "')");
		} else {
			sD(gI("dv-loading"), "none");
			showMessage("Erro!", "Não foi possível efetuar o login com os dados informados.", "showMessage();");	
		}
	};
	request.send(JSON.stringify(object));
}

/**
 * Set cookie.
 * 
 * @param {String} cookieName 
 * @param {String} cookieValue 
 * @param {Integer} cookieExpirationDays 
 */
function setCookie(cookieName, cookieValue, cookieExpirationDays) {
	var date = new Date();
	date.setTime(date.getTime() + (cookieExpirationDays * 8 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/**
 * Get cookie.
 * 
 * @param {String} cookieName 
 */
function getCookie(cookieName) {
	var name = cookieName + "=";
	var cookie = "";
	var cookiesList = document.cookie.split(";");
	for (var x = 0; x < cookiesList.length; x++) {
		cookie = cookiesList[x];
		while (cookie.charAt(0) == " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}

/**
 * Remove cookie.
 * 
 * @param {String} cookieName 
 */
function removeCookie(cookieName) {
	document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970;path=/";
}

/**
 * Get parameter.
 * 
 * @param  {String} uri
 * @return {Object}
 */
function getParameter(uri) {
	var parameter = uri ? uri.split("?")[1] : window.location.search.slice(1);
	var object = {};
	if (parameter) {
		parameter = parameter.split("#")[0];
		var parameterList = parameter.split("&");
		var parameterItem = [];
		var paramName = "";
		var paramValue = "";
		var key = ""
		var index = "";
		for (var x = 0; x < parameterList.length; x++) {
			parameterItem = parameterList[x].split("=");
			paramName = parameterItem[0].toLowerCase();
			paramValue = typeof (parameterItem[1]) === "undefined" ? true : parameterItem[1];
			if (paramName.match(/\[(\d+)?\]$/)) {
				key = paramName.replace(/\[(\d+)?\]/, "");
				if (!object[key]) object[key] = [];
				if (paramName.match(/\[\d+\]$/)) {
					index = /\[(\d+)\]/.exec(paramName)[1];
					object[key][index] = paramValue;
				} else {
					object[key].push(paramValue);
				}
			} else {
				if (!object[paramName]) {
					object[paramName] = paramValue;
				} else if (object[paramName] && typeof object[paramName] === "string"){
					object[paramName] = [object[paramName]];
					object[paramName].push(paramValue);
				} else {
					object[paramName].push(paramValue);
				}
			}
		}
	}
	return object;
}

/**
 * Mask Preparation.
 */
function mask() {
	var pattern = "";
	var inputs = gT("input");
	for (var x = 0; x < gL(inputs); x++) {
		if (gC(inputs[x]).indexOf("dv-datetime") > 0) {
			pattern = "__/__/____ __:__";
		} else if (gC(inputs[x]).indexOf("dv-date") > 0) {
			pattern = "__/__/____";
		} else if (gC(inputs[x]).indexOf("dv-custom-date") > 0) {
			pattern = "__/__";
		} else if (gC(inputs[x]).indexOf("dv-time") > 0) {
			pattern = "__:__:__";
		} else if (gC(inputs[x]).indexOf("dv-integer") > 0) {
			sA(inputs[x], "oninput", "integer(this, event);");
		} else if (gC(inputs[x]).indexOf("dv-double") > 0) {
			sA(inputs[x], "oninput", "decimal(this, event);");
		} else if (gC(inputs[x]).indexOf("dv-cpf") > 0) {
			pattern = "___.___.___-__";
		} else if (gC(inputs[x]).indexOf("dv-cnpj") > 0) {
			pattern = "__.___.___/____-__";
		} else if (gC(inputs[x]).indexOf("dv-custom-cpf") > 0) {
			pattern = "___.___";
		} else if (gC(inputs[x]).indexOf("dv-phone") > 0) {
			pattern = "__ ____-____";
		} else if (gC(inputs[x]).indexOf("dv-cellphone") > 0) {
			pattern = "__ _____-____";
		} else if (gC(inputs[x]).indexOf("dv-cep") > 0) {
			pattern = "_____-___";
		}
		if (pattern != "") {
			sPh(inputs[x], pattern);
			sA(inputs[x], "oninput", "maskMe(this, event, \"" + pattern + "\");");
			sA(inputs[x], "onblur", "isMask(this, \"" + pattern + "\"); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], 
					"onblur") : ""));
		} else if (gC(inputs[x]).indexOf("dv-required") > 0) {
			sA(inputs[x], "onblur", "isNull(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		} else if (gC(inputs[x]).indexOf("dv-datalist-") > 0 && gC(inputs[x]).indexOf("dv-non-datalist") < 0) {
			sA(inputs[x], "onblur", "isDatalist(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		} else if (gC(inputs[x]).indexOf("gz-email") > 0) {
			sA(inputs[x], "onblur", "isEmail(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : ""));
		}
		pattern = "";
	}
	var textareas = gT("textarea");
	for (var x = 0; x < gL(textareas); x++) {
		if (gC(textareas[x]).indexOf("dv-required") > 0) {
			sA(textareas[x], "onblur", "isNull(this); " + (gA(textareas[x], "onblur") != null ? gA(textareas[x], "onblur") : ""));
		}
	}
	var select = gT("select");
	for (var x = 0; x < gL(select); x++) {
		if (gC(select[x]).indexOf("dv-required") > 0) {
			sA(select[x], "onblur", "isNull(this); " + (gA(select[x], "onblur") != null ? gA(select[x], "onblur") : ""));
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
// function maskMe(element, event, pattern) {
// 	if (parseInt(event.data) != event.data) {
// 		sV(element, "");
// 	}
// 	var position = [];
// 	var mask = [];
// 	for (var x = 0; x < gL(pattern); x++) {
// 		if (pattern.charAt(x) != "_") {
// 			position.push(x);
// 			mask.push(pattern.charAt(x));
// 		}
// 	}
// 	for (var x = 0; x < gL(position); x++) {
// 		if (gL(gV(element)) == position[x]) {
// 			sV(element, gV(element) + mask[x]);
// 		} 
// 		if (gL(gV(element)) > gL(pattern)) {
// 			sV(element, gV(element).slice(0, -1));
// 		}	 
// 	}		
// }

/**
 * Mask effect.
 *
 * @param {Element} element
 * @param {Event} event
 * @param {String} pattern
 */
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
	if (element.value == "" && gC(element).indexOf("dv-required") > 0) {
		sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
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
				if (gC(element).indexOf("dv-datetime") > 0) {
					isDatetime(element);
				} else if (gC(element).indexOf("dv-date") > 0) {
					isDate(element);
				} else if (gC(element).indexOf("dv-cpf") > 0) {
					isCpf(element);
				} else if (gC(element).indexOf("dv-cnpj") > 0) {
					isCNPJ(element);
				} else {
					sB(element, ""); // sG(element, "");
					sPh(element, pattern);
				}
			} else {
				if (gC(element).indexOf("dv-required") > 0) {
					sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
					sV(element, "");
					sPh(element, pattern + " Campo obrigatório");
				} else {
					sB(element, "");
					// sG(element, "");
					sV(element, "");
					sPh(element, pattern);
				}
			}
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sV(element, "");
				sPh(element, pattern + " Campo obrigatório");
			} else {
				sB(element, ""); // sG(element, "");
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
		sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
		sPh(element, "Campo obrigatório");
	} else {
		if (gC(element).includes("dv-datalist-") && !gC(element).includes("dv-non-datalist")) {
			isDatalist(element);
		} else if (gC(element).indexOf("dv-datetime") > 0) {
			isDatetime(element);
		} else if (gC(element).indexOf("dv-date") > 0) {
			isDate(element);
		} else if (gC(element).indexOf("dv-email") > 0) {
			isEmail(element);
		} else {
			sB(element, ""); // sG(element, "");
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
	if (gC(element).includes("dv-datalist-") && !gC(element).includes("dv-non-datalist")) {
		var datalist = gC(element).split("dv-datalist-")[1];
		var datalistIsValid = false;
		for (var x = 0; x < gI(datalist.split("-to-")[0]).options.length; x++) {
			if (gI(datalist.split("-to-")[0]).options[x].value == 
					document.getElementsByName(datalist.split("-to-")[1])[0].value) {
				datalistIsValid = true;
				break;
			}
		}
		if (!datalistIsValid) {
			if (gC(element).indexOf("dv-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, ""); // sG(element, "");
				sPh(element, "Valor inválido");
			}
		} else {
			sB(element, ""); // sG(element, "");
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
			sB(element, ""); // sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, ""); // sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, ""); // sG(element, "");
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
			sB(element, ""); // sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, ""); // sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, ""); // sG(element, "");
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
			sB(element, ""); // sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, ""); // sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	} else {
		sB(element, ""); // sG(element, "");
		sPh(element, "");
	}
}

/**
 * Is CPF
 *
 * @param {Element} element
 */
function isCpf(element) {
	var isCpfValid = true;
	var cpf = gV(element).replace(/\./g, "").replace(/\-/g, "");
	if (cpf == "11111111111" || 
			cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || 
			cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || 
			cpf == "88888888888" || cpf == "99999999999") {
		if (gC(element).indexOf("dv-required") > 0) {
			sV(element, "");
			sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
			sPh(element, "Valor inválido");
		} else {
			sV(element, "");
			sB(element, ""); // sG(element, "");
			sPh(element, "Valor inválido");
		}
	} else {
		add = 0;
		for (i = 0; i < 9; i++) {
			add += parseInt(cpf.charAt(i)) * (10 - i);
		}
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) {
			rev = 0;
		} 
		if (rev != parseInt(cpf.charAt(9))) {
			isCpfValid = false;
		}
		add = 0;
		for (i = 0; i < 10; i ++) {
			add += parseInt(cpf.charAt(i)) * (11 - i);
		}
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) {
			rev = 0;
		} 
		if (rev != parseInt(cpf.charAt(10))) {
			isCpfValid = false;
		}
		if (isCpfValid) {
			sB(element, ""); // sG(element, "");
			sPh(element, "");
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sV(element, "");
				sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
				sPh(element, "Valor inválido");
			} else {
				sV(element, "");
				sB(element, ""); // sG(element, "");
				sPh(element, "Valor inválido");
			}
		}
	}
}

function isCNPJ(element) {
	const cnpj = element.value;
	const valid = validateCNPJ(cnpj);
	if (valid) {
		sB(element, ""); // sG(element, "");
		sPh(element, "");
	} else {
		if (gC(element).indexOf("dv-required") > 0) {
			sV(element, "");
			sB(element, "solid 1px #cc2b2b"); // sG(element, "#fffafa");
			sPh(element, "Valor inválido");
		} else {
			sV(element, "");
			sB(element, ""); // sG(element, "");
			sPh(element, "Valor inválido");
		}
	}
}

function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g,'');
    if (cnpj == '') {
		return false;
	}
    if (cnpj.length != 14) {
        return false;
	}
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || 
			cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || 
			cnpj == "88888888888888" || cnpj == "99999999999999") {
        return false;
	}
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        return false;
	}
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
		soma += numeros.charAt(tamanho - i) * pos--;
		if (pos < 2) {
			pos = 9;
		}
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        return false;
	}
    return true;
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
				if (gC(element.elements[x]).indexOf("dv-required") > 0) {
					if (gV(element.elements[x]) == "") {
						sB(element.elements[x], "solid 1px #cc2b2b"); // sG(element.elements[x], "#fffafa");
						if (gC(element.elements[x]).indexOf("dv-datetime") > 0) {
							sPh(element.elements[x], "__/__/____ __:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-date") > 0) {
							sPh(element.elements[x], "__/__/____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-custom-date") > 0) {
							sPh(element.elements[x], "__/__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-time") > 0) {
							sPh(element.elements[x], "__:__:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cpf") > 0) {
							sPh(element.elements[x], "___.___.___-__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-custom-cpf") > 0) {
							sPh(element.elements[x], "___.___ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-phone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cellphone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cep") > 0) {
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

/* 
 * File controller.
 *
 * @param {Element} file
 * @param {Boolean} isImage
 */
function fileController(file, isImage = false) {
	if (file.files.length > 0) { // To-do isEmpty.
		if (file.files[0].size <= 10000000) { // To-do var maxUploadSize = 10 * 1000000;.
			selectionFileController(file, isImage);
		} else {
			showMessage("Erro!", "Só é permitido o envio de arquivo com até 10MB de tamanho.", "showMessage();");		
			sV(gI(file.id + "-base64"), "");
			clearSelectedFile(file.id);
		}
	}
}

/**
 * Selection file controller.
 *
 * @param {Element} file
 * @param {Boolean} isImage
 */
function selectionFileController(file, isImage) {
	if (isImage) {
		var fileExtension = file.files[0].name.split(".").pop();
		if (fileExtension.toLowerCase() == "jpg" || fileExtension.toLowerCase() == "jpeg" || 
				fileExtension.toLowerCase() == "png") {	
			var fileReader = new FileReader();
			fileReader.readAsDataURL(file.files[0]);
			fileReader.onloadend = function(fileReaderEvent) {
				gI("dv-preview-image-" + file.id).src = fileReaderEvent.target.result;
				sD(gI("dv-preview-" + file.id), "block");
				convertFileToBase64(file);
				setSelectedFile(file.id);
			}
		} else {
			showMessage("Erro!", "Só é permitido o envio de arquivo JPG, JPEG ou PNG.", "showMessage();");		
			sV(gI(file.id + "-base64"), "");
			clearSelectedFile(file.id);
		}
	} else {
		var fileExtension = file.files[0].name.split(".").pop();
		if (fileExtension.toLowerCase() == "pdf" || fileExtension.toLowerCase() == "jpg" || 
				fileExtension.toLowerCase() == "jpeg" || fileExtension.toLowerCase() == "png" ||
				fileExtension.toLowerCase() == "doc" || fileExtension.toLowerCase() == "docx") {
			convertFileToBase64(file);
			setSelectedFile(file.id);
		} else {
			showMessage("Erro!", "Só é permitido o envio de arquivos PDF, DOC, JPG, JPEG ou PNG.", "showMessage();");		
			sV(gI(file.id + "-base64"), "");
			clearSelectedFile(file.id);
		}
	}
}

/**
 * Set selected file.
 *
 * @param {String} fileId
 */
function setSelectedFile(fileId) {
	sD(gI("dv-clear-selected-file-" + fileId), "");
	sG(gI(fileId + ".label"), "#00695c");
	sB(gI(fileId + ".label"), "solid 1px #00695c");
	sO(gI(fileId+ ".label"), "#ffffff");
	sC(gI(fileId + ".label.span"), "dv-input-file-label-fill");
}

/**
 * Clear selected file.
 *
 * @param {String} fileId
 */
function clearSelectedFile(fileId) {
	let dvPreviewImageFileId = gI("dv-preview-image-" + fileId);
	if (dvPreviewImageFileId) {
		dvPreviewImageFileId.src = "";
	}
	let dvPreviewFileId = gI("dv-preview-" + fileId);
	if (dvPreviewFileId) {
		sD(dvPreviewFileId, "none");		
	}
	sD(gI("dv-clear-selected-file-" + fileId), "none");
	gI(fileId + ".label").style = "";
	sC(gI(fileId + ".label.span"), "dv-input-file-label-empty");
	gI(fileId).value = "";
}

/* 
 * Convert file to base64.
 *
 * @param {Element} file
 * @return {String}
 */
function convertFileToBase64(file) {
	if (file.files.length > 0) {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file.files[0]);
		fileReader.onload = function() {
			sV(gI(file.id + "-base64"), fileReader.result);
		}
	}
}

/**
 * Convert image to base64.
 *
 * @param {Element} file
 * @return {String}
 */
function convertImageToBase64(file) {
	if (file.files.length > 0) {	
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file.files[0]);
		fileReader.onloadend = function(fileReaderEvent) {
			var tempImage = new Image();
			tempImage.src = fileReaderEvent.target.result;
			setTimeout(function() {
				var height = tempImage.height;
				var width = tempImage.width;
				if (height > 640) {
					width = width / (height / 640);
					height = 640;
				}
				if (width > 640) {
					height = height / (width / 640);
					width = 640;
				}
				var canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(tempImage, 0, 0, width, height);
				sV(gI(file.id + "-base64"), canvas.toDataURL("image/jpeg"));
			}, 200);
		}
	}
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
 * Get location.
 *
 * @param  {Element} element
 * @return {Integer} location
 */
function getLocation(element){
	var location = 0;
	if (element.offsetParent) {
		do {
			location += element.offsetTop;
		} while (element = element.offsetParent);
	}
	return location;
}

/**
 * Move to.
 *
 * @param {String} id
 */
function moveTo(id) {
	window.scrollTo(0, getLocation(gI(id)));
}

/**
 * Move to down.
 *
 * @param {String} id
 */
function moveToDown(id) {
	var location = getLocation(gI(id)) - window.pageYOffset;
	var until = 0;
	var forever = window.setInterval(
		function() {
			window.scrollBy(0, 10);
			until += 10;
			if (until > location) {
				clearInterval(forever);
				window.scrollBy(0, (until - location) * -1);
			}
		}, 1
	);
}

/**
 * Move to home.
 */
function moveToTop() {
	var location = window.pageYOffset;
	var until = 0;
	var forever = window.setInterval(
		function() {
			if (until > location) {
				clearInterval(forever);
			}
			window.scrollBy(0, -10);
			until += 10;
		}, 1
	);
}

/**
 * Show menu.
 */
function showMenu() {
	if (gD(gI("dv-menu")) == "none") {
		sD(gI("dv-menu"), "block");
	} else {
		sD(gI("dv-menu"), "none");
	}
}

/**
 * Show search.
 */
function showSearch() {
	if (gD(gI("dv-search")) == "none") {
		sD(gI("dv-search"), "block");
		sF(gI("search"));
	} else {
		sD(gI("dv-search"), "none");
	}
}

/**
 * Password controller.
 *
 * @param {Object} element
 */
function passwordController(element) {
	var type = gI(element).type;
	if (type == "password") {
		gI(element).type = "text";
		gI(element + ".image").src = dv_root + "/mod/page/img/icon/gray-hide.svg";
		sC(gI(element + ".text"), "dv-underline dv-blue");
		sH(gI(element + ".text"), "Esconder");
	} else {
		gI(element).type = "password";
		gI(element + ".image").src = dv_root + "/mod/page/img/icon/gray-see.svg";
		sC(gI(element + ".text"), "dv-underline dv-blue");
		sH(gI(element + ".text"), "Mostrar");
	}
}

/**
 * Show message.
 */
function showMessage(title, text, handler) {
	if (gD(gI("dv-message")) == "none") {
		sH(gI("dv-message-title"), title);
		sH(gI("dv-message-text"), text +
				"<br><button type=\"button\" id=\"dv-close-message\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-blue dv-underline dv-cursor\" onclick=\"" + handler + "\">Fechar a mensagem</button>");
		if (handler != null) {
			if (title == "Confirmação!") {
				gI("dv-message-handler").onclick = function() { 
					eval("showMessage();");
				}
			} else {
				gI("dv-message-handler").onclick = function() { 
					eval(handler);
				}
			}
		}
		sD(gI("dv-icon-confirmation"), "none");
		sD(gI("dv-icon-success"), "none");
		sD(gI("dv-icon-error"), "none");
		sD(gI("dv-message"), "block");
		if (title == "Confirmação!") {
			sH(gI("dv-message-text"), text +
					"<br><button type=\"button\" id=\"dv-no\" class=\"dv-auto-width dv-margin-top-mdpi dv-margin-right-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-red dv-underline dv-cursor\" onclick=\"showMessage();\">Não</button><button type=\"button\" class=\"dv-auto-width dv-margin-top-mdpi dv-padding-mdpi dv-white-bg dv-border dv-radius dv-green dv-underline dv-cursor\" onclick=\"" +
					handler + "\">Sim</button>");
			sD(gI("dv-message"), "block");
			sD(gI("dv-icon-confirmation"), "block");
			sF(gI("dv-no"));
		} else if (title == "Sucesso!") {
			sD(gI("dv-icon-success"), "block");
			sF(gI("dv-close-message"));
		} else if (title == "Erro!") {
			sD(gI("dv-icon-error"), "block");
			sF(gI("dv-close-message"));
		}
	} else {
		sD(gI("dv-message"), "none");
	}
}

/**
 * Go to link.
 *
 * @param {String} link
 */
function goTo(link) {
	location.href = dv_root + link;
}

/**
 * Go To Link With Target Blank
 *
 * @param {String} link
 */
function goToBlank(link) {
	window.open(link);
}

var slideUntil = 0;
var slidePosition = 0;

/**
 * Start opacity ever as a timer.
 *
 * @param {Integer} id
 */
function opacityEver() {
	if (slideTotal > 1) {
		setInterval(opacityFunction, 5000);
	}
}

/**
 * Opacity ever function.
 */
function opacityFunction() {
	for (var x = 0; x < slideTotal; x++) {
		sD(gI("dv-slide-" + x), "none");
	}	
	if (slideUntil >= slideTotal || slideUntil < 0) {
		slideUntil = 0;	
	}
	sD(gI("dv-slide-" + slideUntil), "block");
	setSlide(slideUntil);
	slideUntil++;
}

/**
 * Set slide.
 *
 * @param {Integer} id
 */
function setSlide(id) {
	slidePosition = id;
	for (var x = 0; x < slideTotal; x++) {
		if (x == id) {
			sD(gI("dv-slide-" + id), "block");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/fill-circle.svg";
		} else {
			sD(gI("dv-slide-" + x), "none");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/empty-circle.svg";
		}
	}	
}

/**
 * Set back slide.
 */
function setBackSlide() {
	slidePosition--;
	if (slidePosition < 0) {
		slidePosition = slideTotal - 1;
	}
	for (var x = 0; x < slideTotal; x++) {
		if (x == slidePosition) {
			sD(gI("dv-slide-" + slidePosition), "block");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/fill-circle.svg";
		} else {
			sD(gI("dv-slide-" + x), "none");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/empty-circle.svg";
		}
	}	
}

/**
 * Set next slide.
 */
function setNextSlide() {
	slidePosition++;
	if (slidePosition > (slideTotal - 1)) {
		slidePosition = 0;
	}
	for (var x = 0; x < slideTotal; x++) {
		if (x == slidePosition) {
			sD(gI("dv-slide-" + slidePosition), "block");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/fill-circle.svg";
		} else {
			sD(gI("dv-slide-" + x), "none");
			gI("dv-slide-selected-" + x).src = dv_root + "/mod/page/img/empty-circle.svg";
		}
	}	
}

/*
 * Show form.
 */
function showForm() {
	sD(gI("dv-form-controller-title"), "block");
	sD(gI("dv-form-controller"), "block");
	sD(gI("dv-form-controller-cancel"), "block");
}

/*
 * Controller response.
 *
 * @param {String} json 
 */
function controllerResponse(json) {
	var response = JSON.parse(json);
	if (!isEmpty(response)) {
		if (response.response.status == 200) {
			sD(gI("dv-message"), "none");
			showMessage("Sucesso!", "A operação foi concluída com sucesso.", "location.reload();");
		} else {
			sD(gI("dv-message"), "none");
			showMessage("Erro!", response.response.message, "showMessage();");		
		}
	} else {
		sD(gI("dv-message"), "none");
		showMessage("Erro!", "Houve algum erro interno no sistema.", "showMessage();");		
	}
}

/**
 * Go to back page.
 */
function goBack() {
	var page = (gz_position * 1) - 1;
	if (page < 1) {
		page = 1;
	}
	toPage(page);
}

/**
 * Go to next page.
 *
 * @param {Integer} size
 */
function goNext(size) {
	var page = (gz_position * 1) + 1;
	if (page >= Math.ceil(size / gz_itensPerPage)) {
		goLast(size);
	} else {
		toPage(page);
	}
}

/**
 * Go to last page.
 *
 * @param {Integer} size
 */
function goLast(size) {
	if (size > gz_itensPerPage) {
		var zero = "";
		var page = 0;
		for (var i = gL("" + size); i <= gL("" + size); i++) {
			zero += "0"; 
		}
		var end = (Math.ceil(size / gz_itensPerPage)) + zero;
		page = end - 10; /* !important 10 */
		page = (page / 10) + 1;
		toPage(page);
	}
}

/**
 * To page.
 *
 * @param {Integer} page
 */
function toPage(page) {	
	if (gz_base != "") {
		if (gz_search != "") {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/called/" + 
						gz_base + "/search/" + gz_search + "/" + page + "/" + gz_order + "/historyBack/" + gz_historyBack);
			} else {
				goTo("/" + gz_screen + "/called/" +
						gz_base + "/search/" + gz_search + "/" + page + "/historyBack/" + gz_historyBack);
			}
		} else {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + page + "/" + gz_order + "/historyBack/" + gz_historyBack);	
			} else {
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + page + "/historyBack/" + gz_historyBack);	
			}
		}	
	} else if (gz_friendly != "") { 
		if (gz_order != "") {
			goTo("/" + gz_screen + "/" + gz_friendly + "/order/" + gz_order + "/" + page);		
		} else {
			goTo("/" + gz_screen + "/" + gz_friendly + "/" + page);	
		}
	} else {
		if (gz_search != "") {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/search/" + gz_search + "/order/" + gz_order + "/" + page);	
			} else {
				goTo("/" + gz_screen + "/search/" + gz_search + "/" + page);
			}
		} else {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/order/" + gz_order + "/" + page);		
			} else {
				goTo("/" + gz_screen + "/" + page);
			}
		}
	}
}

/**
 * Pagination controller.
 */
function paginationController() {
	var position = parseInt(gz_position);
	var pages = parseInt(gz_pages);
	if (position == 1) {
		sD(gI("gz-first"), "none");
	} else {
		sD(gI("gz-first"), "inline-block");
	}
	if (position == pages) {
		sD(gI("gz-last"), "none");
	} else {
		sD(gI("gz-last"), "inline-block");
	}
	if (position > 2) {
		sD(gI("gz-back"), "inline-block");
		sH(gI("gz-back"), parseInt(position) - 1);
	}
	if (position < pages - 1) {
		sD(gI("gz-next"), "inline-block");
		sH(gI("gz-next"), position + 1);
	}
	sD(gI("gz-pagination"), "block");
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
		pageNumberDiv.style.right = "30px";
		var pageNumberP = document.createElement("p");
		sC(pageNumberP, "dv-bold");
		var pageNumber = document.createTextNode("Página " + i + " de " + totalPages);
		pageNumberP.appendChild(pageNumber);
		pageNumberDiv.appendChild(pageNumberP);
		document.body.insertBefore(pageNumberDiv, document.getElementById("dv-report"));
	}
}