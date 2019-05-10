'use scrict' //se usa por buena práctica para restringir aquí algunas funciones de javascript
const http = require("http"); //aquí estamos importando un módulo de los que ya están pre instalados

//  console.log(http. despues aparecen aquí despues del punto todos los métodos);  //esto es para crear un servidor, si lo corremos en consola, aparecen los métodos de http, uno de ellos es create server que es la de abajo
//  console.log(http.createServer);  //para crear el servidor, mandar llamar la funcion .createServer, abajo es mandar llamar la función
//  http.createServer()  //adentro de paréntesis le ponemos qué vamos a hacer como abajo
// http.createServer() => { //=> esto se llama arrow function indica función, adentro de paréntesis se tiene que poner el parámetro que le indica qué va a ejecutar abajo

//en este punto todavía no pasa nada, hay que indicarle en qué puerto tiene que pasar esto.
//http.createServer(request, response) => {
//    console.log("Servidor creado")
//}

// http.createServer((request, response) => {
  //  console.log("Servidor creado")
 //}).listen(3000); //aquí si estamos llamando al puerto 3000 

//después se abre navegador en dirección localhost/3000 o 127.0 etc y queda en espera pero en cmder ya se creó servidor

//http.createServer((request, response) => {
    // console.log("Servidor creado");
    // response.end("Hello world"); // aquí se ejecuta un callback que indica que cuando alla una request o llamada, le regresamos la llamada con un hello world
    // console.log(response);
// }).listen(3000); //no olvides poner ; porque si no JS terminará las sentencias donde quiera

//después de esto, en navegador aparece "Hello wordl" :P
// http://127.0.0.1:3000/pag2 si pones esto, sigue apareciendo lo mismo porque después del puerto 3000, independientemente de lo que pase, se sigue ejecutando

//  http.createServer((request, response) => {
//    console.log(request.url);
// }).listen(3000);

//después de esto, aparece lo que anotemos después del 3000/adiosmundo, aparecerá adios mundo en cmder

// http.createServer((request, response) => {
    // if(request.url === "/adios") {
        // response.end("Adios, que te vaya bien");
    // }
    // response.end("no se que me dices");
// }).listen(3000); //3000 también se puede declarar como constante así: const puertito = 3000; y mandarla llamar en esta línea dentro así (puertito)

//arriba lo que estamos haciendo es que si el usuario escribe en el URL (request.url) /adios, yo como servidor le responderé (response.end) "adios, que te vaya bien"

//ir a index2.js y crear función router a IMPORTAR
//ahora regresar aquí y EXPORTAR

// const http = require("http"); aquí ya no se declara porque ya está declarada al principio de este documento
const puerto = 3000;
const router = require("./index2"); //aquí estamos exportando función router

http.createServer(router).listen(puerto); //aquí indicamos qué hacer (exportar router) y donde se llamará (listen(puerto));

//correr en cmder





