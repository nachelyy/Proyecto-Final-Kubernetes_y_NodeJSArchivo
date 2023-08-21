const http = require('http');

function Linear(array, objeto_buscar) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === objeto_buscar) {
      return i;
    }
  }
  return -1;
}

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

const arreglo = [];
  const tamano = 10000;

  for (let i = 0; i < tamano; i++) {
    arreglo.push(i);
  }


const server = http.createServer((req, res) => {
  
  const objeto_buscar = parseInt(req.url.slice(1)); // obtener el valor a buscar del URL
  const indiceLinear = Linear(arreglo, objeto_buscar);
  const indiceSaltos = Saltos(arreglo, objeto_buscar);

  if (indiceLinear === -1 && indiceSaltos === -1) {
    const mensaje = `El elemento ${objeto_buscar} no se encontro en el array`;
    res.write(mensaje+`\n`);
  } else {
    const mensaje = `El elemento ${objeto_buscar} se encontro en el array en los indices lineal: ${indiceLinear} y saltos: ${indiceSaltos}`;
   // console.log(mensaje);
    res.write(mensaje+`\n`);
  }
  res.end();
});

const PORT = 3500;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
