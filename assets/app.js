var cont1= document.getElementById("captcha");
var pasw1= document.getElementById("verificar");
var pasw2= document.getElementById("fresh");
var pasw2= document.getElementById("check");

cont1.addEventListener("click",function(){
	if (pasw1.value==pasw2.value){
		alert("Correcto");
	}else{
		alert("Las contraseñas deben de ser iguales");
	}
})
