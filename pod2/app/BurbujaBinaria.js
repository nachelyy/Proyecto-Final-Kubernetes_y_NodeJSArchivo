const http = require('http');


function burbuja(array) {
    const n = array.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }
  

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
  

  const array = [94, 82,100,456,24,5996,37728,58584,3828,12,0,34,23,45,67,45,12,77];

const server = http.createServer((req, res) => {
  const objeto_buscar = parseInt(req.url.slice(1));
  console.log('Array original:', array);
  res.write(`Array original: ${array}\n`);

  const arrayOrdenado = burbuja(array);
  console.log('Array ordenado:', arrayOrdenado);
  res.write(`Array ordenado: ${arrayOrdenado}\n`);

  const bus = busquedaBinaria(array, objeto_buscar);
  if (bus === -1) {
    const mensaje = `El elemento ${objeto_buscar} no se encontro en el array.`;
    console.log(mensaje);
    res.write(mensaje);
  } else {
    const mensaje = `El elemento ${objeto_buscar} se encontro en la posicion ${bus}.`;
    console.log(mensaje);
    res.write(mensaje);
  }

  res.end();
});

const PORT = 3505;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});