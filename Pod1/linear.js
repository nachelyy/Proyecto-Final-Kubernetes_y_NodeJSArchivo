const http = require('http');
function Linear(array, objeto_buscar) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === objeto_buscar) {
        return i;
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
  
  const objeto_buscar = 789;
  const indice = Linear(arreglo, objeto_buscar);
  
  if (indice === -1) {
   const mensaje=`El elemento ${objeto_buscar} no se encontro en el array linear`;
   res.end(JSON.stringify(mensaje));
  } else {
    const mensaje=`El elemento ${objeto_buscar} se encontro en el array linear`;
    res.end(JSON.stringify(mensaje));
  }
  
});

const PORT = 3490;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});