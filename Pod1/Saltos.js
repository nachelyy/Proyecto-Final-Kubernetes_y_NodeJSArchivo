const http = require('http');
function Saltos(array, elemento) {
    const tamano = array.length;
    const salto = Math.floor(Math.sqrt(tamano));
    let izquierda = 0;
    let derecha = salto;
  
    while (derecha < tamano && array[derecha] <= elemento) {
      izquierda = derecha;
      derecha += salto;
    }
  
    for (let i = izquierda; i < Math.min(derecha, tamano); i++) {
      if (array[i] === elemento) {
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
  
  const elemento = 89;
  const indice = Saltos(arreglo, elemento);
  

  if (indice === -1) {
 const mensaje=`El elemento ${elemento} no se encontro en el array por Salto`;
 res.end(JSON.stringify(mensaje));
  } else {
    const  mensaje=`El elemento ${elemento} se encontro en el array por Salto`;
    res.end(JSON.stringify(mensaje));
  }
 
  
});


const PORT = 3495;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});