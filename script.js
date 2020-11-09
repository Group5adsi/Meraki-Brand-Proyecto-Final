let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let texto = document.getElementById("texto");
let error = document.getElementById("error");

function enviarFormulario(){
  console.log("Enviando Formulario");

  const mensajeError = [];

  if(nombre.value === null || nombre.value === ""){
    mensajeError.push(`Ingrese un nombre válido`);
  }
  if(email.value === null || email.value === ""){
    mensajeError.push(`Ingrese un email válido`);
  }
  if(texto.value === null || texto.value === ""){
    mensajeError.push(`Ingrese una descripcion válida`);
  }


  error.innerHTML = mensajeError.join (`<br> `);
  return false;
}


let mail = document.getElementById("email");
let password = document.getElementById("password");

function enviarLogin(){
  console.log("Enviando Solicitud");

  const mensajeError = [];

  if (mail.value === null || mail.value === "") {
    mensajeError.push("Ingrese un correo válido.")
  }
  if (password.value === null || password.value === "") {
    mensajeError.push("Ingrese una contraseña válida.")
  }

  error.innerHTML = mensajeError.join (`<br> `);
  return false;
}
