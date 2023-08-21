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
  

  const server = http.createServer((req, res) => {

  const array = [94, 82,100,456,24,5996,37728,58584,3828,12,0,34,23,45,67,45,12,77];
  const arrayOrdenado = burbuja(array);
  
  console.log('Array original:', array);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(arrayOrdenado));


});

const PORT = 3505;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});