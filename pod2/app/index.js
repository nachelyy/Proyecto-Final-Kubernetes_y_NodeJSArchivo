const express= require('express')
const app= express()

app.get('/', (req,res) => res.send('Hello World'))

app.listen(8086, '127.0.0.1', () => console.log('Example port 8086'))