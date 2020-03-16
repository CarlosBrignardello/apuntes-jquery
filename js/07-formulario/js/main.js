function validateForm(){

	function alertar(mensaje, elem) {
		elem.parent().append('<span>' + mensaje + '</span>')
	}

	function quitar_span(elem) {
		if(elem.parent() != ''){
			elem.parent().remove()
		}
	}

	/* SELECCIONAMOS LOS INPUTS */
	var name = $('#name')

	
	if (name.val().length == 0) {
		alertar("hola", name)
	}
	else{
		quitar_span()
	}
}

// 	/* VALIDACIONES */
// 	if (name.value.length == 0) {
// 		alertar('Debe escribir un nombre', name);
// 	} 
// 	else if (!name.value.match(/^[a-zA-Z]+$/)) {
// 		alertar('Debe ingresar puras letras', name);
// 	} 
// 	else if (name.value[0] != name.value[0].toUpperCase()) {
// 		alertar('Nombre debe comenzar con mayúsculas', name);
// 	} 
// 	else{
// 		quitar_span(name)
// 	}

// 	if (lastname.value.length == 0) {
// 		alertar('Debe escribir un nombre', lastname);
// 	} 
// 	else if (!lastname.value.match(/^[a-zA-Z]+$/)) {
// 		alertar('Debe ingresar puras letras', lastname);
// 	} 
// 	else if (lastname.value[0] != lastname.value[0].toUpperCase()) {
// 		alertar('Nombre debe comenzar con mayúsculas', lastname);
// 	} 
// 	else{
// 		quitar_span(lastname)
// 	}

// 	if (email.value.length == 0) {
// 		alertar('Debe escribir un correo', email);
// 	}
// 	else{
// 		quitar_span(email)
// 	}

// 	if (password.value.length == 0) {
// 		alertar('Debe escribir una contraseña', password);
// 	}
// 	else if(password.value.length < 6){
// 		alertar('La contraseña debe ser mayor o igual a 6 caracteres', password)
// 	}
// 	else if(password.value == "password" || password.value == "123456" || password.value == "654321"){
// 		alertar('La contraseña debe ser más fuerte', password)
// 	}
// 	else{
// 		quitar_span(password)
// 	}
// }