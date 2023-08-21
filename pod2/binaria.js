const http = require('http');
function busquedaBinaria(array, elemento) {
    let inicio = 0;
    let fin = array.length - 1;
  
    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
  
      if (array[medio] === elemento) {
        return medio;
      } else if (array[medio] < elemento) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1;
  }
  

  const server = http.createServer((req, res) => {

  const arreglo = [];
  const tamano = 10000;
  
  for (let i = 0; i < tamano; i++) {
    arreglo.push(i);
  }

  const elemento = 566;
  const indice = busquedaBinaria(arreglo, elemento);
  
 // res.writeHead(200, { 'Content-Type': 'application/json' });

  if (indice === -1) {
    const mensaje=`El elemento ${elemento} no se encontro en el array Binario`;
    res.end(JSON.stringify(mensaje));
  } else {
    const mensaje=`El elemento ${elemento} se encontro en el array Binario`;
    res.end(JSON.stringify(mensaje));
  }
  

});

const PORT = 3500;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});