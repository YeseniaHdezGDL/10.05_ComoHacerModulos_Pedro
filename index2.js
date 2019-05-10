'use scrict'

const router = (request, response) => {
    if(request.url === "/pag2") {
        response.end("pag 2");
    } else {
        response.end("pag default");
    }    
};


//al correr en browser http://localhost:3000/adios devuelve pag default

module.exports = router; //para exportar toda la función guardada en la const router


